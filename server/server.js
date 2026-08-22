require('dotenv').config();
const express = require('express');
const rateLimit = require('express-rate-limit');
const crypto = require('crypto');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { Resend } = require('resend');
const path = require('path');
const products = require('../public/products');
const { SAUCE_PRICE } = products;
const { customerReceiptHtml, restaurantOrderHtml } = require('./emails');

const app = express();
app.set('trust proxy', 1);

const resend = new Resend(process.env.RESEND_API_KEY);

/*=============================
  TILAUKSET-DASHBOARD: MUISTIVARASTO + SSE
  Nollautuu palvelimen uudelleenkäynnistyksessä/deployssa - ei tietokantaa.
===============================*/
const orders = new Map(); // sessionId -> tilausobjekti
const sseClients = new Set();

function helsinkiDateKey(date) {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Helsinki', year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
}
function helsinkiMonthKey(date) {
  return helsinkiDateKey(date).slice(0, 7);
}

function broadcastOrders() {
  const payload = JSON.stringify({ orders: Array.from(orders.values()) });
  const message = `data: ${payload}\n\n`;
  for (const client of sseClients) client.write(message);
}

/*=============================
  BASIC AUTH /tilaukset-dashboardille
===============================*/
function dashboardAuth(req, res, next) {
  const user = process.env.DASHBOARD_USER;
  const pass = process.env.DASHBOARD_PASS;

  if (!user || !pass) {
    return res.status(503).send('Dashboard ei ole käytössä: DASHBOARD_USER/DASHBOARD_PASS puuttuu palvelimen ympäristömuuttujista.');
  }

  const header = req.headers.authorization || '';
  const [scheme, encoded] = header.split(' ');
  if (scheme !== 'Basic' || !encoded) {
    res.set('WWW-Authenticate', 'Basic realm="Tilaukset"');
    return res.status(401).send('Tunnistautuminen vaaditaan.');
  }

  const decoded = Buffer.from(encoded, 'base64').toString('utf8');
  const sepIndex = decoded.indexOf(':');
  const reqUser = sepIndex === -1 ? decoded : decoded.slice(0, sepIndex);
  const reqPass = sepIndex === -1 ? '' : decoded.slice(sepIndex + 1);

  const userBuf = Buffer.from(reqUser);
  const passBuf = Buffer.from(reqPass);
  const expectedUserBuf = Buffer.from(user);
  const expectedPassBuf = Buffer.from(pass);

  const userMatch = userBuf.length === expectedUserBuf.length && crypto.timingSafeEqual(userBuf, expectedUserBuf);
  const passMatch = passBuf.length === expectedPassBuf.length && crypto.timingSafeEqual(passBuf, expectedPassBuf);

  if (!userMatch || !passMatch) {
    res.set('WWW-Authenticate', 'Basic realm="Tilaukset"');
    return res.status(401).send('Väärä käyttäjätunnus tai salasana.');
  }

  next();
}

// Webhook tarvitsee raa'an bodyn ennen JSON-middlewarea
app.use('/webhook', express.raw({ type: 'application/json' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Dashboardin CSS/JS - ei sisällä asiakastietoja, ei tarvitse suojausta.
// dashboard.html EI ole tässä kansiossa staattisesti, vain /tilaukset-reitin kautta.
app.use('/tilaukset-assets', express.static(path.join(__dirname, '../private/assets')));

/*=============================
  TILAUKSET-DASHBOARD (suojattu)
===============================*/
// Estää Basic Authin salasanan arvaamisen automaattisesti toistamalla pyyntöjä
const dashboardLoginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Liikaa kirjautumisyrityksiä. Yritä uudelleen hetken kuluttua.',
});

app.get('/tilaukset', dashboardLoginLimiter, dashboardAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '../private/dashboard.html'));
});

