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


/*======================
  SCROLL ANIMAATIOT
========================*/

window.addEventListener("DOMContentLoaded", () => {

  // --- Korttien scroll-animaatio ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".category-title").forEach(el => {
    observer.observe(el);
  });

  document.querySelectorAll(".pizza-card").forEach((card, i) => {
    card.style.animationDelay = (i % 4) * 60 + "ms";
    observer.observe(card);
  });

  // --- Staggered image loading ---
  const imgs = document.querySelectorAll(".pizza-img");

  imgs.forEach(img => {
    if (!img.getAttribute("src")) return;
    img.dataset.src = img.getAttribute("src");
    img.removeAttribute("src");
    img.closest(".pizza-img-wrap")?.classList.add("skeleton");
  });

  let batchCount = 0;
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      if (!img.dataset.src) return;

      const delay = (batchCount % 5) * 100;
      batchCount++;

      setTimeout(() => {
        img.src = img.dataset.src;
        img.addEventListener("load", () => {
          img.classList.add("img-loaded");
          img.closest(".pizza-img-wrap")?.classList.remove("skeleton");
        }, { once: true });
        img.addEventListener("error", () => {
          img.closest(".pizza-img-wrap")?.classList.remove("skeleton");
        }, { once: true });
      }, delay);

      imgObserver.unobserve(img);
    });
  }, { rootMargin: "150px" });

  imgs.forEach(img => imgObserver.observe(img));
});


/*================  
  OpenModal
==================*/

// Kategoriat joissa pizzapohjan voi valita gluteenittomana (+3€)
const DOUGH_CATEGORIES = ["pizzat", "venepizzat", "calzonet", "pannupizzat"];

function openModal(productId, category) {

  const product =
    products.find(p => p.id === productId);

  if (!product) return;


  // Tallenna valittu tuote myöhempää addToCartia varten
  window.selectedProduct = product;
  window.selectedCategory = category;


  // Nimi + kuva + kuvaus
  document.getElementById("modalTitle").innerText = product.name;
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalDescription").innerText = product.description || "";


  // TYHJENNÄ VANHAT OPTIONSIT
  document.getElementById("sizeOptions").innerHTML = "";
  document.getElementById("sauceOptions").innerHTML = "";
  document.getElementById("extraOptions").innerHTML = "";


  // 🔵 KOKO
  product.sizes.forEach((size, i) => {

    const label = document.createElement("label");

    label.innerHTML = `
      <input type="radio" name="size" value="${size.name}" ${i === 0 ? "checked" : ""}>
      ${size.name} ${size.extra > 0 ? "(+" + size.extra + "€)" : ""}
    `;

    document.getElementById("sizeOptions").appendChild(label);
  });


  // 🟡 KASTIKKEET
  product.sauces.forEach(sauce => {

    const label = document.createElement("label");
    label.dataset.basePrice = SAUCE_PRICE;

    label.innerHTML = `
      <input type="radio" name="sauce" value="${sauce}">
      <span class="sauce-label-text">${sauce}</span>
    `;

    document.getElementById("sauceOptions").appendChild(label);
  });

  updateSaucePrices();


  // 🟢 LISÄTÄYTEET
  // Pannupizzoilla täytteet sisältyvät hintaan, mutta niitä saa valita vain tuotteen
  // ilmoittaman määrän verran (esim. "2 täytettä" -> max 2). Muilla tuotteilla hinta
  // riippuu koosta: normaali 1.50€, perhekoko 3.00€.
  const extraHeading = document.getElementById("extraHeading");
  if (extraHeading) {
    extraHeading.textContent = product.maxFreeExtras
      ? `Täytteet (sisältyy hintaan, valitse enintään ${product.maxFreeExtras})`
      : "Lisätäytteet";
  }

  product.extras.forEach(extra => {

    const label = document.createElement("label");
    label.dataset.basePrice = extra.price;

    label.innerHTML = `
      <input type="checkbox" value="${extra.name}">
      <span class="extra-label-text">${extra.name}${product.maxFreeExtras ? "" : " (+" + extra.price.toFixed(2) + "€)"}</span>
    `;

    document.getElementById("extraOptions").appendChild(label);
  });

  updateExtraPrices();
  enforceMaxFreeExtras();


  // ⚪ GLUTEENITON POHJA (vain taikinapohjaisille tuotteille, vain normikoossa)
  const glutenFreeCheckbox = document.getElementById("glutenFreeCheckbox");
  if (glutenFreeCheckbox) glutenFreeCheckbox.checked = false;
  updateGlutenFreeAvailability();


  // Avaa modal + overlay
  document.getElementById("pizzaModal").classList.add("active");
  document.getElementById("overlay2").classList.add("active");
}

