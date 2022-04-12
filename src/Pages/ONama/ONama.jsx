import React, { useState } from "react";
import "./ONama.scss";
import Footer from "../../Components/Footer/Footer";
import Nav from "./../../Components/Nav/Nav";
import nekiLjudi from "../../Assets/Images/ljudi.png";
import Tim from "./Tim";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ONama = () => {
  const coreTim = {
    imeTima: "CORE TIM",
    oTimu:
      "Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja.",
    slikaKoordinatora: nekiLjudi,
    imeKoordinatora: "Ana Kesic",
    funkcijaKoordinatora: "Koordinatorka projekta",
    slikaTima: nekiLjudi,
  };
  const itTim = {
    imeTima: "IT TIM",
    oTimu:
      "Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja.",
    slikaKoordinatora: nekiLjudi,
    imeKoordinatora: "Ana Kesic",
    funkcijaKoordinatora: "Koordinatorka projekta",
    slikaTima: nekiLjudi,
  };
  const dizajnTim = {
    imeTima: "DIZAJN TIM",
    oTimu:
      "Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja.",
    slikaKoordinatora: nekiLjudi,
    imeKoordinatora: "Ana Kesic",
    funkcijaKoordinatora: "Koordinatorka projekta",
    slikaTima: nekiLjudi,
  };
  const crTim = {
    imeTima: "CR TIM",
    oTimu:
      "Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja.",
    slikaKoordinatora: nekiLjudi,
    imeKoordinatora: "Ana Kesic",
    funkcijaKoordinatora: "Koordinatorka projekta",
    slikaTima: nekiLjudi,
  };

  const hrTim = {
    imeTima: "HR TIM",
    oTimu:
      "Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja.",
    slikaKoordinatora: nekiLjudi,
    imeKoordinatora: "Ana Kesic",
    funkcijaKoordinatora: "Koordinatorka projekta",
    slikaTima: nekiLjudi,
  };

  const prTim = {
    imeTima: "PR TIM",
    oTimu:
      "Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja.",
    slikaKoordinatora: nekiLjudi,
    imeKoordinatora: "Ana Kesic",
    funkcijaKoordinatora: "Koordinatorka projekta",
    slikaTima: nekiLjudi,
  };

  const logistikaTim = {
    imeTima: "LOGISTIKA",
    oTimu:
      "Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja.",
    slikaKoordinatora: nekiLjudi,
    imeKoordinatora: "Ana Kesic",
    funkcijaKoordinatora: "Koordinatorka projekta",
    slikaTima: nekiLjudi,
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
      <Nav />
      <div className="o-nama-container">
        <div class="o-nama-flex">
          <div className="left-content">
            <h2>O FONISU</h2>
            <p>
              FONIS predstavlja ujedinjujuću tačku studenata informatike i mesto
              za generisanje novih i širenje postojećih znanja iz oblasti
              informacionih tehnologija, a takođe i mesto na kom se stvaraju
              nova poznanstva koja često prerastaju u neraskidiva prijateljstva.
              Interne radionice našim članovima daju jedinstvenu priliku da
              svoja postojeća IT i menadžment znanja i veštine upotpune novim i
              primene ih pre svega na internim hakatonima, ali i kroz
              realizaciju projekata poput FON Hakatona, Hakatona za
              srednjoškolce i Studenti studentima koje dugi niz godina
              organizujemo.
            </p>
          </div>
          <div className="right-content">
            <div class="img-wrapper">
              <img src={nekiLjudi} alt="fonis-slika" />
            </div>
          </div>
        </div>
        <div class="o-nama-flex">
          <div className="left-content">
            <h2>O FONISU</h2>
            <p>
              FONIS predstavlja ujedinjujuću tačku studenata informatike i mesto
              za generisanje novih i širenje postojećih znanja iz oblasti
              informacionih tehnologija, a takođe i mesto na kom se stvaraju
              nova poznanstva koja često prerastaju u neraskidiva prijateljstva.
              Interne radionice našim članovima daju jedinstvenu priliku da
              svoja postojeća IT i menadžment znanja i veštine upotpune novim i
              primene ih pre svega na internim hakatonima, ali i kroz
              realizaciju projekata poput FON Hakatona, Hakatona za
              srednjoškolce i Studenti studentima koje dugi niz godina
              organizujemo.
            </p>
          </div>
          <div className="right-content">
            <div class="img-wrapper">
              <img src={nekiLjudi} alt="fonis-slika" />
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
                        vidljivTim === 0 ? "lop lopta-1 active" : "lop lopta-1"
                      }
                      onClick={() => setVidljivTim(0)}
                    >
                      1
                    </div>
                    <div
                      className={
                        vidljivTim === 1 ? "lop lopta-2 active" : "lop lopta-2"
                      }
                      onClick={() => setVidljivTim(1)}
                    >
                      2
                    </div>
                    <div
                      className={
                        vidljivTim === 2 ? "lop lopta-3 active" : "lop lopta-3"
                      }
                      onClick={() => setVidljivTim(2)}
                    >
                      3
                    </div>
                    <div
                      className={
                        vidljivTim === 3 ? "lop lopta-4 active" : "lop lopta-4"
                      }
                      onClick={() => setVidljivTim(3)}
                    >
                      4
                    </div>
                    <div
                      className={
                        vidljivTim === 4 ? "lop lopta-5 active" : "lop lopta-5"
                      }
                      onClick={() => setVidljivTim(4)}
                    >
                      5
                    </div>
                    <div
                      className={
                        vidljivTim === 5 ? "lop lopta-6 active" : "lop lopta-6"
                      }
                      onClick={() => setVidljivTim(5)}
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
      <Footer />
    </>
  );
};

export default ONama;
