import "./O_tema.scss";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { useState } from "react";

import React from "react";

const O_tema = (props) => {
  const [visibleOtema, setVisibleOtema] = useState(false);
  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && !visibleOtema) {
          setVisibleOtema(true);
        }
        return;
      }}
      delayedCall
      partialVisibility
    >
      <motion.div
        className="otema-item"
        animate={visibleOtema && { y: 0, opacity: 1 }}
        initial={{
          y: -20,
          opacity: 0,
        }}
        transition={{ duration: 0.7 }}
      >
        <div className="wrap-otema">
          <div className="div-za-sliku">
            <img
              src={props.slika}
              alt="c2s fon radionice"
              className="slika-otema"
            />
          </div>
          <div className="div-za-tekst">
            <h1 className="ime-otema">{props.ime}</h1>
            <p className="tekst-otema">{props.text}</p>
          </div>
        </div>
      </motion.div>
    </VisibilitySensor>
  );
};

export default O_tema;
