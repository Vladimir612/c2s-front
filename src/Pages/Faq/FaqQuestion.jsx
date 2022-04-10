import React from "react";
import "./FaqQuestion.scss";

const FaqQuestion = (props) => {
  return (
    <li className="faq-question">
      <p className="pitanje">{props.question}</p>
      <p className="odg odg1">{props.answer}</p>
    </li>
  );
};

export default FaqQuestion;
