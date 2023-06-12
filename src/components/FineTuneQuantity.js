import React from "react";

export default function FineTuneQuantity({ quantity }) {

    return (
        <>
            <div class="quantity-tune">
                <button type="button">-</button>
                <p>{quantity}</p>
                <button type="button">+</button>
            </div>
        </>
    );
}