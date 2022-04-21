import React from "react";
import panelSlika from "../../../Assets/Images/panel.jpg";
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
import MarijaMilanovic from "../../../Assets/Images/Partneri/Semos/panel/MarijaMilanovic.jpg";
import VukPaskovic from "../../../Assets/Images/Partneri/Eyesee/panel/VukPaskovic.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Panel = () => {
  const ucesniciPanela = [
    // {
    //   moderator: true,
    //   ime: "Jovana Jovanovic",
    //   pozicija: "Profesor na Faкultetu organizacionih nauka",
    //   rekaoJe:
    //     "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook.",
    //   slika: slikaZaposleni,
    // },
    {
      moderator: false,
      ime: "Ana Nikolić",
      pozicija: "IT Business Analyst",
      rekaoJe:
        "Završila osnovne studije na Fakultetu organizacionih nauka, smer informacioni sistemi i tehnologije. Tokom završne godine studija dobila je studentsku praksu u kompaniji A1 Srbija. Nakon završene prakse započela je svoju karijeru u IT sektoru gde se 5 godina na poziciji IT Service Expert-a bavila podrškom sistema za naplatu. Odnedavno je napredovala na poziciju IT Business Analyst-a. Ana se redovno bavi sportom, voli čitanje i uvek želi da bude u toku sa novim tehnologijama, kao i načinima poboljšanja svakodnevnog rada.",
      slika: AnaNikolic,
      slikaKompanije: a1,
      linkKompanije: "/nasi-partneri/a1",
    },
    {
      moderator: false,
      ime: "Ivan Divić",
      pozicija: "Direktor kompanije",
      rekaoJe:
        "Celu svoju karijeru proveo je u IT industriji, sarađujući sa domaćim i inostranim kompanijama kako u zemlji tako i u inostranstvu, od pozicije developera, preko projektnog menadžera, vođe sektora, pa do današnje pozicije direktora kompanije. Sa Adactom je već 15 godina, kao njen prvi zaposleni u beogradskoj kancelariji, koja danas broji preko 50 zaposlenih.",
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
      pozicija: "Senior Full Stack .NET developer",
      rekaoJe:
        "Goran Vidić radi u kompaniji Prime Software od 2021. godine. Za svojih 14 godina iskustva stekao je zvanje Senior Full Stack .NET developera. Poslednjih nekoliko godina specijalizovao se za automatsko testiranje. Radio je na mnogobrojnim projektima, prvenstveno vezano za finansije (banking, lottery, online gaming and gambling), telekomunikacije, mind mapping i slično.",
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
      ime: "Marija Milanović",
      pozicija: "Profesor na Faкultetu organizacionih nauka",
      rekaoJe:
        "Želite da bez ponovnog osvežavanja stranice rešite probleme koji nastaju prilikom kreiranja velikih aplikacija u kojima se podaci i informacije menjaju u toku vremena? Onda se pripremite za našu radionicu React At Its Finest. Stvorio ga je Jordan Valke, programer u kompaniji Facebook.",
      slika: MarijaMilanovic,
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
          <h2>TEMA PANEL DISKUSIJE</h2>
          <p>
            Panel diskusija Budi i ti deo uspešnih priča održaće se 14. maja na
            Fakultetu organizacionih nauka i okupiće stručnjake zaposlene u
            kompanijama: A1, Adacta, Eyesee, Prime Software, Raiffeisen bank i
            Semos Education. O svom karijernom putu i pozicijama na kojima
            trenutno rade govoriće Ana Nikolić iz kompanije A1, Ivan Divić iz
            kompanije Adacta, Vuk Pašković iz kompanije Eyesee, Goran Vidić iz
            kompanije Prime Software, ____ iz Raiffeisen banke i _____ iz
            kompanije Semos Education. Ukoliko želiš da čuješ više o tome kako
            funkcioniše rad u velikim kompanijama, šta je sve potrebno za rad u
            njima i koje su tajne za postizanje uspeha, prijavi se za panel
            diskusiju i saznaj kako da kreiraš svoju uspešnu priču!
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
