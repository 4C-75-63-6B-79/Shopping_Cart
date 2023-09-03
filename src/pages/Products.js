import React from "react";

import ProductCard from "../components/ProductCard";

import ProductsCss from "./Products.module.css";

const Products = ({ allProductsData, addToCartButtonClickHandler, currentCategory, categoryOnChangeHandler }) => {

    return (
        <>
            <div id={ProductsCss.productPageNavbar}>
                <h2 id={ProductsCss.productPageNavbarHeading}>Products</h2>
                <label id={ProductsCss.productCategoryLabel} htmlFor="category-select">Sort By Category: </label>
                <select name="category" id={ProductsCss.productCategorySelect} onChange={(event) => categoryOnChangeHandler(event.target.value)} value={currentCategory}>
                    <option value="all">All</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="jewelery">Jewellery</option>
                    <option value="electronics">Electronics</option>
                </select>
            </div>
            <div id={ProductsCss.productsGrid}>
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