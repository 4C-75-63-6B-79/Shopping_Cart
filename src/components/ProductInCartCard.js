import React from "react";
import FineTuneQuantity from "./FineTuneQuantity";

export default function ProductInCartCard ({ productInfo, deleteFromCartButtonClickHandler, increaseItemQuantityInCartClickHandler, decreaseItemQuantityInCartClickHandler }) {

    function deleteFromCartClicked(event) {
        deleteFromCartButtonClickHandler(productInfo);
    }

    function decreaseItemQuantity() {
        decreaseItemQuantityInCartClickHandler(productInfo);
    }

    function increaseItemQuantity() {
        increaseItemQuantityInCartClickHandler(productInfo);
    }

    return (
        <div className="cartProductCard">
            <h3>{productInfo.title}</h3>
            <img src={productInfo.image} alt={productInfo.title}/>
            <FineTuneQuantity 
                quantity={productInfo.quantity}
                increaseItemQuantity={increaseItemQuantity}
                decreaseItemQuantity={decreaseItemQuantity}
            />
            <button type="button" onClick={deleteFromCartClicked}>Delete</button>
        </div>
    );
}