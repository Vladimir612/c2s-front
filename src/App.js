import React from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Pocetna from "./Pages/Pocetna/Pocetna";
import Error from "./Pages/Error";
import ScrollToTop from "./Utilities/ScrollToTop/ScrollToTop";
import Prijava from "./Pages/Prijava/Prijava";
import Faqu from "./Pages/Faqu/Faqu";
import NasiPartneri from "./Pages/NasiPartneri/NasiPartneri";
import ONama from "./Pages/ONama/ONama";
import Agenda from "./Pages/Agenda/Agenda";
import OProjektu from "./Pages/OProjektu/OProjektu";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact component={Pocetna}></Route>
        <Route path="/o-projektu" exact component={OProjektu}></Route>
        <Route path="/agenda" exact component={Agenda}></Route>
        <Route path="/o-nama" exact component={ONama}></Route>
        <Route path="/nasi-partneri" exact component={NasiPartneri}></Route>
        <Route path="/faqu" exact component={Faqu}></Route>
        <Route path="/prijava" exact component={Prijava}></Route>
        <Route path="*" component={Error}></Route>
      </Routes>
    </>
  );
};

export default App;
