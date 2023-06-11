import React from "react";

import ProductCard from "../components/ProductCard";

const Products = ({ allProductsData, addToCartButtonClickHandler }) => {

    return (
        <>
            <h2>Products</h2>
            <div id="productGrid">
                {
                    allProductsData.error ? <h3>{allProductsData.error}</h3> :
                    Object.entries(allProductsData).map(([index, product]) => {
                        return <ProductCard key={`${product.title}${product.id}`} productInfo={product} addToCartButtonClickHandler={addToCartButtonClickHandler}/>;
                    })
                }
            </div>
        </>
    );
};

export default Products;