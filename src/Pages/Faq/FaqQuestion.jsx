import React, { useState } from "react";
import "./FaqQuestion.scss";
import { BsPlusLg } from "react-icons/bs";
import { motion } from "framer-motion";

const FaqQuestion = (props) => {
  const [visibleAnswer, setVisibleAnswerr] = useState(false);
  return (
    <li className="faq-question">
      <div className="question-wrapper">
        <motion.div
          animate={{ rotate: visibleAnswer ? 45 : 0 }}
          initial={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="show-answer"
          onClick={() => setVisibleAnswerr(!visibleAnswer)}
        >
          <BsPlusLg size={16} color="#fff" />
        </motion.div>
        <p className="question">{props.question}</p>
      </div>

      <motion.div
        className={visibleAnswer ? "answer-wrapper" : "answer-wrapper hidden"}
        animate={{
          height: visibleAnswer ? "auto" : "0rem",
          width: visibleAnswer ? "auto" : "0rem",
          opacity: visibleAnswer ? 1 : 0,
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
