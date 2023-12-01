import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("greet", () => {
  test("Hello greet from this side", () => {
    render(<Greet />);
    const getHello = screen.getByText("Hello");
    expect(getHello).toBeInTheDocument();
  });

  test("Hello greet from this side", () => {
    render(<Greet name="Krishna" />);
    const getHello = screen.getByText("Hello Krishna");
    expect(getHello).toBeInTheDocument();
  });
});
