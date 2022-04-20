import React from "react";
import { Link } from "react-router-dom";
import speedSlika from "../../../Assets/Images/speed-dating.jpg";
import { BsArrowRight } from "react-icons/bs";
import "./SpeedDating.scss";
import Pdf from "../../../Assets/pravila.pdf";

//kompanije
import raiffeisen from "../../../Assets/Images/Partneri/pokrovitelji/raiffeisen.svg";
import semos from "../../../Assets/Images/Partneri/pokrovitelji/semos.png";
import a1 from "../../../Assets/Images/Partneri/pokrovitelji/a1.png";
import adacta from "../../../Assets/Images/Partneri/pokrovitelji/adacta.png";
import eyesee from "../../../Assets/Images/Partneri/pokrovitelji/eyesee.png";
import prime from "../../../Assets/Images/Partneri/godisnji/prime.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const SpeedDating = () => {
  return (
    <div className="speed-dating-container">
      <div className="o-projektu-uvod">
        <div className="slika">
          <img src={speedSlika} alt="Speed dating" />
        </div>
        <div className="tekst">
          <h2>SPEED DATING</h2>
          <p>
            Intervju često predstavlja najbitniju fazu koja kandidate deli od
            željenog posla. Speed dating predstavlja petnaestominutnu simulaciju
            intervjua, gde će se delagati naći u ulozi kandidata za posao ili
            praksu. Kroz ovu simulaciju imaće priliku da pokažu sebe u najboljem
            svetlu HR predstavnicima kompanija, ali i da čuju više o kompaniji i
            o tome kako izgleda njihov proces selekcije.
          </p>
          <a href={Pdf} target="_blank" rel="noreferrer">
            <motion.button
              className="dugme transparentno"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              Pročitaj pravilnik
            </motion.button>
          </a>
        </div>
      </div>
      <div className="kompanije">
        <h2>KOMPANIJE</h2>
        <Link to="/nasi-partneri/raiffeisen">
          <div className="link-do-kompanije">
            <div className="img-wrapper">
              <LazyLoadImage effect="blur" src={raiffeisen} alt="Raiffeisen" />
            </div>
            <p>Saznaj više o kompaniji</p>
            <BsArrowRight size={35} color="#14191b" />
          </div>
        </Link>
        <Link to="/nasi-partneri/semos-education">
          <div className="link-do-kompanije">
            <div className="img-wrapper">
              <LazyLoadImage effect="blur" src={semos} alt="Semos-education" />
            </div>
            <p>Saznaj više o kompaniji</p>
            <BsArrowRight size={35} color="#14191b" />
          </div>
        </Link>
        <Link to="/nasi-partneri/a1">
          <div className="link-do-kompanije">
            <div className="img-wrapper">
              <LazyLoadImage effect="blur" src={a1} alt="A1" />
            </div>
            <p>Saznaj više o kompaniji</p>
            <BsArrowRight size={35} color="#14191b" />
          </div>
        </Link>
        <Link to="/nasi-partneri/prime-software">
          <div className="link-do-kompanije">
            <div className="img-wrapper">
              <LazyLoadImage effect="blur" src={prime} alt="Prime software" />
            </div>
            <p>Saznaj više o kompaniji</p>
            <BsArrowRight size={35} color="#14191b" />
          </div>
        </Link>
        <Link to="/nasi-partneri/adacta">
          <div className="link-do-kompanije">
            <div className="img-wrapper">
              <LazyLoadImage effect="blur" src={adacta} alt="Adacta" />
            </div>
            <p>Saznaj više o kompaniji</p>
            <BsArrowRight size={35} color="#14191b" />
          </div>
        </Link>
        <Link to="/nasi-partneri/eyesee">
          <div className="link-do-kompanije">
            <div className="img-wrapper">
              <LazyLoadImage effect="blur" src={eyesee} alt="Eyesee" />
            </div>
            <p>Saznaj više o kompaniji</p>
            <BsArrowRight size={35} color="#14191b" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SpeedDating;
