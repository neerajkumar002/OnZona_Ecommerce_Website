import { getProductsFromLocalStorage } from "./getProductsFromLocalStorage";
import { setProductInLocalStorage } from "./setProductsInLocalStorage";
import { updateCartValue } from "./updateCartValue";

export const addToCart = (event, id) => {
  let localStorageProductArr = getProductsFromLocalStorage();
  const currentProductCard = document.querySelector(`#card${id}`);
  let price = currentProductCard.querySelector(".productPrice").innerText;
  let quantity = currentProductCard.querySelector(".productQuantity").innerText;

  quantity = Number(quantity);
  price = Number(price.replace("$", ""));
  price = price * quantity;

  const existingProduct = localStorageProductArr.find(
    (currentProItem) => currentProItem.id === id
  );

  if (existingProduct === undefined) {
    localStorageProductArr.push({ id, price, quantity });
  } else {
    existingProduct.quantity += quantity;
    existingProduct.price = price * existingProduct.quantity;
  }
  console.log(localStorageProductArr);
  setProductInLocalStorage(localStorageProductArr);

  //   update cart value

  updateCartValue();
};

updateCartValue();
