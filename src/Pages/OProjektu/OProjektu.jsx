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
    const pocetakPocetna = useRef();
    useEffect(() => {
        scrollFunc(pocetakPocetna);
    }, []);
    const location = useLocation();
    let aktivnaStrana = -1;

    switch (location.pathname) {
        case "/nasi-partneri":
            aktivnaStrana = -1;
            break;
        case "/o-projektu/radionice":
            aktivnaStrana = 1;
            break;
        case "/o-projektu/panel":
            aktivnaStrana = 2;
            break;
        case "/o-projektu/speed-dating":
            aktivnaStrana = 3;
            break;
        case "/o-projektu/tech-challenge":
            aktivnaStrana = 4;
            break;
        default:
            aktivnaStrana = -1;
            break;
    }

    return (
        <>
            <div className="pocetak-pocetna" ref={pocetakPocetna}></div>
            <Nav />
            <div className="o-projektu-container">
                <div className="o-projektu-navigation">
                    <ul>
                        <li className={aktivnaStrana === 1 ? "active" : ""}>
                            <Link to="/o-projektu/radionice">RADIONICE</Link>
                        </li>
                        <li className={aktivnaStrana === 2 ? "active" : ""}>
                            <Link to="/o-projektu/panel">PANEL</Link>
                        </li>
                        <li className={aktivnaStrana === 3 ? "active" : ""}>
                            <Link to="/o-projektu/speed-dating">
                                SPEED DATING
                            </Link>
                        </li>
                        <li className={aktivnaStrana === 4 ? "active" : ""}>
                            <Link to="/o-projektu/tech-challenge">
                                TECH CHALLENGE
                            </Link>
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
                    <p>POGLEDAJ I OSTALE STRANE</p>
                    <div className="o-projektu-navigation">
                        <ul>
                            <li className={aktivnaStrana === 1 ? "active" : ""}>
                                <Link to="/o-projektu/radionice">
                                    RADIONICE
                                </Link>
                            </li>
                            <li className={aktivnaStrana === 2 ? "active" : ""}>
                                <Link to="/o-projektu/panel">PANEL</Link>
                            </li>
                            <li className={aktivnaStrana === 3 ? "active" : ""}>
                                <Link to="/o-projektu/speed-dating">
                                    SPEED DATING
                                </Link>
                            </li>
                            <li className={aktivnaStrana === 4 ? "active" : ""}>
                                <Link to="/o-projektu/tech-challenge">
                                    TECH CHALLENGE
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer pocetakPocetna={pocetakPocetna} />
        </>
    );
};

export default OProjektu;
