import React from "react";
import "./SpeedDating.scss";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { useState } from "react";

const SpeedDating = () => {
  const [visibleSpeedDating, setVisibleSpeedDating] = useState(false);
  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && !visibleSpeedDating) {
          setVisibleSpeedDating(true);
        }
        return;
      }}
      delayedCall
      partialVisibility
    >
      <motion.div
        className="speedDating-item"
        animate={visibleSpeedDating && { y: 0, opacity: 1 }}
        initial={{
          y: 80,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
      ></motion.div>
    </VisibilitySensor>
  );
};

export default SpeedDating;
