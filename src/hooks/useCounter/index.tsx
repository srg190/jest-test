import { useState } from "react";

type Init = {
  initialCount?: number;
};

const useCounter = ({ initialCount = 0 }: Init = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};
export default useCounter;
