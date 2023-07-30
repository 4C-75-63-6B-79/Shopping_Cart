import React from "react";
import FineTuneQuantityCss from "./FineTuneQuantity.module.css";

export default function FineTuneQuantity({ quantity, increaseItemQuantity, decreaseItemQuantity }) {

    return (
        <>
            <div className={FineTuneQuantityCss.quantityTune}>
                <button className={FineTuneQuantityCss.minusBtn} type="button" onClick={decreaseItemQuantity}>-</button>
                <p className={FineTuneQuantityCss.qtyP}>{quantity}</p>
                <button className={FineTuneQuantityCss.addBtn} type="button" onClick={increaseItemQuantity}>+</button>
            </div>
        </>
    );
}