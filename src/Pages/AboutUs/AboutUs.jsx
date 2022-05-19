import React, { useRef, useState, useEffect } from "react";
import "./AboutUs.scss";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";
import Team from "./Team";

import oC2su from "../../Assets/Images/oC2su.jpg";
import oFonisu from "../../Assets/Images/oFonisu.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { teamsArr, aboutFonisText, aboutC2sText } from "./aboutUsData.js";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Ball from "../../Utilities/Ball/Ball";

import { motion } from "framer-motion";
import { scrollFunc } from "../../Components/Footer/Footer";

const AboutUs = () => {
  const pageStartRef = useRef();
  useEffect(() => {
    scrollFunc(pageStartRef);
  }, []);

  const [displayedTeam, setDisplayedTeam] = useState(0);

  const handleMoveTim = (forward) => {
    if (forward) {
      if (displayedTeam === 6) {
        setDisplayedTeam(0);
      } else {
        setDisplayedTeam(displayedTeam + 1);
      }
    } else {
      if (displayedTeam === 0) {
        setDisplayedTeam(6);
      } else {
        setDisplayedTeam(displayedTeam - 1);
      }
    }
  };

  const ballsNavigation = (
    <div className="balls-nav">
      {teamsArr.map(
        (_, index) =>
          index !== 6 && (
            <div
              className={
                displayedTeam === index + 1
                  ? `bl ball-${index + 1} active`
                  : `bl ball-${index + 1}`
              }
              onClick={() => setDisplayedTeam(index + 1)}
            >
              {index + 1}
            </div>
          )
      )}
    </div>
  );

  return (
    <>
      <div className="ref-start" ref={pageStartRef}></div>
      <Nav />
      <div className="about-us-container">
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
        <div className="about-us-flex">
          <motion.div
            className="left-content"
            animate={{ x: "0%" }}
            initial={{
              x: "-50%",
            }}
            transition={{ duration: 0.5 }}
          >
            <h2>O FONIS-u</h2>
            <p>{aboutFonisText}</p>
          </motion.div>
          <motion.div
            className="right-content"
            animate={{ x: "0%" }}
            initial={{
              x: "50%",
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="img-wrapper">
              <LazyLoadImage effect="blur" src={oFonisu} alt="fonis-photo" />
            </div>
          </motion.div>
        </div>

        <div className="about-us-flex">
          <div className="left-content">
            <h2>C2S</h2>
            <p>{aboutC2sText}</p>
          </div>
          <div className="right-content">
            <div className="img-wrapper">
              <img src={oC2su} alt="C2S project" />
            </div>
          </div>
        </div>
        <div className="about-us-teams">
          <h2>ORGANIZACIONI TIM PROJEKTA</h2>
          <div className="about-us-carousel">
            <div className="about-us-navigation">
              <div className="left" onClick={() => handleMoveTim(false)}>
                <FiChevronLeft size={35} color="#b4afb3" />
              </div>
              <div className="photo">
                <div className="logo-c2s">
                  <div className="left-trapeze"></div>
                  <div className="middle-trapeze"></div>
                  <div className="right-trapeze"></div>
                  {ballsNavigation}
                  <div className="lines-nav">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                    <div className="line line-4"></div>
                    <div className="line line-5"></div>
                  </div>
                </div>
              </div>
              <div className="right" onClick={() => handleMoveTim(true)}>
                <FiChevronRight size={35} color="#b4afb3" />
              </div>
            </div>
            {teamsArr.map(
              (team, index) => index === displayedTeam && <Team team={team} />
            )}
          </div>
        </div>
      </div>
      <Footer pageStartRef={pageStartRef} />
    </>
  );
};

export default AboutUs;
