import React, { useRef, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";
import "./OtherPartners.scss";
import { scrollFunc } from "../../Components/Footer/Footer";

//carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartnersSlider from "../Home/PartnersSlider";
import { motion } from "framer-motion";
import Ball from "../../Utilities/Ball/Ball";
import {
  allSettings,
  annualPartners,
  mediaPartners,
  naturalPartners,
} from "../../Assets/partneri";

const OtherPartners = () => {
  const pageStartRef = useRef();

  useEffect(() => {
    scrollFunc(pageStartRef);
  }, []);

  return (
    <>
      <div className="ref-start" ref={pageStartRef}></div>
      <Nav />
      <div className="other-partners-container">
        <div className="hero-partners">
          <motion.p
            animate={{ opacity: 1 }}
            initial={{
              opacity: 0,
            }}
            transition={{ duration: 0.5 }}
          >
            S ponosom vam predstavljamo naše partnere koji neizmernom podrškom
            doprinose uspešnoj realizaciji naših projekata.
          </motion.p>
        </div>
        <div className="other-content">
          <div className="balls-anim">
            <div className="first-group">
              <Ball boja="white" width="3rem" height="3rem" />
              <Ball boja="red" width="5rem" height="5rem" />
            </div>
            <div className="second-group">
              <Ball boja="white" width="6.5rem" height="6.5rem" />
              <Ball boja="red" width="5rem" height="5rem" />
            </div>
            <div className="third-group">
              <Ball boja="transparent" width="4.5rem" height="4.5rem" />
              <Ball boja="red" width="5rem" height="5rem" />
            </div>
          </div>
          <div className="other-partners-slider">
            <h3>GODIŠNJI PARTNERI</h3>
            <PartnersSlider
              partners={annualPartners}
              settings={allSettings}
              width="12rem"
              height="12rem"
            />
          </div>
          <div className="other-partners-slider">
            <h3>ROBNI PARTNERI</h3>
            <PartnersSlider
              partners={naturalPartners}
              settings={allSettings}
              width="12rem"
              height="12rem"
            />
          </div>
          <div className="other-partners-slider" style={{ display: "none" }}>
            <h3>MEDIJSKI PARTNERI</h3>
            <PartnersSlider
              partners={mediaPartners}
              settings={allSettings}
              width="12rem"
              height="12rem"
            />
          </div>
        </div>
      </div>
      <Footer pageStartRef={pageStartRef} />
    </>
  );
};

export default OtherPartners;
