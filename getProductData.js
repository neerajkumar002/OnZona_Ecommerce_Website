const apiUrl = "https://fakestoreapi.com/products";

 

export async function getProductData() {
  try {
    const response = await fetch(apiUrl);
    const products = await response.json();
    if (products) {
      // showProductContainer(products);
      return products;
    }
  } catch (error) {
    console.log(error);
  }
}
