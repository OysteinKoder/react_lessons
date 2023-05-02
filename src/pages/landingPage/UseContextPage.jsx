import { useContext } from "react";
import { RowWrapper } from "../../components/flexDirections";
import { CounterContext } from "../../context/counterContext";

const UseContextPage = () => {
  // here we refer to the context we created in the counterContext.js file
  // we can now use the count and setCount variables from the context
  // those two is passed down from the provider in App.js
  const { count, setCount } = useContext(CounterContext);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>useContext Example</h2>
      <RowWrapper>
        <button onClick={decrement}>-</button>
        <p>Count is: {count}</p>
        <button onClick={increment}>+</button>
      </RowWrapper>
    </>
  );
};

export default UseContextPage;
