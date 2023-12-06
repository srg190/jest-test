interface CounterFunction {
  count: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
}

const Counter = (props: CounterFunction) => {
  return (
    <>
      <h1>Counter Two</h1>
      <div>{props.count}</div>
      {props.handleIncrement && (
        <button data-testId="b1" onClick={props.handleIncrement}>+</button>
      )}
      {props.handleDecrement && (
        <button data-testId="b2" onClick={props.handleDecrement}>-</button>
      )}
    </>
  );
};
export default Counter;
