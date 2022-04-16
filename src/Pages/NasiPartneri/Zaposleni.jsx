import React from "react";
import "./Zaposleni.scss";
import { motion } from "framer-motion";

const Zaposleni = (props) => {
  return (
    <motion.div
      className="zaposleni"
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="zaposleni-wrapper">
        <img
          src={props.slikaZaposlenog}
          alt={props.imeZaposlenog}
          className="zaposleni-img"
        />
        <h4 className="zaposleni-name">{props.imeZaposlenog}</h4>
      </div>
      <p className="zaposleni-je-rekao">{props.zaposleniJeRekao}</p>
    </motion.div>
  );
};

export default Zaposleni;
