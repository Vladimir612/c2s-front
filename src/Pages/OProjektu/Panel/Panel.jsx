import React from "react";
import panelSlika from "../../../Assets/Images/panel.jpg";
import slikaZaposleni from "../../../Assets/Images/Zaposleni/zaposleni.png";
import UcesnikPanela from "./UcesnikPanela";
import "./Panel.scss";

//kompanije
import raiffeisen from "../../../Assets/Images/Partneri/pokrovitelji/raiffeisen.svg";
import semos from "../../../Assets/Images/Partneri/pokrovitelji/semos.png";

const Panel = () => {
  const ucesniciPanela = [
    {
      moderator: true,
      ime: "Jovana Jovanovic",
      pozicija: "Profesor na Faкultetu organizacionih nauka",
      rekaoJe:
        "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook.",
      slika: slikaZaposleni,
    },
    {
      moderator: false,
      ime: "Jovana Jovanovic",
      pozicija: "Profesor na Faкultetu organizacionih nauka",
      rekaoJe:
        "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook.",
      slika: slikaZaposleni,
      slikaKompanije: semos,
      linkKompanije: "/nasi-partneri/semos-education",
    },
    {
      moderator: false,
      ime: "Jovana Jovanovic",
      pozicija: "Profesor na Faкultetu organizacionih nauka",
      rekaoJe:
        "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook.",
      slika: slikaZaposleni,
      slikaKompanije: raiffeisen,
      linkKompanije: "/nasi-partneri/raiffeisen",
    },
    {
      moderator: false,
      ime: "Jovana Jovanovic",
      pozicija: "Profesor na Faкultetu organizacionih nauka",
      rekaoJe:
        "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook.",
      slika: slikaZaposleni,
      slikaKompanije: raiffeisen,
      linkKompanije: "/nasi-partneri/raiffeisen",
    },
    {
      moderator: false,
      ime: "Jovana Jovanovic",
      pozicija: "Profesor na Faкultetu organizacionih nauka",
      rekaoJe:
        "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook.",
      slika: slikaZaposleni,
      slikaKompanije: raiffeisen,
      linkKompanije: "/nasi-partneri/raiffeisen",
    },
    {
      moderator: false,
      ime: "Jovana Jovanovic",
      pozicija: "Profesor na Faкultetu organizacionih nauka",
      rekaoJe:
        "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook.",
      slika: slikaZaposleni,
      slikaKompanije: raiffeisen,
      linkKompanije: "/nasi-partneri/raiffeisen",
    },
  ];
  return (
    <div className="panel-container">
      <div className="o-projektu-uvod">
        <div className="slika">
          <img src={panelSlika} alt="Panel" />
        </div>
        <div className="tekst">
          <h2>TEMA PANELA</h2>
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
      <div className="ucesnici-panela">
        {ucesniciPanela.map((ucesnik, index) => {
          return <UcesnikPanela ucesnik={ucesnik} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Panel;
