import React from "react";
import ProductInCartCard from "../components/ProductInCartCard";

const Cart = ({ allProductsData, deleteFromCartButtonClickHandler, increaseItemQuantityInCartClickHandler, decreaseItemQuantityInCartClickHandler, totalPrice }) => {
    return (
        <>
            <h2>Cart</h2>
            <div id={"totalPrice-checkoutButton"}>
                <h4>Total Price: {totalPrice || 0}</h4>
                <button id="checkout">Checkout</button>
            </div>
            <div id="cartProductGrid">
                {
                    Object.entries(allProductsData).some(([index, productInfo]) => productInfo["inCart"]) 
                    ? Object.entries(allProductsData).filter(([index, productInfo]) => productInfo["inCart"]).map(([index, cartItemInfo]) => 
                        <ProductInCartCard 
                            key={`${cartItemInfo.title}${cartItemInfo.id}`} 
                            deleteFromCartButtonClickHandler={deleteFromCartButtonClickHandler} 
                            increaseItemQuantityInCartClickHandler={increaseItemQuantityInCartClickHandler} 
                            decreaseItemQuantityInCartClickHandler={decreaseItemQuantityInCartClickHandler} 
                            productInfo={cartItemInfo}
                        />
                    ) 
                    : <h3>Your cart is empty</h3>
                }
            </div>
        </>
    );
};

export default Cart;