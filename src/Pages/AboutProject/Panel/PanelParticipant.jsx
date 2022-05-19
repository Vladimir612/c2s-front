import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PanelParticipant.scss";

import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

import { LazyLoadImage } from "react-lazy-load-image-component";

import balls2 from "../../../Assets/Images/krugovi-radionica.png";

const PanelParticipant = (props) => {
  const [displayedPanelist, setDisplayedPanelist] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && !displayedPanelist) {
          setDisplayedPanelist(true);
        }
        return;
      }}
      delayedCall
      partialVisibility
    >
      <motion.div
        className={
          props.participant.moderator
            ? "participant-of-panel moderator"
            : "participant-of-panel panelist"
        }
        animate={displayedPanelist && { y: 0, opacity: 1 }}
        initial={{
          y: 80,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
      >
        {!props.participant.moderator && (
          <div className="balls-photo">
            <img src={balls2} alt="Lopte" />
          </div>
        )}
        <h2>
          {props.participant.moderator ? "MODERATOR PANELA" : "PANELISTA"}
        </h2>
        <div className="participant">
          <div className="photo">
            <div className="img-wrapper">
              <LazyLoadImage
                effect="blur"
                src={props.participant.photo}
                alt={props.participant.name}
              />
            </div>
          </div>
          <div className="data">
            <h3>{props.participant.name}</h3>
            <p>{props.participant.position}</p>
          </div>
        </div>
        <div className="has-told">{props.participant.hasTold}</div>
        {!props.participant.moderator && (
          <Link to={props.participant.companyLink}>
            <div className="company">
              <div className="img-wrapper">
                <img
                  effect="blur"
                  src={props.participant.companyImage}
                  alt="Slika kompanije"
                />
              </div>
            </div>
          </Link>
        )}
      </motion.div>
    </VisibilitySensor>
  );
};

export default PanelParticipant;
