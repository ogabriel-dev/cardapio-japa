/* =====================================================
   ESPECIAL JAPA — CARDÁPIO DIGITAL
   JavaScript puro (Vanilla JS) — sem dependências externas
   ===================================================== */

/* =====================================================
   CONFIGURAÇÃO
   Altere aqui o número de WhatsApp do estabelecimento.
   Formato: DDI + DDD + número, apenas dígitos.
   ===================================================== */
const CONFIG = {
  WHATSAPP_NUMBER: "5515997072155",
  STORE_NAME: "ESPECIAL JAPA",
};

/* =====================================================
   CATEGORIAS
   Para adicionar/renomear categorias, edite este objeto.
   A "key" precisa bater com o campo "category" dos produtos.
   ===================================================== */
const CATEGORIES = {
  todos: { label: "Todos", emoji: "🍱" },
  especiais: { label: "Especiais", emoji: "🍣" },
  unidades: { label: "Unidades", emoji: "🥢" },
};

/* =====================================================
   FORMAS DE PAGAMENTO
   ===================================================== */
const PAYMENT_LABELS = {
  dinheiro: "💵 Dinheiro",
  cartao: "💳 Cartão",
  pix: "🔑 Pix",
};

/* =====================================================
   PRODUTOS
   Array central. Para trocar uma imagem, basta editar o
   campo "image" do produto correspondente.
   ===================================================== */
const products = [
  // ---------- ESPECIAIS ----------
  {
    id: 1,
    title: "Hot Holl — 8 unidades grandes",
    category: "especiais",
    quantityLabel: "8 unidades grandes",
    description: "8 unidades grandes de Hot Holl.",
    price: 30.0,
    image:
      "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=600&q=80&auto=format&fit=crop",
    emoji: "🍣",
  },
  {
    id: 2,
    title: "Temaki Filadélfia",
    category: "especiais",
    quantityLabel: "",
    description: "Temaki Filadélfia.",
    price: 30.0,
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80&auto=format&fit=crop",
    emoji: "🍙",
  },
  {
    id: 3,
    title: "Temaki Empanado",
    category: "especiais",
    quantityLabel: "",
    description: "Temaki empanado.",
    price: 35.0,
    image:
      "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&q=80&auto=format&fit=crop",
    emoji: "🍙",
  },
  {
    id: 4,
    title: "Dog Sushi",
    category: "especiais",
    quantityLabel: "",
    description: "Dog Sushi.",
    price: 40.0,
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80&auto=format&fit=crop",
    emoji: "🍣",
  },
  {
    id: 5,
    title: "Poke Misto",
    category: "especiais",
    quantityLabel: "",
    description: "Poke misto.",
    price: 35.0,
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&q=80&auto=format&fit=crop",
    emoji: "🥗",
  },
  {
    id: 6,
    title: "Bolinho de Salmão — 8 unidades",
    category: "especiais",
    quantityLabel: "8 unidades",
    description: "8 unidades de bolinho de salmão.",
    price: 40.0,
    image:
      "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=600&q=80&auto=format&fit=crop",
    emoji: "🍡",
  },

  // ---------- UNIDADES ----------
  {
    id: 7,
    title: "Joy Tradicional",
    category: "unidades",
    quantityLabel: "Unidade",
    description: "Unidade.",
    price: 5.5,
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80&auto=format&fit=crop",
    emoji: "🍣",
  },
  {
    id: 8,
    title: "Joy de Couve ou Salmão",
    category: "unidades",
    quantityLabel: "Unidade",
    description: "Unidade. Escolha entre couve ou salmão.",
    price: 6.0,
    image:
      "https://images.unsplash.com/photo-1607301405390-d831c242f59b?w=600&q=80&auto=format&fit=crop",
    emoji: "🍣",
  },
  {
    id: 9,
    title: "Niguiri",
    category: "unidades",
    quantityLabel: "Unidade",
    description: "Unidade.",
    price: 5.0,
    image:
      "https://images.unsplash.com/photo-1611510338559-2eb0917f6a1c?w=600&q=80&auto=format&fit=crop",
    emoji: "🍣",
  },
  {
    id: 10,
    title: "Sashimi",
    category: "unidades",
    quantityLabel: "Unidade",
    description: "Unidade.",
    price: 3.0,
    image:
      "https://images.unsplash.com/photo-1584583570840-0a3d88497f5f?w=600&q=80&auto=format&fit=crop",
    emoji: "🐟",
  },
  {
    id: 11,
    title: "Uramaki",
    category: "unidades",
    quantityLabel: "Unidade",
    description: "Unidade.",
    price: 5.0,
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80&auto=format&fit=crop",
    emoji: "🍣",
  },
  {
    id: 12,
    title: "Hossomaki",
    category: "unidades",
    quantityLabel: "Unidade",
    description: "Unidade.",
    price: 4.0,
    image:
      "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&q=80&auto=format&fit=crop",
    emoji: "🍣",
  },
  {
    id: 13,
    title: "Hot Holl",
    category: "unidades",
    quantityLabel: "Unidade",
    description: "Unidade.",
    price: 4.0,
    image:
      "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=600&q=80&auto=format&fit=crop",
    emoji: "🍣",
  },
];

