import reactLogo from "./assets/react.svg";
import reactIcon from "./assets/reactIcon.svg";
import viteLogo from "./assets/vitejs.svg";
import "./App.css";
import { HeadLine } from "./components/HeadLine";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
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
        <Card
          title="React Is Awesome"
          img={reactIcon}
          text="React is a js liberary that adds functionality and cool stuff"
        />
      </Container>
    </>
  );
}

export default App;
