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
import PartneriSlider from "./../Pocetna/PartneriSlider";
import { motion } from "framer-motion";
import Lopta from "../../Utilities/Lopta/Lopta";

const OstaliPartneri = () => {
  const pocetakOstaliPartneri = useRef();

  useEffect(() => {
    scrollFunc(pocetakOstaliPartneri);
  }, []);
  const godisnjiPartneri = [
    {
      partnerSlika: fon,
      partnerIme: "Fon",
      pozadina: "#fff",
      link: "http://fon.bg.ac.rs/",
    },
    {
      partnerSlika: prime,
      partnerIme: "Prime",
      pozadina: "#fff",
      link: "https://www.primeholding.com/",
    },
    {
      partnerSlika: mainstream,
      partnerIme: "Mainstream",
      pozadina: "#fff",
      link: "https://www.mainstream.rs/",
    },
    {
      partnerSlika: devit,
      partnerIme: "DevIT",
      pozadina: "#fff",
      link: "https://www.devit.rs/",
    },
    {
      partnerSlika: guarana,
      partnerIme: "Guarana",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/",
    },
    {
      partnerSlika: hedwell,
      partnerIme: "Hedwell",
      pozadina: "#fff",
      link: "https://hedwell.com/",
    },
    {
      partnerSlika: digitec,
      partnerIme: "Digitec",
      pozadina: "#fff",
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

  const robniPartneri = [
    {
      partnerSlika: guarana,
      partnerIme: "Guarana",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/",
    },
    {
      partnerSlika: escape,
      partnerIme: "Escape",
      pozadina: "#fff",
      link: "https://escapegame.rs/",
    },
    {
      partnerSlika: nescafe,
      partnerIme: "Nescafe",
      pozadina: "#fff",
      link: "https://www.nescafe.com/rs/nase-kafe/nescafe-2in1",
    },
    {
      partnerSlika: guarana,
      partnerIme: "Guarana",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/",
    },
    {
      partnerSlika: escape,
      partnerIme: "Escape",
      pozadina: "#fff",
      link: "https://escapegame.rs/",
    },
    {
      partnerSlika: nescafe,
      partnerIme: "Nescafe",
      pozadina: "#fff",
      link: "https://www.nescafe.com/rs/nase-kafe/nescafe-2in1",
    },
  ];

  const medijskiPartneri = [
    {
      partnerSlika: BestBg,
      partnerIme: "Best Beograd",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerSlika: caseFon,
      partnerIme: "Case study club",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerSlika: centarZaRazvoj,
      partnerIme: "Centar za razvoj karijere",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerSlika: Eestec,
      partnerIme: "Eestec",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerSlika: BestNs,
      partnerIme: "Best Novi Sad",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerSlika: fon,
      partnerIme: "FON",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerSlika: fonovCentar,
      partnerIme: "Fonov centar za razvoj karijere",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerSlika: future,
      partnerIme: "Future",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerSlika: kancelarija,
      partnerIme: "Kancelarija",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerSlika: Probjave,
      partnerIme: "prObjave",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerSlika: Savez,
      partnerIme: "Savez studenata Fona",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerSlika: spof,
      partnerIme: "SPOF",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerSlika: Suma,
      partnerIme: "Suma",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerSlika: SvetKompjutera,
      partnerIme: "Svet kompjutera",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerSlika: Unija,
      partnerIme: "Unija",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
    {
      partnerSlika: Viser,
      partnerIme: "Viser",
      pozadina: "#fff",
      link: "https://knjaz.rs/portfolio/guarana/", //!treba
    },
  ];

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
            <h3>GODIŠNJI PARTNERI</h3>
            <PartneriSlider
              partneri={godisnjiPartneri}
              settings={allSettings}
              width="12rem"
              height="12rem"
            />
          </div>
          <div className="ostali-partneri-slider">
            <h3>ROBNI PARTNERI</h3>
            <PartneriSlider
              partneri={robniPartneri}
              settings={allSettings}
              width="12rem"
              height="12rem"
            />
          </div>
          <div className="ostali-partneri-slider">
            <h3>MEDIJSKI PARTNERI</h3>
            <PartneriSlider
              partneri={medijskiPartneri}
              settings={allSettings}
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
