import { showProductContainer } from "./homeProductCards";

const url = "https://fakestoreapi.com/products";

// export const getProductData = async () => {
//   const response = await fetch(apiUrl);
//   const data = await response.json();
//   if (data) {
//     showProductContainer(data);
//   } else {
//     console.log("Error: Data not Fetched");
//   }
// };

export const getProductData = async () => {
  try {
    const response = await fetch(url);
    if (!response) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    const data = await response.json();
    if (data) {
      showProductContainer(data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
