import React from "react";
import "./Radionice.scss";
import radioniceSlika from "../../../Assets/Images/radionice.jpg";
import RadionicaKartica from "./RadionicaKartica";
import { LazyLoadImage } from "react-lazy-load-image-component";

//kompanije
import raiffeisen from "../../../Assets/Images/Partneri/pokrovitelji/raiffeisen.svg";
import semos from "../../../Assets/Images/Partneri/pokrovitelji/semos.png";
import a1 from "../../../Assets/Images/Partneri/pokrovitelji/a1.png";
import adacta from "../../../Assets/Images/Partneri/pokrovitelji/adacta.png";
import eyesee from "../../../Assets/Images/Partneri/pokrovitelji/eyesee.png";
import prime from "../../../Assets/Images/Partneri/godisnji/prime.png";

//predavaci
import AnaNikolic from "../../../Assets/Images/Partneri/A1/panel/AnaNikolic.jpg";
import MihajloMilanovic from "../../../Assets/Images/Partneri/A1/radionice/MihajloMilanovic.jpg";

import GoranVujanovic from "../../../Assets/Images/Partneri/Adacta/radionice/GoranVujanovic.jpg";
import NenadMaricic from "../../../Assets/Images/Partneri/Adacta/radionice/NenadMaricic.jpg";

import NikolaMihajlovic from "../../../Assets/Images/Partneri/Eyesee/radionice/NikolaMihajlovic.jpg";
import VladimirMatic from "../../../Assets/Images/Partneri/Eyesee/zaposleni/VladimirMatic.jpg";

import DraganKocic from "../../../Assets/Images/Partneri/Prime/radionice/DraganKocic.jpg";
import MilicaMilekic from "../../../Assets/Images/Partneri/Prime/radionice/MilicaMilekic.jpg";

import IvaKrcmar from "../../../Assets/Images/Partneri/Raiffeisen/radionice/IvaKrcmar.jpg";
import MarkoMilosevic from "../../../Assets/Images/Partneri/Raiffeisen/radionice/MarkoMilosevic.jpg";

import NikolaGarabandic from "../../../Assets/Images/Partneri/Semos/radionice/NikolaGarabandic.jpg";

