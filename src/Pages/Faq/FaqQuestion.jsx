import React, { useState } from "react";
import "./FaqQuestion.scss";
import { BsPlusLg } from "react-icons/bs";
import { motion } from "framer-motion";

const FaqQuestion = (props) => {
  const [vidljivOdgovor, setVidljivOdgovor] = useState(false);
  return (
    <li className="faq-question">
      <div className="pitanje-wrapper">
        <motion.div
          animate={{ rotate: vidljivOdgovor ? 45 : 0 }}
          initial={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="prikazi-odgovor"
          onClick={() => setVidljivOdgovor(!vidljivOdgovor)}
        >
          <BsPlusLg size={16} color="#fff" />
        </motion.div>
        <p className="pitanje">{props.question}</p>
      </div>

      <motion.div
        className={
          vidljivOdgovor ? "odgovor-wrapper" : "odgovor-wrapper hidden"
        }
        animate={{
          height: vidljivOdgovor ? "auto" : "0rem",
          width: vidljivOdgovor ? "auto" : "0rem",
          opacity: vidljivOdgovor ? 1 : 0,
        }}
        initial={{ height: "0rem", width: "0rem", opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {<p>{props.answer}</p>}
      </motion.div>
    </li>
  );
};

export default FaqQuestion;
