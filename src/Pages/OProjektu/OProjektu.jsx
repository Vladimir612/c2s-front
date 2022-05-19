import React, { useRef, useEffect } from "react";
import "./OProjektu.scss";
import Radionice from "./Radionice/Radionice";
import Panel from "./Panel/Panel";
import SpeedDating from "./SpeedDating/SpeedDating";
import TechChallenge from "./TechChallenge/TechChallenge";
import Footer from "../../Components/Footer/Footer";
import Nav from "./../../Components/Nav/Nav";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { scrollFunc } from "../../Components/Footer/Footer";

const OProjektu = () => {
  const pageStartRef = useRef();
  useEffect(() => {
    scrollFunc(pageStartRef);
  }, []);
  const location = useLocation();
  let activePage = -1;

  switch (location.pathname) {
    case "/nasi-partneri":
      activePage = -1;
      break;
    case "/o-projektu/radionice":
      activePage = 1;
      break;
    case "/o-projektu/panel":
      activePage = 2;
      break;
    case "/o-projektu/speed-dating":
      activePage = 3;
      break;
    case "/o-projektu/tech-challenge":
      activePage = 4;
      break;
    default:
      activePage = -1;
      break;
  }

  return (
    <>
      <div className="ref-start" ref={pageStartRef}></div>
      <Nav />
      <div className="o-projektu-container">
        <div className="o-projektu-navigation">
          <ul>
            <li className={activePage === 1 ? "active" : ""}>
              <Link to="/o-projektu/radionice">RADIONICE</Link>
            </li>
            <li className={activePage === 2 ? "active" : ""}>
              <Link to="/o-projektu/panel">PANEL DISKUSIJA</Link>
            </li>
            <li className={activePage === 3 ? "active" : ""}>
              <Link to="/o-projektu/speed-dating">SPEED DATING</Link>
            </li>
            <li className={activePage === 4 ? "active" : ""}>
              <Link to="/o-projektu/tech-challenge">TECH CHALLENGE</Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="radionice" element={<Radionice />} />
          <Route path="panel" element={<Panel />} />
          <Route path="speed-dating" element={<SpeedDating />} />
          <Route path="tech-challenge" element={<TechChallenge />} />
        </Routes>

        <div className="donji-nav">
          <p>POGLEDAJ I OSTALE DELOVE</p>
          <div className="o-projektu-navigation">
            <ul>
              <li className={activePage === 1 ? "active" : ""}>
                <Link to="/o-projektu/radionice">RADIONICE</Link>
              </li>
              <li className={activePage === 2 ? "active" : ""}>
                <Link to="/o-projektu/panel">PANEL DISKUSIJA</Link>
              </li>
              <li className={activePage === 3 ? "active" : ""}>
                <Link to="/o-projektu/speed-dating">SPEED DATING</Link>
              </li>
              <li className={activePage === 4 ? "active" : ""}>
                <Link to="/o-projektu/tech-challenge">TECH CHALLENGE</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer pageStartRef={pageStartRef} />
    </>
  );
};

export default OProjektu;
