import React from "react";
import "./Radionice.scss";
import radioniceSlika from "../../../Assets/Images/radionice.jpg";
import RadionicaKartica from "./RadionicaKartica";
import slikaZaposleni from "../../../Assets/Images/Zaposleni/zaposleni.png";
import raiffeisen from "../../../Assets/Images/Partneri/pokrovitelji/raiffeisen.svg";
import semos from "../../../Assets/Images/Partneri/pokrovitelji/semos.png";

const Radionice = () => {
  const radionica1 = {
    naslov: "REACT",
    prviParagraf:
      "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook. Od svog pojavljivanja 2011. godine pa sve do danas, React je ostao veoma popularan zbog svojih dodatnih karakteristika poput jednostavnosti i fleksibilnosti.",
    drugiParagraf:
      "Zadužen je za onaj deo aplikacije koji korisnik vidi i sa kojim može da ostvari interakciju, odnosno za korisnički interfejs (UI). Za samo nekoliko godina, React je postao jedna od najčesće korišćenih JS biblioteka, dok su web developeri sa ovim veštinama veoma traženi. Zvuči primamljivo, zar ne? U tom slučaju, opredelite se za React At Its Finest radionicu.",
    predavac: {
      ime: "Jovana Jovanovic",
      vise: "Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook",
      slika: slikaZaposleni,
    },
    predavac2: {
      ime: "Milan Milanovic",
      vise: "Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook",
      slika: slikaZaposleni,
    },
    kompanija: {
      ime: "Raiffeisen",
      link: "/nasi-partneri/raiffeisen",
      slika: raiffeisen,
    },
  };

  const radionica2 = {
    naslov: "NodeJs",
    prviParagraf:
      "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook. Od svog pojavljivanja 2011. godine pa sve do danas, React je ostao veoma popularan zbog svojih dodatnih karakteristika poput jednostavnosti i fleksibilnosti.",
    drugiParagraf:
      "Zadužen je za onaj deo aplikacije koji korisnik vidi i sa kojim može da ostvari interakciju, odnosno za korisnički interfejs (UI). Za samo nekoliko godina, React je postao jedna od najčesće korišćenih JS biblioteka, dok su web developeri sa ovim veštinama veoma traženi. Zvuči primamljivo, zar ne? U tom slučaju, opredelite se za React At Its Finest radionicu.",
    predavac: {
      ime: "Jovana Jovanovic",
      vise: "Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook",
      slika: slikaZaposleni,
    },
    predavac2: {
      ime: "Milan Milanovic",
      vise: "Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook",
      slika: slikaZaposleni,
    },
    kompanija: {
      ime: "Semos education",
      link: "/nasi-partneri/semos-education",
      slika: semos,
    },
  };

  return (
    <div className="radionice-container">
      <div className="o-projektu-uvod">
        <div className="slika">
          <img src={radioniceSlika} alt="Radionice" />
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
      <div className="presek-dana">
        <div className="krug-presek">
          <p>2.dan</p>
        </div>
      </div>
      <RadionicaKartica radionica={radionica1} />
      <RadionicaKartica radionica={radionica2} />
    </div>
  );
};

export default Radionice;
