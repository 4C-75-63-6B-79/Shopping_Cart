import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Products from "./Products";
import userEvent  from "@testing-library/user-event";

describe("testing the basic functionality of products page", () => {
    const mockAllProductsData = { 0: { id: 1, "title": "Product1", "quantity": "0", "inCart": false },
                                1: { id: 2, "title": "Product2", "quantity": "0", "inCart": false } };
    const mockErrorFetch = { error: "Something went wrong try refreshing the page." };
    const mockAddoCartButtonClickHandler = jest.fn();
    const mockSortByCategoryButtonClickHandler = jest.fn();

    test("renders h2 with text products", () => {
        render(<Products allProductsData={mockAllProductsData} addToCartButtonClickHandler={mockAddoCartButtonClickHandler} categoryOnChangeHandler={mockSortByCategoryButtonClickHandler}/>);

        const h2s = screen.queryAllByRole("heading", { level : 2 });

        expect(h2s[0].textContent).toBe("Products");
    });

    test("renders h3 with products data error if some error ocurred in fetching the data", () => {
        render(<Products allProductsData={mockErrorFetch} addToCartButtonClickHandler={mockAddoCartButtonClickHandler} categoryOnChangeHandler={mockSortByCategoryButtonClickHandler}/>);

        const h3 = screen.queryByRole("heading" , { level: 3 });

        expect(h3).not.toBe(null);
        expect(h3.textContent).toBe(mockErrorFetch.error);
    });

    test("renders a label with textcontent as sort by category and html for attribute to be equal to cateogory-select", () => {
        render(<Products allProductsData={mockAllProductsData} addToCartButtonClickHandler={mockAddoCartButtonClickHandler} categoryOnChangeHandler={mockSortByCategoryButtonClickHandler} />);

        const label = screen.queryByText("Sort By Category:", { exact: true });

        expect(label).toBeInTheDocument();
        expect(label.htmlFor).toBe("category-select");
    });

    test("render select with name attribute as category", () => {
        render(<Products allProductsData={{ "loading": true }} addToCartButtonClickHandler={mockAddoCartButtonClickHandler} categoryOnChangeHandler={mockSortByCategoryButtonClickHandler}/>);

        const selectCategory = screen.getByRole("combobox");

        expect(selectCategory).toHaveAttribute("name");
        expect(selectCategory.name).toMatch("category");
    });

    test("in total five options for category are there and on changing the category a function is called", async () => {
        render(<Products allProductsData={{ "loading": true }} addToCartButtonClickHandler={mockAddoCartButtonClickHandler} categoryOnChangeHandler={mockSortByCategoryButtonClickHandler}/>);
        
        const categoryOptions = screen.queryAllByRole("option");
        
        expect(categoryOptions.length).toBe(5);

        for(const option of categoryOptions) {
            await userEvent.selectOptions(screen.getByRole("combobox"), [option]);
            expect(option.selected).toBe(true);
            expect(mockSortByCategoryButtonClickHandler).toHaveBeenCalled();
            expect(mockSortByCategoryButtonClickHandler).toHaveBeenCalledWith(option.value);
        }        
    });
});     