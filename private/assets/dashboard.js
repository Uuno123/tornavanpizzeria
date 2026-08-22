// Tilaukset-dashboard — kytketty oikeaan tilausdataan /api/orders/stream (SSE) kautta.
// orderRegistry pitää muistissa senhetkiset tilaukset (id -> tilausobjekti)
// jotta historia-rivin klikkaus voi avata oikean tilauksen modaaliin.

const orderRegistry = new Map();

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

// Palauttaa päivämäärän YYYY-MM-DD-muodossa Suomen aikavyöhykkeellä,
// riippumatta katsojan oman selaimen aikavyöhykkeestä.
function helsinkiDateKey(date) {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Helsinki', year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
}
function helsinkiMonthKey(date) {
  return helsinkiDateKey(date).slice(0, 7);
}

const EMPTY_SHOP_SVG = `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5"/><path d="M3 8.5 6 3h12l3 5.5"/><path d="M3 8.5h18"/><path d="M9 12.5a3 3 0 0 0 6 0"/></svg>`;
const EMPTY_CLOCK_SVG = `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/><path d="M12 7v5l4 2"/></svg>`;

function emptyStateHtml(icon, text) {
  return `<div class="empty-state">${icon}<p>${escapeHtml(text)}</p></div>`;
}

function renderOrderCard(order) {
  const badgeClass = order.type === 'delivery' ? 'delivery' : 'pickup';
  const badgeText = order.type === 'delivery' ? 'Toimitus' : 'Nouto';

  const itemsHtml = (order.items || []).map((item) => `
      <li>
        <div class="order-item-main"><span class="qty">${escapeHtml(item.qty)}×</span> ${escapeHtml(item.name)}</div>
        <div class="order-item-detail">${escapeHtml(item.detail)}</div>
      </li>`).join('');

  const notesHtml = order.notes ? `
    <div class="order-notes">
      <strong>Lisätiedot:</strong> ${escapeHtml(order.notes)}
    </div>` : '';

  const phoneHtml = order.phone
    ? `<a href="tel:${escapeHtml(order.phone.replace(/\s+/g, ''))}">${escapeHtml(order.phone)}</a>`
    : '';
  const addressHtml = order.address ? `<span class="order-address">${escapeHtml(order.address)}</span>` : '';

  return `
    <div class="order-card">
      <div class="order-card-top">
        <div>
          <span class="order-id">#${escapeHtml(order.displayId)}</span>
          <span class="order-datetime">${escapeHtml(order.dateDisplay)} · ${escapeHtml(order.timeDisplay)}</span>
        </div>
        <span class="delivery-badge ${badgeClass}">${badgeText}</span>
      </div>

      <div class="order-customer">
        <strong>${escapeHtml(order.customer)}</strong>
        ${phoneHtml}
        ${addressHtml}
      </div>

      <ul class="order-items">${itemsHtml}</ul>

      ${notesHtml}

      <div class="order-card-bottom">
        <span class="order-total">${escapeHtml(order.total)}</span>
        <button class="order-done-btn" data-complete-id="${escapeHtml(order.id)}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Merkitse toimitetuksi
        </button>
      </div>
    </div>`;
}

function renderHistoryRow(order) {
  return `
    <div class="history-row" data-order-id="${escapeHtml(order.id)}">
      <div class="history-main">
        <span class="history-id">#${escapeHtml(order.displayId)}</span>
        <span class="history-time">${escapeHtml(order.timeDisplay)}</span>
        <span class="history-customer">${escapeHtml(order.customer)}</span>
      </div>
      <div class="history-side">
        <span class="history-total">${escapeHtml(order.total)}</span>
        <span class="done-badge">✓ VALMIS</span>
      </div>
    </div>`;
}

function formatEuros(cents) {
  return (cents / 100).toFixed(2).replace('.', ',') + ' €';
}

