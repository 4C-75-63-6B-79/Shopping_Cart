import React from "react";

export default function FineTuneQuantity({ quantity, increaseItemQuantity, decreaseItemQuantity }) {

    return (
        <>
            <div className="quantity-tune">
                <button type="button" onClick={decreaseItemQuantity}>-</button>
                <p>{quantity}</p>
                <button type="button" onClick={increaseItemQuantity}>+</button>
            </div>
        </>
    );
}