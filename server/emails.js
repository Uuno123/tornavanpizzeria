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
        <td style="padding:14px 0;border-bottom:1px solid #f0ede6;font-family:Arial,sans-serif;text-align:center;font-size:14px;color:#666;">×${qty}</td>
        <td style="padding:14px 0;border-bottom:1px solid #f0ede6;font-family:Arial,sans-serif;text-align:right;font-size:15px;font-weight:700;color:#1a1008;">${price} €</td>
      </tr>`;
  }).join('');
}

// ─── ASIAKKAAN KUITTI ────────────────────────────────────────────────────────

function customerReceiptHtml(name, items, total, delivery = {}, sessionId = '') {
  const isDelivery = delivery.type === 'delivery';
  const orderRef = sessionId ? sessionId.slice(-8).toUpperCase() : '—';
  const now = new Date().toLocaleString('fi-FI', { timeZone: 'Europe/Helsinki' });

  return `<!DOCTYPE html>
<html lang="fi">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

  <!-- Header -->
  <tr>
    <td style="background:#1a1008;padding:36px 40px;text-align:center;border-top:5px solid #F5A800;">
      <p style="margin:0 0 4px;font-size:12px;letter-spacing:3px;color:#F5A800;text-transform:uppercase;font-family:Arial,sans-serif;">Törnävän Pizzeria</p>
      <h1 style="margin:0 0 10px;font-size:28px;color:#fff;font-family:Arial,sans-serif;font-weight:900;">✅ Tilaus vastaanotettu!</h1>
      <p style="margin:0;font-size:15px;color:#aaa;font-family:Arial,sans-serif;">Kiitos, <strong style="color:#fff;">${name}</strong>! Valmistamme tilauksesi heti.</p>
    </td>
  </tr>

  <!-- Tilausnumero + aika -->
  <tr>
    <td style="padding:16px 40px;background:#FFF8EC;border-bottom:1px solid #f0ede6;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="font-family:Arial,sans-serif;font-size:13px;color:#94a3b8;">Tilausnumero</td>
          <td style="font-family:Arial,sans-serif;font-size:13px;color:#94a3b8;text-align:right;">Aika</td>
        </tr>
        <tr>
          <td style="font-family:Arial,sans-serif;font-size:16px;font-weight:700;color:#1a1008;">#${orderRef}</td>
          <td style="font-family:Arial,sans-serif;font-size:14px;color:#1a1008;text-align:right;">${now}</td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Toimitustiedot -->
  <tr>
    <td style="padding:20px 40px;border-bottom:1px solid #f0ede6;">
      <p style="margin:0 0 8px;font-size:12px;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;font-family:Arial,sans-serif;">
        ${isDelivery ? '🛵 Toimitusosoite' : '🏪 Nouto'}
      </p>
      ${isDelivery
        ? `<p style="margin:0;font-size:15px;font-weight:700;color:#1a1008;font-family:Arial,sans-serif;">${delivery.address || '–'}</p>
           <p style="margin:4px 0 0;font-size:13px;color:#666;font-family:Arial,sans-serif;">Arvioitu toimitusaika: <strong>30–45 min</strong></p>`
        : `<p style="margin:0;font-size:15px;color:#1a1008;font-family:Arial,sans-serif;">Tilaus noudetaan ravintolasta</p>
           <p style="margin:4px 0 0;font-size:13px;color:#666;font-family:Arial,sans-serif;">Valmis noudettavaksi: <strong>~20 min</strong></p>`
      }
      ${delivery.notes ? `<p style="margin:8px 0 0;font-size:13px;color:#666;font-family:Arial,sans-serif;">📝 ${delivery.notes}</p>` : ''}
    </td>
  </tr>

  <!-- Tuotteet -->
  <tr>
    <td style="padding:24px 40px;">
      <p style="margin:0 0 16px;font-size:12px;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;font-family:Arial,sans-serif;">Tilauksesi</p>
      <table width="100%" cellpadding="0" cellspacing="0">
        ${itemTableRows(items)}
      </table>
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;border-top:2px solid #F5A800;padding-top:14px;">
        <tr>
          <td style="font-family:Arial,sans-serif;font-size:17px;font-weight:700;color:#1a1008;">Yhteensä</td>
          <td style="font-family:Arial,sans-serif;font-size:22px;font-weight:900;color:#F5A800;text-align:right;">${total} €</td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Yhteystiedot -->
  <tr>
    <td style="padding:20px 40px;background:#FFF8EC;border-top:1px solid #f0ede6;">
      <p style="margin:0 0 10px;font-size:12px;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;font-family:Arial,sans-serif;">Kysyttävää tilauksesta?</p>
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="font-family:Arial,sans-serif;font-size:14px;color:#1a1008;padding:4px 0;">
            📞 <a href="tel:0405536005" style="color:#F5A800;text-decoration:none;font-weight:700;">040 553 6005</a>
          </td>
        </tr>
        <tr>
          <td style="font-family:Arial,sans-serif;font-size:13px;color:#94a3b8;padding-top:12px;">
            Törnävän Pizzeria — Parasta pizzaa ja kebabia vuodesta 2022
          </td>
        </tr>
      </table>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

// ─── RAVINTOLAN TILAUSILMOITUS ───────────────────────────────────────────────

