const getData = (function() {

    function getProductData(index = 1) {
        const data = fetch(`https://fakestoreapi.com/products/${index}`).then((response) => response.json());
        return  data;
    }
    
    function getAllProductsData() {
        const data = fetch("https://fakestoreapi.com/products").then(response=>response.json());
        return data;    
    }

    return {
        getProductData,
        getAllProductsData
    };

})();

const { getProductData, getAllProductsData } = getData;

export { getProductData, getAllProductsData };