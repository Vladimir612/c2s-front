import React, { useState, useRef } from "react";
import "./NasiPartneri.scss";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Zaposleni from "./Zaposleni";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const PartnerSnimak = (props) => {
  const pocetakPartneri = useRef();

  const [vidljivZaposleni, setVidljivZaposleni] = useState(0);
  const handleMoveZaposleni = (napred) => {
    if (napred) {
      if (vidljivZaposleni === props.zaposleni.length - 1) {
        setVidljivZaposleni(0);
      } else {
        setVidljivZaposleni(vidljivZaposleni + 1);
      }
    } else {
      if (vidljivZaposleni === 0) {
        setVidljivZaposleni(props.zaposleni.length - 1);
      } else {
        setVidljivZaposleni(vidljivZaposleni - 1);
      }
    }
  };
  return (
    <>
      <div className="pocetak-pocetna" ref={pocetakPartneri}></div>

      <div className="partneri-container">
        <div className="video-wrapper">
          <video autoPlay loop muted key={props.video}>
            <source src={props.video} type="video/mp4" />
          </video>
        </div>
        <div className="left-arrow">
          <Link to={props.prevLink}>
            <BsArrowLeftCircleFill color="#fff" size={40} />
          </Link>
        </div>
        <div className="right-arrow">
          <Link to={props.nextLink}>
            <BsArrowRightCircleFill color="#fff" size={40} />
          </Link>
        </div>

        <div className="content">
          <div className="o-kompaniji">
            <h2>{props.partnerIme}</h2>
            <p>{props.oPartneru}</p>
          </div>
          <div className="zaposleni-slider">
            {props.zaposleni.map(
              (radnik, index) =>
                vidljivZaposleni === index && (
                  <Zaposleni
                    key={index}
                    slikaZaposlenog={radnik.slika}
                    imeZaposlenog={radnik.ime}
                    zaposleniJeRekao={radnik.zaposleniJeRekao}
                  />
                )
            )}
            <div className="zaposleni-nav">
              <div className="zaposleni-levo">
                <BsArrowLeftCircleFill
                  color="#fff"
                  size={25}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleMoveZaposleni(false)}
                />
              </div>
              <div className="zaposleni-desno">
                <BsArrowRightCircleFill
                  color="#fff"
                  size={25}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleMoveZaposleni(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer pocetakPocetna={pocetakPartneri} />
    </>
  );
};

export default PartnerSnimak;
