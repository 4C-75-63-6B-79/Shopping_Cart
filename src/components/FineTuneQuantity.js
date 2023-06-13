import React from "react";

export default function FineTuneQuantity({ quantity, increaseItemQuanitytInCartClickHandler, decreaseItemQuantityInCartClickHandler }) {

    return (
        <>
            <div className="quantity-tune">
                <button type="button" onClick={decreaseItemQuantityInCartClickHandler}>-</button>
                <p>{quantity}</p>
                <button type="button" onClick={increaseItemQuanitytInCartClickHandler}>+</button>
            </div>
        </>
    );
}