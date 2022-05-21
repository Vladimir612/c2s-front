import React from "react";
import "./Panel.scss";

import { panelParticipants } from "./panelData";

import panelSlika from "../../../Assets/Images/panel.jpg";
import PanelParticipant from "./PanelParticipant";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Panel = () => {
  return (
    <div className="panel-container">
      <div className="about-project-intro">
        <div className="photo">
          <LazyLoadImage effect="blur" src={panelSlika} alt="Panel" />
        </div>
        <div className="text">
          <h2>TEMA PANEL DISKUSIJE</h2>
          <p>
            Panel diskusija <i>Budi i ti deo uspešnih priča</i> održaće se 14.
            maja na Fakultetu organizacionih nauka i okupiće stručnjake
            zaposlene u kompanijama: A1, Adacta, Eyesee, Prime Software,
            Raiffeisen bank i Semos Education. O svom karijernom putu i
            pozicijama na kojima trenutno rade govoriće Ana Nikolić iz kompanije
            A1, Ivan Divić iz kompanije Adacta, Vuk Pašković iz kompanije
            Eyesee, Goran Vidić iz kompanije Prime Software i Marija Milanović
            iz kompanije Semos Education. Ukoliko želiš da čuješ više o tome
            kako funkcioniše rad u velikim kompanijama, šta je sve potrebno za
            rad u njima i koje su tajne za postizanje uspeha, prijavi se za
            panel diskusiju i saznaj kako da kreiraš svoju uspešnu priču!
          </p>
        </div>
      </div>
      <div className="panel-participants">
        {panelParticipants.map((participant, index) => {
          return <PanelParticipant participant={participant} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Panel;
