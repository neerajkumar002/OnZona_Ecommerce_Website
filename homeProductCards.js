import { homeQuantityToggle } from "./homeQuantityToggle";
import { addToCart } from "./addToCart";
import { getProductData } from "./getProductData";
import { toast } from "./toast"; 

const mainProductsContainer = document.querySelector(
  ".main-products-container"
);
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }
  products.forEach((currentProduct) => {
    const { id, title, image, price, rating, category } = currentProduct;

    /* clone the product */
    const productClone = document.importNode(productTemplate.content, true);
    productClone.querySelector(".card").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".product-image").src = image;
    productClone.querySelector(".product-image").alt = title;
    productClone.querySelector(".productName").textContent = title;
    productClone.querySelector(".rate").textContent = rating.rate;
    productClone
      .querySelector(".productQuantity")
      .setAttribute("id", `quantity-id-${id}`);
    productClone.querySelector(
      ".ratingCount"
    ).textContent = `${rating.count} ratings`;
    productClone.querySelector(".productPrice").textContent = `$${price}`;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(id, event, 25);
      });

    // add to cart product button
    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id);
        toast("success");
      });

    /*   append product Clone */
    mainProductsContainer.append(productClone);
  });
};

export async function handleHomeProductApi() {
  const products = await getProductData();
  showProductContainer(products);
}
