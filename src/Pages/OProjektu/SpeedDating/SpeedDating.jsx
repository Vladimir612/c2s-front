import React from "react";
import { Link } from "react-router-dom";
import ilustracijaTest from "../../../Assets/Images/ilustracija-test.svg";
import { BsArrowRight } from "react-icons/bs";
import "./SpeedDating.scss";

//kompanije
import raiffeisen from "../../../Assets/Images/Partneri/raiffeisen.svg";
import { motion } from "framer-motion";

const SpeedDating = () => {
  return (
    <div className="speed-dating-container">
      <div className="o-projektu-uvod">
        <div className="slika">
          <motion.img
            src={ilustracijaTest}
            alt="Radionica"
            animate={{ x: "0%", opacity: 1 }}
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            transition={{ duration: 1 }}
          />
        </div>
        <motion.div
          className="tekst"
          animate={{ x: "0%", opacity: 1 }}
          initial={{
            x: "100%",
            opacity: 0,
          }}
          transition={{ duration: 1 }}
        >
          <h2>SPEED DATING</h2>
          <p>
            Svi naši članovi imaju prilike da uče o savremenim tehnologijama i
            da dopunjuju svoja znanja iz najraznovrsnijih oblasti. Radionice
            koje smo do sada održali pokrivale su frontend i backend
            development, web development, web dizajn, grafički dizajn, game
            development, data science, kao i mnoge tehnologije u pomenutim
            oblastima informacionih tehnologija. Pored toga, pažnju posvećujemo
            razvoju soft, odnosno mekih veština.
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
        <Link to="/nasi-partneri/raiffeisen">
          <div className="link-do-kompanije">
            <div className="img-wrapper">
              <img src={raiffeisen} alt="Raiffeisen" />
            </div>
            <p>Saznaj više o kompaniji</p>
            <BsArrowRight size={35} color="#14191b" />
          </div>
        </Link>
        <Link to="/nasi-partneri/raiffeisen">
          <div className="link-do-kompanije">
            <div className="img-wrapper">
              <img src={raiffeisen} alt="Raiffeisen" />
            </div>
            <p>Saznaj više o kompaniji</p>
            <BsArrowRight size={35} color="#14191b" />
          </div>
        </Link>
        <Link to="/nasi-partneri/raiffeisen">
          <div className="link-do-kompanije">
            <div className="img-wrapper">
              <img src={raiffeisen} alt="Raiffeisen" />
            </div>
            <p>Saznaj više o kompaniji</p>
            <BsArrowRight size={35} color="#14191b" />
          </div>
        </Link>
        <Link to="/nasi-partneri/raiffeisen">
          <div className="link-do-kompanije">
            <div className="img-wrapper">
              <img src={raiffeisen} alt="Raiffeisen" />
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