/* =====================================================
   ESTADO
   ===================================================== */
let currentCategory = "todos";
let currentModalProductId = null;
let selectedDeliveryOption = null; // "entrega" | "retirada"
let selectedPaymentOption = null; // "dinheiro" | "cartao" | "pix"
let orderNote = ""; // Observações gerais do pedido
const cart = []; // [{ id, title, price, quantity, image, emoji }]

/* =====================================================
   HELPERS
   ===================================================== */
function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function findProduct(id) {
  return products.find((p) => p.id === id);
}

function findCartItem(id) {
  return cart.find((item) => item.id === id);
}

/* =====================================================
   ELEMENTOS DO DOM
   ===================================================== */
const el = {
  menuToggle: document.getElementById("menuToggle"),
  categories: document.getElementById("categories"),
  productsGrid: document.getElementById("productsGrid"),
  footerWhatsapp: document.getElementById("footerWhatsapp"),

  // Modal de produto
  productModalOverlay: document.getElementById("productModalOverlay"),
  closeProductModal: document.getElementById("closeProductModal"),
  modalProductImage: document.getElementById("modalProductImage"),
  modalProductEmoji: document.getElementById("modalProductEmoji"),
  modalProductCategory: document.getElementById("modalProductCategory"),
  modalProductName: document.getElementById("modalProductName"),
  modalProductDescription: document.getElementById("modalProductDescription"),
  modalProductPrice: document.getElementById("modalProductPrice"),
  addToCartBtn: document.getElementById("addToCartBtn"),

  // Carrinho
  cartBar: document.getElementById("cartBar"),
  cartBarCount: document.getElementById("cartBarCount"),
  cartModalOverlay: document.getElementById("cartModalOverlay"),
  closeCartModal: document.getElementById("closeCartModal"),
  cartItems: document.getElementById("cartItems"),
  cartEmptyState: document.getElementById("cartEmptyState"),
  cartSummary: document.getElementById("cartSummary"),
  cartNoteInput: document.getElementById("cartNoteInput"),
  cartTotal: document.getElementById("cartTotal"),
  continueShoppingBtn: document.getElementById("continueShoppingBtn"),
  goToCheckoutBtn: document.getElementById("goToCheckoutBtn"),

  // Checkout
  checkoutModalOverlay: document.getElementById("checkoutModalOverlay"),
  closeCheckoutModal: document.getElementById("closeCheckoutModal"),
  deliveryOptionBtn: document.getElementById("deliveryOptionBtn"),
  pickupOptionBtn: document.getElementById("pickupOptionBtn"),
  addressField: document.getElementById("addressField"),
  addressInput: document.getElementById("addressInput"),
  paymentOptions: document.getElementById("paymentOptions"),
  sendWhatsappBtn: document.getElementById("sendWhatsappBtn"),
};

