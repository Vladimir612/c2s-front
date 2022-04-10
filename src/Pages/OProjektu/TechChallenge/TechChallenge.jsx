import React from "react";
import "./TechChallenge.scss";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { useState } from "react";

const TechChallenge = (props) => {
  const [visibleTechChallenge, setVisibleTechChallenge] = useState(false);
  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && !visibleTechChallenge) {
          setVisibleTechChallenge(true);
        }
        return;
      }}
      delayedCall
      partialVisibility
    >
      <motion.div
        className="speedDating-item"
        animate={visibleTechChallenge && { y: 0, opacity: 1 }}
        initial={{
          y: 80,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
      >
                <div className="companyLink">
          <div className="logoKompanije">
            <img
              className="speedLogo"
              src={props.logo}
              alt="kompanije studentima logo"
            />
          </div>
          <a href={props.link}> Saznaj vise o kompaniji</a>
        </div>
      </motion.div>
    </VisibilitySensor>
  );
};

export default TechChallenge;
