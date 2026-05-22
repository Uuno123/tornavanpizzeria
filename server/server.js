require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const nodemailer = require('nodemailer');
const path = require('path');
const products = require('../public/products');

const app = express();

const mailer = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
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
      const session = await stripe.checkout.sessions.retrieve(event.data.object.id, {
        expand: ['line_items', 'line_items.data.price.product'],
      });

      const meta = session.metadata || {};
      const customerName = meta.customerName || session.customer_details?.name || 'Asiakas';
      const customerEmail = session.customer_details?.email;
      const total = (session.amount_total / 100).toFixed(2);
      const items = session.line_items?.data || [];

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
          html: customerReceiptHtml(customerName, items, total, deliveryInfo),
        });
      }

      await mailer.sendMail({
        from: `"Törnävän Pizzeria" <${process.env.GMAIL_USER}>`,
        to: process.env.RESTAURANT_EMAIL,
        subject: `🍕 Uusi tilaus – ${total} € – ${customerName}`,
        html: restaurantOrderHtml(customerName, customerEmail, items, total, deliveryInfo),
      });

      console.log(`Tilaus ${session.id} valmis | asiakas: ${customerEmail}`);
    } catch (err) {
      console.error('Tilauksen käsittelyvirhe:', err.message);
    }
  }

  res.json({ received: true });
});

/*=============================
  SÄHKÖPOSTIMALLIT
===============================*/

function itemTableRows(items) {
  return items.map(item => {
    const name = item.description || 'Tuote';
    const custom = item.price?.product?.description || '';
    const qty = item.quantity;
    const price = ((item.amount_total || 0) / 100).toFixed(2);

    return `
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid #f0ede6;font-family:Arial,sans-serif;">
          <span style="font-size:15px;font-weight:700;color:#1a1008;">${name}</span>
          ${custom ? `<br><span style="font-size:13px;color:#94a3b8;">${custom}</span>` : ''}
        </td>
        <td style="padding:14px 0;border-bottom:1px solid #f0ede6;font-family:Arial,sans-serif;text-align:center;font-size:14px;color:#666;">
          ×${qty}
        </td>
        <td style="padding:14px 0;border-bottom:1px solid #f0ede6;font-family:Arial,sans-serif;text-align:right;font-size:15px;font-weight:700;color:#1a1008;">
          ${price} €
        </td>
      </tr>`;
  }).join('');
}