// Päivittää lisätäytteiden näytettävän hinnan valitun koon mukaan
function updateExtraPrices() {
  const product = window.selectedProduct;
  if (!product || product.maxFreeExtras) return; // pannupizzoilla täytteet ovat aina ilmaisia

  const selectedSize = document.querySelector('input[name="size"]:checked');
  const sizeData = product.sizes.find(s => s.name === selectedSize?.value);
  const sizeExtra = sizeData ? sizeData.extra : 0;
  const multiplier = sizeExtra > 0 ? 2 : 1;

  document.querySelectorAll('#extraOptions label').forEach(label => {
    const base = parseFloat(label.dataset.basePrice);
    const input = label.querySelector('input');
    const textEl = label.querySelector('.extra-label-text');
    if (textEl && input) {
      textEl.textContent = `${input.value} (+${(base * multiplier).toFixed(2)}€)`;
    }
  });
}

// Päivittää maksullisten kastikkeiden (esim. majoneesi) näytettävän hinnan valitun koon mukaan
function updateSaucePrices() {
  const product = window.selectedProduct;
  if (!product) return;

  const selectedSize = document.querySelector('input[name="size"]:checked');
  const sizeData = product.sizes.find(s => s.name === selectedSize?.value);
  const sizeExtra = sizeData ? sizeData.extra : 0;
  const multiplier = sizeExtra > 0 ? 2 : 1;

  document.querySelectorAll('#sauceOptions label').forEach(label => {
    const base = parseFloat(label.dataset.basePrice) || 0;
    const input = label.querySelector('input');
    const textEl = label.querySelector('.sauce-label-text');
    if (textEl && input) {
      textEl.textContent = base > 0 ? `${input.value} (+${(base * multiplier).toFixed(2)}€)` : input.value;
    }
  });
}

// Gluteeniton pohja saatavilla vain oikean kategorian tuotteille normikoossa - ei perhekoossa
function updateGlutenFreeAvailability() {
  const product = window.selectedProduct;
  const glutenFreeRow = document.getElementById("glutenFreeRow");
  const glutenFreeHeading = document.getElementById("glutenFreeHeading");
  const glutenFreeCheckbox = document.getElementById("glutenFreeCheckbox");
  if (!product || !glutenFreeRow || !glutenFreeHeading || !glutenFreeCheckbox) return;

  const selectedSize = document.querySelector('input[name="size"]:checked');
  const show = DOUGH_CATEGORIES.includes(window.selectedCategory) && selectedSize?.value === "Normal";

  glutenFreeRow.style.display = show ? "" : "none";
  glutenFreeHeading.style.display = show ? "" : "none";
  if (!show) glutenFreeCheckbox.checked = false;
}

// Estää valitsemasta enempää täytteitä kuin tuote sallii (esim. pannupizza "2 täytettä")
function enforceMaxFreeExtras() {
  const product = window.selectedProduct;
  if (!product || !product.maxFreeExtras) return;

  const checkboxes = document.querySelectorAll('#extraOptions input[type="checkbox"]');
  const checkedCount = document.querySelectorAll('#extraOptions input[type="checkbox"]:checked').length;
  const limitReached = checkedCount >= product.maxFreeExtras;

  checkboxes.forEach(cb => {
    cb.disabled = limitReached && !cb.checked;
  });
}

document.getElementById("sizeOptions")?.addEventListener("change", (e) => {
  if (e.target.name === "size") {
    updateExtraPrices();
    updateSaucePrices();
    updateGlutenFreeAvailability();
  }
});

document.getElementById("extraOptions")?.addEventListener("change", (e) => {
  if (e.target.type === "checkbox") enforceMaxFreeExtras();
});





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


  // 5b. gluteeniton pohja
  const glutenFree = document.getElementById("glutenFreeCheckbox")?.checked || false;


  // 6. cart item
  const cartItem = {
    productId: product.id,
    size: selectedSize.value,
    sauce: selectedSauce?.value || '',
    extras,
    glutenFree,
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