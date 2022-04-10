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
          <p>
            S ponosom vam predstavljamo naše partnere koji neizmernom podrškom
            doprinose uspešnoj realizaciji naših projekata.
          </p>
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
      <Footer pocetakPocetna={pocetakOstaliPartneri} />
    </>
  );
};

export default OstaliPartneri;
