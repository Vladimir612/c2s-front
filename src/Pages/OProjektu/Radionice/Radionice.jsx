import React from "react";
import "./Radionice.scss";
import PredavacReact1 from "../../../Assets/Images/predavacReact1.jpg";

const Radionice = (props) => {
  return (
    <div className="wrap-radionica">
      <div className="opis">
        <h1>{props.imeRadionice}</h1>
        <p>{props.tekstOpis}</p>
      </div>
      <div className="predavaci">
        <img src={PredavacReact1} alt="zemaljac" className="slikePredavaca" />
        <p>{props.tekstPrviPredavac}</p>
      </div>
    </div>
  );
};

export default Radionice;
