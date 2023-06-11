import React from "react";

export default function ProductInCartCard ({ productInfo, deleteFromCartButtonClickHandler }) {

    function deleteFromCartClicked(event) {
        deleteFromCartButtonClickHandler(productInfo);
    }

    return (
        <div className="cartProductCard">
            <h3>{productInfo.title}</h3>
            <p>Quantity: {productInfo.quantity}</p>
            <button type="button" onClick={deleteFromCartClicked}>Delete</button>
        </div>
    );
}