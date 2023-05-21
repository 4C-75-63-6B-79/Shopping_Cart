export default function getProductData() {
    const data = fetch("https://fakestoreapi.com/products/1").then((response) => response.json());
    return  data;
}