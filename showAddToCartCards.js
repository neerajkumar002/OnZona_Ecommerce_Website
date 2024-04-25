import { getProductData } from "./getProductData";
import { getProductsFromLocalStorage } from "./getProductsFromLocalStorage";
import { setProductInLocalStorage } from "./setProductsInLocalStorage";
import { updateCartValue } from "./updateCartValue";
const cartProductListContainer = document.querySelector("#cart-product-list");
const productTemplate = document.querySelector(".product-card-template");

let cartStack = [];

async function handleApiData() {
  const products = await getProductData();
  displayProductsInCart(products);
}

handleApiData();

const displayProductsInCart = (products) => {
  let localStorageProductArr = getProductsFromLocalStorage();

  const cartProducts = products.filter((curProduct) => {
    return localStorageProductArr.find(
      (productItem) => productItem.id === curProduct.id
    );
  });

  if (cartProducts.length === 0) {
    cartProductListContainer.innerHTML = `
     <div>
      Cart is Empty
      <div >
      <a href="./index.html">Back TO Home</a>
      </div>
     </div>
    `;
  } else {
    cartProducts.forEach((currentProduct) => {
      const { id, title, price, image } = currentProduct;
      const { quantity } = getProductsFromLocalStorage().find(
        (item) => item.id === id
      );
      const productClone = document.importNode(productTemplate.content, true);
      productClone.querySelector(".cards").setAttribute("id", `card${id}`);
      productClone
        .querySelector(".productQuantity")
        .setAttribute("id", `productQuantity${id}`);
     
      productClone.querySelector(".product-img").src = image;
      productClone.querySelector(".product-img").alt = title;
      productClone.querySelector(".product-name").textContent = title;
      productClone.querySelector(".product-price").textContent = price;
      
      productClone.querySelector(".productQuantity").textContent = quantity;

      productClone
        .querySelector(".remove-to-cart-button")
        .addEventListener("click", () => {
          removeCartProduct(id);
        });

      productClone
        .querySelector(".cartIncrement")
        .addEventListener("click", () => {
          incrementQuantity(id, products);
        });
      productClone
        .querySelector(".cartDecrement")
        .addEventListener("click", () => {
          decrementQuantity(id, products);
        });

      cartProductListContainer.append(productClone);
    });
  }
};

const removeCartProduct = (id) => {
  document.getElementById(`card${id}`).remove();

  const updateProducts = getProductsFromLocalStorage().filter(
    (currentProduct) => currentProduct.id !== id
  );

  setProductInLocalStorage(updateProducts);
  calculation();
  updateCartValue();
};

const incrementQuantity = (id, products) => {
  const productData = products.find((curProduct) => curProduct.id === id);
  const productPrice = Number(productData.price);
  const productsArr = getProductsFromLocalStorage();
  const exsitingProduct = productsArr.find(
    (curProduct) => curProduct.id === id
  );

  if (exsitingProduct === undefined) {
    return;
  } else {
    exsitingProduct.quantity += 1;
    exsitingProduct.price = productPrice * exsitingProduct.quantity;
    document.getElementById(`productQuantity${id}`).innerText =
      exsitingProduct.quantity;
  }
  setProductInLocalStorage(productsArr);

  calculation();
  updateCartValue(); 
};

const decrementQuantity = (id, products) => {
  const productData = products.find((curProduct) => curProduct.id === id);
  const productPrice = Number(productData.price);
  let productsArr = getProductsFromLocalStorage();
  const exsitingProduct = productsArr.find(
    (curProduct) => curProduct.id === id
  );

  if (exsitingProduct === undefined) {
    return;
  } else {
    exsitingProduct.quantity -= 1;
    exsitingProduct.price = productPrice * exsitingProduct.quantity;
    document.getElementById(`productQuantity${id}`).innerText =
      exsitingProduct.quantity;

    if (exsitingProduct.quantity < 1) {
      removeCartProduct(id);
    }
  }
  productsArr = productsArr.filter((item) => item.quantity !== 0);
  setProductInLocalStorage(productsArr);
  calculation();
  updateCartValue(); 
};

const calculation = () => {
  const totalAmount = getProductsFromLocalStorage()
    .map((currentProduct) => currentProduct.price)
    .reduce((prev, next) => prev + next, 0)
    .toFixed(2);

  const subTotal = document.querySelector(".product-sub-total");
  const fianlToatl = document.querySelector(".product-final-total");

  subTotal.innerText = `$${totalAmount}`;
  fianlToatl.innerText = `$${
    Number(totalAmount) === 0 ? 0 : Number(totalAmount) + 50
  }`;
};

 

calculation();
updateCartValue();
