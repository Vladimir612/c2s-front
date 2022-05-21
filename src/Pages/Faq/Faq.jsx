import React, { useRef, useEffect, useState } from "react";
import "./Faq.scss";
import FaqQuestion from "./FaqQuestion";
import Nav from "./../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import koverta from "../../Assets/Images/koverta.svg";

import { motion } from "framer-motion";
import Ball from "../../Utilities/Ball/Ball";
import { Link, useLocation } from "react-router-dom";
import { scrollFunc } from "../../Components/Footer/Footer";
import axios from "axios";

const Faq = () => {
  const pageStartRef = useRef();

  const [themeInput, setThemeInput] = useState("");
  const handleThemeInput = (e) => setThemeInput(e.target.value);

  const [msgInput, setMsgInput] = useState("");
  const handleMsgInput = (e) => setMsgInput(e.target.value);

  const [successfullySent, setSuccessfullySent] = useState("");

  const mailStart = useRef();

  const location = useLocation();
  let activePage = -1;

  switch (location.pathname) {
    case "/faq":
      activePage = 1;
      break;
    case "/faq/kontakt":
      activePage = 2;
      break;
    default:
      activePage = 3;
      break;
  }

  useEffect(() => {
    activePage === 1 ? scrollFunc(pageStartRef) : scrollFunc(mailStart);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="ref-start" ref={pageStartRef}></div>
      <Nav />
      <div className="faq-container">
        <div className="balls-anim">
          <div className="first-group">
            <Ball boja="white" width="3rem" height="3rem" />
            <Ball boja="red" width="5rem" height="5rem" />
          </div>
          <div className="second-group">
            <Ball boja="white" width="6.5rem" height="6.5rem" />
            <Ball boja="red" width="5rem" height="5rem" />
          </div>
        </div>
        <h2 className="heading">FAQ</h2>
        <div className="questions">
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
        <h3 className="heading" ref={mailStart}>
          Postavite nam pitanje
        </h3>
        <div className="ask-question">
          <div className="img-wrapper">
            <img src={koverta} alt="Koverta" />
          </div>
          <div className="mail">
            <div className="name">
              <input
                value={themeInput}
                onChange={handleThemeInput}
                className="inp input1 fields"
                type="text"
                id="mailTheme"
                name="text1"
                placeholder="Mail"
              />
            </div>
            <div className="message">
              <textarea
                value={msgInput}
                onChange={handleMsgInput}
                className="inp input2 fields"
                name="message1"
                id="mailMsg"
                rows="6"
                cols="45"
                wrap="virtual"
                placeholder="Poruka"
              ></textarea>
            </div>
            <div className="success-message">{successfullySent}</div>
            <motion.button
              className="btn-application"
              onClick={() => {
                setSuccessfullySent("Mail je uspešno poslat");
                axios
                  .post(
                    "https://digitalmark6.herokuapp.com/api/postavipitanje",
                    {
                      email: themeInput,
                      question: msgInput,
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
      <Footer pageStartRef={pageStartRef} />
    </>
  );
};

export default Faq;
