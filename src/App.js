import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
// import Application from "./Pages/Application/Application";
import Faq from "./Pages/Faq/Faq";
import OurPartners from "./Pages/OurPartners/OurPartners";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Agenda from "./Pages/Agenda/Agenda";
import AboutProject from "./Pages/AboutProject/AboutProject";
import Generator from "./Pages/CVGenerator/Generator";
import OtherPartners from "./Pages/OtherPartners/OtherPartners";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2022" element={<Home />} />
        <Route path="/o-projektu/*" element={<AboutProject />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/o-nama" element={<AboutUs />} />
        <Route path="/nasi-partneri/*" element={<OurPartners />} />
        <Route
          path="/godisnji-naturalni-medijski"
          element={<OtherPartners />}
        />
        <Route path="/faq/*" element={<Faq />} />
        {/* <Route path="/prijava" element={<Application />} /> */}
        <Route path="/generator" element={<Generator />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
