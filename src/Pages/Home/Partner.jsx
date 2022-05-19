import React from "react";
import "./Partner.scss";

const Partner = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div
        className="partner"
        style={{
          width: props.width,
          height: props.height,
          backgroundColor: props.bgColor,
        }}
      >
        <img src={props.partnerImage} alt={props.partnerName} />
      </div>
    </a>
  );
};

export default Partner;
