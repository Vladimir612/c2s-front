import React from "react";
import TechnologyInput from "./TechnologyInput";
import { motion } from "framer-motion";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./TechnologiesInput.scss";

const TechnologiesInput = (props) => {
  let technologies;
  if (props.technologies != null)
    technologies = props.technologies.map((t, index) => {
      return (
        <TechnologyInput
          technologyInput={t.technologyInput}
          handleTehnologija={(e) => {
            let temp = [...props.technologies];
            temp[index].technologyInput = e.target.value;
            props.setTechnologies(temp);
          }}
          lvlOfKnowledge={t.lvlOfKnowledge}
          handleLvlKnowledge={(e) => {
            let temp = [...props.technologies];
            temp[index].lvlOfKnowledge = e.target.value;
            props.setTechnologies(temp);
          }}
          deleteTehnologija={() => {
            let temp = [...props.technologies];
            temp.splice(index, 1);
            props.setTechnologies(temp);
          }}
        />
      );
    });
  return (
    <div className="technologies-wrapper">
      {technologies && technologies}
      <motion.button
        className="add-btn"
        onClick={props.addTechnologies}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <AiOutlinePlusCircle size="1.2rem" color="white" />
      </motion.button>
    </div>
  );
};

export default TechnologiesInput;
