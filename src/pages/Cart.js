import React from "react";
import ProductInCartCard from "../components/ProductInCartCard";

const Cart = ({ productsInCart }) => {
    return (
        <>
            <h2>Cart</h2>
            <div id="cartProductGrid">
                {
                    Object.keys(productsInCart).length === 0 ? <h3>Your cart is empty</h3> : Object.entries(productsInCart).map(([cartItemTitle, cartItemInfo]) => <ProductInCartCard key={`${cartItemTitle}${cartItemInfo.id}`} productInfo={cartItemInfo}/>)
                }
            </div>
        </>
    );
};

export default Cart;