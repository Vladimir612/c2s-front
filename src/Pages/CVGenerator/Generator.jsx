import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Generator.scss";
import Nav from "../../Components/Nav/Nav";
import {
  AiFillPhone,
  AiFillFilePdf,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import TechnologiesInput from "./TechnologiesInput";
import MultifieldInputs from "./MultifieldInputs";
import { scrollFunc } from "../../Components/Footer/Footer";

const Generator = () => {
  let generatorRef = useRef();

  useEffect(() => {
    scrollFunc(generatorRef);
  }, []);

  const [nameInput, setNameInput] = useState("");
  const handleNameChange = (e) => setNameInput(e.target.value);

  const [phoneInput, setPhoneInput] = useState("");
  const handlePhoneChange = (e) => setPhoneInput(e.target.value);

  const [emailInput, setEmailInput] = useState("");
  const handleEmailChange = (e) => setEmailInput(e.target.value);

  const [websiteInput, setWebsiteInput] = useState("");
  const handleWebsiteChange = (e) => setWebsiteInput(e.target.value);

  const [descInput, setDescInput] = useState("");
  const handleDescChange = (e) => setDescInput(e.target.value);

  const [photoInput, setPhotoInput] = useState("");
  const handlePhotoChange = (e) => setPhotoInput(e.target.value);

  const [themeInput, setThemeInput] = useState("#cc203a");
  const handleThemeChange = (e) => setThemeInput(e.target.value);

  const [technologies, setTechnologies] = useState([
    {
      technologyInput: "",
      lvlOfKnowledge: "Osnovni",
    },
  ]);

  const [education, setEducation] = useState([
    {
      input1: "",
      input2: "",
      input3: "",
    },
  ]);

  const [workExperience, setWorkExperience] = useState([
    {
      input1: "",
      input2: "",
      input3: "",
    },
  ]);

  const [showPreview, setShowPreview] = useState(false);

  const addTechnologies = () => {
    let newTechnologies = [...technologies];
    let obj = {
      technologyInput: "",
      lvlOfKnowledge: "Osnovni",
    };
    newTechnologies.push(obj);
    setTechnologies(newTechnologies);
  };

  const addEducation = () => {
    let newEducation = [...education];
    let obj = {
      input1: "",
      input2: "",
      input3: "",
    };
    newEducation.push(obj);
    setEducation(newEducation);
  };

  const addWorkExperience = () => {
    let newWorkExperience = [...workExperience];
    let obj = {
      input1: "",
      input2: "",
      input3: "",
    };
    newWorkExperience.push(obj);
    setWorkExperience(newWorkExperience);
  };

  const [render, setRender] = useState(true);

  return (
    <>
      <div className="ref-start" ref={generatorRef}></div>
      {render && <Nav />}
      <div
        className="generator-wrapper"
        style={render === false ? { margin: 0 } : {}}
      >
        {render && (
          <div className={showPreview ? "input-space none" : "input-space"}>
            <div className="input-field">
              <motion.button
                className="pdf-btn show-on-resize"
                onClick={() => {
                  setShowPreview(true);
                }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <AiFillEye size="1.2rem" style={{ marginRight: "0.5rem" }} />
                <span
                  style={{
                    display: "inline-block",
                    transform: "translate(0,-4px)",
                  }}
                >
                  Pregledaj CV
                </span>
              </motion.button>
            </div>
            <div className="input-field">
              <label className="input-label">Tema</label>
              <motion.select
                whileFocus={{ scale: 1.02 }}
                placeholder="Crvena"
                className="technology-lvl-input"
                value={themeInput}
                onChange={handleThemeChange}
              >
                <option value="#cc203a">Crvena</option>
                <option value="#107ab0">Plava</option>
                <option value="#309b94">Zelena</option>
                <option value="#e07cb3">Roze</option>
                <option value="#000">Crna</option>
              </motion.select>
            </div>
            <div className="input-field">
              <label className="input-label" for="imePrezime">
                Ime i prezime
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="imePrezime"
                id="imePrezime"
                value={nameInput}
                onChange={handleNameChange}
              />
            </div>
            <h2 style={{ color: "#cc203a", padding: "0rem 2rem" }}>Uputstvo</h2>
            <p style={{ padding: "0.5rem 2.5rem", color: "#fff" }}>
              Najlakši način da dobijete URL slike jeste da sliku okačite na
              Imgur. Nakon što otvorite sajt{" "}
              <a
                href="https://imgur.com/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#cc203a" }}
              >
                imgur.com
              </a>{" "}
              izaberite New post opciju i prevucite vašu sliku. Nakon što se
              slika upload-uje pritisnite desni klik na sliku i izaberite opciju
              Copy Image Address.
            </p>
            <div className="input-field">
              <label className="input-label" for="photo">
                Link do slike
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="photo"
                id="photo"
                value={photoInput}
                onChange={handlePhotoChange}
                maxLength={1000}
              />
            </div>
            <div className="input-field">
              <label className="input-label" for="phoneNumber">
                Broj telefona
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="+381 60 123 4567"
                value={phoneInput}
                onChange={handlePhoneChange}
              />
            </div>
            <div className="input-field">
              <label className="input-label" for="email">
                E-mail
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="email"
                id="email"
                placeholder="example@example.com"
                value={emailInput}
                onChange={handleEmailChange}
              />
            </div>
            <div className="input-field">
              <label className="input-label" for="websiteLink">
                Website
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="websiteLink"
                id="websiteLink"
                placeholder="https://www.instagram.com/stefan.jov01/"
                value={websiteInput}
                onChange={handleWebsiteChange}
              />
            </div>
            <div className="area-field">
              <label className="area-label" for="description">
                O meni
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="description"
                id="description"
                value={descInput}
                onChange={handleDescChange}
              />
            </div>
            <div className="area-field">
              <label className="area-label">Tehnologije</label>
              <TechnologiesInput
                technologies={technologies}
                addTechnologies={addTechnologies}
                setTechnologies={setTechnologies}
              />
            </div>
            <div className="area-field">
              <label className="area-label">Obrazovanje</label>
              <MultifieldInputs
                values={education}
                addValue={addEducation}
                setValues={setEducation}
                placeholder1="Mitrovačka gimnazija"
                placeholder2="Septembar 2016 - Jun 2020"
              />
            </div>

            <div className="area-field">
              <label className="area-label">Radno iskustvo</label>
              <MultifieldInputs
                values={workExperience}
                addValue={addWorkExperience}
                setValues={setWorkExperience}
                placeholder1="Backend developer - Raiffeisen banka"
                placeholder2="Jul 2020 - Trenutno"
              />
            </div>
            <h2 style={{ color: "#cc203a", padding: "0rem 2rem" }}>Uputstvo</h2>
            <p style={{ padding: "0.5rem 2.5rem", color: "#fff" }}>
              Nakon što kliknete btn download pdf iskočiće Vam prozor na kome
              treba da izaberete određene postavke. Kao destination birate PDF,
              za Pages birate Custom i unosite 1-1. Nakon toga otvorite više
              opcija i postavite margine na None, izaberete opciju da se prikaze
              bgColor i iskljucite opciju za header-e i footer-e.
            </p>
            <div className="input-field">
              <motion.button
                className="pdf-btn"
                onClick={() => {
                  setRender(false);
                  setTimeout(() => window.print(), 500);
                }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <AiFillFilePdf
                  size="1.2rem"
                  style={{ marginRight: "0.5rem" }}
                />
                <span
                  style={{
                    display: "inline-block",
                    transform: "translate(0,-4px)",
                  }}
                >
                  Download PDF
                </span>
              </motion.button>
            </div>
          </div>
        )}
        <div
          className={showPreview || !render ? "right-side" : "right-side none"}
        >
          <div className="input-field">
            <motion.button
              className={render ? "pdf-btn show-on-resize" : "none"}
              onClick={() => {
                setShowPreview(false);
              }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <AiFillEyeInvisible
                size="1.2rem"
                style={{ marginRight: "0.5rem" }}
              />
              <span
                style={{
                  display: "inline-block",
                  transform: "translate(0,-4px)",
                }}
              >
                Unesi podatke
              </span>
            </motion.button>
          </div>
          <div
            className={showPreview || !render ? "cv-space" : "cv-space none"}
            style={
              render === false
                ? {
                    margin: 0,
                    width: "800px",
                    height: "1120px",
                  }
                : {}
            }
          >
            <div className="left-pane">
              <h1 className="fullname-cv">{nameInput}</h1>
              <img
                src={photoInput}
                onError={() => {
                  document.querySelector(".photo-cv").src =
                    "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
                }}
                className="photo-cv"
                style={{ borderColor: themeInput }}
                alt="Slika"
                maxLength={1000}
              />
              <h2
                className="description-cv"
                style={{ borderColor: themeInput }}
              >
                O MENI
              </h2>
              <p className="description-content">{descInput}</p>
              <h2
                className="description-cv"
                style={{ borderColor: themeInput }}
              >
                TEHNOLOGIJE
              </h2>
              {technologies &&
                technologies.map((t) => {
                  return (
                    <div className="technology">
                      <p
                        className="technology-name"
                        style={{
                          backgroundColor: themeInput,
                        }}
                      >
                        {t.technologyInput}
                      </p>
                      <p className="technology-lvl">{t.lvlOfKnowledge}</p>
                    </div>
                  );
                })}
            </div>
            <div className="right-pane">
              <div>
                <div
                  className="contact-info"
                  style={{ borderColor: themeInput }}
                >
                  <AiFillPhone size="1.2rem" color={themeInput} />
                  <p className="contact-content">{phoneInput}</p>
                </div>
                <div
                  className="contact-info"
                  style={{ borderColor: themeInput }}
                >
                  <MdEmail size="1.2rem" color={themeInput} />
                  <p className="contact-content">{emailInput}</p>
                </div>
                <div
                  className="contact-info"
                  style={{ borderColor: themeInput }}
                >
                  <BsGlobe size="1.2rem" color={themeInput} />
                  <a href={websiteInput} className="contact-content">
                    {websiteInput}
                  </a>
                </div>
              </div>
              <div>
                <h2
                  className="description-cv-edu"
                  style={{ borderColor: themeInput }}
                >
                  OBRAZOVANJE
                </h2>

                {education &&
                  education.map((o) => {
                    return (
                      <div className="education">
                        <h2 className="institution-name">{o.input1}</h2>
                        <p className="institution-time">{o.input2}</p>
                        <p className="institution-content">{o.input3}</p>
                      </div>
                    );
                  })}
              </div>
              <div>
                <h2
                  className="description-cv"
                  style={{ borderColor: themeInput }}
                >
                  RADNO ISKUSTVO
                </h2>
                {workExperience &&
                  workExperience.map((r) => {
                    return (
                      <div className="experience">
                        <h2 className="experience-name">{r.input1}</h2>
                        <p className="experience-time">{r.input2}</p>
                        <p className="experience-content">{r.input3}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Generator;
