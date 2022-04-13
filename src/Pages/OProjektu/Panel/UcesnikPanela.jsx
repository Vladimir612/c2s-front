import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UcesnikPanela.scss";

import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

import lopte2 from "../../../Assets/Images/krugovi-radionica.png";

const UcesnikPanela = (props) => {
  const [vidljivPanelista, setVidljivPanelista] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && !vidljivPanelista) {
          setVidljivPanelista(true);
        }
        return;
      }}
      delayedCall
      partialVisibility
    >
      <motion.div
        className={
          props.ucesnik.moderator
            ? "ucesnik-panela moderator"
            : "ucesnik-panela panelista"
        }
        animate={vidljivPanelista && { y: 0, opacity: 1 }}
        initial={{
          y: 80,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
      >
        {!props.ucesnik.moderator && (
          <div className="lopte-slika">
            <img src={lopte2} alt="Lopte" />
          </div>
        )}
        <h2>{props.ucesnik.moderator ? "MODERATOR PANELA" : "PANELISTA"}</h2>
        <div className="ucesnik">
          <div className="slika">
            <div className="img-wrapper">
              <img src={props.ucesnik.slika} alt={props.ucesnik.ime} />
            </div>
          </div>
          <div className="podaci">
            <h3>{props.ucesnik.ime}</h3>
            <p>{props.ucesnik.pozicija}</p>
          </div>
        </div>
        <div className="rekao-je">{props.ucesnik.rekaoJe}</div>
        {!props.ucesnik.moderator && (
          <Link to={props.ucesnik.linkKompanije}>
            <div className="kompanija">
              <div className="img-wrapper">
                <img src={props.ucesnik.slikaKompanije} alt="Slika kompanije" />
              </div>
            </div>
          </Link>
        )}
      </motion.div>
    </VisibilitySensor>
  );
};

export default UcesnikPanela;
