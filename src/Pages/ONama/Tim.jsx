import React from "react";
import "./Tim.scss";
import { motion } from "framer-motion";

const Tim = (props) => {
  return (
    <motion.div
      class="tim-content"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div class="tim-content-text">
        <h2>{props.tim.imeTima}</h2>
        <p>{props.tim.oTimu}</p>
        <div class="o-nama-coordinator">
          <div class="img-wrapper">
            <img
              src={props.tim.slikaKoordinatora}
              alt={props.tim.imeKoordinatora}
            />
          </div>
          <div class="o-nama-coordinator-text">
            <h5>{props.tim.imeKoordinatora}</h5>
            <p>{props.tim.funkcijaKoordinatora}</p>
          </div>
        </div>
      </div>
      <div class="o-nama-content-img">
        <div className="img-wrapper">
          <img src={props.tim.slikaTima} alt={props.tim.nazivTima} />
        </div>
      </div>
    </motion.div>
  );
};

export default Tim;