/* =====================================================
   RENDERIZAÇÃO DE PRODUTOS
   ===================================================== */
function renderProducts() {
  const filtered =
    currentCategory === "todos"
      ? products
      : products.filter((p) => p.category === currentCategory);

  el.productsGrid.innerHTML = filtered
    .map(
      (p) => `
    <button class="product-card" type="button" data-id="${p.id}" aria-label="${p.title}">
      <div class="product-card__image-wrap" data-role="image-wrap">
        <img
          class="product-card__image"
          src="${p.image}"
          alt="${p.title}"
          loading="lazy"
          onerror="this.closest('[data-role=image-wrap]').classList.add('has-error')"
        >
        <div class="product-card__emoji-fallback" aria-hidden="true">${p.emoji}</div>
      </div>
      <div class="product-card__body">
        <span class="product-card__name">${p.title}</span>
        ${p.quantityLabel ? `<span class="product-card__qty">${p.quantityLabel}</span>` : ""}
        <span class="product-card__price">${formatPrice(p.price)}</span>
      </div>
    </button>
  `,
    )
    .join("");

  // Vincula clique de cada card à abertura do modal
  el.productsGrid.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = Number(card.dataset.id);
      openModal(id);
    });
  });
}

/* =====================================================
   CATEGORIAS
   ===================================================== */
function setCategory(category) {
  currentCategory = category;

  document.querySelectorAll(".category-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.category === category);
  });

  renderProducts();
}

el.categories.addEventListener("click", (e) => {
  const chip = e.target.closest(".category-chip");
  if (!chip) return;
  setCategory(chip.dataset.category);
});

el.menuToggle.addEventListener("click", () => {
  const isOpen = el.categories.classList.toggle("is-open");
  el.menuToggle.classList.toggle("is-open", isOpen);
  el.menuToggle.setAttribute("aria-expanded", String(isOpen));
});

/* =====================================================
   MODAL DE PRODUTO
   ===================================================== */
function openModal(id) {
  const product = findProduct(id);
  if (!product) return;

  currentModalProductId = id;

  const imageWrap = el.modalProductImage.closest(".product-modal__image-wrap");
  imageWrap.classList.remove("has-error");
  el.modalProductImage.src = product.image;
  el.modalProductImage.alt = product.title;
  el.modalProductEmoji.textContent = product.emoji;

  el.modalProductCategory.textContent =
    CATEGORIES[product.category]?.label || product.category;
  el.modalProductName.textContent = product.title;
  el.modalProductDescription.textContent = product.description;
  el.modalProductPrice.textContent = formatPrice(product.price);

  el.productModalOverlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  el.productModalOverlay.classList.remove("is-open");
  document.body.style.overflow = "";
  currentModalProductId = null;
}

el.modalProductImage.addEventListener("error", () => {
  el.modalProductImage
    .closest(".product-modal__image-wrap")
    .classList.add("has-error");
});

el.closeProductModal.addEventListener("click", closeModal);
el.productModalOverlay.addEventListener("click", (e) => {
  if (e.target === el.productModalOverlay) closeModal();
});

/* =====================================================
   CARRINHO — LÓGICA
   ===================================================== */
function addToCart(id) {
  const product = findProduct(id);
  if (!product) return;

  const existing = findCartItem(id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
      emoji: product.emoji,
    });
  }

  updateCartSummary();
  closeModal();
}

function increaseQuantity(id) {
  const item = findCartItem(id);
  if (!item) return;
  item.quantity += 1;
  updateCartSummary();
  renderCartItems();
}

