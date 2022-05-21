import React from "react";
import speedSlika from "../../../Assets/Images/speed-dating.jpg";
import "./SpeedDating.scss";
import Pdf from "../../../Assets/pravila.pdf";

import { motion } from "framer-motion";
import CompaniesLinks from "./../CompaniesLinks";

const SpeedDating = () => {
  return (
    <div className="speed-dating-container">
      <div className="about-project-intro">
        <div className="photo">
          <img src={speedSlika} alt="Speed dating" />
        </div>
        <div className="text">
          <h2>SPEED DATING</h2>
          <p>
            Intervju često predstavlja najbitniju fazu koja kandidate deli od
            željenog posla. Speed dating, kao petnaestominutna simulacija
            intervjua, prilika je da se nađeš u ulozi kandidata za posao ili
            praksu, pripremiš za budući susret sa poslodavcima i oslobodiš
            treme. Pored toga, moći ćeš da pokažeš sebe u najboljem svetlu HR
            predstavnicima kompanija, ali i da čuješ više o kompaniji i o tome
            kako izgleda njihov proces selekcije.
          </p>
          <a
            href={Pdf}
            target="_blank"
            rel="noreferrer"
            style={{ display: "none" }}
          >
            <motion.button
              className="btn transparent"
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
      <CompaniesLinks />
    </div>
  );
};

export default SpeedDating;
