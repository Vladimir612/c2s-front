import React, { useRef, useState } from "react";
import "./ONama.scss";
import Footer from "../../Components/Footer/Footer";
import Nav from "./../../Components/Nav/Nav";
import Tim from "./Tim";

import oC2su from "../../Assets/Images/oC2su.png";
import oFonisu from "../../Assets/Images/oFonisu.png";

import nekiLjudi from "../../Assets/Images/ljudi.png";

//organizacioni tim
import AnjaPejovic from "../../Assets/Images/organizacioniTim/AnjaPejovic.png";
import BojanaCelovic from "../../Assets/Images/organizacioniTim/BojanaCelovic.png";
import coreTimSlika from "../../Assets/Images/organizacioniTim/coreTim.png";
import crTimSlika from "../../Assets/Images/organizacioniTim/crTim.png";
import dizajnTimSlika from "../../Assets/Images/organizacioniTim/dizajnTim.png";
import hrTimSlika from "../../Assets/Images/organizacioniTim/hrTim.png";
import itTimSlika from "../../Assets/Images/organizacioniTim/itTim.png";
import KostaAcimovic from "../../Assets/Images/organizacioniTim/KostaAcimovic.png";
import logistikaTimSlika from "../../Assets/Images/organizacioniTim/logistikaTim.png";
import NemanjaVukelic from "../../Assets/Images/organizacioniTim/NemanjaVukelic.png";
import prTimSlika from "../../Assets/Images/organizacioniTim/prTim.png";
import StefanBozovic from "../../Assets/Images/organizacioniTim/StefanBozovic.png";
import VladimirLazarevic from "../../Assets/Images/organizacioniTim/VladimirLazarevic.png";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Lopta from "./../../Utilities/Lopta/Lopta";

import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

