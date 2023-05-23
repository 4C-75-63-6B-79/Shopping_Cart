import React from "react";

import ProductCard from "../components/ProductCard";

const Products = ({ productsData }) => {
    return (
        <>
            <h2>Products</h2>
            <div id="productGrid">
                {
                    Array.from(productsData).map((product) => {
                        return <ProductCard key={`${product.title}${product.id}`} productInfo={product}/>;
                    })
                }
            </div>
        </>
    );
};

export default Products;