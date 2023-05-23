import React from "react";

import ProductCard from "../components/ProductCard";

const Products = ({ productsData }) => {
    return (
        <>
            <h2>Products</h2>
            {
                Array.from(productsData).map((product) => {
                    return <ProductCard key={`${product.title}${product.id}`} productInfo={product}/>;
                })
            }
        </>
    );
};

export default Products;