function customerReceiptHtml(name, items, total, delivery = {}) {
  const isDelivery = delivery.type === 'delivery';
  const deliveryBlock = `
    <tr>
      <td style="padding:20px 40px;background:#FFF8EC;border-bottom:1px solid #f0ede6;">
        <p style="margin:0 0 6px;font-size:13px;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;font-family:Arial,sans-serif;">
          ${isDelivery ? 'Toimitusosoite' : 'Nouto'}
        </p>
        ${isDelivery
          ? `<p style="margin:0;font-size:15px;font-weight:700;color:#1a1008;font-family:Arial,sans-serif;">${delivery.address || '–'}</p>`
          : `<p style="margin:0;font-size:15px;color:#1a1008;font-family:Arial,sans-serif;">Tilaus noudetaan ravintolasta</p>`
        }
        ${delivery.notes ? `<p style="margin:6px 0 0;font-size:13px;color:#666;font-family:Arial,sans-serif;">📝 ${delivery.notes}</p>` : ''}
      </td>
    </tr>`;
  return `<!DOCTYPE html>
<html lang="fi">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <tr>
          <td style="background:#1a1008;padding:36px 40px;text-align:center;border-top:5px solid #F5A800;">
            <p style="margin:0 0 8px;font-size:13px;letter-spacing:3px;color:#F5A800;text-transform:uppercase;font-family:Arial,sans-serif;">Törnävän Pizzeria</p>
            <h1 style="margin:0;font-size:30px;color:#ffffff;font-family:Arial,sans-serif;font-weight:900;">Tilauksesi on vastaanotettu!</h1>
            <p style="margin:12px 0 0;font-size:15px;color:#aaa;font-family:Arial,sans-serif;">Kiitos, ${name}! Valmistamme tilauksen heti.</p>
          </td>
        </tr>

        ${deliveryBlock}

        <tr>
          <td style="padding:32px 40px;">
            <p style="margin:0 0 20px;font-size:13px;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;font-family:Arial,sans-serif;">Tilauksesi</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${itemTableRows(items)}
            </table>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;border-top:2px solid #F5A800;padding-top:16px;">
              <tr>
                <td style="font-family:Arial,sans-serif;font-size:18px;font-weight:700;color:#1a1008;">Yhteensä</td>
                <td style="font-family:Arial,sans-serif;font-size:22px;font-weight:900;color:#F5A800;text-align:right;">${total} €</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="background:#FFF8EC;padding:24px 40px;text-align:center;border-top:1px solid #f0ede6;">
            <p style="margin:0 0 6px;font-size:14px;color:#1a1008;font-family:Arial,sans-serif;font-weight:700;">Törnävän Pizzeria</p>
            <p style="margin:0;font-size:13px;color:#94a3b8;font-family:Arial,sans-serif;">Parasta pizzaa ja kebabia vuodesta 2022</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function restaurantOrderHtml(customerName, customerEmail, items, total, delivery = {}) {
  const isDelivery = delivery.type === 'delivery';
  const itemList = items.map(item => {
    const name = item.description || 'Tuote';
    const custom = item.price?.product?.description || '';
    const qty = item.quantity;
    const price = ((item.amount_total || 0) / 100).toFixed(2);
    return `
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid #f0ede6;font-family:Arial,sans-serif;">
          <span style="font-size:16px;font-weight:700;color:#1a1008;">${name}</span>
          ${custom ? `<br><span style="font-size:13px;color:#555;">${custom}</span>` : ''}
        </td>
        <td style="padding:14px 0;border-bottom:1px solid #f0ede6;text-align:center;font-size:15px;font-weight:700;color:#1a1008;font-family:Arial,sans-serif;">×${qty}</td>
        <td style="padding:14px 0;border-bottom:1px solid #f0ede6;text-align:right;font-size:15px;font-weight:700;color:#1a1008;font-family:Arial,sans-serif;">${price} €</td>
      </tr>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="fi">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#1a1008;padding:30px 40px;border-top:5px solid #F5A800;">
            <p style="margin:0 0 4px;font-size:12px;letter-spacing:3px;color:#F5A800;text-transform:uppercase;font-family:Arial,sans-serif;">Uusi verkkoilaus</p>
            <h1 style="margin:0;font-size:28px;color:#ffffff;font-family:Arial,sans-serif;font-weight:900;">🍕 Tilaus saapui!</h1>
          </td>
        </tr>

        <!-- Asiakastiedot -->
        <tr>
          <td style="padding:24px 40px;background:#FFF8EC;border-bottom:1px solid #f0ede6;">
            <p style="margin:0 0 4px;font-size:13px;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;font-family:Arial,sans-serif;">
              ${isDelivery ? '🛵 TOIMITUS' : '🏪 NOUTO'}
            </p>
            <p style="margin:0 0 2px;font-size:17px;font-weight:700;color:#1a1008;font-family:Arial,sans-serif;">${customerName}</p>
            ${delivery.phone ? `<p style="margin:0 0 2px;font-size:15px;color:#1a1008;font-family:Arial,sans-serif;">📞 ${delivery.phone}</p>` : ''}
            ${customerEmail ? `<p style="margin:0 0 2px;font-size:14px;color:#555;font-family:Arial,sans-serif;">${customerEmail}</p>` : ''}
            ${isDelivery && delivery.address ? `<p style="margin:4px 0 0;font-size:14px;font-weight:700;color:#1a1008;font-family:Arial,sans-serif;">📍 ${delivery.address}</p>` : ''}
            ${delivery.notes ? `<p style="margin:6px 0 0;font-size:13px;color:#555;font-family:Arial,sans-serif;">📝 ${delivery.notes}</p>` : ''}
          </td>
        </tr>

        <!-- Tuotteet -->
        <tr>
          <td style="padding:24px 40px;">
            <p style="margin:0 0 16px;font-size:13px;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;font-family:Arial,sans-serif;">Tilauksen sisältö</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${itemList}
            </table>

            <!-- Yhteensä -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;border-top:3px solid #F5A800;padding-top:16px;">
              <tr>
                <td style="font-family:Arial,sans-serif;font-size:18px;font-weight:700;color:#1a1008;">YHTEENSÄ</td>
                <td style="font-family:Arial,sans-serif;font-size:24px;font-weight:900;color:#F5A800;text-align:right;">${total} €</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:16px 40px;background:#FFF8EC;text-align:center;border-top:1px solid #f0ede6;">
            <p style="margin:0;font-size:13px;color:#94a3b8;font-family:Arial,sans-serif;">Törnävän Pizzeria – Hallinnointijärjestelmä</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server käynnissä portissa ${PORT}`));
