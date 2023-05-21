const getData = (function() {

    function getProductData(index = 1) {
        const data = fetch(`https://fakestoreapi.com/products/${index}`).then((response) => response.json());
        return  data;
    }
    
    function getAllProducts() {
        const data = fetch("https://fakestoreapi.com/products").then(response=>response.json());
        return data;    
    }

    return {
        getProductData,
        getAllProducts
    };

})();

const { getProductData, getAllProducts } = getData;

export { getProductData, getAllProducts };