// Basic Authilla ei ole oikeaa palvelinpuolen "kirjaudu ulos" -käsitettä (ei sessiota).
// Tämä pakottaa useimmat selaimet kysymään tunnukset uudelleen hylkäämällä pyynnön aina.
app.get('/tilaukset/logout', (req, res) => {
  res.set('WWW-Authenticate', 'Basic realm="Tilaukset"');
  res.status(401).send('Kirjauduttu ulos. Voit sulkea tämän välilehden tai kirjautua uudelleen sisään.');
});

app.get('/api/orders/stream', dashboardAuth, (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });
  res.write(`data: ${JSON.stringify({ orders: Array.from(orders.values()) })}\n\n`);

  sseClients.add(res);
  req.on('close', () => sseClients.delete(res));
});

app.post('/api/orders/:id/complete', dashboardAuth, (req, res) => {
  const order = orders.get(req.params.id);
  if (!order) return res.status(404).json({ error: 'Tilausta ei löydy' });
  order.status = 'done';
  broadcastOrders();
  res.json({ ok: true });
});

// Estää botteja/skriptejä luomasta rajattomasti maksusessioita samasta IP:stä
const checkoutLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 min
  max: 15,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Liikaa tilausyrityksiä. Yritä uudelleen hetken kuluttua.' },
});

/*=============================
  LUO STRIPE CHECKOUT SESSIO
===============================*/
app.post('/create-checkout-session', checkoutLimiter, async (req, res) => {
  try {
    const { cart, deliveryType = 'delivery', customerInfo = {} } = req.body;
    if (!Array.isArray(cart) || cart.length === 0)
      return res.status(400).json({ error: 'Ostoskori on tyhjä' });

    const line_items = [];
    const orderItemsRaw = [];

    for (const item of cart) {
      const product = products.find(p => p.id === item.productId);
      if (!product) continue;

      const basePrice = parseFloat(product.price) || 0;
      const sizeData = product.sizes?.find(s => s.name === item.size);
      const sizeExtra = sizeData ? sizeData.extra : 0;
      const extraMultiplier = sizeExtra > 0 ? 2 : 1;
      const extrasTotal = product.maxFreeExtras ? 0 : (item.extras || []).reduce((sum, extraName) => {
        const ed = product.extras?.find(e => e.name === extraName);
        return sum + (ed ? ed.price * extraMultiplier : 0);
      }, 0);
      const sauceTotal = (item.sauce ? SAUCE_PRICE : 0) * extraMultiplier;
      const glutenFreeTotal = item.glutenFree ? 3 : 0;

      const unitPrice = basePrice + sizeExtra + extrasTotal + sauceTotal + glutenFreeTotal;
      const qty = item.quantity || 1;

      let desc = item.size || '';
      if (item.sauce) desc += ` · ${item.sauce}`;
      if (item.glutenFree) desc += ' · Gluteeniton';
      if (item.extras?.length) desc += ` · ${item.extras.join(', ')}`;

      line_items.push({
        price_data: {
          currency: 'eur',
          product_data: {
            name: product.name,
            description: desc || undefined,
          },
          unit_amount: Math.round(unitPrice * 100),
        },
        quantity: qty,
      });

      let metaDesc = item.size || '';
      if (item.sauce) metaDesc += ` · ${item.sauce}`;
      if (item.extras?.length) metaDesc += ` · ${item.extras.join(', ')}`;

      orderItemsRaw.push({
        n: product.name,
        d: metaDesc,
        gf: !!item.glutenFree,
        q: qty,
        p: unitPrice.toFixed(2),
      });
    }

    if (!line_items.length)
      return res.status(400).json({ error: 'Ei kelvollisia tuotteita' });

    // Tallenna tilausrivit metadataan ennen toimitusmaksun lisäystä
    const orderItemsMeta = JSON.stringify(orderItemsRaw).slice(0, 490);

    // Toimitusmaksu
    if (deliveryType === 'delivery') {
      line_items.push({
        price_data: {
          currency: 'eur',
          product_data: { name: 'Toimitusmaksu' },
          unit_amount: 599,
        },
        quantity: 1,
      });
    }

    const origin = req.headers.origin || `${req.protocol}://${req.get('host')}`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      metadata: {
        deliveryType,
        customerName: customerInfo.name || '',
        customerPhone: customerInfo.phone || '',
        deliveryAddress: customerInfo.address || '',
        notes: (customerInfo.notes || '').slice(0, 200),
        items: orderItemsMeta,
      },
      success_url: `${origin}/checkout-success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout-cancel.html`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Checkout error:', err.message);
    res.status(500).json({ error: 'Stripe-sessio epäonnistui' });
  }
});

