import React from "react";

export default function ProductCard({ productInfo, addToCartButtonClickHandler }) {

    function addToCartClicked(event) {
        addToCartButtonClickHandler(productInfo);
    }

    return (
        <>
            <div className="productCard">
                <h2>{productInfo.title}</h2>
                <h3>{productInfo.price}</h3>
                <button type="button" onClick={addToCartClicked}>add to cart</button>
            </div>
        </>
    );
}