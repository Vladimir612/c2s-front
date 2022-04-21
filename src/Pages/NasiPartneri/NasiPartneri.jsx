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
import JanaFilipovic from "../../Assets/Images/Partneri/Semos/zaposleni/JanaFilipovic.jpg";

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
        "Stručnjak za marketinške komunikacije. Ono što je veoma važno je da prilike za učenje nisu ni blizu iscrpljene i da svako gladan znanja u ovako dinamičnom i raznovrsnom okruženju može da pronađe priliku za razvoj. Monotonost u poslu nije nešto što vas čeka u A1 Srbija.",
      slika: RenataColic,
    },
    {
      ime: "Uroš Komlenović",
      zaposleniJeRekao:
        "Stručnjak za treninge. A1 Srbija kao članica A1 Telekom Grupe omogućila mi je da učim od kolega iz Austrije, Nemačke, Slovenije i Bugarske. Ali rad u A1 Srbiji nije samo učenje, uvek se nađe vreme i za druženje sa kolegama uz „Pivski petak“, žurke i proslave.",
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
        "U Adactu me je privukao AdInsure koji pokriva sve core procese osiguranja i uspešno je implementiran u više država. Svako osiguravajuće društvo je specifično i dinamično, pa je samim tim izazov veći da se jednim rešenjem sve to podrži. Baza znanja je široka i uvek ima nešto novo da se nauči od iskusnih kolega.",
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
        "U Adactu sam došla kao student sa potencijalom za daljim usavršavanjem. Pored sebe sam imala odličan tim developera koji su mi pružali konstantku podršku. Danas, tri i po godine kasnije, sam dostigla sve ciljeve koje sam postavila na početku rada u Adacti i u tom smeru nastavljam. U mom timu vlada pozitivna atmosfera, ne samo da vredno radimo već i uživamo u drugim aktivnostima.",
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
        "Počela sam da radim prošle godine nakon završene prakse i ovo je moje prvo radno iskustvo u oblasti IT-ja. Bio mi je dodeljen mentor koji je redovno pratio moj napredak i smatram da je ovo veoma bitna stavka za juniorske pozicije jer se može stvoriti jasnija slika o tome kojim veštinama i tehnologijima treba posvetiti više pažnje. Koristimo moderne tehhologij i kroz svaki zadatak se nauči nešto novo.",
      slika: AleksandraDjordjevic,
    },
    {
      ime: "Damjan Mladenović",
      zaposleniJeRekao:
        "U kompaniji sam više od 2 godine. S obzirom na to da radimo sa puno klijenata, samim tim radimo na različitim projektima, proširujemo svoja znanja i pratimo nove tehnologije. Rad u Prime Software-u mi je omogućio da iz prve ruke naučim šta podrazumeva jedan projekat: proces inicijalnog planiranja projekta, njegov razvoj i završetak, kao i koliko specifičnosti ulazi u svaku fazu.",
      slika: DamjanMladenovic,
    },
  ];

  const zaposleniRaiffeisen = [
    {
      ime: "Aleksandar Smiljković",
      zaposleniJeRekao:
        "Raiffeisen je austrijska banka koja postoji više od 130 godina, a trenutno je najinovativnija banka na našem tržistu. Ja sam u Raiffeisenu više od 5 godina, što je za tehnološki sektor daleko iznad proseka i postoje dobri razlozi za to. Danas je nikad lakše naći posao u IT-u, ali onih pravih prilika je malo i treba ih iskoristiti kada se pojave!",
      slika: AleksandarSmiljkovic,
    },
    {
      ime: "Stefan Gavrilović",
      zaposleniJeRekao:
        "Raiffeisen banka je sigurno bila jedna od prvih banaka kod nas koja je prepoznala da mora svoju ponudu uskladiti sa potrebama klijenata koje su se promenile. Rekao bih da je rad u IT sektoru Raiffeisen banke rad u jednom velikom i stabilnom sistemu, koji istovremeno ostavlja dovoljno fleksibilnosti za lični razvoj i napredovanje u jednoj velikoj korporaciji.",
      slika: StefanGavrilovic,
    },
  ];

  const zaposleniSemos = [
    {
      ime: "Andrea Adamović",
      zaposleniJeRekao:
        "Gejming industrija odavno nije dečija igra, već najbrže rastuća medijska industrija u svetu, koja je već odavno prevazišla vrednost Holivuda. Mi smo jedini Unity trening partner u regionu i svakome ko smatra da je programiranje i kreiranje igara izazov, naša obuka će pružiti sjajnu osnovu za dalji karijerni razvoj.",
      slika: AndreaAdamovic,
    },
    {
      ime: "Boris Kolaković",
      zaposleniJeRekao:
        "Programe koje organizuje Semos Education odlikuje intenzivno učenje i jedinstveni program u trajanju od 3 meseca, na kojem polaznici imaju priliku da uz podršku sertifikovanih trenera steknu nova znanja i veštine radeći na praktičnim projektima.",
      slika: BorisKolakovic,
    },
    {
      ime: "Jana Filipović",
      zaposleniJeRekao:
        "Naše obuke namenjene su sticanju praktičnih veština individualnih korisnika ali i čitavih timova iz različitih sfera poslovanja, fokusirajući se na njihove potrebe, njihov rast i razvoj.",
      slika: JanaFilipovic,
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
            <li className={aktivnaStrana === 2 ? "active" : ""}>EyeSee</li>
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
            <li className={aktivnaStrana === 5 ? "active" : ""}>
              Raiffeisen banka
            </li>
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
              oPartneru="Adacta je međunarodna softverska kompanija osnovana u Ljubljani 1989.godine. Danas ima oko 400 članova u više evropskih gradova: Ljubljani, Mariboru, Beogradu, Moskvi, Brnu, Zagrebu i Amsterdamu. Njihov produkt - AdInsure je moćna platforma koja podržava sve core procese u osiguravajućoj kući. Vizija kompanije je integrisanje najnovijih platformi, tehnologija i razvoja za stvaranje inovativnih rešenja sa fokusom na potrebe osiguranja. Tehnologije koje koriste su C#, Angular, SaaS, HTML, JS, MySQL, Oracle, TypeScript… Adacta nudi odlične mogućnosti za početak karijere, podršku kolega, fleksibilnost, izazove, napredovanje i zabavu."
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
              partnerIme="EyeSee"
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
              oPartneru="Prime Software je deo kompanije Prime Holding JSC. Kancelarije ove kompanije su locirane u šest gradova u Bugarskoj. Sedište kompanije je u Plovdivu, dok Prime Software posluje u Nišu. Prime Holding JSC uključuje vodeće bugarske IT kompanije, od kojih su neke osnovane pre više od 17 godina. Kompanija se bavi razvojem softvera, IT konsultacijama, integracijom softvera, podrškom proizvodima i profesionalnim uslugama. Njihova tehnička ekspertiza uključuje razvoj i konsalting u tehnologijama PHP, Java, C, C++, C#, Scala, R, Python, JavaScript i slično. Njihov tim primenjuje najbolje prakse u razvoju softvera u oblasti FinTech-a, Blockchain-a, Salesforce-a, Network Infrastructure-a i DevOps-a za brojne klijente iz Sjedinjenih Američkih Država, Evrope i sa Bliskog Istoka."
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
              oPartneru="Semos Education je lider u oblasti IT obuka u regionu. Ponosno ističu da su jedan od osnivača i članica LLPA, odnosno „Leading Learning Partners Association“, za stručno usavršavanje kadrova domaćih i internacionalnih kompanija iz celog sveta. Tokom 26 godina rada, razvili su preko 300 edukativnih programa, koje je pohađalo preko 100.000 ljudi i postavili visoke standarde razvijajući širok spektar IT treninga. Obuke koje organizuju su zvanične, akreditovane i sertifikovane od strane najvećih svetskih softverskih kompanija. Takođe, njihov portfolio sadrži obuke iz oblasti projektnog menadžmenta (Scrum, ITIL), kreativnih industrija (Unity, Autodesk, Adobe), Open Source treninge (Angular, React, Node, Python), kao i specijalizovane, prilagođene trening programe."
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
              partnerIme="Raiffeisen banka"
              oPartneru="Raiffeisen banka a.d. Beograd je jedna od vodećih banaka u Srbiji po svim najvažnijim kriterijumima. Svoje poslovanje u Srbiji započela je 2001. godine, kao prva domaća banka u stoprocentnom stranom vlasništvu. Posluje u okviru grupacije Raiffeisen Bank International, jedne od najvećih bankarskih grupacija u srednjoj i istočnoj Evropi. Mreža Raiffeisen banke pokriva 81 poslovnicu širom Srbije, u njoj radi više od 1.500 zaposlenih, a kapital banke iznosi preko pola milijarde evra. Raiffeisen banka je dobitnik brojnih prestižnih priznanja za Najbolju banku, dodeljenih od strane renomiranih finansijskih magazina tokom njenog poslovanja u Srbiji, titule Najbolja digitalna banka kojom ju je dve godine zaredom nagrađivao magazin Global Finance (2020. i 2021), kao i dvostruke titule Najbolja banka u oblasti privatnog bankarstva u 2021. godini (EMEA Finance i Global Finance)."
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
              oPartneru="A1 Srbija je deo Telekom Austrija Grupe koja posluje u 7 zemalja, što joj omogućava brži razvoj kroz internacionalnu saradnju. Više od 1.500 zaposlenih ove kompanije posvećeno je kreiranju inovativnih rešenja i usluga, omogućavajući da 2.4 miliona korisnika, u skladu sa svojim potrebama, odaberu i na najbolji način iskoriste mogućnosti koje digitalizacija nudi. Kompanija se vodi time da svaki pojedinac ima moć da napravi velike promene i da uz pomoć tehnologije ta moć zaista može preoblikovati naša iskustva i učiniti svet boljim mestom."
              poster={a1Loading}
            />
          }
        />
      </Routes>
    </>
  );
};

export default NasiPartneri;
