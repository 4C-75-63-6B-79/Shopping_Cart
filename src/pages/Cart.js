import React from "react";
import ProductInCartCard from "../components/ProductInCartCard";

const Cart = ({ allProductsData, deleteFromCartButtonClickHandler, increaseItemQuantityInCartClickHandler, decreaseItemQuantityInCartClickHandler }) => {
    return (
        <>
            <div id={"heading-checkoutButton"}>
                <h2>Cart</h2>
                <button>Checkout</button>
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