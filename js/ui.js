import { onQuantityChange, removeFromCart } from "./cart.js";

const uiElements = {
  menuIcon: document.querySelector("#menu-icon"),
  navbar: document.querySelector(".navbar"),
  productsContainer: document.querySelector(".product-container"),
  cartContainer: document.querySelector("#cart-items"),
  cartTotal: document.querySelector("#cart-total"),
};

const renderProducts = (products, addToCartFunction) => {
  const productsCardHtml = products
    .map(
      (product) => `<div class="product">
          <img
            src="${product.image}"
            alt="product-image"
            class="product-image"
          />
          <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-price">$${product.price}</p>
            <a class="btn-add-to-cart" data-id="${product.id}" >Add to cart</a>
          </div>
        </div>`
    )
    .join("");
  uiElements.productsContainer.innerHTML = productsCardHtml;

  const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");

  addToCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener("click", addToCartFunction);
  });
};

const renderCartItems = (cart) => {
  uiElements.cartContainer.innerHTML = cart
    .map(
      (item) => `
       <div class="cart-item">
              <img
                src="${item.image}"
                alt="${item.title}"
              />

              <div class="cart-item-details">
                <h2 class="cart-item-title">${item.title}</h2>
                <input
                  type="number"
                  min="1"
                  value="${item.quantity}"
                  class="cart-item-quantity"
                  data-id = "${item.id}"
                />
              </div>
              <h2 class="cart-item-price">$${item.price}</h2>
              <button class="cart-remove-btn" data-id="${item.id}" >Remove</button>
            </div>
    `
    )
    .join("");

  const removeButtons = document.querySelectorAll(".cart-remove-btn");

  removeButtons.forEach((removeButton) =>
    removeButton.addEventListener("click", removeFromCart)
  );

  const quantityInputs = document.querySelectorAll(".cart-item-quantity");

  quantityInputs.forEach((quantityInput) =>
    quantityInput.addEventListener("change", onQuantityChange)
  );
};

export { uiElements, renderProducts, renderCartItems };
