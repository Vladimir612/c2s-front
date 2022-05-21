import React, { useState } from "react";
import "./RaiffeisenCustomCard.scss";
import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

import balls2 from "../../Assets/Images/krugovi-radionica.png";
import { Link } from "react-router-dom";

import raiffeisen from "../../Assets/Images/Partners/pokrovitelji/raiffeisen.svg";

import IvaKrcmar from "../../Assets/Images/Partners/Raiffeisen/radionice/IvaKrcmar.jpg";
import MarkoMilosevic from "../../Assets/Images/Partners/Raiffeisen/radionice/MarkoMilosevic.jpg";
import StefanGavrilovic from "../../Assets/Images/Partners/Raiffeisen/zaposleni/StefanGavrilovic.jpg";

const radionica5 = {
  heading: "DevOps pristup razvoju softvera",
  firstPar:
    "Ovladavanje temom agilnog razvoja softvera postaje sve više traženo u oblasti informacionih tehnologija. Priliku za upoznavanje sa ovom oblašću i primenu alata na konkretnom, prethodno razvijenom projektu imaćete upravo na radionici koju će držati zaposleni u kompaniji Raiffeisen banka.",
  secondPar:
    "Ukoliko se odlučite za radionicu kompanije Raiffeisen banka trebalo bi pre samog dolaska da imate implementiranu aplikaciju u nekoj od predloženih tehnologija (JavaScript, Java, Python, C#), čiju kompleksnost određujete samostalno. Prilikom razvoja aplikacije, potrebno je verzionisati kod korišćenjem Git-a, dok bi ciljana platforma za kreiranje repozitorijuma bi bio Gitlab. Drugi dan dan radionice biće posvećen DevOps pristupu, gde bi bila obrađena kontejnerizacija projekata i upoznavanje sa pisanjem CI/CD skripti.",
  lecturer: {
    name: "Iva Krčmar",
    moreInfo:
      "Iva Krčmar je rođena 1993. godine u Beogradu, završila Petu ekonomsku školu Rakovica i student je završne godine na Fakultetu organizacionih nauka u Beogradu, smer informacioni sistemi i tehnologije. Od 2018. godine radi u razvojnom timu Raiffeisen banke kao web developer. Imala je priliku da radi na razvoju projekata kako za fizička, tako i za pravna lica.  Deo je agilnog tima koji se pretežno bavi razvojem online kredita i tekućih računa za small business klijente.",
    photo: IvaKrcmar,
  },
  lecturer2: {
    name: "Mirko Milošević",
    moreInfo:
      "Mirko Milošević je rođen 1993. godine u Beogradu, gde je i završio Trinaestu beogradsku gimnaziju i Elektrotehnički fakultet, smer računarska tehnika i informatika. Tokom studiranja učestvovao u radu međunarodnih studentskih organizacija. Od 2018. godine radi za Raiffeisen banku kao backend developer na njihovim digitalnim proizvodima. Deo je agilnog tima koji se pretežno bavi razvojem online kredita i tekućih računa za small business klijente.",
    photo: MarkoMilosevic,
  },
  predavac3: {
    name: "Stefan Gavrilović",
    moreInfo:
      "Rođen 1994. godine u Brčkom.Elektrotehnički fakultet, smer Softversko inženjerstvo je završio 2019. godine.Tokom studiranja radio je na zanimljivim projektima iz raznih oblasti informacionih tehnologija. Neki od najatraktivnijih su Scraping PDF dokumenata za potrebe banke i razvoj automatizovanog robota. Trenutno radi kao lider DevOps tima, sa konkretnom pozicijom IT Transformation Lead. Pored standardnih zaduženja u oblasi DevOps-a, bavi se I uvodjenjem novih IT trendova.",
    photo: StefanGavrilovic,
  },
  company: {
    name: "Raiffeisen",
    link: "/nasi-partneri/raiffeisen",
    photo: raiffeisen,
  },
};

const PredavaciContainer = () => {
  return (
    <div className="predavaci-container">
      <div className="lecturer">
        <div className="photo-lecturer">
          <div className="img-wrapper">
            <img
              src={radionica5.lecturer.photo}
              alt={radionica5.lecturer.name}
            />
          </div>
        </div>
        <div className="about-lecturer">
          <p className="lecturer-name">{radionica5.lecturer.name}</p>
          <p className="lecturer-indicator">PREDAVAČ</p>
          <p className="lecturer-more-info">{radionica5.lecturer.moreInfo}</p>
        </div>
      </div>
      <div className="lecturer">
        <div className="photo-lecturer">
          <div className="img-wrapper">
            <img
              src={radionica5.lecturer2.photo}
              alt={radionica5.lecturer2.name}
            />
          </div>
        </div>
        <div className="about-lecturer">
          <p className="lecturer-name">{radionica5.lecturer2.name}</p>
          <p className="lecturer-indicator">PREDAVAČ</p>
          <p className="lecturer-more-info">{radionica5.lecturer2.moreInfo}</p>
        </div>
      </div>
      <div className="lecturer">
        <div className="photo-lecturer">
          <div className="img-wrapper">
            <img
              src={radionica5.predavac3.photo}
              alt={radionica5.predavac3.name}
            />
          </div>
        </div>
        <div className="about-lecturer">
          <p className="lecturer-name">{radionica5.predavac3.name}</p>
          <p className="lecturer-indicator">PREDAVAČ</p>
          <p className="lecturer-more-info">{radionica5.predavac3.moreInfo}</p>
        </div>
      </div>
    </div>
  );
};

const RaiffeisenCustomCard = () => {
  const [showMore, setShowMore] = useState(false);
  const [displayedLecture, setDisplayedLecture] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && !displayedLecture) {
          setDisplayedLecture(true);
        }
        return;
      }}
      delayedCall
      partialVisibility
    >
      <motion.div
        className="raiffeisen-card"
        animate={displayedLecture && { y: 0, opacity: 1 }}
        initial={{
          y: 80,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
      >
        {!showMore ? (
          <div className="top">
            <div className="balls-photo">
              <img src={balls2} alt="Lopte" />
            </div>
            <div className="left">
              <h2>{radionica5.heading}</h2>
              <p>{radionica5.firstPar}</p>
            </div>
            <div className="right">
              <p>{radionica5.secondPar}</p>
            </div>{" "}
          </div>
        ) : (
          <PredavaciContainer />
        )}
        <div className="bottom">
          <motion.button
            className="show-hide"
            onClick={() => setShowMore(!showMore)}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            {!showMore ? "Predavači" : "Radionica"}
            <div className="arrow-wrapper"></div>
          </motion.button>
          <Link to={radionica5.company.link}>
            <div className="find-about-company">
              <div className="img-wrapper">
                <img
                  src={radionica5.company.photo}
                  alt={radionica5.company.name}
                />
              </div>
              <p>Saznaj više o kompaniji</p>
              <BsArrowRight size={25} color="#14191b" />
            </div>
          </Link>
        </div>
      </motion.div>
    </VisibilitySensor>
  );
};

export default RaiffeisenCustomCard;
