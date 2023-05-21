export default function getProductData(index = 1) {
    const data = fetch(`https://fakestoreapi.com/products/1${index}`).then((response) => response.json());
    return  data;
}