import React from "react";
import "./Team.scss";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Team = (props) => {
  return (
    <motion.div
      className="team-content"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="team-content-text">
        <h2>{props.team.teamName}</h2>
        <p>{props.team.aboutTeam}</p>
        <div className="about-us-coordinator">
          <div className="img-wrapper">
            <LazyLoadImage
              effect="blur"
              src={props.team.coordImg}
              alt={props.team.coordName}
            />
          </div>
          <div className="about-us-coordinator-text">
            <h5>{props.team.coordName}</h5>
            <p>{props.team.coordFunc}</p>
          </div>
        </div>
      </div>
      <div className="about-us-content-img">
        <div className="img-wrapper">
          <LazyLoadImage
            effect="blur"
            src={props.team.teamImg}
            alt={props.team.teamName}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
