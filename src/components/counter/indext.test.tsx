import { screen, render, logRoles } from "@testing-library/react";
import Counter from ".";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("redere correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("render the count 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("render the count when it becomes 1", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("render the count reaise to 10", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const inputAmount = screen.getByRole("spinbutton");
    await user.type(inputAmount, "10");
    // logRoles(inputAmount);
    expect(inputAmount).toHaveValue(10);
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in right way", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const inputAmount = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(inputAmount).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
// keyboard Api's like :- clear (clear before insert)
