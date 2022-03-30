import { Routes, Route } from "react-router-dom";
import Pocetna from "./Pages/Pocetna/Pocetna";
import Error from "./Pages/Error/Error";
// import ScrollToTop from "./Utilities/ScrollToTop/ScrollToTop";
import Prijava from "./Pages/Prijava/Prijava";
import Faq from "./Pages/Faq/Faq";
import NasiPartneri from "./Pages/NasiPartneri/NasiPartneri";
import ONama from "./Pages/ONama/ONama";
import Agenda from "./Pages/Agenda/Agenda";
import OProjektu from "./Pages/OProjektu/OProjektu";

function App() {
  return (
    <div className="App">
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/o-projektu" element={<OProjektu />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/o-nama" element={<ONama />} />
        <Route path="/nasi-partneri" element={<NasiPartneri />} />
        <Route path="/faqu" element={<Faq />} />
        <Route path="/prijava" element={<Prijava />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
