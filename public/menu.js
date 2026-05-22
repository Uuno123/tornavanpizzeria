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

/*===============
    SCROLL
===============*/

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

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


/*================  
  OpenModal
==================*/

function openModal(productId) {

  const product =
    products.find(p => p.id === productId);

  if (!product) return;


  // Tallenna valittu tuote myöhempää addToCartia varten
  window.selectedProduct = product;


  // Nimi + kuva
  document.getElementById("modalTitle").innerText = product.name;
  document.getElementById("modalImage").src = product.image;


  // TYHJENNÄ VANHAT OPTIONSIT
  document.getElementById("sizeOptions").innerHTML = "";
  document.getElementById("sauceOptions").innerHTML = "";
  document.getElementById("extraOptions").innerHTML = "";


  // 🔵 KOKO
  product.sizes.forEach(size => {

    const label = document.createElement("label");

    label.innerHTML = `
      <input type="radio" name="size" value="${size.name}">
      ${size.name} ${size.extra > 0 ? "(+" + size.extra + "€)" : ""}
    `;

    document.getElementById("sizeOptions").appendChild(label);
  });


  // 🟡 KASTIKKEET
  product.sauces.forEach(sauce => {

    const label = document.createElement("label");

    label.innerHTML = `
      <input type="radio" name="sauce" value="${sauce}">
      ${sauce}
    `;

    document.getElementById("sauceOptions").appendChild(label);
  });


  // 🟢 LISÄTÄYTEET
  product.extras.forEach(extra => {

    const label = document.createElement("label");

    label.innerHTML = `
      <input type="checkbox" value="${extra.name}">
      ${extra.name} (+${extra.price}€)
    `;

    document.getElementById("extraOptions").appendChild(label);
  });


  // Avaa modal + overlay
  document.getElementById("pizzaModal").classList.add("active");
  document.getElementById("overlay2").classList.add("active");
}





/*==========================
  CLOSEMODAL
==============================*/

function closeModal() {

  document.getElementById("pizzaModal")
    .classList.remove("active");

  document.getElementById("overlay2")
    .classList.remove("active");
    
}

/*====================
  ADD TO CART
=======================*/


function addToCart() {

  // 1. haetaan valinnat
  const selectedSize =
    document.querySelector('input[name="size"]:checked');

  const selectedSauce =
    document.querySelector('input[name="sauce"]:checked');


  // 2. validointi
  if (!selectedSize) {
    alert("Valitse koko");
    return;
  }

  if (!selectedSauce) {
    alert("Valitse kastike");
    return;
  }


  // 3. haetaan valittu tuote
  const product = window.selectedProduct;

  if (!product) return;


  // 4. määrä
  const quantity =
    parseInt(document.getElementById("quantity").value);


  // 5. lisätäytteet
  const extras = [];

  document
    .querySelectorAll(
      '#extraOptions input[type="checkbox"]:checked'
    )
    .forEach(cb => {
      extras.push(cb.value);
    });


  // 6. cart item
  const cartItem = {
    productId: product.id,
    size: selectedSize.value,
    sauce: selectedSauce.value,
    extras,
    quantity
  };


  // 7. vanha cart
  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];


  // 8. lisää uusi
  cart.push(cartItem);


  // 9. tallenna
  localStorage.setItem("cart", JSON.stringify(cart));

  // 10. päivitä badge
  updateCartBadge();

  // 11. sulje modal
  closeModal();

  function showToast(message) {

  const toast =
    document.getElementById("toast");

  toast.innerText = message;

  toast.classList.add("show");


  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

showToast(product.name + " lisätty ostoskoriin ");
  
}