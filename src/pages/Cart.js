import React from "react";
import ProductInCartCard from "../components/ProductInCartCard";

const Cart = ({ allProductsData, deleteFromCartButtonClickHandler, increaseItemQuanitytInCartClickHandler, decreaseItemQuantityInCartClickHandler }) => {
    return (
        <>
            <h2>Cart</h2>
            <div id="cartProductGrid">
                {
                    Object.entries(allProductsData).some(([index, productInfo]) => productInfo["inCart"]) 
                    ? Object.entries(allProductsData).filter(([index, productInfo]) => productInfo["inCart"]).map(([index, cartItemInfo]) => 
                        <ProductInCartCard 
                            key={`${cartItemInfo.title}${cartItemInfo.id}`} 
                            deleteFromCartButtonClickHandler={deleteFromCartButtonClickHandler} 
                            increaseItemQuanitytInCartClickHandler={increaseItemQuanitytInCartClickHandler} 
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