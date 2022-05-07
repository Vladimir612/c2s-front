import React, { useRef } from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Lopta from "./../../Utilities/Lopta/Lopta";
import "./Pocetna.scss";
import { motion } from "framer-motion";
import c2sSvetli from "../../Assets/Images/c2slogo_svetli.png";
import PartneriSlider from "./PartneriSlider";

//pokrovitelji
import raiffeisen from "../../Assets/Images/Partneri/pokrovitelji/raiffeisen.svg";
import a1 from "../../Assets/Images/Partneri/pokrovitelji/a1.png";
import adacta from "../../Assets/Images/Partneri/pokrovitelji/adacta.png";
import eyesee from "../../Assets/Images/Partneri/pokrovitelji/eyesee.png";
import semos from "../../Assets/Images/Partneri/pokrovitelji/semos.png";

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
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Pocetna = () => {
  const pocetakPocetna = useRef();

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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 1500,
    centerPadding: "60px",
  };

  const robniPartneri = [
    {
      partnerSlika: dragibravo,
      partnerIme: "Dragi Bravo",
      pozadina: "#fff",
      link: "https://www.instagram.com/dragibravo/",
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

  // //timer
  // const [timerDays, setTimerDays] = useState();
  // const [timerHours, setTimerHours] = useState();
  // const [timerMinutes, setTimerMinutes] = useState();

  // let interval;

  // const startTimer = () => {
  //   const countDownDate = new Date("May 6, 2022").getTime();
  //   interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countDownDate - now;
  //     const days = Math.floor(distance / (24 * 60 * 60 * 1000));
  //     const hours = Math.floor(
  //       (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));

  //     if (distance < 0) {
  //       clearInterval(interval.curernt);
  //     } else {
  //       setTimerDays(days);
  //       setTimerHours(hours);
  //       setTimerMinutes(minutes);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   startTimer();
  // });

  return (
    <>
      <div className="pocetak-pocetna" ref={pocetakPocetna}></div>
      <Link to="/prijava">
        <div className="otvorene-prijave-message">Prijave su otvorene</div>
      </Link>
      <div className="pocetna-container">
        <Nav />
        <div className="hero-section">
          <div className="lopte">
            <div className="prva-grupa">
              <Lopta boja="bela" width="3rem" height="3rem" />
              <Lopta boja="crvena" width="5rem" height="5rem" />
            </div>
            <div className="druga-grupa">
              <Lopta boja="bela" width="6.5rem" height="6.5rem" />
              <Lopta boja="crvena" width="14rem" height="14rem" />
            </div>
            <div className="treca-grupa">
              <Lopta boja="transparentna" width="4.5rem" height="4.5rem" />
              <Lopta boja="crvena" width="5rem" height="5rem" />
            </div>
          </div>
          <div className="content">
            <motion.div
              className="staklo-container"
              animate={{ x: "0%", opacity: 1 }}
              initial={{
                x: "-100%",
                opacity: 0,
              }}
              transition={{ duration: 1 }}
            >
              <h1>kompanije studentima</h1>
              <h2>
                break your lim<span>it</span>s
              </h2>
              <p className="uvodni-tekst">
                Unapredi svoje znanje učeći od iskusnih IT stručnjaka, oslobodi
                se treme kroz simulaciju intervjua i izađi iz zone komfora.
                Očekujemo te od 14. do 17. maja.
              </p>
              <div className="timer">
                {/* <div className="dani">
                  <p>{timerDays}</p>
                  <p>dana</p>
                </div>
                <div className="sati">
                  <p>{timerHours}</p>
                  <p>sati</p>
                </div>
                <div className="minuti">
                  <p>{timerMinutes}</p>
                  <p>minuta</p>
                </div> */}
                <p>PRIJAVE SU ZATVORENE!</p>
              </div>
              <div className="dugmad-grupa">
                {/* <Link to="/prijava">
                  <motion.button
                    className="dugme crveno"
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                  >
                    Prijavi se
                  </motion.button>
                </Link> */}
                <Link to="/o-projektu/radionice">
                  <motion.button
                    className="dugme transparentno"
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                  >
                    O projektu
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="staklo-container"
              animate={{ x: "0%", opacity: 1 }}
              initial={{
                x: "100%",
                opacity: 0,
              }}
              transition={{ duration: 1 }}
            >
              <div className="img-wrapper">
                <img src={c2sSvetli} alt="c2s logo" />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="kompanije-section">
          <div className="lopte">
            <div className="prva-grupa">
              <Lopta boja="bela" width="3rem" height="3rem" />
              <Lopta boja="crvena" width="5rem" height="5rem" />
            </div>
            <div className="druga-grupa">
              <Lopta boja="bela" width="4.5rem" height="4.5rem" />
              <Lopta boja="crvena" width="8rem" height="8rem" />
            </div>
            <div className="treca-grupa">
              <Lopta boja="transparentna" width="4.5rem" height="4.5rem" />
              <Lopta boja="crvena" width="5rem" height="5rem" />
            </div>
          </div>
          <div className="kako-postati-container">
            <h3>ZAŠTO DA POSTANEŠ DEO C2S-a?</h3>
            <div className="kako">
              <p>
                Kompanije studentima predstavlja projekat čiji je organizator
                Udruženje studenata informatike FONIS koji za cilj ima da kroz
                interaktivan način omogući svim zainteresovanim učesnicima da
                nauče nešto novo iz oblasti informacionih tehnologija. Projekat
                će se održati od 14. do 17. maja i sastoji se iz panel
                diskusije, šest IT radionica, speed dating-a i Tech Challenge-a.
                Generalni pokrovitelji projekta ove godine su kompanije
                Raiffeisen banka, Adacta, A1, Semos Education, Prime Software i
                EyeSee. Ukoliko želiš da budeš deo ovogodišnjeg C2S-a, odaberi
                jednu ili više kompanija sa kojim želiš da se upoznaš, sastavi i
                pošalji prijavu i provedi 4 dana unapređujući svoje kompetencije
                i znanje!
              </p>
            </div>
          </div>
          <div className="kompanije-ucesnice">
            <h3>kompanije učesnice</h3>
            <div className="logoi-kompanija">
              <div className="partner-wrapper">
                <a
                  href="https://www.raiffeisenbank.rs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="img-wrapper">
                    <LazyLoadImage
                      effect="blur"
                      src={raiffeisen}
                      alt="Raiffeisen"
                    />
                  </div>
                </a>
              </div>
              <a
                href="https://www.primeholding.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="partner-wrapper">
                  <div className="img-wrapper">
                    <LazyLoadImage
                      effect="blur"
                      src={prime}
                      alt="Prime software"
                    />
                  </div>
                </div>
              </a>
              <a
                href="https://semosedu.com.mk/Pocetna.aspx"
                target="_blank"
                rel="noreferrer"
              >
                <div className="partner-wrapper">
                  <div className="img-wrapper">
                    <LazyLoadImage
                      effect="blur"
                      src={semos}
                      alt="Semos Education"
                    />
                  </div>
                </div>
              </a>
              <a href="https://a1.rs/privatni" target="_blank" rel="noreferrer">
                <div className="partner-wrapper">
                  <div className="img-wrapper">
                    <LazyLoadImage effect="blur" src={a1} alt="A1" />
                  </div>
                </div>
              </a>
              <a
                href="https://www.adacta-fintech.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="partner-wrapper">
                  <div className="img-wrapper">
                    <LazyLoadImage effect="blur" src={adacta} alt="Adacta" />
                  </div>
                </div>
              </a>
              <a
                href="https://eyesee-research.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="partner-wrapper">
                  <div className="img-wrapper">
                    <LazyLoadImage effect="blur" src={eyesee} alt="EyeSee" />
                  </div>
                </div>
              </a>
            </div>
            <div className="ostale-kompanije">
              <div className="godisnji-partneri">
                <h3>godišnji partneri</h3>
                <PartneriSlider
                  partneri={godisnjiPartneri}
                  settings={allSettings}
                  width="12rem"
                  height="12rem"
                />
              </div>
              <div className="naturalni-partneri">
                <h3>robni partneri</h3>
                <PartneriSlider
                  partneri={robniPartneri}
                  settings={allSettings}
                  width="12rem"
                  height="12rem"
                />
              </div>
              <div className="medijski-partneri" style={{ display: "none" }}>
                <h3>medijski partneri</h3>
                <PartneriSlider
                  partneri={medijskiPartneri}
                  settings={allSettings}
                  width="12rem"
                  height="12rem"
                />
              </div>
            </div>
          </div>
        </div>

        <Footer pocetakPocetna={pocetakPocetna} />
      </div>
    </>
  );
};

export default Pocetna;
