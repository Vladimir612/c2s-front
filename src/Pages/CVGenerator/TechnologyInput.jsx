import React from "react";
import { motion } from "framer-motion";
import "./TechnologyInput.scss";
import { BsFillTrashFill } from "react-icons/bs";

const TechnologyInput = (props) => {
  return (
    <div className="technology-wrapper">
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="text"
        placeholder=".NET"
        className="technology-input"
        value={props.technologyInput}
        onChange={props.handleTehnologija}
      />
      <motion.select
        whileFocus={{ scale: 1.02 }}
        placeholder="Nivo znanja"
        className="technology-lvl-input"
        value={props.lvlOfKnowledge}
        onChange={props.handleLvlKnowledge}
      >
        <option value="Osnovni">Osnovni</option>
        <option value="Srednji">Srednji</option>
        <option value="Napredni">Napredni</option>
      </motion.select>

      <motion.button
        className="delete-btn"
        onClick={props.deleteTehnologija}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <BsFillTrashFill size="1.2rem" color="white" />
      </motion.button>
    </div>
  );
};

export default TechnologyInput;
