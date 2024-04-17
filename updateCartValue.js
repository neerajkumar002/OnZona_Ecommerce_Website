const cartValue = document.querySelector(".cart-value");
export const updateCartValue = (updateValue) => {
  return (cartValue.innerHTML = updateValue.length);
};

 