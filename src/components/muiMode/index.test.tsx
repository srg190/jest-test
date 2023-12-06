import { render, screen } from "../../test-utils";
import MuiMode from ".";

// setup for single wrapper across all components
describe("MuiMode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("light mode");
  });
});

// now in every render it will render all component uder one wrapper hood
