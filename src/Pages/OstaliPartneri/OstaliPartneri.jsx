import React, { useRef, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Nav from "./../../Components/Nav/Nav";
import "./OstaliPartneri.scss";
import { scrollFunc } from "../../Components/Footer/Footer";
//godisnji
import devit from "../../Assets/Images/Partneri/godisnji/devit.png";
import digitec from "../../Assets/Images/Partneri/godisnji/digitec.png";
import fon from "../../Assets/Images/Partneri/godisnji/fon.png";
import guarana from "../../Assets/Images/Partneri/godisnji/guarana.png";
import hedwell from "../../Assets/Images/Partneri/godisnji/hedwell.png";
import mainstream from "../../Assets/Images/Partneri/godisnji/mainstream.png";
import prime from "../../Assets/Images/Partneri/godisnji/prime.png";

//robni
import escape from "../../Assets/Images/Partneri/robni/escape.png";
import nescafe from "../../Assets/Images/Partneri/robni/nescafe.png";
import dragibravo from "../../Assets/Images/Partneri/robni/DragiBravo.jpg";

//medijiski
import BestBg from "../../Assets/Images/Partneri/medijski/BestBg.png";
import BestNs from "../../Assets/Images/Partneri/medijski/BestNs.png";
import caseFon from "../../Assets/Images/Partneri/medijski/case.png";
import centarZaRazvoj from "../../Assets/Images/Partneri/medijski/centarZaRazvoj.png";
import Eestec from "../../Assets/Images/Partneri/medijski/Eestec.png";
import fonovCentar from "../../Assets/Images/Partneri/medijski/fonovCentar.png";
import future from "../../Assets/Images/Partneri/medijski/future.png";
import kancelarija from "../../Assets/Images/Partneri/medijski/kancelarija.png";
import Probjave from "../../Assets/Images/Partneri/medijski/Probjave.png";
import Savez from "../../Assets/Images/Partneri/medijski/Savez.png";
import spof from "../../Assets/Images/Partneri/medijski/spof.png";
import Suma from "../../Assets/Images/Partneri/medijski/Suma.png";
import SvetKompjutera from "../../Assets/Images/Partneri/medijski/SvetKompjutera.png";
import Unija from "../../Assets/Images/Partneri/medijski/Unija.png";
import Viser from "../../Assets/Images/Partneri/medijski/Viser.png";

//carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartnersSlider from "./../Home/PartnersSlider";
import { motion } from "framer-motion";
import Ball from "../../Utilities/Ball/Ball";

const OstaliPartneri = () => {
  const pocetakOstaliPartneri = useRef();

  useEffect(() => {
    scrollFunc(pocetakOstaliPartneri);
  }, []);
  const godisnjiPartneri = [
    {
      partnerImage: fon,
      partnerName: "Fon",
      bgColor: "#fff",
      link: "http://fon.bg.ac.rs/",
    },
    {
      partnerImage: prime,
      partnerName: "Prime",
      bgColor: "#fff",
      link: "https://www.primeholding.com/",
    },
    {
      partnerImage: mainstream,
      partnerName: "Mainstream",
      bgColor: "#fff",
      link: "https://www.mainstream.rs/",
    },
    {
      partnerImage: devit,
      partnerName: "DevIT",
      bgColor: "#fff",
      link: "https://www.devit.rs/",
    },
    {
      partnerImage: guarana,
      partnerName: "Guarana",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/",
    },
    {
      partnerImage: hedwell,
      partnerName: "Hedwell",
      bgColor: "#fff",
      link: "https://hedwell.com/",
    },
    {
      partnerImage: digitec,
      partnerName: "Digitec",
      bgColor: "#fff",
      link: "https://www.digitec.rs/reklamni_materijali",
    },
  ];

  const allSettings = {
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

  const naturalPartners = [
    {
      partnerImage: dragibravo,
      partnerName: "Dragi Bravo",
      bgColor: "#fff",
      link: "https://www.instagram.com/dragibravo/",
    },
    {
      partnerImage: escape,
      partnerName: "Escape",
      bgColor: "#fff",
      link: "https://escapegame.rs/",
    },
    {
      partnerImage: nescafe,
      partnerName: "Nescafe",
      bgColor: "#fff",
      link: "https://www.nescafe.com/rs/nase-kafe/nescafe-2in1",
    },
    {
      partnerImage: dragibravo,
      partnerName: "Dragi Bravo",
      bgColor: "#fff",
      link: "https://www.instagram.com/dragibravo/",
    },
    {
      partnerImage: escape,
      partnerName: "Escape",
      bgColor: "#fff",
      link: "https://escapegame.rs/",
    },
    {
      partnerImage: nescafe,
      partnerName: "Nescafe",
      bgColor: "#fff",
      link: "https://www.nescafe.com/rs/nase-kafe/nescafe-2in1",
    },
  ];

  const mediaPartners = [
    {
      partnerImage: BestBg,
      partnerName: "Best Beograd",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerImage: caseFon,
      partnerName: "Case study club",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerImage: centarZaRazvoj,
      partnerName: "Centar za razvoj karijere",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerImage: Eestec,
      partnerName: "Eestec",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerImage: BestNs,
      partnerName: "Best Novi Sad",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerImage: fon,
      partnerName: "FON",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerImage: fonovCentar,
      partnerName: "Fonov centar za razvoj karijere",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerImage: future,
      partnerName: "Future",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerImage: kancelarija,
      partnerName: "Kancelarija",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerImage: Probjave,
      partnerName: "prObjave",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerImage: Savez,
      partnerName: "Savez studenata Fona",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerImage: spof,
      partnerName: "SPOF",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerImage: Suma,
      partnerName: "Suma",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerImage: SvetKompjutera,
      partnerName: "Svet kompjutera",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerImage: Unija,
      partnerName: "Unija",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerImage: Viser,
      partnerName: "Viser",
      bgColor: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
  ];

  return (
    <>
      <div className="ref-start" ref={pocetakOstaliPartneri}></div>
      <Nav />
      <div className="ostali-partners-container">
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
        <div className="ostali-content">
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
          <div className="ostali-partners-slider">
            <h3>GODIŠNJI PARTNERI</h3>
            <PartnersSlider
              partners={godisnjiPartneri}
              settings={allSettings}
              width="12rem"
              height="12rem"
            />
          </div>
          <div className="ostali-partners-slider">
            <h3>ROBNI PARTNERI</h3>
            <PartnersSlider
              partners={naturalPartners}
              settings={allSettings}
              width="12rem"
              height="12rem"
            />
          </div>
          <div className="ostali-partners-slider" style={{ display: "none" }}>
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
      <Footer pageStartRef={pocetakOstaliPartneri} />
    </>
  );
};

export default OstaliPartneri;
