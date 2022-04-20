import React from "react";
import primeVideo from "../../Assets/Videos/prime.webm";
import adactaVideo from "../../Assets/Videos/adacta.webm";
import semosVideo from "../../Assets/Videos/semos.webm";
import eyeseeVideo from "../../Assets/Videos/eyesee.webm";
import raiffeisenVideo from "../../Assets/Videos/raiffeisen.webm";
import a1Video from "../../Assets/Videos/a1.webm";

//loading slike
import primeLoading from "../../Assets/Images/primeLoading.jpg";
import adactaLoading from "../../Assets/Images/adactaLoading.jpg";
import semosLoading from "../../Assets/Images/semosLoading.jpg";
import eyeseeLoading from "../../Assets/Images/eyeseeLoading.jpg";
import raiffeisenLoading from "../../Assets/Images/raiffeisenLoading.jpg";
import a1Loading from "../../Assets/Images/a1Loading.jpg";

import "./NasiPartneri.scss";
import Nav from "./../../Components/Nav/Nav";
import { Route, Routes, useLocation, Link } from "react-router-dom";
import PartnerSnimak from "./PartnerSnimak";

//zaposleni slike
import RenataColic from "../../Assets/Images/Partneri/A1/zaposleni/RenataColic.jpg";
import UrosKomlenovic from "../../Assets/Images/Partneri/A1/zaposleni/UrosKomlenovic.jpg";

import MarijaTucovic from "../../Assets/Images/Partneri/Adacta/zaposleni/MarijaTucovic.jpg";
import MarkoDekic from "../../Assets/Images/Partneri/Adacta/zaposleni/MarkoDekic.jpg";
import MarkoVukovic from "../../Assets/Images/Partneri/Adacta/zaposleni/MarkoVukovic.jpg";
import NikolaAleksic from "../../Assets/Images/Partneri/Adacta/zaposleni/NikolaAleksic.jpg";
import UnaGvozdenov from "../../Assets/Images/Partneri/Adacta/zaposleni/UnaGvozdenov.jpg";

import MilosZivanic from "../../Assets/Images/Partneri/Eyesee/zaposleni/MilosZivanic.jpg";
import NikolaMiljevic from "../../Assets/Images/Partneri/Eyesee/zaposleni/NikolaMiljevic.jpg";
import VladimirMatic from "../../Assets/Images/Partneri/Eyesee/zaposleni/VladimirMatic.jpg";

import AleksandraDjordjevic from "../../Assets/Images/Partneri/Prime/zaposleni/AleksandraDjordjevic.jpg";
import DamjanMladenovic from "../../Assets/Images/Partneri/Prime/zaposleni/DamjanMladenovic.jpg";

import AleksandarSmiljkovic from "../../Assets/Images/Partneri/Raiffeisen/zaposleni/AleksandarSmiljkovic.jpg";
import StefanGavrilovic from "../../Assets/Images/Partneri/Raiffeisen/zaposleni/StefanGavrilovic.jpg";

import AndreaAdamovic from "../../Assets/Images/Partneri/Semos/zaposleni/AndreaAdamovic.jpg";
import BorisKolakovic from "../../Assets/Images/Partneri/Semos/zaposleni/BorisKolakovic.jpg";

