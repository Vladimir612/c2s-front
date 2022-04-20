import React from "react";
import panelSlika from "../../../Assets/Images/panel.jpg";
import slikaZaposleni from "../../../Assets/Images/Zaposleni/zaposleni.png";
import UcesnikPanela from "./UcesnikPanela";
import "./Panel.scss";

//kompanije
import raiffeisen from "../../../Assets/Images/Partneri/pokrovitelji/raiffeisen.svg";
import semos from "../../../Assets/Images/Partneri/pokrovitelji/semos.png";
import a1 from "../../../Assets/Images/Partneri/pokrovitelji/a1.png";
import adacta from "../../../Assets/Images/Partneri/pokrovitelji/adacta.png";
import eyesee from "../../../Assets/Images/Partneri/pokrovitelji/eyesee.png";
import prime from "../../../Assets/Images/Partneri/godisnji/prime.png";

//panelisti
import AnaNikolic from "../../../Assets/Images/Partneri/A1/panel/AnaNikolic.jpg";
import IvanDivic from "../../../Assets/Images/Partneri/Adacta/panel/IvanDivic.jpg";
import StefanGavrilovic from "../../../Assets/Images/Partneri/Raiffeisen/zaposleni/StefanGavrilovic.jpg";
import GoranVidic from "../../../Assets/Images/Partneri/Prime/panel/GoranVidic.jpg";
// import AnaNikolic from "../../../Assets/Images/Partneri/Semos/panel/AnaNikolic.jpg";
import VukPaskovic from "../../../Assets/Images/Partneri/Eyesee/panel/VukPaskovic.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";

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
      ime: "Ana Nikolic",
      pozicija: "Profesor na Faкultetu organizacionih nauka",
      rekaoJe:
        "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook.",
      slika: AnaNikolic,
      slikaKompanije: a1,
      linkKompanije: "/nasi-partneri/a1",
    },
    {
      moderator: false,
      ime: "Ivan Divić",
      pozicija: "Profesor na Faкultetu organizacionih nauka",
      rekaoJe:
        "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook.",
      slika: IvanDivic,
      slikaKompanije: adacta,
      linkKompanije: "/nasi-partneri/adacta",
    },
    {
      moderator: false,
      ime: "Stefan Gavrilović",
      pozicija: "Profesor na Faкultetu organizacionih nauka",
      rekaoJe:
        "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook.",
      slika: StefanGavrilovic,
      slikaKompanije: raiffeisen,
      linkKompanije: "/nasi-partneri/raiffeisen",
    },
    {
      moderator: false,
      ime: "Goran Vidić",
      pozicija: "Profesor na Faкultetu organizacionih nauka",
      rekaoJe:
        "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook.",
      slika: GoranVidic,
      slikaKompanije: prime,
      linkKompanije: "/nasi-partneri/prime-software",
    },
    {
      moderator: false,
      ime: "Vuk Pašković",
      pozicija: "Profesor na Faкultetu organizacionih nauka",
      rekaoJe:
        "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook.",
      slika: VukPaskovic,
      slikaKompanije: eyesee,
      linkKompanije: "/nasi-partneri/eyesee",
    },
    {
      moderator: false,
      ime: "Covek iz semosa",
      pozicija: "Profesor na Faкultetu organizacionih nauka",
      rekaoJe:
        "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook.",
      slika: slikaZaposleni,
      slikaKompanije: semos,
      linkKompanije: "/nasi-partneri/semos-education",
    },
  ];
  return (
    <div className="panel-container">
      <div className="o-projektu-uvod">
        <div className="slika">
          <LazyLoadImage effect="blur" src={panelSlika} alt="Panel" />
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
