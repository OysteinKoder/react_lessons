import "../App.css";
import reactLogo from "../assets/react.svg";
import AboutMePage from "./landingPage/AboutMePage";
import CountPage from "./landingPage/CountPage";
import PersonSelectorPage from "./landingPage/PersonSelectorPage";
import UseContextPage from "./landingPage/UseContextPage";
import { HeadLine } from "../components/HeadLine";
import { Header } from "../components/Header";
import { Routes, Route, Link } from "react-router-dom";
import { ColumnWrapper, RowWrapper } from "../components/flexDirections";

// Inside Routes is all the possible routes that the user can go to
// You can look at Routes as a box in the webpage that can only show one Route at a time
// When you click one of the Links in the Header, the Route that is inside the Link will be shown in the Routes box
function LandingPage() {
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
                    <Link to="/count">Count</Link>
                  </li>
                  <li>
                    <Link to="/pant">Pant</Link>
                  </li>
                  <li>
                    <Link to="/useContext">useContext</Link>
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
        <Route path="/count" element={<CountPage />} />
        <Route path="/pant" element={<PersonSelectorPage />} />
        <Route path="/useContext" element={<UseContextPage />} />
      </Routes>
    </>
  );
}

export default LandingPage;
