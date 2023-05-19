import { render, screen } from "@testing-library/react";
import ShoppingApp from "./Shopping_App";

test("renders learn react link", () => {
  render(<ShoppingApp />);
  const linkElement = screen.getByText(/shopping app/i);
  expect(linkElement).toBeInTheDocument();
});
