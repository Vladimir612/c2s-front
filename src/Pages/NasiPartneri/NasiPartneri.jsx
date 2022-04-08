import React from "react";
import video from "../../Assets/Videos/earth.mp4";
import test2 from "../../Assets/Videos/test2.mp4";
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
    case "/nasi-partneri/addacta":
      aktivnaStrana = 1;
      break;
    case "/nasi-partneri/aisi":
      aktivnaStrana = 2;
      break;
    case "/nasi-partneri/prime-software":
      aktivnaStrana = 3;
      break;
    case "/nasi-partneri/samos-education":
      aktivnaStrana = 4;
      break;
    case "/nasi-partneri/raiffeisen":
      aktivnaStrana = 5;
      break;
    default:
      aktivnaStrana = -1;
      break;
  }

  const zaposleniAddacta = [
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
          <Link to="addacta">
            <li className={aktivnaStrana === 1 ? "active" : ""}>Addacta</li>
          </Link>
          <Link to="aisi">
            <li className={aktivnaStrana === 2 ? "active" : ""}>Aisi</li>
          </Link>
          <Link to="prime-software">
            <li className={aktivnaStrana === 3 ? "active" : ""}>
              Prime software
            </li>
          </Link>
          <Link to="samos-education">
            <li className={aktivnaStrana === 4 ? "active" : ""}>
              Samos education
            </li>
          </Link>
          <Link to="raiffeisen">
            <li className={aktivnaStrana === 5 ? "active" : ""}>Raiffeisen</li>
          </Link>
        </ul>
      </div>
      <Routes>
        <Route
          path="addacta"
          element={
            <PartnerSnimak
              video={video}
              zaposleni={zaposleniAddacta}
              prevLink="/nasi-partneri/raiffeisen"
              nextLink="/nasi-partneri/aisi"
              partnerIme="Addacta"
              oPartneru="Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja. Generalni pokrovitelj projekta je kompanija Levi9 koja će studentima predstaviti poslovanje, koje tehnologije koriste u svom radu, ali i na koji način teže da okupe najtalentovanije profesionalce i omoguće im da se kontinuirano usavršavaju u inspirativnom okruženju visokih tehnologija."
            />
          }
        />

        <Route
          path="aisi"
          element={
            <PartnerSnimak
              video={test2}
              zaposleni={zaposleniRaiffeisen}
              prevLink="/nasi-partneri/addacta"
              nextLink="/nasi-partneri/prime-software"
              partnerIme="Aisi"
              oPartneru="Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja. Generalni pokrovitelj projekta je kompanija Levi9 koja će studentima predstaviti poslovanje, koje tehnologije koriste u svom radu, ali i na koji način teže da okupe najtalentovanije profesionalce i omoguće im da se kontinuirano usavršavaju u inspirativnom okruženju visokih tehnologija."
            />
          }
        />
        <Route
          path="prime-software"
          element={
            <PartnerSnimak
              video={video}
              zaposleni={zaposleniRaiffeisen}
              prevLink="/nasi-partneri/aisi"
              nextLink="/nasi-partneri/samos-education"
              partnerIme="prime software"
              oPartneru="Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja. Generalni pokrovitelj projekta je kompanija Levi9 koja će studentima predstaviti poslovanje, koje tehnologije koriste u svom radu, ali i na koji način teže da okupe najtalentovanije profesionalce i omoguće im da se kontinuirano usavršavaju u inspirativnom okruženju visokih tehnologija."
            />
          }
        />
        <Route
          path="samos-education"
          element={
            <PartnerSnimak
              video={test2}
              zaposleni={zaposleniRaiffeisen}
              prevLink="/nasi-partneri/prime-software"
              nextLink="/nasi-partneri/raiffeisen"
              partnerIme="Samos Education"
              oPartneru="Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja. Generalni pokrovitelj projekta je kompanija Levi9 koja će studentima predstaviti poslovanje, koje tehnologije koriste u svom radu, ali i na koji način teže da okupe najtalentovanije profesionalce i omoguće im da se kontinuirano usavršavaju u inspirativnom okruženju visokih tehnologija."
            />
          }
        />
        <Route
          path="raiffeisen"
          element={
            <PartnerSnimak
              video={video}
              zaposleni={zaposleniRaiffeisen}
              prevLink="/nasi-partneri/samos-education"
              nextLink="/nasi-partneri/addacta"
              partnerIme="Raiffeisen"
              oPartneru="Kompanije studentima je projekat Udruženja studenata informatike FONIS koji za cilj ima prenošenje znanja i povezivanje studenata sa IT kompanijama. Ove godine će doživeti izdanje obojeno novim bojama, obogaćen sadržajem koji će svim studentima pružiti priliku da usvoje nova IT znanja i steknu uvid u kom smeru mogu da nastave svoj put. Projekat se održava u onlajn formatu i mogu učestvovati studenti svih fakulteta. Sastoji se iz panel diskusije, IT radionica i speed dating-a i traje od 10. do 14. maja. Generalni pokrovitelj projekta je kompanija Levi9 koja će studentima predstaviti poslovanje, koje tehnologije koriste u svom radu, ali i na koji način teže da okupe najtalentovanije profesionalce i omoguće im da se kontinuirano usavršavaju u inspirativnom okruženju visokih tehnologija."
            />
          }
        />
      </Routes>
    </>
  );
};

export default NasiPartneri;
