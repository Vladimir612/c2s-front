import "./Panel.scss";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { useState } from "react";

const Panel = () => {
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
        animate={visiblePanel && { y: 0, opacity: 1 }}
        initial={{
          y: 80,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
      ></motion.div>
    </VisibilitySensor>
  );
};

export default Panel;
