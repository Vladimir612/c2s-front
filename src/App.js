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
import Generator from "./Pages/CVGenerator/Generator";
import OstaliPartneri from "./Pages/OstaliPartneri/OstaliPartneri";

function App() {
<<<<<<< HEAD
    return (
        <div className="App">
            {/* <ScrollToTop /> */}
            <Routes>
                <Route path="/" element={<Pocetna />} />
                <Route path="/o-projektu" element={<OProjektu />} />
                <Route path="/agenda" element={<Agenda />} />
                <Route path="/o-nama" element={<ONama />} />
                <Route path="/nasi-partneri" element={<NasiPartneri />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/prijava" element={<Prijava />} />
                <Route path="/generator" element={<Generator />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
=======
  return (
    <div className="App">
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/o-projektu" element={<OProjektu />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/o-nama" element={<ONama />} />
        <Route path="/nasi-partneri/*" element={<NasiPartneri />} />
        <Route
          path="/godisnji-naturalni-medijski"
          element={<OstaliPartneri />}
        />
        <Route path="/faqu" element={<Faq />} />
        <Route path="/prijava" element={<Prijava />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
>>>>>>> 4923f216ccf5dc0eab757634c4c109e2ad2d597a
}

export default App;
