const DELIVERY_FEE = 5.99;
let deliveryType = "delivery";

/*===========================
    TOGGLE-MENU
=============================*/

function toggleMenu() {
  const nav = document.getElementById("show-nav");
  const ham = document.getElementById("ham");
  const overlay = document.getElementById("overlay");
  nav.classList.toggle("open");
  ham.classList.toggle("open");
  overlay.classList.toggle("open");
}

/*=====================
    CART BADGE
======================*/

function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const badge = document.getElementById("cartBadge");
  if (!badge) return;
  badge.textContent = total;
  badge.style.display = total === 0 ? "none" : "flex";
}

window.addEventListener("DOMContentLoaded", updateCartBadge);

/*==============================
    LOAD CART
================================*/

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cartItems");
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-inside">
        <p class="emoji">🍕</p>
        <h2 class="hero2">Ostoskori on tyhjä</h2>
        <button onclick="window.location.href='menu.html'" class="menu-btn">Menu</button>
      </div>`;
    return;
  }

  cart.forEach((item, index) => {
    const tuoteData = (typeof products !== "undefined")
      ? products.find(p => p.id === item.productId)
      : null;

    const kuvaUrl = tuoteData ? tuoteData.image : "default-placeholder.jpg";
    const basePrice = tuoteData ? parseFloat(tuoteData.price) || 0 : 0;
    const sizeData = tuoteData?.sizes?.find(s => s.name === item.size);
    const sizeExtra = sizeData ? sizeData.extra : 0;
    const extrasTotal = (item.extras || []).reduce((sum, extraName) => {
      const ed = tuoteData?.extras?.find(e => e.name === extraName);
      return sum + (ed ? ed.price : 0);
    }, 0);
    const qty = item.quantity || 1;
    const itemTotal = (basePrice + sizeExtra + extrasTotal) * qty;

    const extrasHtml = (item.extras || []).length > 0
      ? `<div class="cart-item-extras">${(item.extras || []).map(e => `<span class="extra-chip">${e}</span>`).join("")}</div>`
      : "";

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <div class="cart-item-img-wrap">
        <img src="${kuvaUrl}" alt="${item.productId}" class="cart-item-image">
        <span class="cart-item-qty-badge">&times;${qty}</span>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-top">
          <h3 class="cart-item-name">${item.productId}</h3>
          <button class="remove-btn" onclick="removeFromCart(${index})">&#10005;</button>
        </div>
        <p class="cart-item-sub">${item.size} &middot; ${item.sauce}</p>
        ${extrasHtml}
        <div class="cart-item-bottom">
          ${itemTotal > 0 ? `<span class="cart-item-price">${itemTotal.toFixed(2)} &euro;</span>` : "<span></span>"}
        </div>
      </div>`;
    container.appendChild(div);
  });
}

window.onload = function () {
  renderCart();
  renderSummary();
};

/*========================
    REMOVE FROM CART
===========================*/

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  renderSummary();
}

/*========================
    TOIMITUSVALINTA
===========================*/

function setDelivery(type) {
  deliveryType = type;

  document.getElementById("btnDelivery").classList.toggle("active", type === "delivery");
  document.getElementById("btnPickup").classList.toggle("active", type === "pickup");

  const addrGroup = document.getElementById("addressGroup");
  if (addrGroup) addrGroup.style.display = type === "delivery" ? "" : "none";

  renderSummary();
}

/*========================
    RENDER SUMMARY
===========================*/

function renderSummary() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("summaryItems");
  const totalEl = document.getElementById("totalPrice");

  if (!container) return;
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `<p class="summary-empty">Lisää tuotteita ostoskoriin</p>`;
    if (totalEl) totalEl.textContent = "0.00 €";
    return;
  }

  let subtotal = 0;

  cart.forEach(item => {
    const tuoteData = (typeof products !== "undefined")
      ? products.find(p => p.id === item.productId)
      : null;

    const basePrice = tuoteData ? parseFloat(tuoteData.price) || 0 : 0;
    const sizeData = tuoteData?.sizes?.find(s => s.name === item.size);
    const sizeExtra = sizeData ? sizeData.extra : 0;
    const extrasTotal = (item.extras || []).reduce((sum, extraName) => {
      const ed = tuoteData?.extras?.find(e => e.name === extraName);
      return sum + (ed ? ed.price : 0);
    }, 0);

    const qty = item.quantity || 1;
    const itemTotal = (basePrice + sizeExtra + extrasTotal) * qty;
    subtotal += itemTotal;

    const extrasText = item.extras?.length > 0 ? item.extras.join(", ") : null;

    const row = document.createElement("div");
    row.classList.add("summary-item-row");
    row.innerHTML = `
      <div class="summary-item-left">
        <span class="summary-item-name">${item.productId}</span>
        <span class="summary-item-detail">${item.size} · ${item.sauce}${extrasText ? " · " + extrasText : ""}</span>
      </div>
      <div class="summary-item-right">
        <span class="summary-item-qty">×${qty}</span>
        ${itemTotal > 0 ? `<span class="summary-item-price">${itemTotal.toFixed(2)} €</span>` : ""}
      </div>`;
    container.appendChild(row);
  });

  // Toimitusmaksu-rivi
  const feeRow = document.createElement("div");
  feeRow.classList.add("delivery-fee-row");
  if (deliveryType === "delivery") {
    feeRow.innerHTML = `<span>Toimitusmaksu</span><span>${DELIVERY_FEE.toFixed(2)} €</span>`;
  } else {
    feeRow.innerHTML = `<span>Nouto</span><span style="color:#22c55e;font-weight:700;">Ilmainen</span>`;
  }
  container.appendChild(feeRow);

  const total = subtotal + (deliveryType === "delivery" ? DELIVERY_FEE : 0);
  if (totalEl) totalEl.textContent = total.toFixed(2) + " €";
}

/*========================
    STRIPE CHECKOUT
===========================*/

function closeClosedModal() {
  document.getElementById("closedOverlay").classList.remove("active");
}

async function startCheckout() {
  const hour = new Date().getHours();
  if (hour < 10 || hour >= 21) {
    document.getElementById("closedOverlay").classList.add("active");
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) return;

  // Kerää lomakkeen tiedot
  const name = document.getElementById("customerName")?.value.trim() || "";
  const phone = document.getElementById("customerPhone")?.value.trim() || "";
  const address = document.getElementById("customerAddress")?.value.trim() || "";
  const notes = document.getElementById("customerNotes")?.value.trim() || "";

  // Validointi
  let valid = true;

  const nameEl = document.getElementById("customerName");
  const phoneEl = document.getElementById("customerPhone");
  const addrEl = document.getElementById("customerAddress");

  [nameEl, phoneEl, addrEl].forEach(el => el?.classList.remove("error"));

  if (!name) { nameEl?.classList.add("error"); valid = false; }
  if (!phone) { phoneEl?.classList.add("error"); valid = false; }
  if (deliveryType === "delivery" && !address) { addrEl?.classList.add("error"); valid = false; }

  if (!valid) {
    const first = document.querySelector(".form-input.error");
    first?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  try {
    const res = await fetch("/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cart,
        deliveryType,
        customerInfo: { name, phone, address, notes },
      }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Virhe: " + (data.error || "Tuntematon virhe"));
    }
  } catch {
    alert("Yhteysvirhe. Yritä uudelleen.");
  }
}
