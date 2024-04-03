import { showProductContainer } from './homeProductCards';


const apiUrl = 'https://fakestoreapi.com/products';

export const getProductData = async () => {

    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data) {
        showProductContainer(data);
    }
    else {
        console.log("Error: Data not Fetched");
    }
}

