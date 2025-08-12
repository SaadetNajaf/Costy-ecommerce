import { uiElements } from "./ui.js";

const saveToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const getFromLocalStorage = () => {
  const strData = localStorage.getItem("cart");
  return strData ? JSON.parse(strData) : [];
};

const updateCartIcon = (cart) => {
  const cartIcon = document.querySelector("#cart-icon");

  const totalQuantity = cart.reduce((total, item) => total + +item.quantity, 0);
  cartIcon.setAttribute("data-quantity", totalQuantity);
};

const calculateCartTotal = (cart) => {
  return cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

const displayCartTotal = (cart) => {
  const total = calculateCartTotal(cart);

  uiElements.cartTotal.textContent = `Total: $ ${total.toFixed(2)}`;
};
export {
  saveToLocalStorage,
  getFromLocalStorage,
  updateCartIcon,
  calculateCartTotal,
  displayCartTotal,
};
