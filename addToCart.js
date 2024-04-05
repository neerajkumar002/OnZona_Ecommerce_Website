import { getProductsFromLocalStorage } from "./getProductsFromLocalStorage";
import { updateCartValue } from "./updateCartValue";

export const addToCart = (event, id) => {
  let localStorageProductArr = getProductsFromLocalStorage();
  const currentProductCard = document.querySelector(`#card${id}`);
  let price = currentProductCard.querySelector(".productPrice").innerText;
  let quantity = currentProductCard.querySelector(".productQuantity").innerText;

  quantity = Number(quantity);
  price = Number(price.replace("$", ""));
  price = price * quantity;

  localStorageProductArr.push({ id, price, quantity });

  localStorage.setItem(
    "cartProductsLS",
    JSON.stringify(localStorageProductArr)
  );

  //   update cart value
  updateCartValue(localStorageProductArr);
};
