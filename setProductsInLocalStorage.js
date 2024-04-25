export function setProductInLocalStorage(productsData) {
  if (productsData) {
    localStorage.setItem("cartProductsLS", JSON.stringify(productsData));
  }
}
