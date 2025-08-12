import {
  displayCartTotal,
  getFromLocalStorage,
  saveToLocalStorage,
  updateCartIcon,
} from "./helper.js";
import { renderCartItems } from "./ui.js";

let cart = getFromLocalStorage();
const addToCart = (e, products) => {
  const productId = +e.target.dataset.id;

  const selectedProduct = products.find((product) => product.id === productId);

  if (selectedProduct) {
    const existingProduct = cart.find((item) => item.id === productId);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      const cartItem = {
        id: selectedProduct.id,
        title: selectedProduct.title,
        price: selectedProduct.price,
        image: selectedProduct.image,
        quantity: 1,
      };
      cart.push(cartItem);
      updateCartIcon(cart);
    }
  }

  saveToLocalStorage(cart);
  e.target.innerText = "Added";

  setTimeout(() => {
    e.target.innerText = "Add to Cart";
  }, 2000);
};

const removeFromCart = (e) => {
  const productId = parseInt(e.target.dataset.id);

  cart = cart.filter((item) => item.id !== productId);

  saveToLocalStorage(cart);

  renderCartItems(cart);

  updateCartIcon(cart);

  displayCartTotal(cart);
};

const onQuantityChange = (e) => {
  const newQuantity = +e.target.value;
  const productId = +e.target.dataset.id;

  if (newQuantity > 0) {
    const updateItem = cart.find((item) => item.id === productId);

    updateItem.quantity = newQuantity;

    saveToLocalStorage(cart);

    updateCartIcon(cart);

    displayCartTotal(cart);
  }
};

export { addToCart, removeFromCart, onQuantityChange };
