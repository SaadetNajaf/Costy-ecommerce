import getProducts from "./api.js";
import { addToCart } from "./cart.js";
import {
  displayCartTotal,
  getFromLocalStorage,
  updateCartIcon,
} from "./helper.js";
import { uiElements, renderProducts, renderCartItems } from "./ui.js";

uiElements.menuIcon.addEventListener("click", () => {
  uiElements.navbar.classList.toggle("open-menu");
});

document.addEventListener("DOMContentLoaded", () => {
  const cart = getFromLocalStorage();
  if (window.location.pathname.includes("/cart.html")) {
    renderCartItems(cart);
    displayCartTotal(cart);
  } else {
    getProducts()
      .then((products) => {
        renderProducts(products, (e) => {
          addToCart(e, products);
        });
      })
      .catch((error) => {
        console.log(`Error fetching products: ${error.message}`);
      });
  }
  updateCartIcon(cart);
});
