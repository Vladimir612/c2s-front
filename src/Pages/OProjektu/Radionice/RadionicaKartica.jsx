import React, { useState } from "react";
import "./RadionicaKartica.scss";
import { MdExpandMore } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

import lopte2 from "../../../Assets/Images/krugovi-radionica.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RadionicaKartica = (props) => {
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
        className="radionica-kartica"
        animate={vidljivaRadionica && { y: 0, opacity: 1 }}
        initial={{
          y: 80,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
      >
        <div className="top">
          <div className="lopte-slika">
            <img src={lopte2} alt="Lopte" />
          </div>
          <div className="left">
            <h2>{props.radionica.naslov}</h2>
            <p>{props.radionica.prviParagraf}</p>
            <motion.p
              animate={{
                height: prikaziDetaljnije ? "auto" : "0rem",
                width: prikaziDetaljnije ? "auto" : "0rem",
                opacity: prikaziDetaljnije ? [0, 0, 1] : [1, 0, 0],
              }}
              initial={{ height: "0rem", width: "0rem", opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {props.radionica.drugiParagraf}
            </motion.p>
          </div>
          <motion.div
            className={prikaziDetaljnije ? "right" : "right sakriveno"}
          >
            <motion.div
              className="predavac"
              animate={{
                height: prikaziDetaljnije ? "100%" : "0rem",
              }}
              initial={{ height: "0rem" }}
              transition={{ duration: 0.5 }}
            >
              <div className="slika-predavac">
                <div className="img-wrapper">
                  <LazyLoadImage
                    effect="blur"
                    src={props.radionica.predavac.slika}
                    alt={props.radionica.predavac.ime}
                  />
                </div>
              </div>
              <motion.div
                className="o-predavacu"
                animate={{
                  height: prikaziDetaljnije ? "auto" : "0rem",
                  width: prikaziDetaljnije ? "auto" : "0rem",
                  opacity: prikaziDetaljnije ? [0, 0, 1] : [1, 0, 0],
                }}
                initial={{ height: "0rem", width: "0rem", opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="predavac-ime">{props.radionica.predavac.ime}</p>
                <p className="predavac-indikator">PREDAVAC</p>
                <p className="predavac-vise">{props.radionica.predavac.vise}</p>
              </motion.div>
            </motion.div>
            <motion.div className="predavac">
              <div className="slika-predavac">
                <div className="img-wrapper">
                  <LazyLoadImage
                    effect="blur"
                    src={props.radionica.predavac2.slika}
                    alt={props.radionica.predavac2.ime}
                  />
                </div>
              </div>
              <motion.div
                className="o-predavacu"
                animate={{
                  height: prikaziDetaljnije ? "auto" : "0rem",
                  width: prikaziDetaljnije ? "auto" : "0rem",
                  opacity: prikaziDetaljnije ? [0, 0, 1] : [1, 0, 0],
                }}
                initial={{ height: "0rem", width: "0rem", opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="predavac-ime">{props.radionica.predavac2.ime}</p>
                <p className="predavac-indikator">PREDAVAC</p>
                <p className="predavac-vise">
                  {props.radionica.predavac2.vise}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="bottom">
          {prikaziDetaljnije && (
            <div className="lopte-slika">
              <img src={lopte2} alt="Lopte" />
            </div>
          )}
          <div
            className="prikazi-sakrij"
            onClick={() => setPrikaziDetaljnije(!prikaziDetaljnije)}
          >
            {!prikaziDetaljnije ? (
              <p>Prikazi detaljnije</p>
            ) : (
              <p>Sakrij detaljnije</p>
            )}
            <motion.div
              className="strelica-wrapper"
              animate={{ rotate: prikaziDetaljnije ? -180 : 0 }}
              initial={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MdExpandMore size={45} color="#14191b" />
            </motion.div>
          </div>
          <Link to={props.radionica.kompanija.link}>
            <div className="saznaj-o-kompaniji">
              <div className="img-wrapper">
                <LazyLoadImage
                  effect="blur"
                  src={props.radionica.kompanija.slika}
                  alt={props.radionica.kompanija.ime}
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

export default RadionicaKartica;
