import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "./components/Button";
import { HeadLine } from "./components/HeadLine";
import { Header } from "./components/Header";
import { Container } from "./components/Container";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header>
        <img src={reactLogo} alt="react logo" />
        <HeadLine>React Lessons</HeadLine>
        <img src={reactLogo} alt="react logo" />
      </Header>
      <Container>
        <Button onClick={() => setCount((count) => count + 1)}>
          Count is: {count}
        </Button>
      </Container>
    </>
  );
}

export default App;
