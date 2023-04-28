import { useContext } from "react";
import { RowWrapper } from "../components/flexDirections";
import { CounterContext } from "../context/counterContext";

const UseContextPage = () => {
  const { count, setCount } = useContext(CounterContext);

  const increment = () => {
    setCount(count + 1);
  };

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

export default UseContextPage;
