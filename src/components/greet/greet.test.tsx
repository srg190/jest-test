import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe.only("greet", () => {
  test("Hello greet from this side", () => {
    render(<Greet />);
    const getHello = screen.getByText("Hello");
    expect(getHello).toBeInTheDocument();
  });
  describe("Nested", () => {
    test("Hello greet from this side", () => {
      render(<Greet name="Krishna" />);
      const getHello = screen.getByText("Hello Krishna");
      expect(getHello).toBeInTheDocument();
    });
  });
});