const NasiPartneri = () => {
  const location = useLocation();
  let aktivnaStrana = -1;

  switch (location.pathname) {
    case "/nasi-partneri":
      aktivnaStrana = -1;
      break;
    case "/nasi-partneri/adacta":
      aktivnaStrana = 1;
      break;
    case "/nasi-partneri/eyesee":
      aktivnaStrana = 2;
      break;
    case "/nasi-partneri/prime-software":
      aktivnaStrana = 3;
      break;
    case "/nasi-partneri/semos-education":
      aktivnaStrana = 4;
      break;
    case "/nasi-partneri/raiffeisen":
      aktivnaStrana = 5;
      break;
    case "/nasi-partneri/a1":
      aktivnaStrana = 6;
      break;
    default:
      aktivnaStrana = -1;
      break;
  }

  const zaposleniA1 = [
    {
      ime: "Renata Čolić",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: RenataColic,
    },
    {
      ime: "Uroš Komlenović",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: UrosKomlenovic,
    },
  ];

  const zaposleniAdacta = [
    {
      ime: "Marija Tucović",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: MarijaTucovic,
    },
    {
      ime: "Marko Dekić",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: MarkoDekic,
    },
    {
      ime: "Marko Vuković",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: MarkoVukovic,
    },
    {
      ime: "Nikola Aleksić",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: NikolaAleksic,
    },
    {
      ime: "Una Gvozdenov",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: UnaGvozdenov,
    },
  ];

  const zaposleniEyesee = [
    {
      ime: "Miloš Živanić",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: MilosZivanic,
    },
    {
      ime: "Nikola Miljević",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: NikolaMiljevic,
    },
    {
      ime: "Vladimir Matić",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: VladimirMatic,
    },
  ];

  const zaposleniPrime = [
    {
      ime: "Aleksandra Đorđević",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: AleksandraDjordjevic,
    },
    {
      ime: "Damjan Mladenović",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: DamjanMladenovic,
    },
  ];

  const zaposleniRaiffeisen = [
    {
      ime: "Aleksandar Smiljković",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: AleksandarSmiljkovic,
    },
    {
      ime: "Stefan Gavrilović",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: StefanGavrilovic,
    },
  ];

  const zaposleniSemos = [
    {
      ime: "Andrea Adamović",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: AndreaAdamovic,
    },
    {
      ime: "Boris Kolaković",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: BorisKolakovic,
    },
  ];

  return (
    <>
      <Nav />
      <div className="partneri-nav">
        <ul>
          <Link to="adacta">
            <li className={aktivnaStrana === 1 ? "active" : ""}>Adacta</li>
          </Link>
          <Link to="eyesee">
            <li className={aktivnaStrana === 2 ? "active" : ""}>Eyesee</li>
          </Link>
          <Link to="prime-software">
            <li className={aktivnaStrana === 3 ? "active" : ""}>
              Prime software
            </li>
          </Link>
          <Link to="semos-education">
            <li className={aktivnaStrana === 4 ? "active" : ""}>
              Semos education
            </li>
          </Link>
          <Link to="raiffeisen">
            <li className={aktivnaStrana === 5 ? "active" : ""}>Raiffeisen</li>
          </Link>
          <Link to="a1">
            <li className={aktivnaStrana === 6 ? "active" : ""}>A1</li>
          </Link>
        </ul>
      </div>
      <Routes>
        <Route
          path="adacta"
          element={
            <PartnerSnimak
              video={adactaVideo}
              zaposleni={zaposleniAdacta}
              prevLink="/nasi-partneri/a1"
              nextLink="/nasi-partneri/eyesee"
              partnerIme="Adacta"
              oPartneru="Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja. Generalni pokrovitelj projekta je kompanija Levi9 koja će studentima predstaviti poslovanje, koje tehnologije koriste u svom radu, ali i na koji način teže da okupe najtalentovanije profesionalce i omoguće im da se kontinuirano usavršavaju u inspirativnom okruženju visokih tehnologija."
              poster={adactaLoading}
            />
          }
        />

        <Route
          path="eyesee"
          element={
            <PartnerSnimak
              video={eyeseeVideo}
              zaposleni={zaposleniEyesee}
              prevLink="/nasi-partneri/adacta"
              nextLink="/nasi-partneri/prime-software"
              partnerIme="Eyesee"
              oPartneru="Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja. Generalni pokrovitelj projekta je kompanija Levi9 koja će studentima predstaviti poslovanje, koje tehnologije koriste u svom radu, ali i na koji način teže da okupe najtalentovanije profesionalce i omoguće im da se kontinuirano usavršavaju u inspirativnom okruženju visokih tehnologija."
              poster={eyeseeLoading}
            />
          }
        />
        <Route
          path="prime-software"
          element={
            <PartnerSnimak
              video={primeVideo}
              zaposleni={zaposleniPrime}
              prevLink="/nasi-partneri/eyesee"
              nextLink="/nasi-partneri/semos-education"
              partnerIme="prime software"
              oPartneru="Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja. Generalni pokrovitelj projekta je kompanija Levi9 koja će studentima predstaviti poslovanje, koje tehnologije koriste u svom radu, ali i na koji način teže da okupe najtalentovanije profesionalce i omoguće im da se kontinuirano usavršavaju u inspirativnom okruženju visokih tehnologija."
              poster={primeLoading}
            />
          }
        />
        <Route
          path="semos-education"
          element={
            <PartnerSnimak
              video={semosVideo}
              zaposleni={zaposleniSemos}
              prevLink="/nasi-partneri/prime-software"
              nextLink="/nasi-partneri/raiffeisen"
              partnerIme="Semos Education"
              oPartneru="Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja. Generalni pokrovitelj projekta je kompanija Levi9 koja će studentima predstaviti poslovanje, koje tehnologije koriste u svom radu, ali i na koji način teže da okupe najtalentovanije profesionalce i omoguće im da se kontinuirano usavršavaju u inspirativnom okruženju visokih tehnologija."
              poster={semosLoading}
            />
          }
        />
        <Route
          path="raiffeisen"
          element={
            <PartnerSnimak
              video={raiffeisenVideo}
              zaposleni={zaposleniRaiffeisen}
              prevLink="/nasi-partneri/semos-education"
              nextLink="/nasi-partneri/a1"
              partnerIme="Raiffeisen"
              oPartneru="Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja. Generalni pokrovitelj projekta je kompanija Levi9 koja će studentima predstaviti poslovanje, koje tehnologije koriste u svom radu, ali i na koji način teže da okupe najtalentovanije profesionalce i omoguće im da se kontinuirano usavršavaju u inspirativnom okruženju visokih tehnologija."
              poster={raiffeisenLoading}
            />
          }
        />
        <Route
          path="a1"
          element={
            <PartnerSnimak
              video={a1Video}
              zaposleni={zaposleniA1}
              prevLink="/nasi-partneri/raiffeisen"
              nextLink="/nasi-partneri/adacta"
              partnerIme="A1"
              oPartneru="Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja. Generalni pokrovitelj projekta je kompanija Levi9 koja će studentima predstaviti poslovanje, koje tehnologije koriste u svom radu, ali i na koji način teže da okupe najtalentovanije profesionalce i omoguće im da se kontinuirano usavršavaju u inspirativnom okruženju visokih tehnologija."
              poster={a1Loading}
            />
          }
        />
      </Routes>
    </>
  );
};

export default NasiPartneri;
