import React, { useState } from "react";
import "./RadionicaKartica.scss";
import { MdExpandMore } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

import lopte2 from "../../../Assets/Images/krugovi-radionica.png";
import { Link } from "react-router-dom";

const RadionicaKartica = (props) => {
  const [prikaziDetaljnije, setPrikaziDetaljnije] = useState(false);
  const [vidljivaRadionica, setVidljivaRadionica] = useState(false);

  const istiPredavaci =
    props.radionica.predavac.name === props.radionica.predavac2.name;

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
          <div className="balls-photo">
            <img src={lopte2} alt="Lopte" />
          </div>
          <div className="left">
            <h2>{props.radionica.heading}</h2>
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
              <br></br>
              {props.radionica.heading === "Uvod u 3D Game Development" && (
                <span style={{ color: "#cc203a" }}>
                  Napomena: Za ovu radionicu potrebno je poneti sopstveni
                  laptop.
                </span>
              )}
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
              <div className="photo-predavac">
                <div className="img-wrapper">
                  <img
                    src={props.radionica.predavac.photo}
                    alt={props.radionica.predavac.name}
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
                <p className="predavac-name">{props.radionica.predavac.name}</p>
                <p className="predavac-indikator">PREDAVAČ</p>
                <p className="predavac-vise">{props.radionica.predavac.vise}</p>
              </motion.div>
            </motion.div>
            <motion.div
              className={istiPredavaci ? "predavac duplikat" : "predavac"}
            >
              <div className="photo-predavac">
                <div className="img-wrapper">
                  <img
                    src={props.radionica.predavac2.photo}
                    alt={props.radionica.predavac2.name}
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
                <p className="predavac-name">
                  {props.radionica.predavac2.name}
                </p>
                <p className="predavac-indikator">PREDAVAČ</p>
                <p className="predavac-vise">
                  {props.radionica.predavac2.vise}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="bottom">
          {prikaziDetaljnije && (
            <div className="balls-photo">
              <img src={lopte2} alt="Lopte" />
            </div>
          )}
          <div
            className="prikazi-sakrij"
            onClick={() => setPrikaziDetaljnije(!prikaziDetaljnije)}
          >
            {!prikaziDetaljnije ? (
              <p>Prikaži detaljnije</p>
            ) : (
              <p>Sakrij detalje</p>
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
                <img
                  src={props.radionica.kompanija.photo}
                  alt={props.radionica.kompanija.name}
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
