import { useContext } from "react";
import { CounterContext } from "../context/counterContext";

const CountPage = () => {
  const { count } = useContext(CounterContext);

  return (
    <>
      <h2>Projects</h2>
      <p>Count is: {count}</p>
    </>
  );
};

export default CountPage;
