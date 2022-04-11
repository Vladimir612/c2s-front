import React from "react";
import { Link } from "react-router-dom";
import "./UcesnikPanela.scss";

const UcesnikPanela = (props) => {
  return (
    <div
      className={
        props.ucesnik.moderator
          ? "ucesnik-panela moderator"
          : "ucesnik-panela panelista"
      }
    >
      <h2>{props.ucesnik.moderator ? "MODERATOR PANELA" : "PANELISTA"}</h2>
      <div className="ucesnik">
        <div className="slika">
          <div className="img-wrapper">
            <img src={props.ucesnik.slika} alt={props.ucesnik.ime} />
          </div>
        </div>
        <div className="podaci">
          <h3>{props.ucesnik.ime}</h3>
          <p>{props.ucesnik.pozicija}</p>
        </div>
      </div>
      <div className="rekao-je">{props.ucesnik.rekaoJe}</div>
      {!props.ucesnik.moderator && (
        <Link to={props.ucesnik.linkKompanije}>
          <div className="kompanija">
            <div className="img-wrapper">
              <img src={props.ucesnik.slikaKompanije} alt="Slika kompanije" />
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default UcesnikPanela;
