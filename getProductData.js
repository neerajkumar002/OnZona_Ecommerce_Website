 
import { showProductContainer } from "./homeProductCards";

const apiUrl = "https://fakestoreapi.com/products";

export async function getProductData() {
  try { 
    const response = await fetch(apiUrl);
    const products = await response.json();
    if (products) {
      showProductContainer(products);
      console.log(products);
    }
  } catch (error) {
    console.log(error);
  }
}
