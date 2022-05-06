import React, { useRef, useEffect, useState } from "react";
import "./Faq.scss";
import FaqQuestion from "./FaqQuestion";
import Nav from "./../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import koverta from "../../Assets/Images/koverta.svg";

import { motion } from "framer-motion";
import Lopta from "../../Utilities/Lopta/Lopta";
import { Link, useLocation } from "react-router-dom";
import { scrollFunc } from "../../Components/Footer/Footer";
import axios from "axios";

const Faq = () => {
  const pocetakPocetna = useRef();

  const [temaInput, setTemaInput] = useState("");
  const handleTemaInput = (e) => setTemaInput(e.target.value);

  const [porukaInput, setPorukaInput] = useState("");
  const handlePorukaInput = (e) => setPorukaInput(e.target.value);

  const [uspesnoPoslat, setUspesnoPoslat] = useState("");

  const pocetakMejl = useRef();

  const location = useLocation();
  let aktivnaStrana = -1;

  switch (location.pathname) {
    case "/faq":
      aktivnaStrana = 1;
      break;
    case "/faq/kontakt":
      aktivnaStrana = 2;
      break;
    default:
      aktivnaStrana = 3;
      break;
  }

  useEffect(() => {
    aktivnaStrana === 1 ? scrollFunc(pocetakPocetna) : scrollFunc(pocetakMejl);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                  informacionih tehnologija. Prijave su trenutno zatvorene.
                </p>
              }
            />
            <FaqQuestion
              question="Za koliko radionica se mogu prijaviti?"
              answer={
                <p>
                  Prijava je koncipirana tako da delegat vrši odabir maksimalno
                  tri radionice od kojih može biti primljen samo na jednu.
                  Prisustvo na više radionica od strane jednog delegata nije
                  moguće zbog istovremenog odvijanja samih radionica.
                </p>
              }
            />
            <FaqQuestion
              question="Za koliko Tech Challenge-a se mogu prijaviti?"
              answer={
                <p>
                  Prijava je koncipirana tako da delegat vrši odabir maksimalno
                  tri Tech Challenge-a od kojih može biti primljen samo na
                  jedan. Učešće na više Tech Challenge-a od strane jednog
                  delegata nije moguće zbog istovremenog odvijanja prezentacije
                  rešenja Tech Challenge-a.
                </p>
              }
            />
            <FaqQuestion
              question="Gde i kada će biti održan projekat?"
              answer={
                <p>
                  Panel diskusija i radionice će se održati 14. i 15. maja na
                  Fakultetu organizacionih nauka, dok će u prostorijama Envoy
                  Conference centra 16. maja biti realizovan Speed dating, a 17.
                  maja Tech Challenge i zatvaranje projekta. Detaljnu agendu
                  možeš pronaći na <Link to="/agenda"> AGENDA</Link>.
                </p>
              }
            />
            <FaqQuestion
              question="Da li je neophodno poslati CV za učešće na speed dating-u?"
              answer={
                <p>
                  Za učešće na C2S-u je neophodno poslati CV. Korisno je ako
                  imaš svoj jer te baš on može istaći u procesu selekcije u
                  odnosu na druge delegate, ali ukoliko nemaš možeš da ga
                  kreiraš uz pomoć CV generatora na stranici{" "}
                  <Link to="/generator"> CV GENERATOR</Link>.
                </p>
              }
            />
          </ul>
        </div>
        <h3 class="naslov" ref={pocetakMejl}>
          Postavite nam pitanje
        </h3>
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
                setUspesnoPoslat("Mejl je uspešno poslat");
                axios
                  .post(
                    "https://digitalmark6.herokuapp.com/api/postavipitanje",
                    {
                      email: temaInput,
                      pitanje: porukaInput,
                    }
                  )
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
