import React from "react";
import Nav from "../../Components/Nav/Nav";
import Lopta from "./../../Utilities/Lopta/Lopta";
import "./Pocetna.scss";
import { motion } from "framer-motion";
import c2sSvetli from "../../Assets/Images/c2slogo_svetli.svg";

const Pocetna = () => {
  return (
    <div className="pocetna-container">
      <Nav />
      <div className="lopte">
        <div className="prva-grupa">
          <Lopta boja="bela" width="3rem" height="3rem" />
          <Lopta boja="crvena" width="5rem" height="5rem" />
        </div>
      </div>
      <div className="content">
        <div className="staklo-container">
          <h1>kompanije studentima</h1>
          <h2>
            break your lim<span>it</span>s
          </h2>
          <p className="uvodni-tekst">
            Kompanije studentima je projekat Udruženja studenata informatike
            FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa
            IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama,
            obogaćen sadržajem koji će svim studentima pružiti priliku.
          </p>
          <div className="timer">
            <div className="dani">
              <p>14</p>
              <p>dana</p>
            </div>
            <div className="sati">
              <p>08</p>
              <p>sati</p>
            </div>
            <div className="minuti">
              <p>15</p>
              <p>minuta</p>
            </div>
          </div>
          <div className="dugmad-grupa">
            <motion.button
              className="dugme crveno"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              Prijavi se
            </motion.button>
            <motion.button
              className="dugme transparentno"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              O projektu
            </motion.button>
          </div>
        </div>
        <div className="staklo-container">
          <div className="img-wrapper">
            <img src={c2sSvetli} alt="c2s logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pocetna;
