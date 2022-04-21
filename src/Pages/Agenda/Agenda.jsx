import React, { useRef, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Nav from "./../../Components/Nav/Nav";
import "./Agenda.scss";
import AgendaItem from "./AgendaItem";
import agendaLopta from "../../Assets/Images/agenda-lopta.svg";
import Lopta from "./../../Utilities/Lopta/Lopta";
import { scrollFunc } from "../../Components/Footer/Footer";

const Agenda = () => {
  const pocetakPocetna = useRef();
  useEffect(() => {
    scrollFunc(pocetakPocetna);
  }, []);

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
            datum="14. MAJ"
            mesto="Fakultet organizacionih nauka"
            raspored={[
              {
                vreme: "10:30 - 11:15",
                desavanje: "SVEČANO OTVARANJE PROJEKTA",
              },
              {
                vreme: "11:15 - 13:00",
                desavanje: "PANEL DISKUSIJA",
              },
              {
                vreme: "13:00 - 13:15",
                desavanje: "PAUZA",
              },
              {
                vreme: "13:15 - 14:30",
                desavanje: "RADIONICA I",
              },
              {
                vreme: "14:30 - 15:00",
                desavanje: "PAUZA",
              },
              {
                vreme: "15:00 - 16:15",
                desavanje: "RADIONICA II",
              },
              {
                vreme: "16:15 - 16:30",
                desavanje: "PAUZA",
              },
              {
                vreme: "16:30 - 17:30",
                desavanje: "RADIONICA III",
              },
            ]}
          />
          <AgendaItem
            obrnuto={true}
            datum="15. MAJ"
            mesto="Fakultet organizacionih nauka"
            raspored={[
              {
                vreme: "11:00 - 12:15",
                desavanje: "RADIONICA IV",
              },
              {
                vreme: "12:15 - 12:45",
                desavanje: "PAUZA",
              },
              {
                vreme: "12:45 - 14:00",
                desavanje: "RADIONICA V",
              },
              {
                vreme: "14:00 - 14:15",
                desavanje: "PAUZA",
              },
              {
                vreme: "14:15 - 15:15",
                desavanje: "RADIONICA VI",
              },
            ]}
          />
          <AgendaItem
            datum="16. MAJ"
            mesto="Envoy Conference Centar"
            raspored={[
              {
                vreme: "12:00 - 15:00",
                desavanje: "SPEED DATING",
              },
            ]}
          />
          <AgendaItem
            obrnuto={true}
            datum="17. MAJ"
            mesto="Envoy Conference Centar"
            raspored={[
              {
                vreme: "10:00 - 13:00",
                desavanje: "TECH CHALLENGE (I smena)",
              },
              {
                vreme: "13:00 - 16:00",
                desavanje: "TECH CHALLENGE (II smena)",
              },
              {
                vreme: "16:00 - 18:00",
                desavanje: "SVEČANO ZATVARANJE PROJEKTA",
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
