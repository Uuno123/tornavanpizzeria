
/*==================
  TOGGLE-MENU
=====================*/

function toggleMenu() {
  const nav = document.getElementById('show-nav');
  const ham = document.getElementById('ham');
  const overlay = document.getElementById('overlay');

  nav.classList.toggle('open');
  ham.classList.toggle('open');
  overlay.classList.toggle('open');
}

/*=====================
CART BADGE
======================*/

function updateCartBadge(){
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item ) => sum + (item.quantity || 1), 0);
  const badge = document.getElementById("cartBadge");
  if (!badge) return;
  badge.textContent = total;
  badge.style.display = total === 0 ? "none" : "flex";
}

window.addEventListener("DOMContentLoaded", updateCartBadge);

/*=====================
NAVBAR TAUSTA VIERITTÄESSÄ
======================*/

const navbarEl = document.querySelector(".navbar");

function updateNavbarScroll() {
  if (!navbarEl) return;
  navbarEl.classList.toggle("scrolled", window.scrollY > 40);
}

window.addEventListener("scroll", updateNavbarScroll);
window.addEventListener("DOMContentLoaded", updateNavbarScroll);

