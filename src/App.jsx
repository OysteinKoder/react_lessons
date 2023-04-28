import "./App.css";
import reactLogo from "./assets/react.svg";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import PersonSelectorPage from "./pages/PersonSelectorPage";
import { HeadLine } from "./components/HeadLine";
import { Header } from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";
import { ColumnWrapper, RowWrapper } from "./components/flexDirections";
function App() {
  return (
    <>
      <Header>
        <ColumnWrapper>
          <section>
            <RowWrapper>
              <img src={reactLogo} alt="react logo" />
              <HeadLine>React Lessons</HeadLine>
              <img src={reactLogo} alt="react logo" />
            </RowWrapper>
          </section>
          <section>
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
      </Routes>
    </>
  );
}

export default App;
