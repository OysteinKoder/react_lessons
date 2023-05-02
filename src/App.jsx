import { CounterContext } from "./context/counterContext";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";

// Inside Routes is all the possible routes that the user can go to
// You can look at Routes as a box in the webpage that can only show one Route at a time
// When you click one of the Links in the Header, the Route that is inside the Link will be shown in the Routes box
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CounterContext.Provider value={{ count, setCount }}>
        <LandingPage />
      </CounterContext.Provider>
    </>
  );
}

export default App;