function decreaseQuantity(id) {
  const item = findCartItem(id);
  if (!item) return;

  item.quantity -= 1;
  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }

  updateCartSummary();
  renderCartItems();
}

function removeFromCart(id) {
  const index = cart.findIndex((item) => item.id === id);
  if (index === -1) return;

  cart.splice(index, 1);
  updateCartSummary();
  renderCartItems();
}

function getCartTotalItems() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotalPrice() {
  return cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

/* =====================================================
   CARRINHO — INTERFACE
   ===================================================== */
function updateCartSummary() {
  const totalItems = getCartTotalItems();
  const totalPrice = getCartTotalPrice();

  el.cartBarCount.textContent = `${totalItems} ${totalItems === 1 ? "item" : "itens"}`;
  el.cartBar.classList.toggle("is-visible", totalItems > 0);

  el.cartTotal.textContent = formatPrice(totalPrice);

  const isEmpty = cart.length === 0;
  el.cartEmptyState.classList.toggle("is-visible", isEmpty);
  el.cartSummary.style.display = isEmpty ? "none" : "block";
}

function renderCartItems() {
  if (cart.length === 0) {
    el.cartItems.innerHTML = "";
    return;
  }

  el.cartItems.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item__image-wrap" data-role="image-wrap">
        <img
          class="cart-item__image"
          src="${item.image}"
          alt="${item.title}"
          onerror="this.closest('[data-role=image-wrap]').classList.add('has-error')"
        >
        <div class="cart-item__emoji" aria-hidden="true">${item.emoji}</div>
      </div>
      <div class="cart-item__info">
        <p class="cart-item__name">${item.title}</p>
        <p class="cart-item__unit-price">${formatPrice(item.price)} / un.</p>
        <div class="cart-item__controls">
          <button class="qty-btn" data-action="decrease" aria-label="Diminuir quantidade">−</button>
          <span class="cart-item__qty">${item.quantity}</span>
          <button class="qty-btn" data-action="increase" aria-label="Aumentar quantidade">+</button>
        </div>
      </div>
      <div class="cart-item__right">
        <span class="cart-item__subtotal">${formatPrice(item.price * item.quantity)}</span>
        <button class="cart-item__remove" data-action="remove">Remover</button>
      </div>
    </div>
  `,
    )
    .join("");
}

el.cartItems.addEventListener("click", (e) => {
  const actionBtn = e.target.closest("[data-action]");
  if (!actionBtn) return;

  const itemEl = e.target.closest(".cart-item");
  const id = Number(itemEl.dataset.id);
  const action = actionBtn.dataset.action;

  if (action === "increase") increaseQuantity(id);
  if (action === "decrease") decreaseQuantity(id);
  if (action === "remove") removeFromCart(id);
});

function openCartModal() {
  renderCartItems();
  updateCartSummary();
  el.cartNoteInput.value = orderNote;
  el.cartModalOverlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeCartModal() {
  el.cartModalOverlay.classList.remove("is-open");
  document.body.style.overflow = "";
}

el.cartBar.addEventListener("click", openCartModal);
el.closeCartModal.addEventListener("click", closeCartModal);
el.cartModalOverlay.addEventListener("click", (e) => {
  if (e.target === el.cartModalOverlay) closeCartModal();
});
el.continueShoppingBtn.addEventListener("click", closeCartModal);
el.cartNoteInput.addEventListener("input", () => {
  orderNote = el.cartNoteInput.value;
});
el.addToCartBtn.addEventListener("click", () => {
  if (currentModalProductId !== null) addToCart(currentModalProductId);
});

/* =====================================================
   CHECKOUT
   ===================================================== */
function openCheckoutModal() {
  if (cart.length === 0) return;

  closeCartModal();
  el.checkoutModalOverlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  el.checkoutModalOverlay.classList.remove("is-open");
  document.body.style.overflow = "";
}

function selectDeliveryOption(option) {
  selectedDeliveryOption = option;

  el.deliveryOptionBtn.classList.toggle("is-selected", option === "entrega");
  el.pickupOptionBtn.classList.toggle("is-selected", option === "retirada");

  const showAddress = option === "entrega";
  el.addressField.classList.toggle("is-visible", showAddress);
  if (!showAddress) el.addressInput.value = "";

  validateCheckoutForm();
}

function selectPaymentOption(option) {
  selectedPaymentOption = option;

  el.paymentOptions.querySelectorAll(".payment-option").forEach((btn) => {
    btn.classList.toggle("is-selected", btn.dataset.payment === option);
  });

  validateCheckoutForm();
}

function validateCheckoutForm() {
  let deliveryValid = false;

  if (selectedDeliveryOption === "retirada") {
    deliveryValid = true;
  } else if (selectedDeliveryOption === "entrega") {
    deliveryValid = el.addressInput.value.trim().length > 0;
  }

  const paymentValid = selectedPaymentOption !== null;

  el.sendWhatsappBtn.disabled = !(deliveryValid && paymentValid);
}

el.goToCheckoutBtn.addEventListener("click", openCheckoutModal);
el.closeCheckoutModal.addEventListener("click", closeCheckoutModal);
el.checkoutModalOverlay.addEventListener("click", (e) => {
  if (e.target === el.checkoutModalOverlay) closeCheckoutModal();
});

el.deliveryOptionBtn.addEventListener("click", () =>
  selectDeliveryOption("entrega"),
);
el.pickupOptionBtn.addEventListener("click", () =>
  selectDeliveryOption("retirada"),
);
el.addressInput.addEventListener("input", validateCheckoutForm);

el.paymentOptions.addEventListener("click", (e) => {
  const btn = e.target.closest(".payment-option");
  if (!btn) return;
  selectPaymentOption(btn.dataset.payment);
});

/* =====================================================
   ENVIO DO PEDIDO PELO WHATSAPP
   ===================================================== */
function buildWhatsappMessage() {
  const lines = [];

  lines.push(`🍣 *PEDIDO - ${CONFIG.STORE_NAME}*`);
  lines.push("");
  lines.push("Olá! Gostaria de fazer o seguinte pedido:");
  lines.push("");

  cart.forEach((item) => {
    lines.push(`🍣 *${item.title}*`);
    lines.push(`Quantidade: ${item.quantity}`);
    lines.push(`Valor unitário: ${formatPrice(item.price)}`);
    lines.push(`Subtotal: ${formatPrice(item.price * item.quantity)}`);
    lines.push("");
  });

  lines.push("━━━━━━━━━━━━━━━━━━");
  lines.push("");
  lines.push(`💰 *TOTAL: ${formatPrice(getCartTotalPrice())}*`);
  lines.push("");

  if (selectedDeliveryOption === "entrega") {
    lines.push("🏍️ *ENTREGA*");
    lines.push(`📍 Endereço: ${el.addressInput.value.trim()}`);
  } else {
    lines.push("🏪 *RETIRADA NO LOCAL*");
  }

  lines.push("");
  lines.push(`💳 *Pagamento:* ${PAYMENT_LABELS[selectedPaymentOption] || ""}`);

  const note = orderNote.trim();
  if (note) {
    lines.push("");
    lines.push(`📝 *Observações:* ${note}`);
  }

  lines.push("");
  lines.push("Gostaria de finalizar meu pedido. Obrigado!");

  return lines.join("\n");
}

function confirmAndSendWhatsApp() {
  if (el.sendWhatsappBtn.disabled) return;

  const message = buildWhatsappMessage();
  const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

el.sendWhatsappBtn.addEventListener("click", confirmAndSendWhatsApp);

/* =====================================================
   INICIALIZAÇÃO
   ===================================================== */
function init() {
  el.footerWhatsapp.href = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}`;
  renderProducts();
  updateCartSummary();
}

init();
