import React, { useState } from "react";
import "./RaiffeisenKartica.scss";
import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

import lopte2 from "../../Assets/Images/krugovi-radionica.png";
import { Link } from "react-router-dom";

import raiffeisen from "../../Assets/Images/Partneri/pokrovitelji/raiffeisen.svg";

import IvaKrcmar from "../../Assets/Images/Partneri/Raiffeisen/radionice/IvaKrcmar.jpg";
import MarkoMilosevic from "../../Assets/Images/Partneri/Raiffeisen/radionice/MarkoMilosevic.jpg";
import StefanGavrilovic from "../../Assets/Images/Partneri/Raiffeisen/zaposleni/StefanGavrilovic.jpg";

const radionica5 = {
  heading: "DevOps pristup razvoju softvera",
  prviParagraf:
    "Ovladavanje temom agilnog razvoja softvera postaje sve više traženo u oblasti informacionih tehnologija. Priliku za upoznavanje sa ovom oblašću i primenu alata na konkretnom, prethodno razvijenom projektu imaćete upravo na radionici koju će držati zaposleni u kompaniji Raiffeisen banka.",
  drugiParagraf:
    "Ukoliko se odlučite za radionicu kompanije Raiffeisen banka trebalo bi pre samog dolaska da imate implementiranu aplikaciju u nekoj od predloženih tehnologija (JavaScript, Java, Python, C#), čiju kompleksnost određujete samostalno. Prilikom razvoja aplikacije, potrebno je verzionisati kod korišćenjem Git-a, dok bi ciljana platforma za kreiranje repozitorijuma bi bio Gitlab. Drugi dan dan radionice biće posvećen DevOps pristupu, gde bi bila obrađena kontejnerizacija projekata i upoznavanje sa pisanjem CI/CD skripti.",
  predavac: {
    name: "Iva Krčmar",
    vise: "Iva Krčmar je rođena 1993. godine u Beogradu, završila Petu ekonomsku školu Rakovica i student je završne godine na Fakultetu organizacionih nauka u Beogradu, smer informacioni sistemi i tehnologije. Od 2018. godine radi u razvojnom timu Raiffeisen banke kao web developer. Imala je priliku da radi na razvoju projekata kako za fizička, tako i za pravna lica.  Deo je agilnog tima koji se pretežno bavi razvojem online kredita i tekućih računa za small business klijente.",
    photo: IvaKrcmar,
  },
  predavac2: {
    name: "Mirko Milošević",
    vise: "Mirko Milošević je rođen 1993. godine u Beogradu, gde je i završio Trinaestu beogradsku gimnaziju i Elektrotehnički fakultet, smer računarska tehnika i informatika. Tokom studiranja učestvovao u radu međunarodnih studentskih organizacija. Od 2018. godine radi za Raiffeisen banku kao backend developer na njihovim digitalnim proizvodima. Deo je agilnog tima koji se pretežno bavi razvojem online kredita i tekućih računa za small business klijente.",
    photo: MarkoMilosevic,
  },
  predavac3: {
    name: "Stefan Gavrilović",
    vise: "Rođen 1994. godine u Brčkom.Elektrotehnički fakultet, smer Softversko inženjerstvo je završio 2019. godine.Tokom studiranja radio je na zanimljivim projektima iz raznih oblasti informacionih tehnologija. Neki od najatraktivnijih su Scraping PDF dokumenata za potrebe banke i razvoj automatizovanog robota. Trenutno radi kao lider DevOps tima, sa konkretnom pozicijom IT Transformation Lead. Pored standardnih zaduženja u oblasi DevOps-a, bavi se I uvodjenjem novih IT trendova.",
    photo: StefanGavrilovic,
  },
  kompanija: {
    name: "Raiffeisen",
    link: "/nasi-partneri/raiffeisen",
    photo: raiffeisen,
  },
};

const PredavaciContainer = () => {
  return (
    <div className="predavaci-container">
      <div className="predavac">
        <div className="photo-predavac">
          <div className="img-wrapper">
            <img
              src={radionica5.predavac.photo}
              alt={radionica5.predavac.name}
            />
          </div>
        </div>
        <div className="o-predavacu">
          <p className="predavac-name">{radionica5.predavac.name}</p>
          <p className="predavac-indikator">PREDAVAČ</p>
          <p className="predavac-vise">{radionica5.predavac.vise}</p>
        </div>
      </div>
      <div className="predavac">
        <div className="photo-predavac">
          <div className="img-wrapper">
            <img
              src={radionica5.predavac2.photo}
              alt={radionica5.predavac2.name}
            />
          </div>
        </div>
        <div className="o-predavacu">
          <p className="predavac-name">{radionica5.predavac2.name}</p>
          <p className="predavac-indikator">PREDAVAČ</p>
          <p className="predavac-vise">{radionica5.predavac2.vise}</p>
        </div>
      </div>
      <div className="predavac">
        <div className="photo-predavac">
          <div className="img-wrapper">
            <img
              src={radionica5.predavac3.photo}
              alt={radionica5.predavac3.name}
            />
          </div>
        </div>
        <div className="o-predavacu">
          <p className="predavac-name">{radionica5.predavac3.name}</p>
          <p className="predavac-indikator">PREDAVAČ</p>
          <p className="predavac-vise">{radionica5.predavac3.vise}</p>
        </div>
      </div>
    </div>
  );
};

const RaiffeisenKartica = () => {
  const [prikaziDetaljnije, setPrikaziDetaljnije] = useState(false);
  const [vidljivaRadionica, setVidljivaRadionica] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && !vidljivaRadionica) {
          setVidljivaRadionica(true);
        }
        return;
      }}
      delayedCall
      partialVisibility
    >
      <motion.div
        className="raiffeisen-kartica"
        animate={vidljivaRadionica && { y: 0, opacity: 1 }}
        initial={{
          y: 80,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
      >
        {!prikaziDetaljnije ? (
          <div className="top">
            <div className="balls-photo">
              <img src={lopte2} alt="Lopte" />
            </div>
            <div className="left">
              <h2>{radionica5.heading}</h2>
              <p>{radionica5.prviParagraf}</p>
            </div>
            <div className="right">
              <p>{radionica5.drugiParagraf}</p>
            </div>{" "}
          </div>
        ) : (
          <PredavaciContainer />
        )}
        <div className="bottom">
          <motion.button
            className="prikazi-sakrij"
            onClick={() => setPrikaziDetaljnije(!prikaziDetaljnije)}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            {!prikaziDetaljnije ? "Predavači" : "Radionica"}
            <div className="strelica-wrapper"></div>
          </motion.button>
          <Link to={radionica5.kompanija.link}>
            <div className="saznaj-o-kompaniji">
              <div className="img-wrapper">
                <img
                  src={radionica5.kompanija.photo}
                  alt={radionica5.kompanija.name}
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

export default RaiffeisenKartica;
