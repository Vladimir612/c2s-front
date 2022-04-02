import React from "react";
import { motion } from "framer-motion";
import { BsFillTrashFill } from "react-icons/bs";
import "./MultifieldInput.scss";

const MultifieldInput = (props) => {
    return (
        <div className="input-wrapper">
            <div className="ime-wrapper">
                <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder={props.placeholder1}
                    className="ustanova-input"
                    value={props.input1}
                    onChange={props.handleInput1}
                />
                <motion.button
                    className="obrisi-dugme"
                    onClick={props.deleteValue}
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
            <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder={props.placeholder2}
                className="tehnologija-input"
                value={props.input2}
                onChange={props.handleInput2}
            />
            <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="opis"
                id="opis"
                placeholder="Opis..."
                value={props.input3}
                onChange={props.handleInput3}
            />
        </div>
    );
};

export default MultifieldInput;
