import React, { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import "./Prijava.scss";
import { Formik, Form } from "formik";
import OpsteInformacije from "./OpsteInformacije";
import { motion } from "framer-motion";
import PanelDiskusija from "./PanelDiskusija";
import Radionice from "./Radionice";
import SpeedDating from "./SpeedDating";
import TechChallenge from "./TechChallenge";
import axios from "axios";

const Prijava = () => {
    let [steps, setSteps] = useState(1);
    let [currentStep, setCurrentStep] = useState(0.2);
    let [next, setNext] = useState(false);
    let [submit, setSubmit] = useState(false);
    let arr = [1, 2, 3, 4, 5];
    let forms = [
        <OpsteInformacije />,
        <PanelDiskusija />,
        <Radionice />,
        <SpeedDating />,
        <TechChallenge />,
    ];
    return (
        <>
            <Nav />
            <div className="otvorene-prijave-message">Prijave su otvorene</div>
            <div className="prijava-flex">
                <h2>PRIJAVA</h2>
                <div className="prijava-container">
                    <div className="form-steps">
                        <div
                            className="gradient-background"
                            style={{ flexGrow: currentStep }}
                        >
                            {arr.map((v, i) => {
                                if (i < currentStep)
                                    return (
                                        <div className="step-marked">{v}</div>
                                    );
                                return <></>;
                            })}
                        </div>
                        {arr.map((v, i) => {
                            if (i >= currentStep && i < steps - 1)
                                return <div className="step">{v}</div>;
                            return <></>;
                        })}
                    </div>
                    <Formik
                        initialValues={{
                            email: "",
                            phone: "",
                            faculty: "",
                            name: "",
                            cv: "",
                            year: "1",
                            parts: ["0"],
                            panel: "",
                            primRad: "1",
                            sporRad: "1",
                            oblastiPrim: "",
                            oblastiSpor: "",
                            datingComp: [],
                            studyComp: [],
                            ucestvovao: "",
                            tehnologije: "",
                            newsletter: false,
                        }}
                        validate={(values) => {
                            const errors = {};
                            if (
                                values.parts[Math.ceil(currentStep) - 1] === "0"
                            ) {
                                if (!values.email) {
                                    errors.email = "Polje je obavezno";
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                        values.email
                                    )
                                ) {
                                    errors.email = "Invalid email address";
                                }

                                if (!values.name) {
                                    errors.name = "Polje je obavezno";
                                }

                                if (!values.phone) {
                                    errors.phone = "Polje je obavezno";
                                }

                                if (!values.faculty) {
                                    errors.faculty = "Polje je obavezno";
                                }

                                if (!values.year) {
                                    errors.faculty = "Polje je obavezno";
                                }

                                if (
                                    !values.parts ||
                                    values.parts.length === 1
                                ) {
                                    errors.parts = "Polje je obavezno";
                                }

                                if (!values.cv) {
                                    errors.cv = "Polje je obavezno";
                                }
                            } else if (
                                values.parts[Math.ceil(currentStep) - 1] === "1"
                            ) {
                                if (!values.panel) {
                                    errors.panel = "Polje je obavezno";
                                }
                            } else if (
                                values.parts[Math.ceil(currentStep) - 1] === "2"
                            ) {
                                if (!values.primRad) {
                                    errors.primRad = "Polje je obavezno";
                                }

                                if (!values.oblastiPrim) {
                                    errors.oblastiPrim = "Polje je obavezno";
                                }
                                if (!values.sporRad) {
                                    errors.sporRad = "Polje je obavezno";
                                }

                                if (!values.oblastiSpor) {
                                    errors.oblastiSpor = "Polje je obavezno";
                                }
                            } else if (
                                values.parts[Math.ceil(currentStep) - 1] === "3"
                            ) {
                                if (values.datingComp.length === 0) {
                                    errors.datingComp =
                                        "Najmanje jedna kompanija mora biti izabrana";
                                } else if (values.datingComp.length > 2) {
                                    errors.datingComp =
                                        "Najviše dve kompanije mogu biti izabrane";
                                }
                            } else if (
                                values.parts[Math.ceil(currentStep) - 1] === "4"
                            ) {
                                if (values.studyComp.length === 0) {
                                    errors.studyComp =
                                        "Najmanje jedna kompanija mora biti izabrana";
                                } else if (values.studyComp.length > 2) {
                                    errors.studyComp =
                                        "Najviše dve kompanije mogu biti izabrane";
                                }

                                if (!values.ucestvovao) {
                                    errors.ucestvovao = "Polje je obavezno";
                                }

                                if (!values.tehnologije) {
                                    errors.tehnologije = "Polje je obavezno";
                                }
                            }
                            return errors;
                        }}
                        onSubmit={async (values, { setSubmitting }) => {
                            if (!submit) {
                                if (next) {
                                    if (currentStep <= 1)
                                        setSteps(values.parts.length + 1);
                                    setCurrentStep(Math.ceil(currentStep) + 1);
                                } else {
                                    setCurrentStep(Math.ceil(currentStep) - 1);
                                }
                            } else {
                                let postBody = {
                                    prijava: {
                                        imePrezime: values.name,
                                        emailPriv: values.email,
                                        newsletter: values.newsletter,
                                        brojTelefona: values.phone,
                                        linkCv: values.cv,
                                        fakultet: values.faculty,
                                        godinaStudija: values.year,
                                        zelja: {
                                            ...(values.parts.includes("1") && {
                                                panel: {
                                                    staBiCuli: values.panel,
                                                },
                                            }),
                                            ...(values.parts.includes("2") && {
                                                radionice: [
                                                    {
                                                        naziv: values.primRad,
                                                        motiovaciono:
                                                            values.oblastiPrim,
                                                    },
                                                    {
                                                        naziv: values.sporRad,
                                                        motiovaciono:
                                                            values.oblastiSpor,
                                                    },
                                                ],
                                            }),
                                            ...(values.parts.includes("3") && {
                                                speedDating: values.datingComp,
                                            }),
                                            ...(values.parts.includes("4") && {
                                                techChallenge: {
                                                    emailFon: values.fonMain,
                                                    prethodnoIskustvo:
                                                        values.ucestvovao,
                                                    tehnologije:
                                                        values.tehnologije,
                                                    saKim:
                                                        values.clan1 +
                                                        "," +
                                                        values.clan2 +
                                                        "," +
                                                        values.clan3 +
                                                        "," +
                                                        values.clan4,
                                                    kompanije: values.studyComp,
                                                },
                                            }),
                                        },
                                    },
                                };

                                axios
                                    .post(
                                        "https://digitalmark6.herokuapp.com/api/prijave",
                                        postBody
                                    )
                                    .then((r) => {
                                        console.log(r);
                                    })
                                    .catch((e) => {
                                        console.log(e);
                                    });
                            }
                            setSubmitting(false);
                        }}
                    >
                        {({ values, validateForm }) => (
                            <Form>
                                {
                                    forms[
                                        values.parts[Math.ceil(currentStep) - 1]
                                    ]
                                }

                                {currentStep <= 1 ? (
                                    <motion.button
                                        onClick={() => {
                                            setNext(true);
                                            setSubmit(false);
                                        }}
                                        className="white-dugme next"
                                        whileHover={{
                                            scale: 1.05,
                                        }}
                                        whileTap={{
                                            scale: 0.95,
                                        }}
                                    >
                                        SLEDEĆE
                                    </motion.button>
                                ) : currentStep < steps - 1 ? (
                                    <div className="button-group">
                                        <motion.button
                                            onClick={() => {
                                                setNext(false);
                                                setSubmit(false);
                                            }}
                                            className="white-dugme next"
                                            whileHover={{
                                                scale: 1.05,
                                            }}
                                            whileTap={{
                                                scale: 0.95,
                                            }}
                                        >
                                            PRETHODNO
                                        </motion.button>

                                        <motion.button
                                            onClick={() => {
                                                setNext(true);
                                                setSubmit(false);
                                            }}
                                            className="red-dugme next"
                                            whileHover={{
                                                scale: 1.05,
                                            }}
                                            whileTap={{
                                                scale: 0.95,
                                            }}
                                        >
                                            SLEDEĆE
                                        </motion.button>
                                    </div>
                                ) : (
                                    <div className="button-group">
                                        <motion.button
                                            onClick={() => {
                                                setSubmit(false);
                                                setNext(false);
                                            }}
                                            className="white-dugme next"
                                            whileHover={{
                                                scale: 1.05,
                                            }}
                                            whileTap={{
                                                scale: 0.95,
                                            }}
                                        >
                                            PRETHODNO
                                        </motion.button>

                                        <motion.button
                                            onClick={() => {
                                                setNext(true);
                                                setSubmit(true);
                                            }}
                                            className="red-dugme next"
                                            whileHover={{
                                                scale: 1.05,
                                            }}
                                            whileTap={{
                                                scale: 0.95,
                                            }}
                                        >
                                            POŠALJI PRIJAVU
                                        </motion.button>
                                    </div>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Prijava;