function restaurantOrderHtml(customerName, customerEmail, items, total, delivery = {}, sessionId = '') {
  const isDelivery = delivery.type === 'delivery';
  const orderRef = sessionId ? sessionId.slice(-8).toUpperCase() : '—';
  const now = new Date().toLocaleString('fi-FI', { timeZone: 'Europe/Helsinki' });

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
        <td style="padding:14px 0;border-bottom:1px solid #f0ede6;text-align:center;font-size:16px;font-weight:700;color:#1a1008;font-family:Arial,sans-serif;">×${qty}</td>
        <td style="padding:14px 0;border-bottom:1px solid #f0ede6;text-align:right;font-size:15px;font-weight:700;color:#1a1008;font-family:Arial,sans-serif;">${price} €</td>
      </tr>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="fi">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

  <!-- Header -->
  <tr>
    <td style="background:#1a1008;padding:28px 40px;border-top:5px solid #F5A800;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <p style="margin:0 0 2px;font-size:12px;letter-spacing:3px;color:#F5A800;text-transform:uppercase;font-family:Arial,sans-serif;">Uusi verkkotilaus</p>
            <h1 style="margin:0;font-size:26px;color:#fff;font-family:Arial,sans-serif;font-weight:900;">🍕 Tilaus saapui!</h1>
          </td>
          <td style="text-align:right;vertical-align:top;">
            <span style="font-family:Arial,sans-serif;font-size:20px;font-weight:900;color:#F5A800;">#${orderRef}</span><br>
            <span style="font-family:Arial,sans-serif;font-size:12px;color:#aaa;">${now}</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Toimitustapa — iso banneri -->
  <tr>
    <td style="padding:16px 40px;background:${isDelivery ? '#fff3cd' : '#d1fae5'};border-bottom:3px solid ${isDelivery ? '#F5A800' : '#22c55e'};">
      <p style="margin:0;font-size:20px;font-weight:900;color:#1a1008;font-family:Arial,sans-serif;">
        ${isDelivery ? '🛵 TOIMITUS KOTIIN' : '🏪 NOUTO RAVINTOLASTA'}
      </p>
    </td>
  </tr>

  <!-- Asiakkaan tiedot -->
  <tr>
    <td style="padding:24px 40px;background:#FFF8EC;border-bottom:1px solid #f0ede6;">
      <p style="margin:0 0 12px;font-size:12px;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;font-family:Arial,sans-serif;">Asiakkaan tiedot</p>
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="font-family:Arial,sans-serif;padding:4px 0;font-size:14px;color:#94a3b8;width:120px;">Nimi</td>
          <td style="font-family:Arial,sans-serif;padding:4px 0;font-size:15px;font-weight:700;color:#1a1008;">${customerName}</td>
        </tr>
        <tr>
          <td style="font-family:Arial,sans-serif;padding:4px 0;font-size:14px;color:#94a3b8;">Puhelin</td>
          <td style="font-family:Arial,sans-serif;padding:4px 0;font-size:15px;font-weight:700;color:#1a1008;">
            ${delivery.phone
              ? `<a href="tel:${delivery.phone}" style="color:#F5A800;text-decoration:none;">${delivery.phone}</a>`
              : '–'}
          </td>
        </tr>
        <tr>
          <td style="font-family:Arial,sans-serif;padding:4px 0;font-size:14px;color:#94a3b8;">Sähköposti</td>
          <td style="font-family:Arial,sans-serif;padding:4px 0;font-size:14px;color:#555;">${customerEmail || '–'}</td>
        </tr>
        ${isDelivery ? `
        <tr>
          <td style="font-family:Arial,sans-serif;padding:4px 0;font-size:14px;color:#94a3b8;vertical-align:top;">Osoite</td>
          <td style="font-family:Arial,sans-serif;padding:4px 0;font-size:15px;font-weight:700;color:#1a1008;">${delivery.address || '–'}</td>
        </tr>` : ''}
        ${delivery.notes ? `
        <tr>
          <td style="font-family:Arial,sans-serif;padding:4px 0;font-size:14px;color:#94a3b8;vertical-align:top;">Lisätiedot</td>
          <td style="font-family:Arial,sans-serif;padding:4px 0;font-size:14px;color:#555;font-style:italic;">${delivery.notes}</td>
        </tr>` : ''}
      </table>
    </td>
  </tr>

  <!-- Tuotteet -->
  <tr>
    <td style="padding:24px 40px;">
      <p style="margin:0 0 16px;font-size:12px;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;font-family:Arial,sans-serif;">Tilauksen sisältö</p>
      <table width="100%" cellpadding="0" cellspacing="0">
        ${itemList}
      </table>
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;border-top:3px solid #F5A800;padding-top:14px;">
        <tr>
          <td style="font-family:Arial,sans-serif;font-size:18px;font-weight:700;color:#1a1008;">YHTEENSÄ</td>
          <td style="font-family:Arial,sans-serif;font-size:26px;font-weight:900;color:#F5A800;text-align:right;">${total} €</td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="padding:14px 40px;background:#FFF8EC;text-align:center;border-top:1px solid #f0ede6;">
      <p style="margin:0;font-size:12px;color:#94a3b8;font-family:Arial,sans-serif;">Törnävän Pizzeria – Verkkotilausjärjestelmä</p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

module.exports = { customerReceiptHtml, restaurantOrderHtml };
