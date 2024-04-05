import { homeQuantityToggle } from "./homeQuantityToggle";
import { addToCart } from "./addToCart";

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
    productClone.querySelector(
      ".ratingCount"
    ).textContent = `${rating.count} ratings`;
    productClone.querySelector(".productPrice").textContent = `$${price}`;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(id, event, 25);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {

        addToCart(event, id);
      });

    /*   append product Clone */
    mainProductsContainer.append(productClone);
  });
};
