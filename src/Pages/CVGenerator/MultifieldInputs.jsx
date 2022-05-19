import React from "react";
import { motion } from "framer-motion";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./TechnologiesInput.scss";
import MultifieldInput from "./MultifieldInput";

const MultifieldInputs = (props) => {
  let values;
  if (props.values != null)
    values = props.values.map((v, index) => {
      return (
        <MultifieldInput
          input1={v.input1}
          handleInput1={(e) => {
            let temp = [...props.values];
            temp[index].input1 = e.target.value;
            props.setValues(temp);
          }}
          input2={v.input2}
          handleInput2={(e) => {
            let temp = [...props.values];
            temp[index].input2 = e.target.value;
            props.setValues(temp);
          }}
          input3={v.input3}
          handleInput3={(e) => {
            let temp = [...props.values];
            temp[index].input3 = e.target.value;
            props.setValues(temp);
          }}
          deleteValue={() => {
            let temp = [...props.values];
            temp.splice(index, 1);
            props.setValues(temp);
          }}
          placeholder1={props.placeholder1}
          placeholder2={props.placeholder2}
        />
      );
    });
  return (
    <div className="technologies-wrapper">
      {values && values}
      <motion.button
        className="add-btn"
        onClick={props.addValue}
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

export default MultifieldInputs;
