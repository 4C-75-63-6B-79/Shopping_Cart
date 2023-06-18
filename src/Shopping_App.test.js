import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShoppingApp from "./Shopping_App";

test("renders  correct heading Shopping thing", () => {
  render(<ShoppingApp />);
  const shoppingThingH1 = screen.getByRole("heading", { "level": 1, });
  expect(shoppingThingH1.textContent).toMatch("Shopping Thing");
});