document.addEventListener('DOMContentLoaded', () => {
  // --- Vaalea / tumma tila ---
  const SUN_ICON = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`;
  const MOON_ICON = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>`;

  const themeStylesheet = document.getElementById('themeStylesheet');
  const themeToggle = document.getElementById('themeToggle');
  let theme = localStorage.getItem('dashboardTheme') || 'dark';

  function applyTheme() {
    themeStylesheet.href = theme === 'dark' ? '/tilaukset-assets/dashboard-brand.css' : '/tilaukset-assets/dashboard.css';
    themeToggle.innerHTML = theme === 'dark' ? SUN_ICON : MOON_ICON;
    themeToggle.title = theme === 'dark' ? 'Vaihda vaaleaan tilaan' : 'Vaihda tummaan tilaan';
  }
  applyTheme();

  themeToggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('dashboardTheme', theme);
    applyTheme();
  });

  // --- Päivä ja kellonaika headerissa ---
  const datetimeEl = document.getElementById('topbarDatetime');
  function updateClock() {
    const now = new Date();
    const date = now.toLocaleDateString('fi-FI');
    const time = now.toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' });
    datetimeEl.textContent = date + ' · ' + time;
  }
  updateClock();
  setInterval(updateClock, 30000);

  // --- Live / Historia -välilehdet ---
  const navLive = document.getElementById('nav-live');
  const navHistory = document.getElementById('nav-history');
  const viewLive = document.getElementById('view-live');
  const viewHistory = document.getElementById('view-history');

  function showView(view) {
    viewLive.style.display = view === 'live' ? '' : 'none';
    viewHistory.style.display = view === 'history' ? '' : 'none';
    navLive.classList.toggle('active', view === 'live');
    navHistory.classList.toggle('active', view === 'history');
  }

  navLive.addEventListener('click', (e) => { e.preventDefault(); showView('live'); });
  navHistory.addEventListener('click', (e) => { e.preventDefault(); showView('history'); });

  // --- Äänihälytys uudesta tilauksesta ---
  const BELL_ON = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`;
  const BELL_OFF = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.7 3A6 6 0 0 1 18 8c0 4.2 1.3 6.6 2.2 7.8"/><path d="M17.6 17H3s3-2 3-9c0-.6.1-1.2.2-1.8"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><line x1="2" y1="2" x2="22" y2="22"/></svg>`;

  const soundToggle = document.getElementById('soundToggle');
  let soundEnabled = localStorage.getItem('orderSoundEnabled') !== 'false';

  function playNotificationSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (err) { /* Web Audio ei käytettävissä */ }
  }

  function updateSoundIcon() {
    soundToggle.innerHTML = soundEnabled ? BELL_ON : BELL_OFF;
    soundToggle.classList.toggle('muted', !soundEnabled);
    soundToggle.title = soundEnabled
      ? 'Äänihälytys päällä (klikkaa sammuttaaksesi)'
      : 'Äänihälytys pois (klikkaa käynnistääksesi)';
  }

  soundToggle.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem('orderSoundEnabled', String(soundEnabled));
    updateSoundIcon();
    if (soundEnabled) playNotificationSound();
  });

  updateSoundIcon();

  // --- Profiilivalikko: hover toimii hiirellä, klikkaus/kosketus toimii myös tabletilla ---
  const profileMenu = document.querySelector('.profile-menu');
  const profileIcon = document.querySelector('.profile-icon');

  profileIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    profileMenu.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!profileMenu.contains(e.target)) profileMenu.classList.remove('open');
  });

  document.querySelector('.profile-logout').addEventListener('click', () => {
    window.location.href = '/tilaukset/logout';
  });

  // --- Live-yhteys tilauksiin (SSE) ---
  const statusPill = document.querySelector('.status-pill');
  const statusTextEl = document.getElementById('statusText');
  const liveOrdersContainer = document.getElementById('liveOrdersContainer');
  const liveCompletedContainer = document.getElementById('liveCompletedContainer');
  const historyContainer = document.getElementById('historyContainer');

  function setConnectionState(connected) {
    statusPill.classList.toggle('connected', connected);
    statusPill.classList.toggle('disconnected', !connected);
    statusTextEl.textContent = connected ? 'Live' : 'Ei yhteydessä';
  }

  function completeOrder(id) {
    fetch(`/api/orders/${encodeURIComponent(id)}/complete`, { method: 'POST' }).catch(() => {
      // SSE-lähetys päivittää näkymän joka tapauksessa onnistuessaan; epäonnistuessa
      // tilaus jää yksinkertaisesti "uusi"-tilaan ja sen voi yrittää merkitä uudelleen.
    });
  }

  let knownOrderIds = new Set();
  let isFirstMessage = true;

  function handleOrdersUpdate(orders) {
    orderRegistry.clear();
    orders.forEach((o) => orderRegistry.set(o.id, o));

    const currentIds = new Set(orders.map((o) => o.id));
    if (!isFirstMessage) {
      const hasNewArrival = orders.some((o) => o.status === 'new' && !knownOrderIds.has(o.id));
      if (hasNewArrival && soundEnabled) playNotificationSound();
    }
    knownOrderIds = currentIds;
    isFirstMessage = false;

    const todayKey = helsinkiDateKey(new Date());
    const monthKey = helsinkiMonthKey(new Date());

    const liveOrders = orders.filter((o) => o.status === 'new');
    const todaysOrders = orders.filter((o) => o.dateKey === todayKey);
    const completedToday = todaysOrders.filter((o) => o.status === 'done');
    const thisMonth = orders.filter((o) => o.monthKey === monthKey);

    document.getElementById('liveOrdersCount').textContent = String(todaysOrders.length);
    document.getElementById('liveSalesTotal').textContent = formatEuros(
      todaysOrders.reduce((sum, o) => sum + (o.totalCents || 0), 0)
    );

    liveOrdersContainer.innerHTML = liveOrders.length
      ? liveOrders.map(renderOrderCard).join('')
      : emptyStateHtml(EMPTY_SHOP_SVG, 'Tänään ei tilauksia');

    liveCompletedContainer.innerHTML = completedToday.length
      ? `<div class="history-list">${completedToday.map(renderHistoryRow).join('')}</div>`
      : emptyStateHtml(EMPTY_SHOP_SVG, 'Ei valmiita tilauksia tänään');

    liveOrdersContainer.querySelectorAll('.order-done-btn').forEach((btn) => {
      btn.addEventListener('click', () => completeOrder(btn.dataset.completeId));
    });

    document.getElementById('historyOrdersCount').textContent = String(thisMonth.length);
    document.getElementById('historySalesTotal').textContent = formatEuros(
      thisMonth.reduce((sum, o) => sum + (o.totalCents || 0), 0)
    );

    if (!thisMonth.length) {
      historyContainer.innerHTML = emptyStateHtml(EMPTY_CLOCK_SVG, 'Ei tilaushistoriaa vielä');
    } else {
      const groups = new Map();
      thisMonth.slice().sort((a, b) => b.createdAt - a.createdAt).forEach((o) => {
        if (!groups.has(o.dateKey)) groups.set(o.dateKey, []);
        groups.get(o.dateKey).push(o);
      });

      let html = '';
      for (const list of groups.values()) {
        const label = list[0].dateKey === todayKey ? `${list[0].dateDisplay} — tänään` : list[0].dateDisplay;
        html += `<div class="history-group"><p class="history-date">${escapeHtml(label)}</p><div class="history-list">${list.map(renderHistoryRow).join('')}</div></div>`;
      }
      historyContainer.innerHTML = html;
    }
  }

  function connectOrderStream() {
    const es = new EventSource('/api/orders/stream');
    es.onopen = () => setConnectionState(true);
    es.onerror = () => setConnectionState(false);
    es.onmessage = (event) => {
      setConnectionState(true);
      try {
        const data = JSON.parse(event.data);
        handleOrdersUpdate(data.orders || []);
      } catch (err) { /* ohitetaan virheellinen viesti */ }
    };
  }
  connectOrderStream();

  // --- Tilausmodaali (avataan historia-riviä klikkaamalla) ---
  const overlay = document.getElementById('orderModalOverlay');

  function openOrderModal(orderId) {
    const order = orderRegistry.get(orderId);
    if (!order) return;

    document.getElementById('modalOrderId').textContent = '#' + order.displayId;
    document.getElementById('modalDatetime').textContent = order.dateDisplay + ' · ' + order.timeDisplay;

    const badge = document.getElementById('modalBadge');
    if (order.type === 'delivery') {
      badge.textContent = 'Toimitus';
      badge.className = 'delivery-badge delivery';
    } else {
      badge.textContent = 'Nouto';
      badge.className = 'delivery-badge pickup';
    }

    document.getElementById('modalCustomerName').textContent = order.customer;
    const phoneEl = document.getElementById('modalCustomerPhone');
    phoneEl.textContent = order.phone;
    phoneEl.href = order.phone ? 'tel:' + order.phone.replace(/\s+/g, '') : '#';

    const addressEl = document.getElementById('modalAddress');
    addressEl.textContent = order.address;
    addressEl.style.display = order.address ? '' : 'none';

    const itemsEl = document.getElementById('modalItems');
    itemsEl.innerHTML = (order.items || []).map(item => `
      <li>
        <div class="order-item-main"><span class="qty">${escapeHtml(item.qty)}×</span> ${escapeHtml(item.name)}</div>
        <div class="order-item-detail">${escapeHtml(item.detail)}</div>
      </li>`).join('');

    const notesEl = document.getElementById('modalNotes');
    if (order.notes) {
      document.getElementById('modalNotesText').textContent = order.notes;
      notesEl.style.display = '';
    } else {
      notesEl.style.display = 'none';
    }

    document.getElementById('modalTotal').textContent = order.total;

    overlay.classList.add('active');
  }

  function closeOrderModal() {
    overlay.classList.remove('active');
  }

  document.addEventListener('click', (e) => {
    const row = e.target.closest('.history-row');
    if (row) openOrderModal(row.dataset.orderId);
  });

  document.getElementById('orderModalClose').addEventListener('click', closeOrderModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOrderModal();
  });
});
