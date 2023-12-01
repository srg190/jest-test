import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Hello greet fron this side", () => {
  render(<Greet />);
  const getHello = screen.getByText("Hello");
  expect(getHello).toBeInTheDocument();
});