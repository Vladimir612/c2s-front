import React from "react";
import Footer from "../../Components/Footer/Footer";
import Nav from "./../../Components/Nav/Nav";
import "./Agenda.scss"
import AgendaItem from "./AgendaItem";
import agendaLopta from "../../Assets/Images/agenda-lopta.svg"

const Agenda = () => {
  return (
  <>
    <Nav />
    <div className="agenda-container">
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
            {vreme: "14:00 - 14:15", desavanje: "SVEČANO OTVARANJE PROJEKTA"},
            {vreme: "14:00 - 14:15", desavanje: "SVEČANO OTVARANJE PROJEKTA"},
            {vreme: "14:00 - 14:15", desavanje: "SVEČANO OTVARANJE PROJEKTA"},
            {vreme: "14:00 - 14:15", desavanje: "SVEČANO OTVARANJE PROJEKTA"},
          ]}
        />
         <AgendaItem
         obrnuto={true}
          datum="15 MAJ"
          mesto="Fakultet organizacionih nauka"
          raspored={[
            {vreme: "14:00 - 14:15", desavanje: "SVEČANO OTVARANJE PROJEKTA"},
            {vreme: "14:00 - 14:15", desavanje: "SVEČANO OTVARANJE PROJEKTA"},
            {vreme: "14:00 - 14:15", desavanje: "SVEČANO OTVARANJE PROJEKTA"},
            {vreme: "14:00 - 14:15", desavanje: "SVEČANO OTVARANJE PROJEKTA"},
          ]}
        />
         <AgendaItem
          datum="15 MAJ"
          mesto="Fakultet organizacionih nauka"
          raspored={[
            {vreme: "14:00 - 14:15", desavanje: "SVEČANO OTVARANJE PROJEKTA"},
            {vreme: "14:00 - 14:15", desavanje: "SVEČANO OTVARANJE PROJEKTA"},
            {vreme: "14:00 - 14:15", desavanje: "SVEČANO OTVARANJE PROJEKTA"},
            {vreme: "14:00 - 14:15", desavanje: "SVEČANO OTVARANJE PROJEKTA"},
          ]}
        />
         <AgendaItem
          obrnuto={true}
          datum="15 MAJ"
          mesto="Fakultet organizacionih nauka"
          raspored={[
            {vreme: "14:00 - 14:15", desavanje: "SVEČANO OTVARANJE PROJEKTA"},
            {vreme: "14:00 - 14:15", desavanje: "SVEČANO OTVARANJE PROJEKTA"},
            {vreme: "14:00 - 14:15", desavanje: "SVEČANO OTVARANJE PROJEKTA"},
            {vreme: "14:00 - 14:15", desavanje: "SVEČANO OTVARANJE PROJEKTA"},
          ]}
        />
      </div>
    </div>
    <Footer />
  </>);
};

export default Agenda;
