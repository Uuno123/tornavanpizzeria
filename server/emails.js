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

        <tr>
          <td style="background:#1a1008;padding:30px 40px;border-top:5px solid #F5A800;">
            <p style="margin:0 0 4px;font-size:12px;letter-spacing:3px;color:#F5A800;text-transform:uppercase;font-family:Arial,sans-serif;">Uusi verkkotilaus</p>
            <h1 style="margin:0;font-size:28px;color:#ffffff;font-family:Arial,sans-serif;font-weight:900;">🍕 Tilaus saapui!</h1>
          </td>
        </tr>

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

        <tr>
          <td style="padding:24px 40px;">
            <p style="margin:0 0 16px;font-size:13px;letter-spacing:2px;color:#94a3b8;text-transform:uppercase;font-family:Arial,sans-serif;">Tilauksen sisältö</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${itemList}
            </table>
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

module.exports = { customerReceiptHtml, restaurantOrderHtml };
