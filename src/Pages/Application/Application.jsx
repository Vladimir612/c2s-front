import React, { useEffect, useRef, useState } from "react";
import Nav from "../../Components/Nav/Nav";
import Footer, { scrollFunc } from "../../Components/Footer/Footer";
import "./Application.scss";
import { Formik, Form } from "formik";
import GeneralInfo from "./GeneralInfo";
import { motion } from "framer-motion";
import Panel from "./Panel";
import Lectures from "./Lectures";
import SpeedDating from "./SpeedDating";
import TechChallenge from "./TechChallenge";
import axios from "axios";
import successfulApplication from "../../Assets/Images/successfulApplication.png";

const Application = (props) => {
  let pageStartRef = useRef();
  let [steps, setSteps] = useState(1);
  let [currentStep, setCurrentStep] = useState(0.2);
  let [next, setNext] = useState(false);
  let [submit, setSubmit] = useState(false);
  let [success, setSuccess] = useState(false);
  let arr = [1, 2, 3, 4, 5];
  let forms = [
    <GeneralInfo />,
    <Panel />,
    <Lectures />,
    <SpeedDating />,
    <TechChallenge />,
  ];

  useEffect(() => {
    scrollFunc(pageStartRef);
  }, []);

  return (
    <>
      <div className="ref-start" ref={pageStartRef}></div>
      <div className="application-wrapper">
        <Nav />

        <motion.div
          className={success ? "successful-application" : "none"}
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
        >
          <img src={successfulApplication} alt="Uspesna prijava" />
          <h2>PRIJAVA JE USPEŠNO POSLATA</h2>
          <p>
            U narednom periodu će ti stići mail. Sve bitne informacije ćemo
            objavljivati na instagramu, zato ne zaboravi da nas zapratiš na{" "}
            <a
              href="https://www.instagram.com/fonis_fon/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#cc203a" }}
            >
              @fonis_fon
            </a>
            .
          </p>
        </motion.div>
        <div className={!success ? "application-flex" : "none"}>
          <h2>PRIJAVA</h2>
          <div className="application-container">
            <div className="form-steps">
              <div
                className="gradient-background"
                style={{ flexGrow: currentStep }}
              >
                {arr.map((v, i) => {
                  if (i < currentStep)
                    return <div className="step-marked">{v}</div>;
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
                primRad: "",
                sporRad: "",
                trecRad: "",
                oblasti: "",
                clan1: "",
                clan2: "",
                clan3: "",
                datingComp: [],
                studyComp: [],
                ucestvovao: "",
                technologies: "",
                newsletter: false,
                saglasnost: false,
              }}
              validate={(values) => {
                const errors = {};
                if (values.parts[Math.ceil(currentStep) - 1] === "0") {
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

                  if (!values.parts || values.parts.length === 1) {
                    errors.parts = "Polje je obavezno";
                  }

                  if (!values.cv) {
                    errors.cv = "Polje je obavezno";
                  }

                  if (!values.saglasnost)
                    errors.saglasnost = "Polje mora biti otkačeno";
                } else if (values.parts[Math.ceil(currentStep) - 1] === "1") {
                  if (!values.panel) {
                    errors.panel = "Polje je obavezno";
                  }
                } else if (values.parts[Math.ceil(currentStep) - 1] === "2") {
                  if (!values.primRad) {
                    errors.primRad = "Polje je obavezno";
                  }

                  if (!values.oblasti) {
                    errors.oblasti = "Polje je obavezno";
                  }
                } else if (values.parts[Math.ceil(currentStep) - 1] === "3") {
                  if (values.datingComp.length === 0) {
                    errors.datingComp =
                      "Najmanje jedna kompanija mora biti izabrana";
                  }
                } else if (values.parts[Math.ceil(currentStep) - 1] === "4") {
                  if (values.studyComp.length === 0) {
                    errors.studyComp =
                      "Najmanje jedna kompanija mora biti izabrana";
                  } else if (values.studyComp.length > 3) {
                    errors.studyComp =
                      "Najviše tri kompanije mogu biti izabrane";
                  }

                  if (!values.ucestvovao) {
                    errors.ucestvovao = "Polje je obavezno";
                  }

                  if (!values.technologies) {
                    errors.technologies = "Polje je obavezno";
                  }
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                if (!submit) {
                  if (next) {
                    if (currentStep <= 1) setSteps(values.parts.length + 1);
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
                      phoneNumber: values.phone,
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
                          radionice: {
                            sveRadionice: [
                              values.primRad,

                              values.sporRad,

                              values.trecRad,
                            ],
                            motivaciono: values.oblasti,
                          },
                        }),
                        ...(values.parts.includes("3") && {
                          speedDating: values.datingComp,
                        }),
                        ...(values.parts.includes("4") && {
                          techChallenge: {
                            emailFon: values.fonMain,
                            prethodnoIskustvo: values.ucestvovao,
                            technologies: values.technologies,
                            saKim:
                              values.clan1 +
                              "," +
                              values.clan2 +
                              "," +
                              values.clan3,
                            kompanije: values.studyComp,
                          },
                        }),
                      },
                    },
                  };

                  setSuccess(true);

                  axios
                    .post(
                      "https://digitalmark6.herokuapp.com/api/prijave",
                      postBody
                    )
                    .catch((e) => {
                      console.log(e);
                    });
                }
                setSubmitting(false);
              }}
            >
              {({ values, validateForm }) => (
                <Form>
                  {forms[values.parts[Math.ceil(currentStep) - 1]]}

                  {currentStep <= 1 ? (
                    <motion.button
                      onClick={() => {
                        setNext(true);
                        setSubmit(false);
                      }}
                      className="white-btn next"
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
                          setCurrentStep(Math.ceil(currentStep) - 1);
                        }}
                        type="button"
                        className="white-btn next"
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
                        className="red-btn next"
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
                          setCurrentStep(Math.ceil(currentStep) - 1);
                        }}
                        type="button"
                        className="white-btn next"
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
                        className="red-btn next"
                        whileTap={{
                          scale: 0.95,
                        }}
                        //disabled={submit ? true : false}
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
        <Footer pageStartRef={pageStartRef} mailStart={props.mailStart} />
      </div>
    </>
  );
};

export default Application;
