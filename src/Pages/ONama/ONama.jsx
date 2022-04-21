import React, { useRef, useState, useEffect } from "react";
import "./ONama.scss";
import Footer from "../../Components/Footer/Footer";
import Nav from "./../../Components/Nav/Nav";
import Tim from "./Tim";

import oC2su from "../../Assets/Images/oC2su.jpg";
import oFonisu from "../../Assets/Images/oFonisu.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";

//organizacioni tim
import AnaKesic from "../../Assets/Images/organizacioniTim/AnaKesic.jpg";
import AnjaPejovic from "../../Assets/Images/organizacioniTim/AnjaPejovic.jpg";
import BojanaCelovic from "../../Assets/Images/organizacioniTim/BojanaCelovic.jpg";
import coreTimSlika from "../../Assets/Images/organizacioniTim/coreTim.jpg";
import crTimSlika from "../../Assets/Images/organizacioniTim/crTim.jpg";
import dizajnTimSlika from "../../Assets/Images/organizacioniTim/dizajnTim.jpg";
import hrTimSlika from "../../Assets/Images/organizacioniTim/hrTim.jpg";
import itTimSlika from "../../Assets/Images/organizacioniTim/itTim.jpg";
import KostaAcimovic from "../../Assets/Images/organizacioniTim/KostaAcimovic.jpg";
import logistikaTimSlika from "../../Assets/Images/organizacioniTim/logistikaTim.jpg";
import NemanjaVukelic from "../../Assets/Images/organizacioniTim/NemanjaVukelic.jpg";
import prTimSlika from "../../Assets/Images/organizacioniTim/prTim.jpg";
import StefanBozovic from "../../Assets/Images/organizacioniTim/StefanBozovic.jpg";
import VladimirLazarevic from "../../Assets/Images/organizacioniTim/VladimirLazarevic.jpg";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Lopta from "./../../Utilities/Lopta/Lopta";

import { motion } from "framer-motion";
import { scrollFunc } from "../../Components/Footer/Footer";

