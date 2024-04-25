import { getProductsFromLocalStorage } from "./getProductsFromLocalStorage";
const cartValue = document.querySelector(".cart-value");
export const updateCartValue = () => {
  cartValue.innerHTML = getProductsFromLocalStorage()
    .map((productItem) => productItem.quantity)
    .reduce((preValue, nextValue) => preValue + nextValue, 0);
};
