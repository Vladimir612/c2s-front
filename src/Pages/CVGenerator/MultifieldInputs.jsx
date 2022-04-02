import React from "react";
import { motion } from "framer-motion";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./TehnologijeInput.scss";
import MultifieldInput from "./MultifieldInput";

const MultifieldInputs = (props) => {
    let values;
    if (props.values != null)
        values = props.values.map((v, index) => {
            return (
                <MultifieldInput
                    input1={v.input1}
                    handleInput1={(e) => {
                        let pom = [...props.values];
                        pom[index].input1 = e.target.value;
                        props.setValues(pom);
                    }}
                    input2={v.input2}
                    handleInput2={(e) => {
                        let pom = [...props.values];
                        pom[index].input2 = e.target.value;
                        props.setValues(pom);
                    }}
                    input3={v.input3}
                    handleInput3={(e) => {
                        let pom = [...props.values];
                        pom[index].input3 = e.target.value;
                        props.setValues(pom);
                    }}
                    deleteValue={() => {
                        let pom = [...props.values];
                        pom.splice(index, 1);
                        props.setValues(pom);
                    }}
                    placeholder1={props.placeholder1}
                    placeholder2={props.placeholder2}
                />
            );
        });
    return (
        <div className="tehnologije-wrapper">
            {values && values}
            <motion.button
                className="dodaj-dugme"
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
