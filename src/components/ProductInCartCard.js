import React from "react";
import FineTuneQuantity from "./FineTuneQuantity";

export default function ProductInCartCard ({ productInfo, deleteFromCartButtonClickHandler, increaseItemQuanitytInCartClickHandler, decreaseItemQuantityInCartClickHandler }) {

    function deleteFromCartClicked(event) {
        deleteFromCartButtonClickHandler(productInfo);
    }

    return (
        <div className="cartProductCard">
            <h3>{productInfo.title}</h3>
            {/* <p>Quantity: {productInfo.quantity}</p> */}
            <FineTuneQuantity 
                quantity={productInfo.quantity}
                increaseItemQuanitytInCartClickHandler={increaseItemQuanitytInCartClickHandler}
                decreaseItemQuantityInCartClickHandler={decreaseItemQuantityInCartClickHandler}
            />
            <button type="button" onClick={deleteFromCartClicked}>Delete</button>
        </div>
    );
}