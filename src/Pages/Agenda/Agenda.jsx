import React, { useRef } from "react";
import Footer from "../../Components/Footer/Footer";
import Nav from "./../../Components/Nav/Nav";
import "./Agenda.scss";
import AgendaItem from "./AgendaItem";
import agendaLopta from "../../Assets/Images/agenda-lopta.svg";
import Lopta from "./../../Utilities/Lopta/Lopta";

const Agenda = () => {
  const pocetakPocetna = useRef();

  return (
    <>
      <div className="pocetak-pocetna" ref={pocetakPocetna}></div>
      <Nav />
      <div className="agenda-container">
        <div className="lopte-anim">
          <div className="prva-grupa">
            <Lopta boja="bela" width="3rem" height="3rem" />
            <Lopta boja="crvena" width="5rem" height="5rem" />
          </div>
          <div className="druga-grupa">
            <Lopta boja="bela" width="6.5rem" height="6.5rem" />
            <Lopta boja="crvena" width="5rem" height="5rem" />
          </div>
          <div className="treca-grupa">
            <Lopta boja="transparentna" width="4.5rem" height="4.5rem" />
            <Lopta boja="crvena" width="5rem" height="5rem" />
          </div>
        </div>
        <div className="lopte-anim">
          <div className="prva-grupa">
            <Lopta boja="bela" width="3rem" height="3rem" />
            <Lopta boja="crvena" width="5rem" height="5rem" />
          </div>
          <div className="druga-grupa">
            <Lopta boja="bela" width="6.5rem" height="6.5rem" />
            <Lopta boja="crvena" width="5rem" height="5rem" />
          </div>
          <div className="treca-grupa">
            <Lopta boja="transparentna" width="4.5rem" height="4.5rem" />
            <Lopta boja="crvena" width="5rem" height="5rem" />
          </div>
        </div>
        <div className="linija-lopte">
          <div className="linija"></div>
          <div className="lopte">
            <img src={agendaLopta} alt="lopta c2s" />
            <img src={agendaLopta} alt="lopta c2s" />
            <img src={agendaLopta} alt="lopta c2s" />
            <img src={agendaLopta} alt="lopta c2s" />
          </div>
        </div>
        <h2>AGENDA</h2>
        <div className="agenda-content">
          <AgendaItem
            datum="15 MAJ"
            mesto="Fakultet organizacionih nauka"
            raspored={[
              {
                vreme: "14:00 - 14:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
              {
                vreme: "14:00 - 14:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
              {
                vreme: "14:00 - 14:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
              {
                vreme: "14:00 - 14:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
            ]}
          />
          <AgendaItem
            obrnuto={true}
            datum="15 MAJ"
            mesto="Fakultet organizacionih nauka"
            raspored={[
              {
                vreme: "14:00 - 14:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
              {
                vreme: "14:00 - 14:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
              {
                vreme: "14:00 - 14:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
              {
                vreme: "14:00 - 14:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
            ]}
          />
          <AgendaItem
            datum="15 MAJ"
            mesto="Fakultet organizacionih nauka"
            raspored={[
              {
                vreme: "14:00 - 14:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
              {
                vreme: "14:00 - 14:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
              {
                vreme: "14:00 - 14:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
              {
                vreme: "14:00 - 14:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
            ]}
          />
          <AgendaItem
            obrnuto={true}
            datum="15 MAJ"
            mesto="Fakultet organizacionih nauka"
            raspored={[
              {
                vreme: "14:00 - 14:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
              {
                vreme: "14:00 - 14:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
              {
                vreme: "14:00 - 14:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
              {
                vreme: "14:00 - 14:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
            ]}
          />
        </div>
      </div>

      <Footer pocetakPocetna={pocetakPocetna} />
    </>
  );
};

export default Agenda;
