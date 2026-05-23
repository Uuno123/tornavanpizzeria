require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const nodemailer = require('nodemailer');
const path = require('path');
const products = require('../public/products');
const { customerReceiptHtml, restaurantOrderHtml } = require('./emails');

const app = express();

const mailer = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  family: 4,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Webhook tarvitsee raa'an bodyn ennen JSON-middlewarea
app.use('/webhook', express.raw({ type: 'application/json' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

/*=============================
  LUO STRIPE CHECKOUT SESSIO
===============================*/
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { cart, deliveryType = 'delivery', customerInfo = {} } = req.body;
    if (!Array.isArray(cart) || cart.length === 0)
      return res.status(400).json({ error: 'Ostoskori on tyhjä' });

    const line_items = [];

    for (const item of cart) {
      const product = products.find(p => p.id === item.productId);
      if (!product) continue;

      const basePrice = parseFloat(product.price) || 0;
      const sizeData = product.sizes?.find(s => s.name === item.size);
      const sizeExtra = sizeData ? sizeData.extra : 0;
      const extrasTotal = (item.extras || []).reduce((sum, extraName) => {
        const ed = product.extras?.find(e => e.name === extraName);
        return sum + (ed ? ed.price : 0);
      }, 0);

      const unitPrice = basePrice + sizeExtra + extrasTotal;
      const qty = item.quantity || 1;

      let desc = item.size || '';
      if (item.sauce) desc += ` · ${item.sauce}`;
      if (item.extras?.length) desc += ` · ${item.extras.join(', ')}`;

      line_items.push({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.productId,
            description: desc || undefined,
          },
          unit_amount: Math.round(unitPrice * 100),
        },
        quantity: qty,
      });
    }

    if (!line_items.length)
      return res.status(400).json({ error: 'Ei kelvollisia tuotteita' });

    // Tallenna tilausrivit metadataan ennen toimitusmaksun lisäystä
    const orderItemsMeta = JSON.stringify(
      line_items.map(li => ({
        n: li.price_data.product_data.name,
        d: li.price_data.product_data.description || '',
        q: li.quantity,
        p: (li.price_data.unit_amount / 100).toFixed(2),
      }))
    ).slice(0, 490);

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

  if (event.type === 'checkout.session.completed') {
    try {
      const session = event.data.object;

      const meta = session.metadata || {};
      console.log('WEBHOOK META:', JSON.stringify(meta));
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
        await mailer.sendMail({
          from: `"Törnävän Pizzeria" <${process.env.GMAIL_USER}>`,
          to: customerEmail,
          subject: '✅ Tilauksesi on vastaanotettu!',
          html: customerReceiptHtml(customerName, items, total, deliveryInfo, session.id),
        });
      }

      await mailer.sendMail({
        from: `"Törnävän Pizzeria" <${process.env.GMAIL_USER}>`,
        to: process.env.RESTAURANT_EMAIL,
        subject: `🍕 Uusi tilaus – ${total} € – ${customerName}`,
        html: restaurantOrderHtml(customerName, customerEmail, items, total, deliveryInfo, session.id),
      });

      console.log(`Tilaus ${session.id} valmis | asiakas: ${customerEmail}`);
    } catch (err) {
      console.error('Tilauksen käsittelyvirhe:', err.message);
    }
  }

  res.json({ received: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server käynnissä portissa ${PORT}`));
