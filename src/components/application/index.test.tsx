import { render, screen } from "@testing-library/react";
import Application from ".";

describe("Aplication", () => {
  test("Rendering Correctly", () => {
    render(<Application />);
    const headingElement = screen.getByRole("heading", {
      name: "Job Application Form", // we can use level: 1, 2, 3, ... to all nested
    });
    expect(headingElement).toBeInTheDocument();
    //If having multiple elements with same role
    const nameElem = screen.getByRole("textbox", {
      name: "Name", // name is actually a string between div
    });
    expect(nameElem).toBeInTheDocument();

    const jobLocationElements = screen.getByRole("combobox");
    // console.log(jobLocationElements)
    expect(jobLocationElements).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});

// we can use placeholder attribute, like in input element in html 
// getByText -> for all elements that has text nodes ex, <p>, <span>, <div>