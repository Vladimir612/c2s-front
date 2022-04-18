import React, { useRef, useEffect, useState } from "react";
import "./Faq.scss";
import FaqQuestion from "./FaqQuestion";
import Nav from "./../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import koverta from "../../Assets/Images/koverta.svg";

import { motion } from "framer-motion";
import Lopta from "../../Utilities/Lopta/Lopta";
import { Link } from "react-router-dom";
import { scrollFunc } from "../../Components/Footer/Footer";
import axios from "axios";

const Faq = () => {
  const pocetakPocetna = useRef();
  useEffect(() => {
    scrollFunc(pocetakPocetna);
  }, []);
  const [temaInput, setTemaInput] = useState("");
  const handleTemaInput = (e) => setTemaInput(e.target.value);

  const [porukaInput, setPorukaInput] = useState("");
  const handlePorukaInput = (e) => setPorukaInput(e.target.value);

  const [uspesnoPoslat, setUspesnoPoslat] = useState("");

  return (
    <>
      <div className="pocetak-pocetna" ref={pocetakPocetna}></div>
      <Nav />
      <div className="faq-container">
        <div className="lopte-anim">
          <div className="prva-grupa">
            <Lopta boja="bela" width="3rem" height="3rem" />
            <Lopta boja="crvena" width="5rem" height="5rem" />
          </div>
          <div className="druga-grupa">
            <Lopta boja="bela" width="6.5rem" height="6.5rem" />
            <Lopta boja="crvena" width="5rem" height="5rem" />
          </div>
        </div>
        <h2 className="naslov">FAQ</h2>
        <div class="questions">
          <ul>
            <FaqQuestion
              question="Ko se sve može prijaviti za učesće na projektu Kompanije studentima?"
              answer={
                <p>
                  Mogu se prijaviti studenti svih fakulteta koji žele da kroz
                  učesće na projektu steknu nova znanja i iskustva iz oblasti
                  informacionih tehnologija. Prijave se nalaze na stranici
                  <Link to="/prijava"> PRIJAVA</Link> i traju do 5. maja do
                  23:59č.
                </p>
              }
            />
            <FaqQuestion
              question="Za koliko radionica se mogu prijaviti?"
              answer={
                <p>
                  Maksimalno se možeš prijaviti za 3 radionice, ali ćeš biti
                  primljen/a samo na jednu.
                </p>
              }
            />
            <FaqQuestion
              question="Za koliko tech-challenge-a se mogu prijaviti?"
              answer={
                <p>
                  Maksimalno se možeš prijaviti za 3 , ali ćeš biti primljen/a
                  samo na jedan.
                </p>
              }
            />
            <FaqQuestion
              question="Gde i kada će biti održan projekat?"
              answer={
                <p>
                  Panel diskusija i radionice će biti održane 14. i 15. maja na
                  Fakultetu organizacionih nauka, dok će Speed dating biti
                  realizovan u prostorijama ____ 16. maja. Tech challenge i
                  zatvaranje projekta će se održati ___ 17. Maja. Detaljnu
                  agendu možeš promaći na stranici
                  <Link to="/agenda"> AGENDA</Link>.
                </p>
              }
            />
            <FaqQuestion
              question="Da li je neophodno poslati CV za učešće na speed dating-u?"
              answer={
                <p>
                  Za učešće na speed dating-u je neophodno poslati CV. Ukoliko
                  već nemate svoj CV, možete ga napraviti na našoj stranici
                  <Link to="/generator"> CV GENERATOR</Link>
                </p>
              }
            />
          </ul>
        </div>
        <h3 class="naslov">Postavite nam pitanje</h3>
        <div class="postavite-pitanje">
          <div class="img-wrapper">
            <img src={koverta} alt="Koverta" />
          </div>
          <div class="mejl">
            <div class="ime">
              <input
                value={temaInput}
                onChange={handleTemaInput}
                class="unos unos1 polja"
                type="text"
                id="temaMejla"
                name="text1"
                placeholder="Mejl"
              />
            </div>
            <div class="poruka">
              <textarea
                value={porukaInput}
                onChange={handlePorukaInput}
                class="unos unos2 polja"
                name="poruka1"
                id="porukaMejla"
                rows="6"
                cols="45"
                wrap="virtual"
                placeholder="Poruka"
              ></textarea>
            </div>
            <div className="uspesno-poruka">{uspesnoPoslat}</div>
            <motion.button
              className="dugme-prijavi"
              onClick={() => {
                axios
                  .post("https://digitalmark6.herokuapp.com/api/prijave", {
                    email: temaInput,
                    pitanje: porukaInput,
                  })
                  .then(() => {
                    setUspesnoPoslat("Mejl je uspešno poslat");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              Pošalji
            </motion.button>
          </div>
        </div>
      </div>
      <Footer pocetakPocetna={pocetakPocetna} />
    </>
  );
};

export default Faq;