const Radionice = () => {
  const radionica1 = {
    naslov: "REACT",
    prviParagraf:
      "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook. Od svog pojavljivanja 2011. godine pa sve do danas, React je ostao veoma popularan zbog svojih dodatnih karakteristika poput jednostavnosti i fleksibilnosti.",
    drugiParagraf:
      "Zadužen je za onaj deo aplikacije koji korisnik vidi i sa kojim može da ostvari interakciju, odnosno za korisnički interfejs (UI). Za samo nekoliko godina, React je postao jedna od najčesće korišćenih JS biblioteka, dok su web developeri sa ovim veštinama veoma traženi. Zvuči primamljivo, zar ne? U tom slučaju, opredelite se za React At Its Finest radionicu.",
    predavac: {
      ime: "Mihajlo Milanović",
      vise: "Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook",
      slika: MihajloMilanovic,
    },
    predavac2: {
      ime: "Ana Nikolić",
      vise: "Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook",
      slika: AnaNikolic,
    },
    kompanija: {
      ime: "A1",
      link: "/nasi-partneri/a1",
      slika: a1,
    },
  };

  const radionica2 = {
    naslov: "NodeJs",
    prviParagraf:
      "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook. Od svog pojavljivanja 2011. godine pa sve do danas, React je ostao veoma popularan zbog svojih dodatnih karakteristika poput jednostavnosti i fleksibilnosti.",
    drugiParagraf:
      "Zadužen je za onaj deo aplikacije koji korisnik vidi i sa kojim može da ostvari interakciju, odnosno za korisnički interfejs (UI). Za samo nekoliko godina, React je postao jedna od najčesće korišćenih JS biblioteka, dok su web developeri sa ovim veštinama veoma traženi. Zvuči primamljivo, zar ne? U tom slučaju, opredelite se za React At Its Finest radionicu.",
    predavac: {
      ime: "Goran Vujanović",
      vise: "Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook",
      slika: GoranVujanovic,
    },
    predavac2: {
      ime: "Nenad Maričić",
      vise: "Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook",
      slika: NenadMaricic,
    },
    kompanija: {
      ime: "Adacta",
      link: "/nasi-partneri/adacta",
      slika: adacta,
    },
  };

  const radionica3 = {
    naslov: "NodeJs",
    prviParagraf:
      "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook. Od svog pojavljivanja 2011. godine pa sve do danas, React je ostao veoma popularan zbog svojih dodatnih karakteristika poput jednostavnosti i fleksibilnosti.",
    drugiParagraf:
      "Zadužen je za onaj deo aplikacije koji korisnik vidi i sa kojim može da ostvari interakciju, odnosno za korisnički interfejs (UI). Za samo nekoliko godina, React je postao jedna od najčesće korišćenih JS biblioteka, dok su web developeri sa ovim veštinama veoma traženi. Zvuči primamljivo, zar ne? U tom slučaju, opredelite se za React At Its Finest radionicu.",
    predavac: {
      ime: "Nikola Mihajlović",
      vise: "Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook",
      slika: NikolaMihajlovic,
    },
    predavac2: {
      ime: "Vladimir Matić",
      vise: "Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook",
      slika: VladimirMatic,
    },
    kompanija: {
      ime: "Eyesee",
      link: "/nasi-partneri/eyesee",
      slika: eyesee,
    },
  };

  const radionica4 = {
    naslov: "NodeJs",
    prviParagraf:
      "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook. Od svog pojavljivanja 2011. godine pa sve do danas, React je ostao veoma popularan zbog svojih dodatnih karakteristika poput jednostavnosti i fleksibilnosti.",
    drugiParagraf:
      "Zadužen je za onaj deo aplikacije koji korisnik vidi i sa kojim može da ostvari interakciju, odnosno za korisnički interfejs (UI). Za samo nekoliko godina, React je postao jedna od najčesće korišćenih JS biblioteka, dok su web developeri sa ovim veštinama veoma traženi. Zvuči primamljivo, zar ne? U tom slučaju, opredelite se za React At Its Finest radionicu.",
    predavac: {
      ime: "Milica Milekić",
      vise: "Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook",
      slika: MilicaMilekic,
    },
    predavac2: {
      ime: "Dragan Kocić",
      vise: "Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook",
      slika: DraganKocic,
    },
    kompanija: {
      ime: "Prime software",
      link: "/nasi-partneri/prime-software",
      slika: prime,
    },
  };

  const radionica5 = {
    naslov: "NodeJs",
    prviParagraf:
      "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook. Od svog pojavljivanja 2011. godine pa sve do danas, React je ostao veoma popularan zbog svojih dodatnih karakteristika poput jednostavnosti i fleksibilnosti.",
    drugiParagraf:
      "Zadužen je za onaj deo aplikacije koji korisnik vidi i sa kojim može da ostvari interakciju, odnosno za korisnički interfejs (UI). Za samo nekoliko godina, React je postao jedna od najčesće korišćenih JS biblioteka, dok su web developeri sa ovim veštinama veoma traženi. Zvuči primamljivo, zar ne? U tom slučaju, opredelite se za React At Its Finest radionicu.",
    predavac: {
      ime: "Iva Krčmar",
      vise: "Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook",
      slika: IvaKrcmar,
    },
    predavac2: {
      ime: "Marko Miločević",
      vise: "Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook",
      slika: MarkoMilosevic,
    },
    kompanija: {
      ime: "Raiffeisen",
      link: "/nasi-partneri/raiffeisen",
      slika: raiffeisen,
    },
  };

  const radionica6 = {
    naslov: "NodeJs",
    prviParagraf:
      "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook. Od svog pojavljivanja 2011. godine pa sve do danas, React je ostao veoma popularan zbog svojih dodatnih karakteristika poput jednostavnosti i fleksibilnosti.",
    drugiParagraf:
      "Zadužen je za onaj deo aplikacije koji korisnik vidi i sa kojim može da ostvari interakciju, odnosno za korisnički interfejs (UI). Za samo nekoliko godina, React je postao jedna od najčesće korišćenih JS biblioteka, dok su web developeri sa ovim veštinama veoma traženi. Zvuči primamljivo, zar ne? U tom slučaju, opredelite se za React At Its Finest radionicu.",
    predavac: {
      ime: "Nikola Garabandić",
      vise: "Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook",
      slika: NikolaGarabandic,
    },
    predavac2: {
      ime: "Nikola Garabandić",
      vise: "Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook",
      slika: NikolaGarabandic,
    },
    kompanija: {
      ime: "Semos Education",
      link: "/nasi-partneri/semos-education",
      slika: semos,
    },
  };

  return (
    <div className="radionice-container">
      <div className="o-projektu-uvod">
        <div className="slika">
          <LazyLoadImage effect="blur" src={radioniceSlika} alt="Radionice" />
        </div>
        <div className="tekst">
          <h2>RADIONICE</h2>
          <p>
            Svi naši članovi imaju prilike da uče o savremenim tehnologijama i
            da dopunjuju svoja znanja iz najraznovrsnijih oblasti. Radionice
            koje smo do sada održali pokrivale su frontend i backend
            development, web development, web dizajn, grafički dizajn, game
            development, data science, kao i mnoge tehnologije u pomenutim
            oblastima informacionih tehnologija. Pored toga, pažnju posvećujemo
            razvoju soft, odnosno mekih veština.
          </p>
        </div>
      </div>
      <div className="presek-dana">
        <div className="krug-presek">
          <p>1.dan</p>
        </div>
      </div>
      <RadionicaKartica radionica={radionica1} />
      <RadionicaKartica radionica={radionica2} />
      <RadionicaKartica radionica={radionica3} />
      <div className="presek-dana">
        <div className="krug-presek">
          <p>2.dan</p>
        </div>
      </div>
      <RadionicaKartica radionica={radionica4} />
      <RadionicaKartica radionica={radionica5} />
      <RadionicaKartica radionica={radionica6} />
    </div>
  );
};

export default Radionice;