/*=============================
  HAE SESSIOTIEDOT (success-sivu)
===============================*/
app.get('/api/session', async (req, res) => {
  const { session_id } = req.query;
  if (!session_id) return res.status(400).json({ error: 'Puuttuva session_id' });

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['line_items', 'line_items.data.price.product'],
    });

    res.json({
      customerName: session.customer_details?.name || '',
      customerEmail: session.customer_details?.email || '',
      total: (session.amount_total / 100).toFixed(2),
      items: (session.line_items?.data || []).map(item => ({
        name: item.description,
        customization: item.price?.product?.description || '',
        quantity: item.quantity,
        total: (item.amount_total / 100).toFixed(2),
      })),
    });
  } catch (err) {
    res.status(404).json({ error: 'Sessiotietoja ei löydy' });
  }
});

/*=============================
  STRIPE WEBHOOK
===============================*/
app.post('/webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  res.json({ received: true });

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const meta = session.metadata || {};
    const customerName = meta.customerName || session.customer_details?.name || 'Asiakas';
    const customerEmail = session.customer_details?.email;
    const total = (session.amount_total / 100).toFixed(2);
    const items = JSON.parse(meta.items || '[]');

    const deliveryInfo = {
      type: meta.deliveryType || 'delivery',
      phone: meta.customerPhone || '',
      address: meta.deliveryAddress || '',
      notes: meta.notes || '',
    };

    if (customerEmail) {
      resend.emails.send({
        from: 'Törnävän Pizzeria <tilaukset@tornavankebabpizzeria.com>',
        to: customerEmail,
        subject: '✅ Tilauksesi on vastaanotettu!',
        html: customerReceiptHtml(customerName, items, total, deliveryInfo, session.id),
      }).then(({ error }) => {
        if (error) console.error('Asiakkaan email epäonnistui:', JSON.stringify(error));
      });
    }

    resend.emails.send({
      from: 'Törnävän Pizzeria <tilaukset@tornavankebabpizzeria.com>',
      to: process.env.RESTAURANT_EMAIL,
      subject: `🍕 Uusi tilaus – ${total} € – ${customerName}`,
      html: restaurantOrderHtml(customerName, customerEmail, items, total, deliveryInfo, session.id),
    }).then(({ error }) => {
      if (error) console.error('Ravintolan email epäonnistui:', JSON.stringify(error));
    });

    console.log(`Tilaus ${session.id} | asiakas: ${customerEmail}`);

    // Tallenna dashboardia varten ja lähetä yhdistetyille selaimille (SSE)
    const now = new Date();
    orders.set(session.id, {
      id: session.id,
      displayId: session.id.slice(-8).toUpperCase(),
      dateDisplay: now.toLocaleDateString('fi-FI', { timeZone: 'Europe/Helsinki' }),
      timeDisplay: now.toLocaleTimeString('fi-FI', { timeZone: 'Europe/Helsinki', hour: '2-digit', minute: '2-digit' }),
      dateKey: helsinkiDateKey(now),
      monthKey: helsinkiMonthKey(now),
      type: deliveryInfo.type === 'delivery' ? 'delivery' : 'pickup',
      customer: customerName,
      email: customerEmail || '',
      phone: deliveryInfo.phone,
      address: deliveryInfo.address,
      items: items.map(i => ({ qty: i.q, name: i.n, detail: i.d + (i.gf ? ' · Gluteeniton' : '') })),
      notes: deliveryInfo.notes,
      total: `${total} €`,
      totalCents: session.amount_total,
      status: 'new',
      createdAt: now.getTime(),
    });
    broadcastOrders();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server käynnissä portissa ${PORT}`));
