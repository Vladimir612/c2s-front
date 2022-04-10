import "./Panel.scss";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { useState } from "react";
import ModeratorSlika from "../../../Assets/Images/predavacReact1.jpg";

const Panel = (props) => {
  const [visiblePanel, setVisiblePanel] = useState(false);
  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && !visiblePanel) {
          setVisiblePanel(true);
        }
        return;
      }}
      delayedCall
      partialVisibility
    >
      <motion.div
        className="panel-item"
        style={{
          backgroundColor:
            props.titula === "MODERATOR PANELA" ? "#CC203A" : "#b4afb3",
          color:
            props.titula === "MODERATOR PANELA"
              ? "rgba(255,255,255,0.9)"
              : "rgba(0,0,0,0.9)",
        }}
        animate={visiblePanel && { y: 0, opacity: 1 }}
        initial={{
          y: 80,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
      >
        <div className="wrap-panel">
          <div className="panel-top">
            <div className="titula">
              <h2>{props.titula}</h2>
            </div>
            <div
              className="divLogo"
              style={{
                display: props.titula === "MODERATOR PANELA" ? "none" : "block",
              }}
            >
              {" "}
              <div className="slikaRam">
                <img src={props.logo} alt="" className="slikaLogo" />
              </div>
            </div>
          </div>
          <div className="panel-middle">
            <div className="slika-panel">
              <img src={props.slika} alt="" className="" />
            </div>
            <div className="panelista-info">
              <h4>{props.ime}</h4>
              <p>{props.opisRadnogMesta}</p>
            </div>
          </div>
          <div className="panel-bottom">
            <p className="bottomText">{props.bottomText}</p>
          </div>
        </div>
      </motion.div>
    </VisibilitySensor>
  );
};

export default Panel;
