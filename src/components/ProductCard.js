import React from "react";
import { useState } from "react";

export default function ProductCard({ productInfo, addToCartButtonClickHandler }) {

    const[quantity, setQuantity] = useState(1);

    function addToCartClicked(event) {
        addToCartButtonClickHandler({ ...productInfo, quantity: quantity });
    }

    function onChangeHandlerForSelect(event) {
        setQuantity(() => event.target.value);
    }

    return (
        <>
            <div className="productCard">
                <h2>{productInfo.title}</h2>
                <h3>{productInfo.price}</h3>
                <label htmlFor="quantity-select">Quantity</label>
                <select name="quantity" id="quantity-select" onChange={onChangeHandlerForSelect} value={quantity}>
                    {
                        Array.from({ length: 10 }, () => null).map(( element, index ) => <option key={"quantityOptions"+index} value={index + 1} >{index + 1}</option>)                        
                    }
                </select>
                <button type="button" onClick={addToCartClicked}>add to cart</button>
            </div>
        </>
    );
}