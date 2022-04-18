import React from "react";
import { Link } from "react-router-dom";
import speedSlika from "../../../Assets/Images/speed-dating.png";
import { BsArrowRight } from "react-icons/bs";
import "./SpeedDating.scss";

//kompanije
import raiffeisen from "../../../Assets/Images/Partneri/pokrovitelji/raiffeisen.svg";
import semos from "../../../Assets/Images/Partneri/pokrovitelji/semos.png";
import a1 from "../../../Assets/Images/Partneri/pokrovitelji/a1.png";
import adacta from "../../../Assets/Images/Partneri/pokrovitelji/adacta.png";
import eyesee from "../../../Assets/Images/Partneri/pokrovitelji/eyesee.png";
import prime from "../../../Assets/Images/Partneri/godisnji/prime.png";

import { motion } from "framer-motion";

const SpeedDating = () => {
  return (
    <div className="speed-dating-container">
      <div className="o-projektu-uvod">
        <div className="slika">
          <motion.img
            src={speedSlika}
            alt="Speed dating"
            animate={{ y: 0, opacity: 1 }}
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
          />
        </div>
        <motion.div
          className="tekst"
          animate={{ y: 0, opacity: 1 }}
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
        >
          <h2>SPEED DATING</h2>
          <p>
            Intervju često predstavlja najbitniju fazu koja kandidate deli od
            željenog posla. Speed dating predstavlja petnaestominutnu simulaciju
            intervjua, gde će se delagati naći u ulozi kandidata za posao ili
            praksu. Kroz ovu simulaciju imaće priliku da pokažu sebe u najboljem
            svetlu HR predstavnicima kompanija, ali i da čuju više o kompaniji i
            o tome kako izgleda njihov proces selekcije.
          </p>
        </motion.div>
      </div>
      <div className="kompanije">
        <h2>KOMPANIJE</h2>
        <Link to="/nasi-partneri/raiffeisen">
          <div className="link-do-kompanije">
            <div className="img-wrapper">
              <img src={raiffeisen} alt="Raiffeisen" />
            </div>
            <p>Saznaj više o kompaniji</p>
            <BsArrowRight size={35} color="#14191b" />
          </div>
        </Link>
        <Link to="/nasi-partneri/semos-education">
          <div className="link-do-kompanije">
            <div className="img-wrapper">
              <img src={semos} alt="Semos-education" />
            </div>
            <p>Saznaj više o kompaniji</p>
            <BsArrowRight size={35} color="#14191b" />
          </div>
        </Link>
        <Link to="/nasi-partneri/a1">
          <div className="link-do-kompanije">
            <div className="img-wrapper">
              <img src={a1} alt="A1" />
            </div>
            <p>Saznaj više o kompaniji</p>
            <BsArrowRight size={35} color="#14191b" />
          </div>
        </Link>
        <Link to="/nasi-partneri/prime-software">
          <div className="link-do-kompanije">
            <div className="img-wrapper">
              <img src={prime} alt="Prime software" />
            </div>
            <p>Saznaj više o kompaniji</p>
            <BsArrowRight size={35} color="#14191b" />
          </div>
        </Link>
        <Link to="/nasi-partneri/adacta">
          <div className="link-do-kompanije">
            <div className="img-wrapper">
              <img src={adacta} alt="Adacta" />
            </div>
            <p>Saznaj više o kompaniji</p>
            <BsArrowRight size={35} color="#14191b" />
          </div>
        </Link>
        <Link to="/nasi-partneri/eyesee">
          <div className="link-do-kompanije">
            <div className="img-wrapper">
              <img src={eyesee} alt="Eyesee" />
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
