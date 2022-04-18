import React, { useRef, useEffect } from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Lopta from "./../../Utilities/Lopta/Lopta";
import "./Pocetna.scss";
import { motion } from "framer-motion";
import c2sSvetli from "../../Assets/Images/c2slogo_svetli.png";
import PartneriSlider from "./PartneriSlider";

//zlatni partneri
import raiffeisen from "../../Assets/Images/Partneri/raiffeisen.svg";

//godisnji
import devit from "../../Assets/Images/Partneri/godisnji/devit.png";
import digitec from "../../Assets/Images/Partneri/godisnji/digitec.png";
import fon from "../../Assets/Images/Partneri/godisnji/fon.png";
import guarana from "../../Assets/Images/Partneri/godisnji/guarana.png";
import hedwell from "../../Assets/Images/Partneri/godisnji/hedwell.png";
import mainstream from "../../Assets/Images/Partneri/godisnji/mainstream.png";
import prime from "../../Assets/Images/Partneri/godisnji/prime.png";
import { scrollFunc } from "../../Components/Footer/Footer";

//carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Pocetna = () => {
    const pocetakPocetna = useRef();
    useEffect(() => {
        scrollFunc(pocetakPocetna);
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

    const godisnjiSettings = {
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

    return (
        <>
            <div className="pocetak-pocetna" ref={pocetakPocetna}></div>
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
                            <Lopta
                                boja="transparentna"
                                width="4.5rem"
                                height="4.5rem"
                            />
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
                                Unapredi svoje znanje učeći od iskusnih IT
                                stručnjaka, oslobodi se treme kroz simulaciju
                                intervjua i izađi iz zone komfora. Čekamo te od
                                14. do 17. maja. Prijave se uskoro otvaraju
                            </p>
                            <div className="timer">
                                <div className="dani">
                                    <p>14</p>
                                    <p>dana</p>
                                </div>
                                <div className="sati">
                                    <p>08</p>
                                    <p>sati</p>
                                </div>
                                <div className="minuti">
                                    <p>15</p>
                                    <p>minuta</p>
                                </div>
                            </div>
                            <div className="dugmad-grupa">
                                <motion.button
                                    className="dugme crveno"
                                    whileHover={{
                                        scale: 1.1,
                                    }}
                                    whileTap={{
                                        scale: 0.9,
                                    }}
                                >
                                    <Link to="/prijava">Prijavi se</Link>
                                </motion.button>
                                <motion.button
                                    className="dugme transparentno"
                                    whileHover={{
                                        scale: 1.1,
                                    }}
                                    whileTap={{
                                        scale: 0.9,
                                    }}
                                >
                                    <Link to="/o-projektu/radionice">
                                        O projektu
                                    </Link>
                                </motion.button>
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
                            <Lopta
                                boja="transparentna"
                                width="4.5rem"
                                height="4.5rem"
                            />
                            <Lopta boja="crvena" width="5rem" height="5rem" />
                        </div>
                    </div>
                    <div className="kako-postati-container">
                        <h3>Kako da postanes deo c2s-a?</h3>
                        <div className="kako">
                            <p>
                                1. Odaberi kompaniju sa kojom želiš da se
                                upoznaš,
                            </p>
                            <p>2. Napiši prijavu,</p>
                            <p>3. Pošalji prijavu,</p>
                            <p>
                                4. Sačekaj mejl kojim ti javljamo da si
                                primljen/a,
                            </p>
                            <p>
                                5. Provedi 4 dana unapređujući svoje znanje i
                                upoznajući se sa nekim od najboljih kompanija u
                                Srbiji.
                            </p>
                        </div>
                    </div>
                    <div className="kompanije-ucesnice">
                        <h3>kompanije učesnice</h3>
                        <div className="logoi-kompanija">
                            <div className="partner-wrapper">
                                <div className="img-wrapper">
                                    <img src={raiffeisen} alt="Raiffeisen" />
                                </div>
                            </div>
                            <div className="partner-wrapper">
                                <div className="img-wrapper">
                                    <img src={prime} alt="Prime Software" />
                                </div>
                            </div>
                            <div className="partner-wrapper">
                                <div className="img-wrapper">
                                    <img src={raiffeisen} alt="Raiffeisen" />
                                </div>
                            </div>
                            <div className="partner-wrapper">
                                <div className="img-wrapper">
                                    <img src={raiffeisen} alt="Raiffeisen" />
                                </div>
                            </div>
                            <div className="partner-wrapper">
                                <div className="img-wrapper">
                                    <img src={raiffeisen} alt="Raiffeisen" />
                                </div>
                            </div>
                            <div className="partner-wrapper">
                                <div className="img-wrapper">
                                    <img src={raiffeisen} alt="Raiffeisen" />
                                </div>
                            </div>
                        </div>
                        <div className="ostale-kompanije">
                            <div className="godisnji-partneri">
                                <h3>godisnji partneri</h3>
                                <PartneriSlider
                                    partneri={godisnjiPartneri}
                                    settings={godisnjiSettings}
                                    width="12rem"
                                    height="12rem"
                                />
                            </div>
                            <div className="naturalni-partneri">
                                <h3>naturalni partneri</h3>
                                <PartneriSlider
                                    partneri={godisnjiPartneri}
                                    settings={godisnjiSettings}
                                    width="12rem"
                                    height="12rem"
                                />
                            </div>
                            <div className="medijski-partneri">
                                <h3>medijski partneri</h3>
                                <PartneriSlider
                                    partneri={godisnjiPartneri}
                                    settings={godisnjiSettings}
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
