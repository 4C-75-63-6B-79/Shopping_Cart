import React from "react";
import { useState } from "react";

import ProductCardCss from "./ProductCard.module.css";

export default function ProductCard({ productInfo, addToCartButtonClickHandler }) {

    const[quantity, setQuantity] = useState(productInfo.quantity || 1);

    function addToCartClicked(event) {
        addToCartButtonClickHandler({ ...productInfo, quantity: Number(quantity) });
    }

    function onChangeHandlerForSelect(event) {
        setQuantity(() => event.target.value);
    }

    return (
        <>
            <div title={productInfo.title} className={ProductCardCss.productCard}>
                <h2>{productInfo.title}</h2>
                <img className={ProductCardCss.productImage} src={productInfo.image} alt={productInfo.title}/>
                <h3>{productInfo.price}</h3>
                <label htmlFor="quantity-select">Quantity</label>
                <select name="quantity" id="quantity-select" onChange={onChangeHandlerForSelect} value={quantity}>
                    {
                        Array.from({ length: 10 }, () => null).map(( element, index ) => <option key={"quantityOptions"+index} value={index + 1} >{index + 1}</option>)                        
                    }
                </select>
                <p>
                    {productInfo.description}
                </p>
                <button type="button" onClick={addToCartClicked}>add to cart</button>
            </div>
        </>
    );
}