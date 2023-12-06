import { render, screen } from "@testing-library/react";
import Application from ".";

describe("Aplication", () => {
  test("Rendering Correctly", () => {
    render(<Application />);
    const nameElem = screen.getByRole("textbox");
    expect(nameElem).toBeInTheDocument();

    const jobLocationElements = screen.getByRole("combobox");
    // console.log(jobLocationElements)
    expect(jobLocationElements).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
