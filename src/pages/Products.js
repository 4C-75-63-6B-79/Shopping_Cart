import React from "react";

import ProductCard from "../components/ProductCard";

const Products = ({ allProductsData, addToCartButtonClickHandler, categoryOnChangeHandler }) => {

    return (
        <>
            <div id="productsPageNavbar">
                <h2>Products</h2>
                <label htmlFor="category-select">Sort By Category: </label>
                <select name="category" id="category-select" onChange={(event) => categoryOnChangeHandler(event.target.value)} default="all">
                    <option value="all">All</option>
                    <option value="mensClothing">Men's Clothing</option>
                    <option value="womensClothing">Women's Clothing</option>
                    <option value="jewellery">Jewellery</option>
                    <option value="Electronics">Electronics</option>
                </select>
            </div>
            <div id="productGrid">
                {
                    allProductsData["loading"] === true ? "Loading..." : allProductsData.error ? <h3>{allProductsData.error}</h3> :
                    Object.entries(allProductsData).map(([index, product]) => {
                        return <ProductCard key={`${product.title}${product.id}`} productInfo={product} addToCartButtonClickHandler={addToCartButtonClickHandler}/>;
                    })
                }
            </div>
        </>
    );
};

export default Products;