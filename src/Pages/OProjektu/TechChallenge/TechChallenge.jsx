import React from "react";
import { Link } from "react-router-dom";
import techSlika from "../../../Assets/Images/tech-challenge.jpg";
import { BsArrowRight } from "react-icons/bs";
import "./TechChallenge.scss";
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

const TechChallenge = () => {
  return (
    <div className="tech-challenge-container">
      <div className="o-projektu-uvod">
        <div className="photo">
          <LazyLoadImage effect="blur" src={techSlika} alt="Tech Challenge" />
        </div>
        <div className="tekst">
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
              className="btn transparentno"
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
              <LazyLoadImage effect="blur" src={eyesee} alt="EyeSee" />
            </div>
            <p>Saznaj više o kompaniji</p>
            <BsArrowRight size={35} color="#14191b" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TechChallenge;
