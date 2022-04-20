import { Routes, Route } from "react-router-dom";
import Pocetna from "./Pages/Pocetna/Pocetna";
import Error from "./Pages/Error/Error";
import Prijava from "./Pages/Prijava/Prijava";
import Faq from "./Pages/Faq/Faq";
import NasiPartneri from "./Pages/NasiPartneri/NasiPartneri";
import ONama from "./Pages/ONama/ONama";
import Agenda from "./Pages/Agenda/Agenda";
import OProjektu from "./Pages/OProjektu/OProjektu";
import Generator from "./Pages/CVGenerator/Generator";
import OstaliPartneri from "./Pages/OstaliPartneri/OstaliPartneri";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/2022" element={<Pocetna />} />
        <Route path="/o-projektu/*" element={<OProjektu />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/o-nama" element={<ONama />} />
        <Route path="/nasi-partneri/*" element={<NasiPartneri />} />
        <Route
          path="/godisnji-naturalni-medijski"
          element={<OstaliPartneri />}
        />
        <Route path="/faq/*" element={<Faq />} />
        <Route path="/prijava" element={<Prijava />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
