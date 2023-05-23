import React from "react";

export default function ProductCard({ productInfo }) {

    function addToCardClicked(event) {
        console.log(event);
    }

    return (
        <>
            <div className="productCard">
                <h2>{productInfo.title}</h2>
                <h3>{productInfo.price}</h3>
                <button type="button" onClick={addToCardClicked}>add to cart</button>
            </div>
        </>
    );
}