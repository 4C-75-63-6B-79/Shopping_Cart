import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductInCartCard from "./ProductInCartCard";
import userEvent  from "@testing-library/user-event";

describe("Testing basic fucntionality of the componet Product In Cart Card", () => {
    const mockProductInfo = { "title": "Product", "quantity": "4" };
    const mockIncreaseItemQuantityInCartClickHandler = jest.fn();
    const mockDecreaseItemQuantityInCartClickHandler = jest.fn();
    const mockDeleteFromCartButtonClickHandler = jest.fn();

    test("render product title", () => {
        render(<ProductInCartCard productInfo={mockProductInfo} 
            increaseItemQuantityInCartClickHandler={mockIncreaseItemQuantityInCartClickHandler} 
            decreaseItemQuantityInCartClickHandler={mockDecreaseItemQuantityInCartClickHandler} 
            deleteFromCartButtonClickHandler={mockDeleteFromCartButtonClickHandler}/>);

        const h3 = screen.getByRole("heading", { "level": 3 });

        expect(h3.textContent).toBe(mockProductInfo["title"]);
    });

    test("renders a button with text delete", () => {
        render(<ProductInCartCard productInfo={mockProductInfo} 
            increaseItemQuantityInCartClickHandler={mockIncreaseItemQuantityInCartClickHandler} 
            decreaseItemQuantityInCartClickHandler={mockDecreaseItemQuantityInCartClickHandler} 
            deleteFromCartButtonClickHandler={mockDeleteFromCartButtonClickHandler}/>);

        const deleteButton = screen.getByText("Delete");

        expect(deleteButton).toBeInTheDocument();
    });

    test("on clicking delete button delete button click handler function is called with product info as argument", async () => {
        render(<ProductInCartCard productInfo={mockProductInfo} 
            increaseItemQuantityInCartClickHandler={mockIncreaseItemQuantityInCartClickHandler} 
            decreaseItemQuantityInCartClickHandler={mockDecreaseItemQuantityInCartClickHandler} 
            deleteFromCartButtonClickHandler={mockDeleteFromCartButtonClickHandler}/>);
        
        const deleteButton = screen.getByText("Delete");

        await userEvent.click(deleteButton);

        expect(mockDeleteFromCartButtonClickHandler).toHaveBeenCalled();
        expect(mockDeleteFromCartButtonClickHandler).toHaveBeenCalledWith(mockProductInfo);

        await userEvent.click(deleteButton);
        expect(mockDeleteFromCartButtonClickHandler).toHaveBeenCalledTimes(2);
    });

});
