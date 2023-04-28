import "./App.css";
import reactLogo from "./assets/react.svg";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import PersonSelectorPage from "./pages/PersonSelectorPage";
import UseEffectPage from "./pages/UseEffectPage";
import { HeadLine } from "./components/HeadLine";
import { Header } from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";
import { ColumnWrapper, RowWrapper } from "./components/flexDirections";

// Inside Routes is all the possible routes that the user can go to
// You can look at Routes as a box in the webpage that can only show one Route at a time
// When you click one of the Links in the Header, the Route that is inside the Link will be shown in the Routes box
function App() {
  return (
    <>
      <Header>
        <ColumnWrapper>
          <section aria-label="icon and headline">
            <RowWrapper>
              <img src={reactLogo} alt="react logo" />
              <HeadLine>React Lessons</HeadLine>
              <img src={reactLogo} alt="react logo" />
            </RowWrapper>
          </section>
          <section aria-label="page navigation">
            <nav>
              <ul>
                <RowWrapper>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/pant">Pant</Link>
                  </li>
                  <li>
                    <Link to="/hooks">useEffect</Link>
                  </li>
                </RowWrapper>
              </ul>
            </nav>
          </section>
        </ColumnWrapper>
      </Header>
      <Routes>
        <Route path="*" element={<AboutMePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/pant" element={<PersonSelectorPage />} />
        <Route path="/hooks" element={<UseEffectPage />} />
      </Routes>
    </>
  );
}

export default App;
