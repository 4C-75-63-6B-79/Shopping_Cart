import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import Navbar from "./Navbar";

test("renders a unordered list with class name navlinks and 3 links Home Products Cart 0", () => {
    const handleHomeLinkClicked = jest.fn();

    render(<Navbar onHomePageLinkClickedHandler={handleHomeLinkClicked} numberOfProductsInCart={0}/>, { wrapper: BrowserRouter });
    const navBarElement = screen.getByRole("list");
    const navlinks = screen.getAllByRole("listitem");

    expect(navBarElement).toBeInTheDocument();
    expect(navBarElement).toHaveClass("navlinks");
    expect(navlinks.length).toEqual(3);

    expect(navlinks[0].textContent).toEqual("Home");
    expect(navlinks[1].textContent).toEqual("Products");
    expect(navlinks[2].textContent).toEqual("Cart 0");
});

test("when home link clicked it calls a function", async () => {
    const handleHomeLinkClicked = jest.fn();

    render(<Navbar onHomePageLinkClickedHandler={handleHomeLinkClicked} numberOfProductsInCart={0}/>, { wrapper: BrowserRouter });
    
    const homeLink = screen.getByText("Home");
    await userEvent.click(homeLink);
    await userEvent.click(homeLink);
    expect(handleHomeLinkClicked).toHaveBeenCalled();
    expect(handleHomeLinkClicked).toHaveBeenCalledTimes(2);
});