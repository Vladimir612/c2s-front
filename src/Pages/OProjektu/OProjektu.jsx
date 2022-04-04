import React from "react";
import { useState } from "react";
import "./OProjektu.scss";
import Radionice from "./Radionice/Radionice";
import O_tema from "./O_tema/O_tema";
import OtemaSlikaRadionice from "../../Assets/Images/otemaslika.png";
import Panel from "./Panel/Panel";
import ModeratorSlika from "../../Assets/Images/predavacReact1.jpg";
import SpeedDating from "./SpeedDating/SpeedDating";

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
          }}
          onClick={handleRadionice}
        >
          <p>RADIONICE</p>
        </button>
        <button
          className="dugmeOProjektu"
          style={{
            backgroundColor: aktivanTab === 2 ? "#cc203a" : "#292929",
          }}
          onClick={handlePanel}
        >
          <p>PANEL</p>
        </button>
        <button
          className="dugmeOProjektu"
          style={{
            backgroundColor: aktivanTab === 3 ? "#cc203a" : "#292929",
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
            text="It is a long established fact that a reader will be distracted by the
             readable content of a page when looking at its layout. The point of using 
             Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
             as opposed to using 'Content here, content here', making it look like readable English. "
            slika={OtemaSlikaRadionice}
          ></O_tema>
          <div className="presek-dana">
            <div className="krug-presek">
              <p>1.dan</p>
            </div>
          </div>
          <Radionice
            imeRadionice="REACT"
            link="https://fonis.rs/"
            tekstOpis="Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook. Od svog pojavljivanja 2011. godine pa sve do danas, React je ostao veoma popularan zbog svojih dodatnih karakteristika poput jednostavnosti i fleksibilnosti."
            tekstOpis2="Zadužen je za onaj deo aplikacije koji korisnik vidi i sa kojim može da ostvari interakciju, odnosno za korisnički interfejs (UI). Za samo nekoliko godina, React je postao jedna od najčesće korišćenih JS biblioteka, dok su web developeri sa ovim veštinama veoma traženi. Zvuči primamljivo, zar ne? U tom slučaju, opredelite se za React At Its Finest radionicu."
            imePredavaca1="JOVANA JOVANOVIC"
            tekstPredavac1=" way is to change the percentage of the flex property of the
            flex items to create different way is to change the percentage of the flex property of the
            flex items to create different"
            imePredavaca2="MARKO JOVANOVIC"
            tekstPredavac2="XXOAIHFushaefoioknewoifwoenf iuwenflksd foiwnefn sdnfoiwen fib"
            detaljiPocetnoStanje={true}
          ></Radionice>
          <Radionice
            imeRadionice="REACT"
            link="https://fonis.rs/"
            tekstOpis="tracted by the rn looking at its layout. The point of using Lorem Ipsum is 
            that it has a more-or-less normal distribution of letters, as opposed to using 'Content
             here, content here', making it look like readable English.
            It is a long established fact that a reader will be distracted by the readable 
            content of a page when looking at its layout. The point of using Lorem Ipsum is that 
            it has a more-or-less normal distribution of letters, as opposed to using 'Content here
            , content here', making it look like readable English.It is a long established fact that
             a reader will be distracted by the readable content of a page when looking at its layout
             . The point of using Lorem Ipsum is that it has a more-or-less normal distribution of lett
             ers, as opposed to using 'Content here, content here', making it look like readable English."
            imePredavaca1="JOVANA JOVANOVIC"
            tekstPredavac1="it has a more-or-less normal distribution of letters, as opposed to using 'Content here
            , content here', making it look like readable English.It is a long established fact that
             a reader will be distracted by the readable content of a page when looking at its layout"
            imePredavaca2="MARKO JOVANOVIC"
            tekstPredavac2="XXOAIHFushaefoioknewoifwoenf iuwenflksd foiwnefn sdnfoiwen fib"
          ></Radionice>
          <div className="presek-dana">
            <div className="krug-presek">
              <p>2.dan</p>
            </div>
          </div>
          <Radionice
            detaljiPocetnoStanje={false}
            imeRadionice="BLABLA"
            link="https://fonis.rs/"
            tekstOpis=" Another way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example to work:
            Another way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example tAnother way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example t
            Another way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example to work:
            Another way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example tAnother way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example tAnother way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example to work:
            Another way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example tAnother way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example t
            Another way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example to work:
            Another way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example tAnother way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example tAnother way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example to work:
            Another way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example tAnother way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example t
            Another way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example to work:
            Another way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example tAnother way is to change the percentage of the flex property of the
            flex items to create different layouts for different screen sizes.
            Note that we also have to include flex-wrap: wrap; on the flex
            container for this example t"
            imePredavaca1="JOVANA JOVANOVIC"
            tekstPredavac1=" way is to change the percentage of the flex property of the
            flex items to create different way is to change the percentage of the flex property of the
            flex items to create different"
            imePredavaca2="MARKO JOVANOVIC"
            tekstPredavac2="XXOAIHFushaefoioknewoifwoenf iuwenflksd foiwnefn sdnfoiwen fib"
            detaljiPocetnoStanje="Prikaži detaljnije"
          ></Radionice>
          <Radionice
            imeRadionice="REACT"
            link="https://fonis.rs/"
            tekstOpis="Another way is to change the percentage of the flex property of the
          flex items to create different layouts for different screen sizes.
          Note that we also have to include flex-wrap: wrap; on the flex
          container for this example to work:"
            tekstPrviPredavac="OAIHFushaefoijsiefposejfiusnfo weoifjweiufn owef
             lneiufwone fower oknewoifwoenf iuwenflksd foiwnefn sdnfoiwen fib"
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
              bottomText="iodgj dsiog oe jgdsj oisjg osjfgio jse fj"
              slika={ModeratorSlika}
            ></Panel>
            <Panel
              className="panelKomad"
              titula="PANELISTA"
              ime="Jovana Matrica"
              opisRadnogMesta="moderator panela jsifjie sjf aojef soi jfsajf  jerj grg"
              bottomText="iodgj dsiog oe jgdsj oisjg osjfgio jse fj daj ziki da  ief
              i jsoejf sje jeoj sdoiwei j jie FI FS J"
              slika={ModeratorSlika}
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
          <SpeedDating
            logo={ModeratorSlika}
            link="https://fonis.rs/"
          ></SpeedDating>
          <SpeedDating
            logo={ModeratorSlika}
            link="https://fonis.rs/"
          ></SpeedDating>
          <SpeedDating
            logo={ModeratorSlika}
            link="https://fonis.rs/"
          ></SpeedDating>
          <SpeedDating
            logo={ModeratorSlika}
            link="https://fonis.rs/"
          ></SpeedDating>
          <SpeedDating
            logo={ModeratorSlika}
            link="https://fonis.rs/"
          ></SpeedDating>
          <SpeedDating
            logo={ModeratorSlika}
            link="https://fonis.rs/"
          ></SpeedDating>
          <SpeedDating
            logo={ModeratorSlika}
            link="https://fonis.rs/"
          ></SpeedDating>
          <SpeedDating
            logo={ModeratorSlika}
            link="https://fonis.rs/"
          ></SpeedDating>
          <SpeedDating
            logo={ModeratorSlika}
            link="https://fonis.rs/"
          ></SpeedDating>
        </div>
      )}
      {aktivanTab === 4 && (
        <div className="contentOProjektu">
          <O_tema
            ime="TECH CHALLENGE"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
            slika={OtemaSlikaRadionice}
          ></O_tema>
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
              }}
              onClick={handleRadionice}
            >
              <p>RADIONICE</p>
            </button>
            <button
              className="dugmeOProjektu"
              style={{
                backgroundColor: aktivanTab === 2 ? "#cc203a" : "#292929",
              }}
              onClick={handlePanel}
            >
              <p>PANEL</p>
            </button>
            <button
              className="dugmeOProjektu"
              style={{
                backgroundColor: aktivanTab === 3 ? "#cc203a" : "#292929",
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