const ONama = () => {
  const pocetakPocetna = useRef();
  useEffect(() => {
    scrollFunc(pocetakPocetna);
  }, []);

  const coreTim = {
    imeTima: "TIM KOORDINATORA",
    oTimu:
      "Tim koordinatora čini sedam vrednih i entuzijastičnih mladih ljudi koji svakodnevno neumorno rade da ovogodišnji projekat nadmaši sva očekivanja. Svojim znanjem i iskustvom predvodi i upravlja organizacijom celog događaja.",
    slikaKoordinatora: AnaKesic,
    imeKoordinatora: "Ana Kesić",
    funkcijaKoordinatora: "Koordinatorka projekta",
    slikaTima: coreTimSlika,
  };
  const itTim = {
    imeTima: "TIM ZA INFORMACIONE TEHNOLOGIJE",
    oTimu:
      "Tim za informacione tehnologije zadužen je za izradu veb sajta projekta Kompanije studentima, kao najvažnijeg komunikacionog kanala na kom se mogu pronaći sve važne informacije o održavanju projekta.",
    slikaKoordinatora: VladimirLazarevic,
    imeKoordinatora: "Vladimir Lazarević",
    funkcijaKoordinatora: "Koordinator tima za informacione tehnologije",
    slikaTima: itTimSlika,
  };
  const dizajnTim = {
    imeTima: "DIZAJN TIM",
    oTimu:
      "Tim za dizajn zaslužan je za osmišljavanje i kreiranje celokupnog vizuelnog identiteta ovogodišnjeg C2S-a. Kroz izradu brojnih štampanih i digitalnih publikacija približavaju projekat učesnicima i pokazuju svoju kreativnost i veštine.",
    slikaKoordinatora: StefanBozovic,
    imeKoordinatora: "Stefan Božović",
    funkcijaKoordinatora: "Koordinator dizajn tima",
    slikaTima: dizajnTimSlika,
  };
  const crTim = {
    imeTima: "TIM ZA KORPORATIVNE ODNOSE",
    oTimu:
      "Tim za korporativne odnose posvećen je sklapanju i održavanju saradnji sa brojnim kompanijama koje nam pružaju podršku da projekat održimo na visokom nivou. Formiraju brojna finansijska, naturalna i robna partnerstva i omogućavaju učesnicima što bolji ugođaj.",
    slikaKoordinatora: AnjaPejovic,
    imeKoordinatora: "Anja Pejović",
    funkcijaKoordinatora: "Koordinatorka tima za korporativne odnose",
    slikaTima: crTimSlika,
  };

  const hrTim = {
    imeTima: "TIM ZA LJUDSKE RESURSE",
    oTimu:
      "Tim za ljudske resurse trudi se da ojača koheziju celog organizacionog tima, kao i da svaki član tima dostigne svoj puni potencijal. Upravlja selekcijom kandidata, komunicira sa učesnicima projekta i tu je da odgovori na sva njihova pitanja i nedoumice.",
    slikaKoordinatora: KostaAcimovic,
    imeKoordinatora: "Kosta Aćimović",
    funkcijaKoordinatora: "Koordinator tima za ljudske resurse",
    slikaTima: hrTimSlika,
  };

  const prTim = {
    imeTima: "TIM ZA ODNOSE SA JAVNOŠĆU",
    oTimu:
      "Tim za odnose sa javnošću radi na kreiranju marketing strategije C2S-a, kako bi na što bolji način približio projekat studentima i predstavio njegovu vrednost. Zaslužan je za sklapanje medijskih saradnji i zajedno sa dizajnom, kreiranje objava i tekstova za društvene mreže.",
    slikaKoordinatora: BojanaCelovic,
    imeKoordinatora: "Bojana Ćelović",
    funkcijaKoordinatora: "Koordinatorka tima za odnose sa javnošću",
    slikaTima: prTimSlika,
  };

  const logistikaTim = {
    imeTima: "TIM ZA LOGISTIKU",
    oTimu:
      "Tim za logistiku kreira operacioni plan održavanja celokupnog događaja i pronalazi prostor u kojem će se organizovati. Na danima projekta tu je da se postara da se sve odigra u najboljem redu i da učesnici sa C2S-a odu sa prelepim uspomenama.",
    slikaKoordinatora: NemanjaVukelic,
    imeKoordinatora: "Nemanja Vukelić",
    funkcijaKoordinatora: "Koordinator tima za logistiku",
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
            <h2>O FONIS-u</h2>
            <p>
              Udruženje studenata informatike FONIS je studentska, nevladina i
              neprofitna organizacija sa Fakulteta organizacionih nauka. Okuplja
              buduće IT stručnjake u cilju učestvovanja na stručnim
              predavanjima, kursevima, takmičenjima i seminarima, rada na
              projektima, kao i ostvarivanja stručnih praksi u IT oblastima.
              Zajedničkim zalaganjem svih članova udruženja, FONIS već dugi niz
              godina radi na organizaciji i realizaciji više edukativnih i
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
              <LazyLoadImage effect="blur" src={oFonisu} alt="fonis-slika" />
            </div>
          </motion.div>
        </div>

        <div class="o-nama-flex">
          <div className="left-content">
            <h2>C2S</h2>
            <p>
              Kompanije studentima predstavlja projekat čiji je organizator
              Udruženje studenata informatike FONIS koji za cilj ima da na
              inovativan i interaktivan način omogući svim zainteresovanim
              učesnicima da nauče nešto novo iz oblasti informacionih
              tehnologija. Na panel diskusiji ćeš dobiti priliku da čuješ savete
              i priče iz poslovnih praksi koje ti mogu značiti kada se budeš
              našao na mestu praktikanta. Pored panel diskusije, na radionicama,
              koje će drzati predstavnici kompanija, dobićeš priliku da
              unaprediš svoje znanje u izabranoj oblasti iz IT-ja. Tech
              Challenge je deo projekta takmičarskog karaktera na kome je tvoj
              zadatak da zajedno sa članovima svog tima pronađeš rešenje za
              realan problem sa kojim se susreću IT kompanije u svom poslovanju.
              One koji se najbolje pokažu ocekuju i nagrade. Na kraju, važan deo
              ovog projekta predstavlja i speed dating, gde ćeš se naći u ulozi
              kandidata za posao ili praksu i tako dobiti priliku da osetiš kako
              izgleda pravi intervju koji je neophodan za ulazak u svaku IT
              kompaniju. Generalni pokrovitelji projekta ove godine su
              Raiffeisen banka, Adacta, A1, Semos Education, Prime software,
              EyeSee. Čekamo tvoju prijavu!
            </p>
          </div>
          <div className="right-content">
            <div class="img-wrapper">
              <img src={oC2su} alt="C2s slika" />
            </div>
          </div>
        </div>
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
            {vidljivTim === 2 && <Tim tim={hrTim} />}
            {vidljivTim === 3 && <Tim tim={dizajnTim} />}
            {vidljivTim === 4 && <Tim tim={crTim} />}
            {vidljivTim === 5 && <Tim tim={logistikaTim} />}
            {vidljivTim === 6 && <Tim tim={prTim} />}
          </div>
        </div>
      </div>
      <Footer pocetakPocetna={pocetakPocetna} />
    </>
  );
};

export default ONama;
