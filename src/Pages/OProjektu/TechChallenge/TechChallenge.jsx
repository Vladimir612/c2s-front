import React from "react";
import "./TechChallenge.scss";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { useState } from "react";

const TechChallenge = () => {
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
        className="techChallenge-item"
        animate={visibleTechChallenge && { y: 0, opacity: 1 }}
        initial={{
          y: 80,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
      ></motion.div>
    </VisibilitySensor>
  );
};

export default TechChallenge;
