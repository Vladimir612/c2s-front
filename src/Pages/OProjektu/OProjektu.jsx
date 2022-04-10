import React from "react";
import { useState } from "react";
import "./OProjektu.scss";
import Radionice from "./Radionice/Radionice";
import O_tema from "./O_tema/O_tema";
import OtemaSlikaRadionice from "../../Assets/Images/otemaslika.png";
import Panel from "./Panel/Panel";
import ModeratorSlika from "../../Assets/Images/predavacReact1.jpg";
import SpeedDating from "./SpeedDating/SpeedDating";
import RfzLogo from "../../Assets/Images/RfzLogo.png";
import PredavacReact1 from "../../Assets/Images/predavacReact1.jpg";
import PredavacReact2 from "../../Assets/Images/predavacReact2.jpg";
import TechChallenge from "./TechChallenge/TechChallenge";

const OProjektu = () => {
  const [aktivanTab, setAktivanTab] = useState(1);
  const handleRadionice = () => {
    setAktivanTab(1);
  };
  const handlePanel = () => {
    setAktivanTab(2);
  };
  const handleDating = () => {
    setAktivanTab(3);
  };
  const handleTech = () => {
    setAktivanTab(4);
  };

  return (
    <div className="wrap-oprojektu">
      <div className="nav_OProjektu">
        <button
          className="dugmeOProjektu"
          // style={aktivanTab === 1 && { backgroundColor: "red" }}
          // {
          //   aktivanTab===1&&style
          // }
          style={{
            backgroundColor: aktivanTab === 1 ? "#cc203a" : "#292929",
            color:
              aktivanTab === 1
                ? "rgba(255, 255, 255, 0.98)"
                : "rgba(255, 255, 255, 0.65)",
          }}
          onClick={handleRadionice}
        >
          <p>RADIONICE</p>
        </button>
        <button
          className="dugmeOProjektu"
          style={{
            backgroundColor: aktivanTab === 2 ? "#cc203a" : "#292929",
            color:
              aktivanTab === 2
                ? "rgba(255, 255, 255, 0.98)"
                : "rgba(255, 255, 255, 0.65)",
          }}
          onClick={handlePanel}
        >
          <p>PANEL</p>
        </button>
        <button
          className="dugmeOProjektu"
          style={{
            backgroundColor: aktivanTab === 3 ? "#cc203a" : "#292929",
            color:
              aktivanTab === 3
                ? "rgba(255, 255, 255, 0.98)"
                : "rgba(255, 255, 255, 0.65)",
          }}
          onClick={handleDating}
        >
          <span id="prviProblem">
            <p>SPEED DATING</p>
          </span>
        </button>
        <button
          className="dugmeOProjektu"
          style={{
            backgroundColor: aktivanTab === 4 ? "#cc203a" : "#292929",
            color:
              aktivanTab === 4
                ? "rgba(255, 255, 255, 0.98)"
                : "rgba(255, 255, 255, 0.65)",
          }}
          onClick={handleTech}
        >
          <span id="drugiProblem">
            <p>TECH CHALLENGE</p>
          </span>
        </button>
      </div>

      {aktivanTab === 1 && (
        <div className="contentOProjektu-radionica">
          <O_tema
            ime="RADIONICE"
            text="Radionice


            Svi naši članovi imaju prilike da uče o savremenim tehnologijama i da dopunjuju svoja znanja iz najraznovrsnijih oblasti. Radionice koje smo do sada održali pokrivale su frontend i backend development, web development, web dizajn, grafički dizajn, game development, data science, kao i mnoge tehnologije u pomenutim oblastima informacionih tehnologija. Pored toga, pažnju posvećujemo razvoju soft, odnosno mekih veština. "
            slika={OtemaSlikaRadionice}
          ></O_tema>
          <div className="presek-dana">
            <div className="krug-presek">
              <p>1.dan</p>
            </div>
          </div>
          <Radionice
            imeRadionice="REACT"
            logo={RfzLogo}
            link="https://fonis.rs/"
            tekstOpis="Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook. Od svog pojavljivanja 2011. godine pa sve do danas, React je ostao veoma popularan zbog svojih dodatnih karakteristika poput jednostavnosti i fleksibilnosti."
            tekstOpis2="Zadužen je za onaj deo aplikacije koji korisnik vidi i sa kojim može da ostvari interakciju, odnosno za korisnički interfejs (UI). Za samo nekoliko godina, React je postao jedna od najčesće korišćenih JS biblioteka, dok su web developeri sa ovim veštinama veoma traženi. Zvuči primamljivo, zar ne? U tom slučaju, opredelite se za React At Its Finest radionicu."
            imePredavaca1="JOVANA JOVANOVIC"
            slikaPredavaca1={PredavacReact1}
            tekstPredavac1=" way is to change the percentage of the flex property of the
            flex items to create different way is to change the percentage of the flex property of the
            flex items to create different"
            imePredavaca2="MARKO JOVANOVIC"
            slikaPredavaca2={PredavacReact2}
            tekstPredavac2="XXOAIHFushaefoioknewoifwoenf iuwenflksd foiwnefn sdnfoiwen fib"
            detaljiPocetnoStanje={true}
          ></Radionice>
          <Radionice
            imeRadionice="REACT"
            logo={RfzLogo}
            link="https://fonis.rs/"
            tekstOpis="Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook. Od svog pojavljivanja 2011. godine pa sve do danas, React je ostao veoma popularan zbog svojih dodatnih karakteristika poput jednostavnosti i fleksibilnosti."
            tekstOpis2="Zadužen je za onaj deo aplikacije koji korisnik vidi i sa kojim može da ostvari interakciju, odnosno za korisnički interfejs (UI). Za samo nekoliko godina, React je postao jedna od najčesće korišćenih JS biblioteka, dok su web developeri sa ovim veštinama veoma traženi. Zvuči primamljivo, zar ne? U tom slučaju, opredelite se za React At Its Finest radionicu."
            imePredavaca1="JOVANA JOVANOVIC"
            slikaPredavaca1={PredavacReact1}
            tekstPredavac1=" way is to change the percentage of the flex property of the
            flex items to create different way is to change the percentage of the flex property of the
            flex items to create different"
            imePredavaca2="MARKO JOVANOVIC"
            slikaPredavaca2={PredavacReact2}
            tekstPredavac2="XXOAIHFushaefoioknewoifwoenf iuwenflksd foiwnefn sdnfoiwen fib"
            detaljiPocetnoStanje={true}
          ></Radionice>
          <div className="presek-dana">
            <div className="krug-presek">
              <p>2.dan</p>
            </div>
          </div>
          <Radionice
            imeRadionice="REACT"
            logo={RfzLogo}
            link="https://fonis.rs/"
            tekstOpis="Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook. Od svog pojavljivanja 2011. godine pa sve do danas, React je ostao veoma popularan zbog svojih dodatnih karakteristika poput jednostavnosti i fleksibilnosti."
            tekstOpis2="Zadužen je za onaj deo aplikacije koji korisnik vidi i sa kojim može da ostvari interakciju, odnosno za korisnički interfejs (UI). Za samo nekoliko godina, React je postao jedna od najčesće korišćenih JS biblioteka, dok su web developeri sa ovim veštinama veoma traženi. Zvuči primamljivo, zar ne? U tom slučaju, opredelite se za React At Its Finest radionicu."
            imePredavaca1="JOVANA JOVANOVIC"
            slikaPredavaca1={PredavacReact1}
            tekstPredavac1=" way is to change the percentage of the flex property of the
            flex items to create different way is to change the percentage of the flex property of the
            flex items to create different"
            imePredavaca2="MARKO JOVANOVIC"
            slikaPredavaca2={PredavacReact2}
            tekstPredavac2="XXOAIHFushaefoioknewoifwoenf iuwenflksd foiwnefn sdnfoiwen fib"
            detaljiPocetnoStanje={true}
          ></Radionice>
          <Radionice
            imeRadionice="REACT"
            logo={RfzLogo}
            link="https://fonis.rs/"
            tekstOpis="Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook. Od svog pojavljivanja 2011. godine pa sve do danas, React je ostao veoma popularan zbog svojih dodatnih karakteristika poput jednostavnosti i fleksibilnosti."
            tekstOpis2="Zadužen je za onaj deo aplikacije koji korisnik vidi i sa kojim može da ostvari interakciju, odnosno za korisnički interfejs (UI). Za samo nekoliko godina, React je postao jedna od najčesće korišćenih JS biblioteka, dok su web developeri sa ovim veštinama veoma traženi. Zvuči primamljivo, zar ne? U tom slučaju, opredelite se za React At Its Finest radionicu."
            imePredavaca1="JOVANA JOVANOVIC"
            slikaPredavaca1={PredavacReact1}
            tekstPredavac1=" way is to change the percentage of the flex property of the
            flex items to create different way is to change the percentage of the flex property of the
            flex items to create different"
            imePredavaca2="MARKO JOVANOVIC"
            slikaPredavaca2={PredavacReact2}
            tekstPredavac2="XXOAIHFushaefoioknewoifwoenf iuwenflksd foiwnefn sdnfoiwen fib"
            detaljiPocetnoStanje={true}
          ></Radionice>
        </div>
      )}
      {aktivanTab === 2 && (
        <div className="contentOProjektu-panel">
          <O_tema
            ime="PANEL"
            text="It is a long established fact that a reader will be
            
            distracted by the readable content of a page when looking at
             its layout. The point of using Lorem Ipsum is that it has a 
             more-or-less normal distribution of letters, as opposed to us
             ing 'Content here, content here', making it look like readabl
             e English. "
            slika={OtemaSlikaRadionice}
          ></O_tema>
          <div className="panelipls">
            <Panel
              className="panelKomad"
              titula="MODERATOR PANELA"
              ime="Jovana Matrica"
              opisRadnogMesta="moderator panela"
              bottomText="Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook."
              slika={ModeratorSlika}
            ></Panel>
            <Panel
              className="panelKomad"
              titula="PANELISTA"
              ime="Jovana Matrica"
              opisRadnogMesta="Profesor na Fakultetu Organizacionih nauka"
              bottomText="iodgj dsiog oe jgdsj oisjg osjfgio jse fj daj ziki da  ief
              i jsoejf sje jeoj sdoiwei j jie FI FS J"
              slika={ModeratorSlika}
              logo={RfzLogo}
            ></Panel>
            <Panel></Panel>
            <Panel></Panel>
            <Panel></Panel>
            <Panel></Panel>
          </div>
        </div>
      )}
      {aktivanTab === 3 && (
        <div className="contentOProjektu">
          <O_tema
            ime="SPEED DATING"
            text="It is a long established fact that a reader will be distracted by
             the readable content of a page when looking at its layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal distribution of 
              letters, as opposed to using 'Content here, content here', making it look
               like readable English. "
            slika={OtemaSlikaRadionice}
          ></O_tema>
          <SpeedDating logo={RfzLogo} link="https://fonis.rs/"></SpeedDating>
          <SpeedDating logo={RfzLogo} link="https://fonis.rs/"></SpeedDating>
          <SpeedDating logo={RfzLogo} link="https://fonis.rs/"></SpeedDating>
          <SpeedDating logo={RfzLogo} link="https://fonis.rs/"></SpeedDating>
          <SpeedDating logo={RfzLogo} link="https://fonis.rs/"></SpeedDating>
          <SpeedDating logo={RfzLogo} link="https://fonis.rs/"></SpeedDating>
          <SpeedDating logo={RfzLogo} link="https://fonis.rs/"></SpeedDating>
          <SpeedDating logo={RfzLogo} link="https://fonis.rs/"></SpeedDating>
          <SpeedDating logo={RfzLogo} link="https://fonis.rs/"></SpeedDating>
        </div>
      )}
      {aktivanTab === 4 && (
        <div className="contentOProjektu">
          <O_tema
            ime="TECH CHALLENGE"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
            slika={OtemaSlikaRadionice}
          ></O_tema>

          <SpeedDating logo={RfzLogo} link="https://fonis.rs/"></SpeedDating>
          <TechChallenge
            logo={RfzLogo}
            link="https://fonis.rs/"
          ></TechChallenge>
          <TechChallenge
            logo={RfzLogo}
            link="https://fonis.rs/"
          ></TechChallenge>
          <TechChallenge
            logo={RfzLogo}
            link="https://fonis.rs/"
          ></TechChallenge>
          <TechChallenge
            logo={RfzLogo}
            link="https://fonis.rs/"
          ></TechChallenge>
          <TechChallenge
            logo={RfzLogo}
            link="https://fonis.rs/"
          ></TechChallenge>
          <TechChallenge
            logo={RfzLogo}
            link="https://fonis.rs/"
          ></TechChallenge>
          <TechChallenge
            logo={RfzLogo}
            link="https://fonis.rs/"
          ></TechChallenge>
          <TechChallenge
            logo={RfzLogo}
            link="https://fonis.rs/"
          ></TechChallenge>
        </div>
      )}
      <div className="crvenoDole">
        <div className="pogledaj-ostalo">
          <p>POGLEDAJ I OSTALE STRANE</p>
        </div>
        <div className="doleNav">
          <div className="nav_OProjektu">
            <button
              className="dugmeOProjektu"
              // style={aktivanTab === 1 && { backgroundColor: "red" }}
              // {
              //   aktivanTab===1&&style
              // }
              style={{
                backgroundColor: aktivanTab === 1 ? "#cc203a" : "#292929",
                color:
                  aktivanTab === 1
                    ? "rgba(255, 255, 255, 0.98)"
                    : "rgba(255, 255, 255, 0.65)",
              }}
              // onMouseEnter={alert("wtf")}
              onClick={handleRadionice}
            >
              <p>RADIONICE</p>
            </button>
            <button
              className="dugmeOProjektu"
              style={{
                backgroundColor: aktivanTab === 2 ? "#cc203a" : "#292929",
                color:
                  aktivanTab === 2
                    ? "rgba(255, 255, 255, 0.98)"
                    : "rgba(255, 255, 255, 0.65)",
              }}
              onClick={handlePanel}
            >
              <p>PANEL</p>
            </button>
            <button
              className="dugmeOProjektu"
              style={{
                backgroundColor: aktivanTab === 3 ? "#cc203a" : "#292929",
                color:
                  aktivanTab === 3
                    ? "rgba(255, 255, 255, 0.98)"
                    : "rgba(255, 255, 255, 0.65)",
              }}
              onClick={handleDating}
            >
              <span id="prviProblem">
                <p>SPEED DATING</p>
              </span>
            </button>
            <button
              className="dugmeOProjektu"
              style={{
                backgroundColor: aktivanTab === 4 ? "#cc203a" : "#292929",
                color:
                  aktivanTab === 4
                    ? "rgba(255, 255, 255, 0.98)"
                    : "rgba(255, 255, 255, 0.65)",
              }}
              onClick={handleTech}
            >
              <span id="drugiProblem">
                <p>TECH CHALLENGE</p>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OProjektu;
