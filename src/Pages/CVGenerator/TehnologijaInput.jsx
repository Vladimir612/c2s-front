import React from "react";
import { motion } from "framer-motion";
import "./TehnologijaInput.scss";
import { BsFillTrashFill } from "react-icons/bs";

const TehnologijaInput = (props) => {
    return (
        <div className="tehnologija-wrapper">
            <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder=".NET"
                className="tehnologija-input"
                value={props.tehnologijaInput}
                onChange={props.handleTehnologija}
            />
            <motion.select
                whileFocus={{ scale: 1.02 }}
                placeholder="Nivo znanja"
                className="tehnologija-nivo-input"
                value={props.nivoZnanjaInput}
                onChange={props.handleNivoZnanja}
            >
                <option value="Osnovni">Osnovni</option>
                <option value="Srednji">Srednji</option>
                <option value="Napredni">Napredni</option>
            </motion.select>

            <motion.button
                className="obrisi-dugme"
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

export default TehnologijaInput;
