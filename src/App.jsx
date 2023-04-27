import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vitejs.svg";
import "./App.css";
import { Button } from "./components/Button";
import { HeadLine } from "./components/HeadLine";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import Paragraph from "./components/paragraph/Paragraph";
import Card from "./components/card/Card";

function App() {
  return (
    <>
      <Header>
        <img src={reactLogo} alt="react logo" />
        <HeadLine>React Lessons</HeadLine>
        <img src={reactLogo} alt="react logo" />
      </Header>
      <Container>
        <Card
          title="Built Using Vite"
          img={viteLogo}
          text="This project is built using vite"
        />
      </Container>
    </>
  );
}

export default App;
