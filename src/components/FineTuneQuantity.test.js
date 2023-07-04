import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import FineTuneQuantity from "./FineTuneQuantity";
import userEvent  from "@testing-library/user-event";


describe("testing basic functionality of fine tune quantity component", () => {
    const mockQuantity = 1;
    const mockDecreaseItemQuantity = jest.fn();
    const mockIncreaseItemQuantity = jest.fn();

    test("renders a p element with quantity passed", () => {
        render(<FineTuneQuantity quantity={mockQuantity} increaseItemQuantity={mockIncreaseItemQuantity} decreaseItemQuantity={mockDecreaseItemQuantity}/>);

        const quantityPara = screen.getByText("1");

        expect(quantityPara).toBeInTheDocument("1");
    });

    test("buttons are in the document", () => {
        render(<FineTuneQuantity quantity={mockQuantity} increaseItemQuantity={mockIncreaseItemQuantity} decreaseItemQuantity={mockDecreaseItemQuantity}/>);

        const increaseItemQuantityButton = screen.getByText("+");
        const decreaseItemQuantityButton = screen.getByText("-");

        expect(increaseItemQuantityButton).toBeInTheDocument();
        expect(decreaseItemQuantityButton).toBeInTheDocument();
    });

    test("clicking increase and decrease quantity button call the mock function", async () => {
        render(<FineTuneQuantity quantity={mockQuantity} increaseItemQuantity={mockIncreaseItemQuantity} decreaseItemQuantity={mockDecreaseItemQuantity}/>);

        const increaseItemQuantityButton = screen.getByText("+");
        const decreaseItemQuantityButton = screen.getByText("-");
        
        await userEvent.click(increaseItemQuantityButton);
        await userEvent.click(decreaseItemQuantityButton);

        expect(mockDecreaseItemQuantity).toHaveBeenCalled();
        expect(mockIncreaseItemQuantity).toHaveBeenCalled();

        await userEvent.click(increaseItemQuantityButton);
        await userEvent.click(decreaseItemQuantityButton);

        expect(mockDecreaseItemQuantity).toHaveBeenCalledTimes(2);
        expect(mockIncreaseItemQuantity).toHaveBeenCalledTimes(2);

    });
});