import { useContext } from "react";
import { CounterContext } from "../../context/counterContext";

const CountPage = () => {
  // here we refer to the context we created in the counterContext.js file
  // we can now use the count and setCount variables from the context
  // in this case we only need the count variable
  const { count } = useContext(CounterContext);

  return (
    <>
      <h2>Projects</h2>
      <p>Count is: {count}</p>
    </>
  );
};

export default CountPage;
