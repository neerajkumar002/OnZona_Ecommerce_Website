import { getProductData } from "./getProductData";
import { getProductsFromLocalStorage } from "./getProductsFromLocalStorage";

async function getApiData() {
  const data = await getProductData();
  showAddToCartCards(data);
}

function showAddToCartCards(products) {
  const localStorageProductArr = getProductsFromLocalStorage();
  const cartProducts = localStorageProductArr.filter((currentProduct) => {
    currentProduct.id === localStorageProductArr.id;
  });
  console.log(cartProducts);
}

getApiData();
