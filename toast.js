export const toast = (operation) => {
  const toast = document.createElement("div");

  toast.classList.add("toast");

  if (operation === "success") {
    toast.innerHTML = `<h3>Product Added!</h3>`;
    toast.classList.add("toast-success");
  }

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 1000);
};
