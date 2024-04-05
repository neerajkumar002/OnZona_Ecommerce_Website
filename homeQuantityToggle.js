
export const homeQuantityToggle = (id, event, stock) => {


    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElement.querySelector(".productQuantity");

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity++;
            console.log(quantity);
        }
        else if (quantity === stock) {
            quantity = stock;
        }
    }
    else if (event.target.className === "cartDecrement") {
        if (quantity > 1) {
            quantity -= 1;
        }
    }



    productQuantity.innerText = quantity;

    productQuantity.setAttribute("data-quantity", quantity.toString());

}