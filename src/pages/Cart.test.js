import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Cart from "./Cart";

describe("testing basic functionality of cart page", () => {
    const mockAllProductInfo = { 0: { id: 1, "title": "Product", "quantity": "0", "inCart": false } };
    const productNoInCart = { 0: { id: 1, "title": "Product", "quantity": "0", "inCart": false } };
    const productInCart = { 0: { id: 1, "title": "Product1", "quantity": "4", "inCart": true },
                            1: { id: 2, "title": "Product2", "quantity": "3", "inCart": true } };
    const mockIncreaseItemQuantityInCartClickHandler = jest.fn();
    const mockDecreaseItemQuantityInCartClickHandler = jest.fn();
    const mockDeleteFromCartButtonClickHandler = jest.fn();


    test("renders h2 heading with text cart", () => {
        render(<Cart allProductsData={mockAllProductInfo} 
            deleteFromCartButtonClickHandler={mockDeleteFromCartButtonClickHandler} 
            decreaseItemQuantityInCartClickHandler={mockDecreaseItemQuantityInCartClickHandler}
            increaseItemQuantityInCartClickHandler={mockIncreaseItemQuantityInCartClickHandler}/>);

        const h2 = screen.getByRole("heading", { level: 2 });

        expect(h2.textContent).toBe("Cart");
    });

    test("renders a button with text content as checkout", () => {
        render(<Cart allProductsData={mockAllProductInfo} 
            deleteFromCartButtonClickHandler={mockDeleteFromCartButtonClickHandler} 
            decreaseItemQuantityInCartClickHandler={mockDecreaseItemQuantityInCartClickHandler}
            increaseItemQuantityInCartClickHandler={mockIncreaseItemQuantityInCartClickHandler}/>);

        const checkOutButton = screen.queryByText("Checkout");

        expect(checkOutButton).not.toBe(null);
        expect(checkOutButton).toHaveAttribute("id");
    });


    test("renders h3 with test no item in cart when cart is empty", () => {
        render(<Cart allProductsData={productNoInCart} 
            deleteFromCartButtonClickHandler={mockDeleteFromCartButtonClickHandler} 
            decreaseItemQuantityInCartClickHandler={mockDecreaseItemQuantityInCartClickHandler}
            increaseItemQuantityInCartClickHandler={mockIncreaseItemQuantityInCartClickHandler}/>);

        const h3 = screen.getByRole("heading", { level: 3 });

        expect(h3.textContent).toBe("Your cart is empty");
    });

    test("does not render h3 with text content that your cart is empty when products in cart", () => {
        render(<Cart allProductsData={productInCart} 
            deleteFromCartButtonClickHandler={mockDeleteFromCartButtonClickHandler} 
            decreaseItemQuantityInCartClickHandler={mockDecreaseItemQuantityInCartClickHandler}
            increaseItemQuantityInCartClickHandler={mockIncreaseItemQuantityInCartClickHandler}/>);

        const h3YourCartEmpty = screen.queryByText("Your cart is empty");

        expect(h3YourCartEmpty).toBe(null);
    });

    test("renders 2 h3 with text content when 2 items in cart", () => {
        render(<Cart allProductsData={productInCart} 
            deleteFromCartButtonClickHandler={mockDeleteFromCartButtonClickHandler} 
            decreaseItemQuantityInCartClickHandler={mockDecreaseItemQuantityInCartClickHandler}
            increaseItemQuantityInCartClickHandler={mockIncreaseItemQuantityInCartClickHandler}/>);

        const allH3 = screen.queryAllByRole("heading", { level: 3 });

        expect(allH3.length).toBe(Object.entries(productInCart).length);
        for( let i=0; i<Object.entries(productInCart).length; i++){
            expect(allH3[i].textContent).toBe(`Product${i+1}`);
        }
    });
});