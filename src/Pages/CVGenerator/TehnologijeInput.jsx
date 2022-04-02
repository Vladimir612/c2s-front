import React from "react";
import TehnologijaInput from "./TehnologijaInput";
import { motion } from "framer-motion";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./TehnologijeInput.scss";

const TehnologijeInput = (props) => {
    let tehnologije;
    if (props.tehnologije != null)
        tehnologije = props.tehnologije.map((t, index) => {
            return (
                <TehnologijaInput
                    tehnologijaInput={t.tehnologijaInput}
                    handleTehnologija={(e) => {
                        let pom = [...props.tehnologije];
                        pom[index].tehnologijaInput = e.target.value;
                        props.setTehnologije(pom);
                    }}
                    nivoZnanjaInput={t.nivoZnanjaInput}
                    handleNivoZnanja={(e) => {
                        let pom = [...props.tehnologije];
                        pom[index].nivoZnanjaInput = e.target.value;
                        props.setTehnologije(pom);
                    }}
                    deleteTehnologija={() => {
                        let pom = [...props.tehnologije];
                        pom.splice(index, 1);
                        props.setTehnologije(pom);
                    }}
                />
            );
        });
    return (
        <div className="tehnologije-wrapper">
            {tehnologije && tehnologije}
            <motion.button
                className="dodaj-dugme"
                onClick={props.addTehnologija}
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

export default TehnologijeInput;
