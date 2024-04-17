export function cardLoading() {
  const mainProductContainer = document.querySelector(
    ".main-products-container"
  );

  for (let i = 1; i <= 10; i++) {
    mainProductContainer.innerHTML += `<!-- skeleton card start -->
 <div class="skeleton-card">
      <article class="information">
        <span class="category-line"></span>
        <div class="imageCover"></div>
        <div class="productName-line"></div>
        <div class="productRating-line"></div>
        <div class="productPrice-line"></div>
        <div class="productQuantity-line"></div>
        <div class="add-to-cart-button-line"></div>
      </article>
    </div>
    <!-- skeleton card end-->

    `;
  }
}
