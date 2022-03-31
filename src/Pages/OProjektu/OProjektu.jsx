import React from "react";
import { useState } from "react";
import "./OProjektu.scss";
import Radionice from "./Radionice/Radionice";
import O_tema from "./O_tema/O_tema";
import OtemaSlikaRadionice from "../../Assets/Images/otemaslika.png";

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
        <button className="dugmeOProjektu" onClick={handleRadionice}>
          <p>RADIONICE</p>
        </button>
        <button className="dugmeOProjektu" onClick={handlePanel}>
          PANEL
        </button>
        <button className="dugmeOProjektu" onClick={handleDating}>
          SPEED DATING
        </button>
        <button className="dugmeOProjektu" onClick={handleTech}>
          TECH CHALLENGE
        </button>
      </div>

      {aktivanTab === 1 && (
        <div className="contentOProjektu">
          <O_tema
            ime="RADIONICE"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
            slika={OtemaSlikaRadionice}
          ></O_tema>
          <Radionice
            imeRadionice="REACT"
            link="reak.t"
            tekstOpis="Another way is to change the percentage of the flex property of the
          flex items to create different layouts for different screen sizes.
          Note that we also have to include flex-wrap: wrap; on the flex
          container for this example to work: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            imePredavaca1="JOVANA JOVANOVIC"
            tekstPredavac1=" way is to change the percentage of the flex property of the
            flex items to create different way is to change the percentage of the flex property of the
            flex items to create different"
            imePredavaca2="MARKO JOVANOVIC"
            tekstPredavac2="XXOAIHFushaefoioknewoifwoenf iuwenflksd foiwnefn sdnfoiwen fib"
          ></Radionice>
          <Radionice
            imeRadionice="REACT"
            link="reak.t"
            tekstOpis="tracted by the rn looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            imePredavaca1="JOVANA JOVANOVIC"
            tekstPredavac1="OAIHFushaefoioknewoifwoenf iuwenflksd foiwnefn sdnfoiwen fib"
            imePredavaca2="MARKO JOVANOVIC"
            tekstPredavac2="XXOAIHFushaefoioknewoifwoenf iuwenflksd foiwnefn sdnfoiwen fib"
          ></Radionice>
          <Radionice
            imeRadionice="BLABLA"
            link="reak.t"
            tekstOpis="Another way is to change the percentage of the flex property of the
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
            tekstPrviPredavac="OAIHFushaefoijsiefposejfiusnfo weoifjweiufn owef lneiufwone fower oknewoifwoenf iuwenflksd foiwnefn sdnfoiwen fib"
          ></Radionice>
          <Radionice
            imeRadionice="REACT"
            link="reak.t"
            tekstOpis="Another way is to change the percentage of the flex property of the
          flex items to create different layouts for different screen sizes.
          Note that we also have to include flex-wrap: wrap; on the flex
          container for this example to work:"
            tekstPrviPredavac="OAIHFushaefoijsiefposejfiusnfo weoifjweiufn owef lneiufwone fower oknewoifwoenf iuwenflksd foiwnefn sdnfoiwen fib"
          ></Radionice>

          <div className="presek-dana">
            <div className="krug-presek">
              <p>1.dan</p>
            </div>
          </div>
        </div>
      )}
      {aktivanTab === 2 && (
        <div className="contentOProjektu">
          <O_tema
            ime="PANEL"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
            slika={OtemaSlikaRadionice}
          ></O_tema>
          <Radionice></Radionice>
          <Radionice></Radionice>
          <Radionice></Radionice>
        </div>
      )}
      {aktivanTab === 3 && (
        <div className="contentOProjektu">
          <O_tema
            ime="SPEED DATING"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
            slika={OtemaSlikaRadionice}
          ></O_tema>
          <Radionice></Radionice>
        </div>
      )}
      {aktivanTab === 4 && (
        <div className="contentOProjektu">
          <O_tema
            ime="TECH CHALLENGE"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
            slika={OtemaSlikaRadionice}
          ></O_tema>
          <Radionice></Radionice>
        </div>
      )}

      <div className="nav_OProjektu">
        <button className="dugmeOProjektu" onClick={handleRadionice}>
          <p>RADIONICE</p>
        </button>
        <button className="dugmeOProjektu" onClick={handlePanel}>
          PANEL
        </button>
        <button className="dugmeOProjektu" onClick={handleDating}>
          SPEED DATING
        </button>
        <button className="dugmeOProjektu" onClick={handleTech}>
          TECH CHALLENGE
        </button>
      </div>
    </div>
  );
};

export default OProjektu;
