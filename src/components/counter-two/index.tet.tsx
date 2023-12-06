// import { logRoles, render, screen } from "@testing-library/react";
// import Counter from ".";
// import userEvent from "@testing-library/user-event";

// describe("CounterTwo", () => {
//   test("render correctly", () => {
//     render(<Counter count={0} />);
//     const textElement = screen.getByText("Counter Two");
//     expect(textElement).toBeInTheDocument();
//   });

//   // Now handlers are called asynchronusly
//   test("HandlersCalled", async () => {
//     // screen.debug();
//     const user = userEvent.setup();
//     const incrementHandler = jest.fn();
//     const decrementHandler = jest.fn();
//     const view = render(
//       <Counter
//         count={0}
//         handleIncrement={incrementHandler}
//         handleDecrement={decrementHandler}
//       />
//     );
//     const incrementButton = screen.getByTestId("b1");
//     const decrementButton = screen.getByTestId("b2");
//     try {
//       await user.click(incrementButton);
//       await user.click(decrementButton);
//     } catch (error) {
//       console.log("error hsfgjkhs");
//     }
//     // screen.debug();
//     logRoles(view.container);
//     expect(incrementButton).toHaveBeenCalled();
//     expect(decrementButton).toHaveBeenCalled();
//     // screen.debug();
//   });
// });
