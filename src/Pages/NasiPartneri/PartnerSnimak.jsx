import React, { useState, useRef, useEffect } from "react";
import "./NasiPartneri.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Zaposleni from "./Zaposleni";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { scrollFunc } from "../../Components/Footer/Footer";
import LazyLoad from "react-lazyload";

const PartnerSnimak = (props) => {
  const pocetakPartneri = useRef();

  useEffect(() => {
    scrollFunc(pocetakPartneri);
  }, []);
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
          <LazyLoad>
            <video autoPlay loop muted key={props.video} poster={props.poster}>
              <source src={props.video} type="video/mp4" />
            </video>
          </LazyLoad>
        </div>
        <div className="left-arrow">
          <Link to={props.prevLink} onClick={() => setVidljivZaposleni(0)}>
            <FiChevronLeft size={40} color="#b4afb3" />
          </Link>
        </div>
        <div className="right-arrow">
          <Link to={props.nextLink} onClick={() => setVidljivZaposleni(0)}>
            <FiChevronRight size={40} color="#b4afb3" />
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
                <FiChevronLeft
                  color="#fff"
                  size={25}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleMoveZaposleni(false)}
                />
              </div>
              <div className="zaposleni-desno">
                <FiChevronRight
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
