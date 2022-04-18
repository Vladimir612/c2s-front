import React, { useState } from "react";
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
import TehnologijeInput from "./TehnologijeInput";
import MultifieldInputs from "./MultifieldInputs";

const Generator = () => {
    const [nameInput, setNameInput] = useState("");
    const handleNameChange = (e) => setNameInput(e.target.value);

    const [phoneInput, setPhoneInput] = useState("");
    const handlePhoneChange = (e) => setPhoneInput(e.target.value);

    const [emailInput, setEmailInput] = useState("");
    const handleEmailChange = (e) => setEmailInput(e.target.value);

    const [websiteInput, setWebsiteInput] = useState("");
    const handleWebsiteChange = (e) => setWebsiteInput(e.target.value);

    const [opisInput, setOpisInput] = useState("");
    const handleOpisChange = (e) => setOpisInput(e.target.value);

    const [photoInput, setPhotoInput] = useState("");
    const handlePhotoChange = (e) => setPhotoInput(e.target.value);

    const [temaInput, setTemaInput] = useState("#cc203a");
    const handleTemaChange = (e) => setTemaInput(e.target.value);

    const [tehnologije, setTehnologije] = useState([
        {
            tehnologijaInput: "",
            nivoZnanjaInput: "Osnovni",
        },
    ]);

    const [obrazovanje, setObrazovanje] = useState([
        {
            input1: "",
            input2: "",
            input3: "",
        },
    ]);

    const [radnoIskustvo, setRadnoIskustvo] = useState([
        {
            input1: "",
            input2: "",
            input3: "",
        },
    ]);

    const [showPreview, setShowPreview] = useState(false);

    const addTehnologija = () => {
        let newTehnologije = [...tehnologije];
        let obj = {
            tehnologijaInput: "",
            nivoZnanjaInput: "Osnovni",
        };
        newTehnologije.push(obj);
        setTehnologije(newTehnologije);
    };

    const addObrazovanje = () => {
        let newObrazovanje = [...obrazovanje];
        let obj = {
            input1: "",
            input2: "",
            input3: "",
        };
        newObrazovanje.push(obj);
        setObrazovanje(newObrazovanje);
    };

    const addRadnoIskustvo = () => {
        let newRadnoIskustvo = [...radnoIskustvo];
        let obj = {
            input1: "",
            input2: "",
            input3: "",
        };
        newRadnoIskustvo.push(obj);
        setRadnoIskustvo(newRadnoIskustvo);
    };

    const [render, setRender] = useState(true);

    return (
        <>
            {render && <Nav />}
            <div
                className="generator-wrapper"
                style={render === false ? { margin: 0 } : {}}
            >
                {render && (
                    <div
                        className={
                            showPreview ? "input-space none" : "input-space"
                        }
                    >
                        <div className="input-field">
                            <motion.button
                                className="pdf-dugme show-on-resize"
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
                                <AiFillEye
                                    size="1.2rem"
                                    style={{ marginRight: "0.5rem" }}
                                />
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
                                className="tehnologija-nivo-input"
                                value={temaInput}
                                onChange={handleTemaChange}
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
                        <div className="input-field">
                            <label className="input-label" for="slika">
                                Link do slike
                            </label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="text"
                                name="slika"
                                id="slika"
                                value={photoInput}
                                onChange={handlePhotoChange}
                            />
                        </div>
                        <div className="input-field">
                            <label className="input-label" for="brojTelefona">
                                Broj telefona
                            </label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="text"
                                name="brojTelefona"
                                id="brojTelefona"
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
                            <label className="area-label" for="opis">
                                O meni
                            </label>
                            <motion.textarea
                                whileFocus={{ scale: 1.02 }}
                                name="opis"
                                id="opis"
                                value={opisInput}
                                onChange={handleOpisChange}
                            />
                        </div>
                        <div className="area-field">
                            <label className="area-label">Tehnologije</label>
                            <TehnologijeInput
                                tehnologije={tehnologije}
                                addTehnologija={addTehnologija}
                                setTehnologije={setTehnologije}
                            />
                        </div>
                        <div className="area-field">
                            <label className="area-label">Obrazovanje</label>
                            <MultifieldInputs
                                values={obrazovanje}
                                addValue={addObrazovanje}
                                setValues={setObrazovanje}
                                placeholder1="Mitrovačka gimnazija"
                                placeholder2="Septembar 2016 - Jun 2020"
                            />
                        </div>

                        <div className="area-field">
                            <label className="area-label">Radno iskustvo</label>
                            <MultifieldInputs
                                values={radnoIskustvo}
                                addValue={addRadnoIskustvo}
                                setValues={setRadnoIskustvo}
                                placeholder1="Backend developer - Raiffeisen"
                                placeholder2="Jul 2020 - Trenutno"
                            />
                        </div>
                        <div className="input-field">
                            <motion.button
                                className="pdf-dugme"
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
                    className={
                        showPreview || !render
                            ? "right-side"
                            : "right-side none"
                    }
                >
                    <div className="input-field">
                        <motion.button
                            className={
                                render ? "pdf-dugme show-on-resize" : "none"
                            }
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
                        className={
                            showPreview || !render
                                ? "cv-space"
                                : "cv-space none"
                        }
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
                            <h1 className="ime-prezime-cv">{nameInput}</h1>
                            <img
                                src={photoInput}
                                onError={() => {
                                    document.querySelector(".photo-cv").src =
                                        "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
                                }}
                                className="photo-cv"
                                style={{ borderColor: temaInput }}
                                alt="Slika"
                            />
                            <h2
                                className="opis-cv"
                                style={{ borderColor: temaInput }}
                            >
                                O MENI
                            </h2>
                            <p className="opis-sadrzaj">{opisInput}</p>
                            <h2
                                className="opis-cv"
                                style={{ borderColor: temaInput }}
                            >
                                TEHNOLOGIJE
                            </h2>
                            {tehnologije &&
                                tehnologije.map((t) => {
                                    return (
                                        <div className="tehnologija">
                                            <p
                                                className="tehnologija-naziv"
                                                style={{
                                                    backgroundColor: temaInput,
                                                }}
                                            >
                                                {t.tehnologijaInput}
                                            </p>
                                            <p className="tehnologija-nivo">
                                                {t.nivoZnanjaInput}
                                            </p>
                                        </div>
                                    );
                                })}
                        </div>
                        <div className="right-pane">
                            <div
                                className="contact-info"
                                style={{ borderColor: temaInput }}
                            >
                                <AiFillPhone size="1.2rem" color={temaInput} />
                                <p className="contact-content">{phoneInput}</p>
                            </div>
                            <div
                                className="contact-info"
                                style={{ borderColor: temaInput }}
                            >
                                <MdEmail size="1.2rem" color={temaInput} />
                                <p className="contact-content">{emailInput}</p>
                            </div>
                            <div
                                className="contact-info"
                                style={{ borderColor: temaInput }}
                            >
                                <BsGlobe size="1.2rem" color={temaInput} />
                                <a
                                    href={websiteInput}
                                    className="contact-content"
                                >
                                    {websiteInput}
                                </a>
                            </div>
                            <h2
                                className="opis-cv-obr"
                                style={{ borderColor: temaInput }}
                            >
                                OBRAZOVANJE
                            </h2>

                            {obrazovanje &&
                                obrazovanje.map((o) => {
                                    return (
                                        <div className="obrazovanje">
                                            <h2 className="ustanova-naziv">
                                                {o.input1}
                                            </h2>
                                            <p className="ustanova-vreme">
                                                {o.input2}
                                            </p>
                                            <p className="ustanova-content">
                                                {o.input3}
                                            </p>
                                        </div>
                                    );
                                })}
                            <h2
                                className="opis-cv"
                                style={{ borderColor: temaInput }}
                            >
                                RADNO ISKUSTVO
                            </h2>
                            {radnoIskustvo &&
                                radnoIskustvo.map((r) => {
                                    return (
                                        <div className="iskustvo">
                                            <h2 className="iskustvo-naziv">
                                                {r.input1}
                                            </h2>
                                            <p className="iskustvo-vreme">
                                                {r.input2}
                                            </p>
                                            <p className="iskustvo-content">
                                                {r.input3}
                                            </p>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Generator;
