import "./O_tema.scss";

import React from "react";

const O_tema = (props) => {
  return (
    <div className="wrap-otema">
      <div className="div-za-sliku">
        <img
          src={props.slika}
          alt="c2s fon radionice"
          className="slika-otema"
        />
      </div>
      <div className="div-za-tekst">
        <h1 className="ime-otema">{props.ime}</h1>
        <p className="tekst-otema">{props.text}</p>
      </div>
    </div>
  );
};

export default O_tema;