const ONama = () => {
  const pocetakPocetna = useRef();
  const [visibleSecond, setVisibleSecond] = useState(false);

  const coreTim = {
    imeTima: "CORE TIM",
    oTimu:
      "Tim koordinatora, glavni zaslužni i odgovorni za uspešnu realizaciju projekta, svojim iskustvom i znanjem uspešno je organizovao i upravljao celokupnim projektom. 🤓",
    slikaKoordinatora: nekiLjudi,
    imeKoordinatora: "Ana Kesić",
    funkcijaKoordinatora: "Koordinatorka projekta",
    slikaTima: coreTimSlika,
  };
  const itTim = {
    imeTima: "IT TIM",
    oTimu:
      "Tim za informacione tehnologije marljivo je radio na izradi veb sajta projekta gde možete pronaći sve neophodne informacije u vezi projekta. 💻",
    slikaKoordinatora: VladimirLazarevic,
    imeKoordinatora: "Vladimir Lazarević",
    funkcijaKoordinatora: "Koordinator IT tima",
    slikaTima: itTimSlika,
  };
  const dizajnTim = {
    imeTima: "DIZAJN TIM",
    oTimu:
      "Tim za dizajn kroz vizuelnu prezentaciju projekta pokazao je svoju kreativnost i veštine. 🎨",
    slikaKoordinatora: StefanBozovic,
    imeKoordinatora: "Stefan Božović",
    funkcijaKoordinatora: "Koordinator dizajn tima",
    slikaTima: dizajnTimSlika,
  };
  const crTim = {
    imeTima: "CR TIM",
    oTimu:
      "Tim za odnose sa kompanijama je zaslužan za ostvarivanje partnerstava koji doprinose realizaciji projekta na visokom nivou. 💰",
    slikaKoordinatora: AnjaPejovic,
    imeKoordinatora: "Anja Pejović",
    funkcijaKoordinatora: "Koordinatorka CR tima",
    slikaTima: crTimSlika,
  };

  const hrTim = {
    imeTima: "HR TIM",
    oTimu:
      "Tim za ljudske resurse vodio je računa da članovi svih organizacionih timova dostignu svoj pun potencijal i upravljao selekcijom prijavljenih kandidata. 👩🏻‍🤝‍👨🏼",
    slikaKoordinatora: KostaAcimovic,
    imeKoordinatora: "Kosta Aćimović",
    funkcijaKoordinatora: "Koordinator HR tima",
    slikaTima: hrTimSlika,
  };

  const prTim = {
    imeTima: "PR TIM",
    oTimu:
      "Tim za odnose sa javnošću bio je zadužen za novinarske poslove poput pisanja tekstova, promocije, prezentovanje samog projekta u najboljem svetlu, kao i ostvarivanje medijskih saradnji. 🗞",
    slikaKoordinatora: BojanaCelovic,
    imeKoordinatora: "Bojana Ćelović",
    funkcijaKoordinatora: "Koordinatorka PR tima",
    slikaTima: prTimSlika,
  };

  const logistikaTim = {
    imeTima: "LOGISTIKA",
    oTimu:
      "Tim za logistiku osmislio je operacioni plan celokupnog događaja i postarao se da sve prođe u najboljem redu. 📆",
    slikaKoordinatora: NemanjaVukelic,
    imeKoordinatora: "Nemanja Vukelić",
    funkcijaKoordinatora: "Koordinator logistike",
    slikaTima: logistikaTimSlika,
  };

  const [vidljivTim, setVidljivTim] = useState(0);

  const handleMoveTim = (napred) => {
    if (napred) {
      if (vidljivTim === 6) {
        setVidljivTim(0);
      } else {
        setVidljivTim(vidljivTim + 1);
      }
    } else {
      if (vidljivTim === 0) {
        setVidljivTim(6);
      } else {
        setVidljivTim(vidljivTim - 1);
      }
    }
  };

  return (
    <>
      <div className="pocetak-pocetna" ref={pocetakPocetna}></div>
      <Nav />
      <div className="o-nama-container">
        <div className="lopte-anim">
          <div className="prva-grupa">
            <Lopta boja="bela" width="3rem" height="3rem" />
            <Lopta boja="crvena" width="5rem" height="5rem" />
          </div>
          <div className="druga-grupa">
            <Lopta boja="bela" width="6.5rem" height="6.5rem" />
            <Lopta boja="crvena" width="5rem" height="5rem" />
          </div>
        </div>
        <div className="lopte-anim">
          <div className="prva-grupa">
            <Lopta boja="bela" width="3rem" height="3rem" />
            <Lopta boja="crvena" width="5rem" height="5rem" />
          </div>
          <div className="druga-grupa">
            <Lopta boja="bela" width="6.5rem" height="6.5rem" />
            <Lopta boja="crvena" width="5rem" height="5rem" />
          </div>
        </div>
        <div class="o-nama-flex">
          <motion.div
            className="left-content"
            animate={{ x: "0%" }}
            initial={{
              x: "-50%",
            }}
            transition={{ duration: 0.5 }}
          >
            <h2>O FONISU</h2>
            <p>
              Udruženje studenata informatike FONIS je studentska, nevladina i
              neprofitna organizacija sa Fakulteta organizacionih nauka. Okuplja
              buduće IT stručnjake u cilju učestvovanja na stručnim
              predavanjima, kursevima, takmičenjima i seminarima, rada na
              projektima, kao i ostvarivanja stručnih praksi u IT oblastima.
              Zajedničkim zalaganjem svih članova udruženja, FONIS već dugi niz
              godina radi na organizaciji i realizaciji nekoliko edukativnih i
              takmičarskih projekata iz sveta IT-ja, među kojima je i upravo
              projekat Kompanije studentima.
            </p>
          </motion.div>
          <motion.div
            className="right-content"
            animate={{ x: "0%" }}
            initial={{
              x: "50%",
            }}
            transition={{ duration: 0.5 }}
          >
            <div class="img-wrapper">
              <img src={oFonisu} alt="fonis-slika" />
            </div>
          </motion.div>
        </div>
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible && !visibleSecond) {
              setVisibleSecond(true);
            }
            return;
          }}
          delayedCall
          partialVisibility
        >
          <motion.div
            class="o-nama-flex"
            animate={visibleSecond && { y: "0%" }}
            initial={{
              y: "50%",
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="left-content">
              <h2>C2S</h2>
              <p>
                Kompanije studentima predstavlja projekat čiji je organizator
                Udruženje studenata informatike FONIS, a za cilj ima da kroz
                zabavan i interaktivan način omogući svim zainteresovanim
                učesnicima da nauče nešto novo iz oblasti informacionih
                tehnologija. Na panel diskusiji ćeš dobiti priliku da čuješ
                savete i priče iz poslovnih praksi koje ti mogu značiti kada se
                budeš našao na mestu praktikanta. Pored panel diskusije, na
                radionicama, koje će drzati predstavnici kompanija, dobićeš
                priliku da unaprediš svoje znanje u izabranoj oblasti iz ITa.
                Tech challenge je deo projekta na kome je tvoj zadatak da nađeš
                rešenje za realan problem sa kojim se susreću IT kompanije. Na
                kraju, važan deo ovog projekta predstavlja i speed dating, gde
                ćeš se naći u ulozi kandidata za posao ili praksu i tako dobiti
                priliku da osetiš kako izgleda pravi intervju koji je neophodan
                za ulazak u svaku IT kompaniju. Generalni pokrovitelji projekta
                su Raiffeisen banka💵, Adacta💻, A1📞, Semos📚, Prime
                software💿, Eye see⌨️. Čekamo tvoju prijavu! 👍🏼
              </p>
            </div>
            <div className="right-content">
              <div class="img-wrapper">
                <img src={oC2su} alt="C2s slika" />
              </div>
            </div>
          </motion.div>
        </VisibilitySensor>
        <div class="o-nama-timovi">
          <h2>ORGANIZACIONI TIM PROJEKTA</h2>
          <div class="o-nama-carousel">
            <div class="o-nama-navigation">
              <div className="left" onClick={() => handleMoveTim(false)}>
                <FiChevronLeft size={35} color="#b4afb3" />
              </div>
              <div className="slika">
                <div className="logo-c2s">
                  <div className="levi-trapez"></div>
                  <div className="srednji-trapez"></div>
                  <div className="desni-trapez"></div>
                  <div className="lopte-nav">
                    <div
                      className={
                        vidljivTim === 1 ? "lop lopta-1 active" : "lop lopta-1"
                      }
                      onClick={() => setVidljivTim(1)}
                    >
                      1
                    </div>
                    <div
                      className={
                        vidljivTim === 2 ? "lop lopta-2 active" : "lop lopta-2"
                      }
                      onClick={() => setVidljivTim(2)}
                    >
                      2
                    </div>
                    <div
                      className={
                        vidljivTim === 3 ? "lop lopta-3 active" : "lop lopta-3"
                      }
                      onClick={() => setVidljivTim(3)}
                    >
                      3
                    </div>
                    <div
                      className={
                        vidljivTim === 4 ? "lop lopta-4 active" : "lop lopta-4"
                      }
                      onClick={() => setVidljivTim(4)}
                    >
                      4
                    </div>
                    <div
                      className={
                        vidljivTim === 5 ? "lop lopta-5 active" : "lop lopta-5"
                      }
                      onClick={() => setVidljivTim(5)}
                    >
                      5
                    </div>
                    <div
                      className={
                        vidljivTim === 6 ? "lop lopta-6 active" : "lop lopta-6"
                      }
                      onClick={() => setVidljivTim(6)}
                    >
                      6
                    </div>
                  </div>
                  <div className="linije-nav">
                    <div className="lin linija-1"></div>
                    <div className="lin linija-2"></div>
                    <div className="lin linija-3"></div>
                    <div className="lin linija-4"></div>
                    <div className="lin linija-5"></div>
                  </div>
                </div>
              </div>
              <div className="right" onClick={() => handleMoveTim(true)}>
                <FiChevronRight size={35} color="#b4afb3" />
              </div>
            </div>
            {vidljivTim === 0 && <Tim tim={coreTim} />}
            {vidljivTim === 1 && <Tim tim={itTim} />}
            {vidljivTim === 2 && <Tim tim={dizajnTim} />}
            {vidljivTim === 3 && <Tim tim={crTim} />}
            {vidljivTim === 4 && <Tim tim={hrTim} />}
            {vidljivTim === 5 && <Tim tim={prTim} />}
            {vidljivTim === 6 && <Tim tim={logistikaTim} />}
          </div>
        </div>
      </div>
      <Footer pocetakPocetna={pocetakPocetna} />
    </>
  );
};

export default ONama;
