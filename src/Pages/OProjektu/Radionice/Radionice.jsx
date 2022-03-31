import React from "react";
import "./Radionice.scss";
import PredavacReact1 from "../../../Assets/Images/predavacReact1.jpg";
import PredavacReact2 from "../../../Assets/Images/predavacReact2.jpg";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { useState } from "react";

const Radionice = (props) => {
  const handleDetails = () => {
    setDetalji(!detalji);
    // alert(detalji);
  };
  const [detalji, setDetalji] = useState(false);
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
            <h1>{props.imeRadionice}</h1>
            <p>{props.tekstOpis}</p>
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
                  display: detalji ? "none" : "block",
                }}
              >
                <h2>{props.imePredavaca1}</h2>
                <h4>Predavac</h4>
                {/* ovde mozda za h4 da ide isto preko props ako nema moze da bude nes sem predavaca */}
                <p>{props.tekstPredavac1}</p>
              </div>
            </div>
            <div className="predavac2">
              <div
                className="oPredavacu"
                style={{
                  display: detalji ? "none" : "block",
                }}
              >
                <h2>{props.imePredavaca2}</h2>
                <h4>Predavac</h4>
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
                OIFJOD
              </button>
            </div>
            <div className="companyLink">
              Logo,, <a href={props.link}> Saznaj vise o kompaniji</a>
            </div>
          </div>
        </div>
      </motion.div>
    </VisibilitySensor>
  );
};

export default Radionice;
