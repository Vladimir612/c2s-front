import React from "react";
import { Link } from "react-router-dom";
import techSlika from "../../../Assets/Images/tech-challenge.jpg";
import { BsArrowRight } from "react-icons/bs";
import "./TechChallenge.scss";

//kompanije
import raiffeisen from "../../../Assets/Images/Partneri/pokrovitelji/raiffeisen.svg";
import semos from "../../../Assets/Images/Partneri/pokrovitelji/semos.png";
import a1 from "../../../Assets/Images/Partneri/pokrovitelji/a1.png";
import adacta from "../../../Assets/Images/Partneri/pokrovitelji/adacta.png";
import eyesee from "../../../Assets/Images/Partneri/pokrovitelji/eyesee.png";
import prime from "../../../Assets/Images/Partneri/godisnji/prime.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TechChallenge = () => {
  return (
    <div className="tech-challenge-container">
      <div className="o-projektu-uvod">
        <div className="slika">
          <LazyLoadImage effect="blur" src={techSlika} alt="Tech challenge" />
        </div>
        <div className="tekst">
          <h2>TECH CHALLENGE</h2>
          <p>
            Tokom studija, većina studenata nema priliku da oseti kako to
            izgleda rešavanje realnih IT problema na radnom mestu. Upravo zbog
            toga cilj ovog dela projekta je da se članovi timova upoznaju i
            ponude rešenje za IT studiju slučaja. Za učešće na ovom delu
            projekta neophodno je da okupiš tim ili se samostalno prijaviš,
            pošalješ prijavu i 17. maja prezentuješ svoje rešenje jednoj od
            kompanija!
          </p>
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

export default TechChallenge;
