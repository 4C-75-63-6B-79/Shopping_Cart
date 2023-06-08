import React from "react";

function ProductInCartCard ({ productInfo }) {

    return (
        <div key={productInfo.id + productInfo.title} className="cartProductCart">
            <h3>{productInfo.title}</h3>
            <p>Quantity: {productInfo.quantity}</p>
        </div>
    );
}

export default ProductInCartCard;