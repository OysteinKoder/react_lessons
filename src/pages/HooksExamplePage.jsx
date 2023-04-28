import { useState } from "react";
import { RowWrapper } from "../components/flexDirections";

const HooksExamplePage = () => {
  // count can be looked at as the storage for the state, and is what we refer to when we want to use the state
  // setCount is the function that is used to change the state
  // useState(0) is the initial value of the state
  const [count, setCount] = useState(0);

  // increments the state by using setCount
  const increment = () => {
    setCount(count + 1);
  };
  // decrements the state by using setCount
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>useState Example</h2>
      <RowWrapper>
        <button onClick={decrement}>-</button>
        <p>Count is: {count}</p>
        <button onClick={increment}>+</button>
      </RowWrapper>
    </>
  );
};

export default HooksExamplePage;
