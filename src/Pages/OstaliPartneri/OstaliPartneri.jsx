import React, { useRef } from "react";
import Footer from "../../Components/Footer/Footer";
import Nav from "./../../Components/Nav/Nav";
import "./OstaliPartneri.scss";

//slike
import Catenamedia from "../../Assets/Images/Partneri/catenamedia.png";
import Endava from "../../Assets/Images/Partneri/endava.png";
import Fon from "../../Assets/Images/Partneri/fon.png";
import Guarana from "../../Assets/Images/Partneri/guarana.png";
import Prime from "../../Assets/Images/Partneri/prime-software.png";

//carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartneriSlider from "./../Pocetna/PartneriSlider";
import { motion } from "framer-motion";
import Lopta from "../../Utilities/Lopta/Lopta";

const OstaliPartneri = () => {
  const pocetakOstaliPartneri = useRef();

  const generalniPartneri = [
    {
      partnerSlika: Catenamedia,
      partnerIme: "Catenamedia",
      pozadina: "#f53942",
      link: "https://www.catenamedia.com/",
    },
    {
      partnerSlika: Endava,
      partnerIme: "Endava",
      pozadina: "#fff",
      link: "https://www.endava.com/",
    },
    {
      partnerSlika: Fon,
      partnerIme: "Fon",
      pozadina: "#fff",
      link: "http://fon.bg.ac.rs/",
    },
    {
      partnerSlika: Guarana,
      partnerIme: "Guarana",
      pozadina: "#a5de2f",
      link: "https://guarana.rs/",
    },
    {
      partnerSlika: Prime,
      partnerIme: "Prime",
      pozadina: "#fff",
      link: "https://www.primeholding.com/",
    },
  ];

  const generalniSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 1500,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="pocetak-pocetna" ref={pocetakOstaliPartneri}></div>
      <Nav />
      <div className="ostali-partneri-container">
        <div className="hero-partneri">
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
        <div className="ostali-content">
          <div className="lopte-anim">
            <div className="prva-grupa">
              <Lopta boja="bela" width="3rem" height="3rem" />
              <Lopta boja="crvena" width="5rem" height="5rem" />
            </div>
            <div className="druga-grupa">
              <Lopta boja="bela" width="6.5rem" height="6.5rem" />
              <Lopta boja="crvena" width="5rem" height="5rem" />
            </div>
            <div className="treca-grupa">
              <Lopta boja="transparentna" width="4.5rem" height="4.5rem" />
              <Lopta boja="crvena" width="5rem" height="5rem" />
            </div>
          </div>
          <div className="ostali-partneri-slider">
            <h3>GODISNJI PARTNERI</h3>
            <PartneriSlider
              partneri={generalniPartneri}
              settings={generalniSettings}
              width="12rem"
              height="12rem"
            />
          </div>
          <div className="ostali-partneri-slider">
            <h3>NATURALNI PARTNERI</h3>
            <PartneriSlider
              partneri={generalniPartneri}
              settings={generalniSettings}
              width="12rem"
              height="12rem"
            />
          </div>
          <div className="ostali-partneri-slider">
            <h3>MEDIJSKI PARTNERI</h3>
            <PartneriSlider
              partneri={generalniPartneri}
              settings={generalniSettings}
              width="12rem"
              height="12rem"
            />
          </div>
        </div>
      </div>
      <Footer pocetakPocetna={pocetakOstaliPartneri} />
    </>
  );
};

export default OstaliPartneri;
