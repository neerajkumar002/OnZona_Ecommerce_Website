export const getProductsFromLocalStorage = () => {
  let cartProductsData = localStorage.getItem("cartProductsLS");
  if (!cartProductsData) {
    return [];
  }
  cartProductsData = JSON.parse(cartProductsData);
  return cartProductsData;
};
