import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";

describe("testing home page", () => {
    const mockProductData = { "image": "#", "title": "This is a test product" };
    const mockProductDataError = { error: "Something went wrong" };

    test("renders home with product title and with product img", () => {
        render(<Home productData={mockProductData}/>);
        
        const homeH2 = screen.getByRole("heading", { "level":2 });
        const productTitleH3 = screen.getByRole("heading", { "level": 3 });
        const productImg = screen.getByRole("img");
        
        expect(homeH2.textContent).toMatch("Home");
        expect(productTitleH3.textContent).toMatch("This is a test product");
        expect(productImg).toBeInTheDocument();
        expect(productImg).toHaveAttribute("src", "#");
        expect(productImg).toHaveAttribute("alt", "This is a test product");
    });
    
    test("renders home with error if there is error in getting product data", () => {
        render(<Home productData={mockProductDataError}/>);
    
        const homeh3 = screen.getByRole("heading", { "level": 3 });
        const productImg = screen.queryByRole("img");
    
        expect(homeh3.textContent).toMatch("Something went wrong");
        expect(productImg).toBeNull();
    });

});

