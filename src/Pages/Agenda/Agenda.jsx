import React, { useRef, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Nav from "./../../Components/Nav/Nav";
import "./Agenda.scss";
import AgendaItem from "./AgendaItem";
import agendaBall from "../../Assets/Images/agenda-ball.svg";
import Ball from "./../../Utilities/Ball/Ball";
import { scrollFunc } from "../../Components/Footer/Footer";

const Agenda = () => {
  const pageStartRef = useRef();

  useEffect(() => {
    scrollFunc(pageStartRef);
  }, []);

  return (
    <>
      <div className="ref-start" ref={pageStartRef}></div>
      <Nav />
      <div className="agenda-container">
        <div className="balls-anim">
          <div className="first-group">
            <Ball boja="white" width="3rem" height="3rem" />
            <Ball boja="red" width="5rem" height="5rem" />
          </div>
          <div className="second-group">
            <Ball boja="red" width="5rem" height="5rem" />
          </div>
          <div className="third-group">
            <Ball boja="transparent" width="4.5rem" height="4.5rem" />
            <Ball boja="red" width="5rem" height="5rem" />
          </div>
        </div>
        <div className="balls-anim">
          <div className="first-group">
            <Ball boja="white" width="3rem" height="3rem" />
            <Ball boja="red" width="5rem" height="5rem" />
          </div>
          <div className="second-group">
            <Ball boja="white" width="6.5rem" height="6.5rem" />
            <Ball boja="red" width="5rem" height="5rem" />
          </div>
          <div className="third-group">
            <Ball boja="transparent" width="4.5rem" height="4.5rem" />
            <Ball boja="red" width="5rem" height="5rem" />
          </div>
        </div>
        <div className="line-balls">
          <div className="line"></div>
          <div className="balls">
            <img src={agendaBall} alt="ball c2s" />
            <img src={agendaBall} alt="ball c2s" />
            <img src={agendaBall} alt="ball c2s" />
            <img src={agendaBall} alt="ball c2s" />
          </div>
        </div>
        <h2>AGENDA</h2>
        <div className="agenda-content">
          <AgendaItem
            date="14. MAJ"
            location="Fakultet organizacionih nauka"
            schedule={[
              {
                time: "10:30 - 11:15",
                event: "SVEČANO OTVARANJE PROJEKTA",
              },
              {
                time: "11:15 - 13:00",
                event: "PANEL DISKUSIJA",
              },
              {
                time: "13:00 - 13:15",
                event: "PAUZA",
              },
              {
                time: "13:15 - 14:30",
                event: "RADIONICE",
              },
              {
                time: "14:30 - 15:00",
                event: "PAUZA",
              },
              {
                time: "15:00 - 16:15",
                event: "RADIONICE",
              },
              {
                time: "16:15 - 16:30",
                event: "PAUZA",
              },
              {
                time: "16:30 - 17:30",
                event: "RADIONICE",
              },
            ]}
          />
          <AgendaItem
            reverse={true}
            date="15. MAJ"
            location="Fakultet organizacionih nauka"
            schedule={[
              {
                time: "11:00 - 12:15",
                event: "RADIONICE",
              },
              {
                time: "12:15 - 12:45",
                event: "PAUZA",
              },
              {
                time: "12:45 - 14:00",
                event: "RADIONICE",
              },
              {
                time: "14:00 - 14:15",
                event: "PAUZA",
              },
              {
                time: "14:15 - 15:15",
                event: "RADIONICE",
              },
            ]}
          />
          <AgendaItem
            date="16. MAJ"
            location="Envoy Conference Centar"
            schedule={[
              {
                time: "11:00 - 17:00",
                event: "SPEED DATING",
              },
            ]}
          />
          <AgendaItem
            reverse={true}
            date="17. MAJ"
            location="Envoy Conference Centar"
            schedule={[
              {
                time: "10:00 - 13:00",
                event: "TECH CHALLENGE (I smena)",
              },
              {
                time: "13:00 - 16:00",
                event: "TECH CHALLENGE (II smena)",
              },
              {
                time: "16:00 - 18:00",
                event: "SVEČANO ZATVARANJE PROJEKTA",
              },
            ]}
          />
        </div>
      </div>
      <Footer pageStartRef={pageStartRef} />
    </>
  );
};

export default Agenda;
