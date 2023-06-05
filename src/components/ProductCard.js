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
                <label htmlFor="quantity-select">Quantity</label>
                <select name="quantity" id="quantity-select">
                    {
                        Array.from({ length: 10 }, () => null).map(( element, index ) => <option key={"quantityOptions"+index} value={index + 1}>{index + 1}</option>)                        
                    }
                </select>
                <button type="button" onClick={addToCartClicked}>add to cart</button>
            </div>
        </>
    );
}