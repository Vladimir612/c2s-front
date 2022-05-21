import React from "react";
import techSlika from "../../../Assets/Images/tech-challenge.jpg";
import "./TechChallenge.scss";
import Pdf from "../../../Assets/pravila.pdf";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import CompaniesLinks from "../CompaniesLinks";

const TechChallenge = () => {
  return (
    <div className="tech-challenge-container">
      <div className="about-project-intro">
        <div className="photo">
          <LazyLoadImage effect="blur" src={techSlika} alt="Tech Challenge" />
        </div>
        <div className="text">
          <h2>TECH CHALLENGE</h2>
          <p>
            Tokom studija većina studenata nema priliku da oseti kako to izgleda
            rešavanje realnih IT problema na radnom mestu. Upravo zbog toga,
            cilj ovog dela projekta je da unaprediš svoj timski rad i izađeš iz
            zone komfora tako što ćeš zajedno sa članovima svog tima pronaći i
            prezentovati najbolje rešenje za IT studiju slučaja. Za učešće na
            Tech Challenge-u neophodno je da pošalješ prijavu i 17. maja zajedno
            sa timom prezentuješ svoje rešenje jednoj od kompanija!
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

export default TechChallenge;
