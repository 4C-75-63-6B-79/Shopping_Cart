import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductCard from "./ProductCard";
import userEvent  from "@testing-library/user-event";

// test("renders a div with className productCard", () => {

// });

describe("product card component renders basic info about the product", () => {

    const mockAddToCartButtonClickHandler = jest.fn();
    const mockProductInfo = { "title": "Product", "price": 100, "image": "#" , "description": "This is decription" };

    it("renders a div with className productCard", () => {    
        render(<ProductCard productInfo={mockProductInfo} addToCartButtonClickHandler={mockAddToCartButtonClickHandler} />);
    
        const divWithClassNameProductCard = screen.getByTitle(mockProductInfo.title);
    
        expect(divWithClassNameProductCard).toHaveClass("productCard");
    
    });

    it("renders a img with alt text as product title", () => {
        render(<ProductCard productInfo={mockProductInfo} addToCartButtonClickHandler={mockAddToCartButtonClickHandler} />);

        const img = screen.getByRole("img");

        expect(img).toBeTruthy();
        expect(img.alt).toBe(mockProductInfo.title);
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

    
    test("render the description of the product in p element", () => {
        render(<ProductCard productInfo={mockProductInfo} addToCartButtonClickHandler={mockAddToCartButtonClickHandler} />);

        const description = screen.queryByText(mockProductInfo.description);
        expect(description).toBeInTheDocument();
        expect(description.textContent).toBe(mockProductInfo.description);
    });
    

    it("renders 10 options starting from 1 to 10", () => {
        render(<ProductCard productInfo={mockProductInfo} addToCartButtonClickHandler={mockAddToCartButtonClickHandler} />);

        const options = screen.queryAllByRole("option");
        expect(options.length).toBe(10);
        expect(Array.from(options).every((option, index)=> Number(option.textContent) === index+1)).toBe(true);
    });
});

describe("clicking add to cart button calls the function addToCartButtonClickHandler with object which has attribute quantity", () => {
    const mockAddToCartButtonClickHandler = jest.fn();
    const mockProductInfo = { "title": "Product", "price": 100 };

    test("clicking add to cart button without selecting the quantity from the options add single product to cart", async() => {
        render(<ProductCard productInfo={mockProductInfo} addToCartButtonClickHandler={mockAddToCartButtonClickHandler} />);

        await userEvent.click(screen.getByText("add to cart"));
        expect(mockAddToCartButtonClickHandler).toHaveBeenCalled();
        expect(mockAddToCartButtonClickHandler).toHaveBeenCalledWith({ "price": 100, "quantity": 1, "title": "Product" });
    });

    test("selecting a option from quality list and then clicking add to cart button adds that quanity to cart", async() => {
        render(<ProductCard productInfo={mockProductInfo} addToCartButtonClickHandler={mockAddToCartButtonClickHandler} />);

        for(let index = 0; index<10; index++) {
            await userEvent.selectOptions(screen.getByRole("combobox"), [`${index+1}`]);
            expect(screen.getByRole("option", { name: `${index+1}` }).selected).toBe(true);
            await userEvent.click(screen.getByText("add to cart"));
            expect(mockAddToCartButtonClickHandler).toHaveBeenCalled();
            expect(mockAddToCartButtonClickHandler).toHaveBeenCalledWith({ "price": 100, "quantity": index+1, "title": "Product" });
        };        
    });
});