import React from "react";
import primeVideo from "../../Assets/Videos/prime.webm";
import adactaVideo from "../../Assets/Videos/adacta.webm";
import semosVideo from "../../Assets/Videos/semos.webm";
import eyeseeVideo from "../../Assets/Videos/eyesee.webm";
import raiffeisenVideo from "../../Assets/Videos/raiffeisen.webm";
import a1Video from "../../Assets/Videos/a1.webm";

import "./NasiPartneri.scss";
import Nav from "./../../Components/Nav/Nav";
import zaposleni from "../../Assets/Images/Zaposleni/zaposleni.png";
import { Route, Routes, useLocation, Link } from "react-router-dom";
import PartnerSnimak from "./PartnerSnimak";

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

  const zaposleniAdacta = [
    {
      ime: "Pera Peric",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: zaposleni,
    },
    {
      ime: "Stefan Stefanovic",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: zaposleni,
    },
  ];

  const zaposleniRaiffeisen = [
    {
      ime: "Jovana Jovanovic",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: zaposleni,
    },
    {
      ime: "Milan Milanovic",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: zaposleni,
    },
    {
      ime: "Mirko Mirkovic",
      zaposleniJeRekao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos corporis neque non ex, provident ut dolorem rem eaque suscipit.",
      slika: zaposleni,
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
            />
          }
        />

        <Route
          path="eyesee"
          element={
            <PartnerSnimak
              video={eyeseeVideo}
              zaposleni={zaposleniRaiffeisen}
              prevLink="/nasi-partneri/adacta"
              nextLink="/nasi-partneri/prime-software"
              partnerIme="Eyesee"
              oPartneru="Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja. Generalni pokrovitelj projekta je kompanija Levi9 koja će studentima predstaviti poslovanje, koje tehnologije koriste u svom radu, ali i na koji način teže da okupe najtalentovanije profesionalce i omoguće im da se kontinuirano usavršavaju u inspirativnom okruženju visokih tehnologija."
            />
          }
        />
        <Route
          path="prime-software"
          element={
            <PartnerSnimak
              video={primeVideo}
              zaposleni={zaposleniRaiffeisen}
              prevLink="/nasi-partneri/eyesee"
              nextLink="/nasi-partneri/semos-education"
              partnerIme="prime software"
              oPartneru="Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja. Generalni pokrovitelj projekta je kompanija Levi9 koja će studentima predstaviti poslovanje, koje tehnologije koriste u svom radu, ali i na koji način teže da okupe najtalentovanije profesionalce i omoguće im da se kontinuirano usavršavaju u inspirativnom okruženju visokih tehnologija."
            />
          }
        />
        <Route
          path="semos-education"
          element={
            <PartnerSnimak
              video={semosVideo}
              zaposleni={zaposleniRaiffeisen}
              prevLink="/nasi-partneri/prime-software"
              nextLink="/nasi-partneri/raiffeisen"
              partnerIme="Semos Education"
              oPartneru="Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja. Generalni pokrovitelj projekta je kompanija Levi9 koja će studentima predstaviti poslovanje, koje tehnologije koriste u svom radu, ali i na koji način teže da okupe najtalentovanije profesionalce i omoguće im da se kontinuirano usavršavaju u inspirativnom okruženju visokih tehnologija."
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
            />
          }
        />
        <Route
          path="a1"
          element={
            <PartnerSnimak
              video={a1Video}
              zaposleni={zaposleniRaiffeisen}
              prevLink="/nasi-partneri/raiffeisen"
              nextLink="/nasi-partneri/adacta"
              partnerIme="A1"
              oPartneru="Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja. Generalni pokrovitelj projekta je kompanija Levi9 koja će studentima predstaviti poslovanje, koje tehnologije koriste u svom radu, ali i na koji način teže da okupe najtalentovanije profesionalce i omoguće im da se kontinuirano usavršavaju u inspirativnom okruženju visokih tehnologija."
            />
          }
        />
      </Routes>
    </>
  );
};

export default NasiPartneri;
