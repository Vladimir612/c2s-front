import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

//companies
import raiffeisen from "../../Assets/Images/Partners/pokrovitelji/raiffeisen.svg";
import semos from "../../Assets/Images/Partners/pokrovitelji/semos.png";
import a1 from "../../Assets/Images/Partners/pokrovitelji/a1.png";
import adacta from "../../Assets/Images/Partners/pokrovitelji/adacta.png";
import eyesee from "../../Assets/Images/Partners/pokrovitelji/eyesee.png";
import prime from "../../Assets/Images/Partners/godisnji/prime.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CompaniesLinks = () => {
  return (
    <div className="companies">
      <h2>KOMPANIJE</h2>
      <Link to="/nasi-partneri/raiffeisen">
        <div className="company-link">
          <div className="img-wrapper">
            <LazyLoadImage effect="blur" src={raiffeisen} alt="Raiffeisen" />
          </div>
          <p>Saznaj više o kompaniji</p>
          <BsArrowRight size={35} color="#14191b" />
        </div>
      </Link>
      <Link to="/nasi-partneri/semos-education">
        <div className="company-link">
          <div className="img-wrapper">
            <LazyLoadImage effect="blur" src={semos} alt="Semos-education" />
          </div>
          <p>Saznaj više o kompaniji</p>
          <BsArrowRight size={35} color="#14191b" />
        </div>
      </Link>
      <Link to="/nasi-partneri/a1">
        <div className="company-link">
          <div className="img-wrapper">
            <LazyLoadImage effect="blur" src={a1} alt="A1" />
          </div>
          <p>Saznaj više o kompaniji</p>
          <BsArrowRight size={35} color="#14191b" />
        </div>
      </Link>
      <Link to="/nasi-partneri/prime-software">
        <div className="company-link">
          <div className="img-wrapper">
            <LazyLoadImage effect="blur" src={prime} alt="Prime software" />
          </div>
          <p>Saznaj više o kompaniji</p>
          <BsArrowRight size={35} color="#14191b" />
        </div>
      </Link>
      <Link to="/nasi-partneri/adacta">
        <div className="company-link">
          <div className="img-wrapper">
            <LazyLoadImage effect="blur" src={adacta} alt="Adacta" />
          </div>
          <p>Saznaj više o kompaniji</p>
          <BsArrowRight size={35} color="#14191b" />
        </div>
      </Link>
      <Link to="/nasi-partneri/eyesee">
        <div className="company-link">
          <div className="img-wrapper">
            <LazyLoadImage effect="blur" src={eyesee} alt="EyeSee" />
          </div>
          <p>Saznaj više o kompaniji</p>
          <BsArrowRight size={35} color="#14191b" />
        </div>
      </Link>
    </div>
  );
};

export default CompaniesLinks;
