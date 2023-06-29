import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductCard from "./ProductCard";

// test("renders a div with className productCard", () => {

// });

describe("product card component renders basic info about the product", () => {

    const mockAddToCartButtonClickHandler = jest.fn();
    const mockProductInfo = { "title": "Product", "price": 100 };

    it("renders a div with claaName productCard", () => {    
        render(<ProductCard productInfo={mockProductInfo} addToCartButtonClickHandler={mockAddToCartButtonClickHandler} />);
    
        const divWithClassNameProductCard = screen.getByTitle(mockProductInfo.title);
    
        expect(divWithClassNameProductCard).toHaveClass("productCard");
    
    });

    it("renders h2 with product title", () => {
        render(<ProductCard productInfo={mockProductInfo} addToCartButtonClickHandler={mockAddToCartButtonClickHandler} />);

        const h2 = screen.getByRole("heading", { "level": 2 });

        expect(h2.textContent).toMatch(mockProductInfo.title);
    });

    it("renders h3 with product price", () => {
        render(<ProductCard productInfo={mockProductInfo} addToCartButtonClickHandler={mockAddToCartButtonClickHandler} />);

        const h3 = screen.getByRole("heading", { "level": 3 });

        expect(h3.textContent).toMatch(""+mockProductInfo.price);
    });

    it("renders label with textcontent quantity and htmlFor attribute to be equal to quantity - select", () => {
        render(<ProductCard productInfo={mockProductInfo} addToCartButtonClickHandler={mockAddToCartButtonClickHandler} />);

        const label = screen.getByText("Quantity");
        
        expect(label).toBeInTheDocument();
        expect(label.htmlFor).toBe("quantity-select");
    });

    it("render select with name attribute as quantity", () => {
        render(<ProductCard productInfo={mockProductInfo} addToCartButtonClickHandler={mockAddToCartButtonClickHandler} />);

        const selectQuantity = screen.getByRole("combobox");

        expect(selectQuantity).toHaveAttribute("name");
        expect(selectQuantity.name).toMatch("quantity");
    });

    it("renders 10 options starting from 1 to 10", () => {
        render(<ProductCard productInfo={mockProductInfo} addToCartButtonClickHandler={mockAddToCartButtonClickHandler} />);

        const options = screen.queryAllByRole("option");
        expect(options.length).toBe(10);
        expect(Array.from(options).every((option, index)=> Number(option.textContent) === index+1)).toBe(true);
    });
});