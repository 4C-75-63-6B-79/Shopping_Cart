import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Products from "./Products";

describe("testing the basic functionality of products page", () => {
    const mockAllProductsData = { 0: { id: 1, "title": "Product1", "quantity": "0", "inCart": false },
                                1: { id: 2, "title": "Product2", "quantity": "0", "inCart": false } };
    const mockErrorFetch = { error: "Something went wrong try refreshing the page." };
    const mockAddoCartButtonClickHandler = jest.fn();

    test("renders h2 with text products", () => {
        render(<Products allProductsData={mockAllProductsData} addToCartButtonClickHandler={mockAddoCartButtonClickHandler} />);

        const h2s = screen.queryAllByRole("heading", { level : 2 });

        expect(h2s[0].textContent).toBe("Products");
    });

    test("renders h3 with products data error if some error ocurred in fetching the data", () => {
        render(<Products allProductsData={mockErrorFetch} addToCartButtonClickHandler={mockAddoCartButtonClickHandler} />);

        const h3 = screen.queryByRole("heading" , { level: 3 });

        expect(h3).not.toBe(null);
        expect(h3.textContent).toBe(mockErrorFetch.error);
    });
});