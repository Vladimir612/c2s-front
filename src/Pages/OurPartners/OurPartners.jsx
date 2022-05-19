import React, { useState } from "react";
import primeVideo from "../../Assets/Videos/prime.webm";
import adactaVideo from "../../Assets/Videos/adacta.webm";
import semosVideo from "../../Assets/Videos/semos.webm";
import eyeseeVideo from "../../Assets/Videos/eyesee.webm";
import raiffeisenVideo from "../../Assets/Videos/raiffeisen.webm";
import a1Video from "../../Assets/Videos/a1.webm";

//loading slike
import primeLoading from "../../Assets/Images/primeLoading.jpg";
import adactaLoading from "../../Assets/Images/adactaLoading.jpg";
import semosLoading from "../../Assets/Images/semosLoading.jpg";
import eyeseeLoading from "../../Assets/Images/eyeseeLoading.jpg";
import raiffeisenLoading from "../../Assets/Images/raiffeisenLoading.jpg";
import a1Loading from "../../Assets/Images/a1Loading.jpg";

import "./OurPartners.scss";
import Nav from "../../Components/Nav/Nav";
import { Route, Routes, useLocation, Link } from "react-router-dom";
import PartnerVideo from "./PartnerVideo";
import { employeesArr, partnerTexts } from "./ourPartnersData";

const OurPartners = () => {
  const location = useLocation();
  let activePage = -1;

  switch (location.pathname) {
    case "/nasi-partneri":
      activePage = -1;
      break;
    case "/nasi-partneri/adacta":
      activePage = 1;
      break;
    case "/nasi-partneri/eyesee":
      activePage = 2;
      break;
    case "/nasi-partneri/prime-software":
      activePage = 3;
      break;
    case "/nasi-partneri/semos-education":
      activePage = 4;
      break;
    case "/nasi-partneri/raiffeisen":
      activePage = 5;
      break;
    case "/nasi-partneri/a1":
      activePage = 6;
      break;
    default:
      activePage = -1;
      break;
  }

  const [visibleEmployee, setVisibleEmployee] = useState(0);

  return (
    <>
      <Nav />
      <div className="partners-nav">
        <ul>
          <Link to="adacta" onClick={() => setVisibleEmployee(0)}>
            <li className={activePage === 1 ? "active" : ""}>Adacta</li>
          </Link>
          <Link to="eyesee" onClick={() => setVisibleEmployee(0)}>
            <li className={activePage === 2 ? "active" : ""}>EyeSee</li>
          </Link>
          <Link to="prime-software" onClick={() => setVisibleEmployee(0)}>
            <li className={activePage === 3 ? "active" : ""}>Prime software</li>
          </Link>
          <Link to="semos-education" onClick={() => setVisibleEmployee(0)}>
            <li className={activePage === 4 ? "active" : ""}>
              Semos Education
            </li>
          </Link>
          <Link to="raiffeisen" onClick={() => setVisibleEmployee(0)}>
            <li className={activePage === 5 ? "active" : ""}>
              Raiffeisen banka
            </li>
          </Link>
          <Link to="a1" onClick={() => setVisibleEmployee(0)}>
            <li className={activePage === 6 ? "active" : ""}>A1</li>
          </Link>
        </ul>
      </div>
      <Routes>
        <Route
          path="adacta"
          element={
            <PartnerVideo
              video={adactaVideo}
              employee={employeesArr[0]}
              prevLink="/nasi-partneri/a1"
              nextLink="/nasi-partneri/eyesee"
              partnerName="Adacta"
              aboutPartner={partnerTexts[0]}
              poster={adactaLoading}
              visibleEmployee={visibleEmployee}
              setVisibleEmployee={setVisibleEmployee}
            />
          }
        />

        <Route
          path="eyesee"
          element={
            <PartnerVideo
              video={eyeseeVideo}
              employee={employeesArr[1]}
              prevLink="/nasi-partneri/adacta"
              nextLink="/nasi-partneri/prime-software"
              partnerName="EyeSee"
              aboutPartner={partnerTexts[1]}
              poster={eyeseeLoading}
              visibleEmployee={visibleEmployee}
              setVisibleEmployee={setVisibleEmployee}
            />
          }
        />
        <Route
          path="prime-software"
          element={
            <PartnerVideo
              video={primeVideo}
              employee={employeesArr[2]}
              prevLink="/nasi-partneri/eyesee"
              nextLink="/nasi-partneri/semos-education"
              partnerName="prime software"
              aboutPartner={partnerTexts[2]}
              poster={primeLoading}
              visibleEmployee={visibleEmployee}
              setVisibleEmployee={setVisibleEmployee}
            />
          }
        />
        <Route
          path="semos-education"
          element={
            <PartnerVideo
              video={semosVideo}
              employee={employeesArr[3]}
              prevLink="/nasi-partneri/prime-software"
              nextLink="/nasi-partneri/raiffeisen"
              partnerName="Semos Education"
              aboutPartner={partnerTexts[3]}
              poster={semosLoading}
              visibleEmployee={visibleEmployee}
              setVisibleEmployee={setVisibleEmployee}
            />
          }
        />
        <Route
          path="raiffeisen"
          element={
            <PartnerVideo
              video={raiffeisenVideo}
              employee={employeesArr[4]}
              prevLink="/nasi-partneri/semos-education"
              nextLink="/nasi-partneri/a1"
              partnerName="Raiffeisen banka"
              aboutPartner={partnerTexts[4]}
              poster={raiffeisenLoading}
              visibleEmployee={visibleEmployee}
              setVisibleEmployee={setVisibleEmployee}
            />
          }
        />
        <Route
          path="a1"
          element={
            <PartnerVideo
              video={a1Video}
              employee={employeesArr[5]}
              prevLink="/nasi-partneri/raiffeisen"
              nextLink="/nasi-partneri/adacta"
              partnerName="A1"
              aboutPartner={partnerTexts[5]}
              poster={a1Loading}
              visibleEmployee={visibleEmployee}
              setVisibleEmployee={setVisibleEmployee}
            />
          }
        />
      </Routes>
    </>
  );
};

export default OurPartners;
