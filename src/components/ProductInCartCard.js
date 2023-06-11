import React from "react";

export default function ProductInCartCard ({ productInfo }) {

    return (
        <div className="cartProductCard">
            <h3>{productInfo.title}</h3>
            <p>Quantity: {productInfo.quantity}</p>
            <button type="button">Delete</button>
        </div>
    );
}