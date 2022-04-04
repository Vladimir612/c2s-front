import React from "react";
import "./Radionice.scss";
import PredavacReact1 from "../../../Assets/Images/predavacReact1.jpg";
import PredavacReact2 from "../../../Assets/Images/predavacReact2.jpg";
// mora ovo isto u props
import Logo1 from "../../../Assets/Images/logo1.png";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { useState } from "react";

const Radionice = (props) => {
  const handleDetails = () => {
    setDetalji(!detalji);
    // alert(props.detaljiPocetnoStanje);
  };

  const [detalji, setDetalji] = useState(props.detaljiPocetnoStanje);
  // 0 je otvoreno 1 je zatvoreno
  const [visibleRadionica, setVisibleRadionica] = useState(false);
  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && !visibleRadionica) {
          setVisibleRadionica(true);
        }
        return;
      }}
      delayedCall
      partialVisibility
    >
      <motion.div
        className="radionica-item"
        animate={visibleRadionica && { y: 0, opacity: 1 }}
        initial={{
          y: 80,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
      >
        <div className="wrap-radionica">
          <div className="opis">
            <div className="radionica-ime">
              <h1>{props.imeRadionice}</h1>
            </div>

            <div
              className="tekstualniOpis"
              style={{
                height: detalji ? "15vh" : "fit-content",
              }}
            >
              {props.tekstOpis}
              <br></br>
              <br></br>
              {props.tekstOpis2}
            </div>
            {/* <p
              style={{
                height: detalji ? "15vh" : "40vh",
              }}
            ></p> */}
          </div>
          <div
            className="predavaci"
            style={{
              flexDirection: detalji ? "row" : "column",
            }}
          >
            <div className="predavac1">
              <div className="slikePredavaca">
                <img src={PredavacReact1} alt="zemaljac" />
              </div>
              <div
                className="oPredavacu"
                style={{
                  display: detalji ? "none" : "flex",
                }}
              >
                <h2>{props.imePredavaca1}</h2>
                <h4>Predavac</h4>
                <br></br>
                {/* ovde mozda za h4 da ide isto preko props ako nema moze da bude nes sem predavaca */}
                <p>{props.tekstPredavac1}</p>
              </div>
            </div>
            <div className="predavac2">
              <div
                className="oPredavacu"
                style={{
                  display: detalji ? "none" : "flex",
                }}
              >
                <h2>{props.imePredavaca2}</h2>
                <h4>Predavac</h4>
                <br></br>
                <p>{props.tekstPredavac2}</p>
              </div>
              <div className="slikePredavaca">
                <img
                  src={PredavacReact2}
                  className="predavac-img"
                  alt="zemaljac"
                />
              </div>
            </div>
          </div>
          <div className="bottom-radionica">
            <div className="details">
              <button className="dugmeOProjektu" onClick={handleDetails}>
                {detalji ? "Prikaži detaljnije v" : "Sakrij detaljnije ^"}
              </button>
            </div>

            <div className="companyLink">
              <div className="logoKompanije">
                <img src={Logo1} alt="kompanije studentima logo" />
              </div>
              <a href={props.link}> Saznaj vise o kompaniji</a>
            </div>
          </div>
        </div>
      </motion.div>
    </VisibilitySensor>
  );
};

export default Radionice;
