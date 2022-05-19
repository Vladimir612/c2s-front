import React, { useState } from "react";
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

import MarkoVukovic from "../../Assets/Images/Partneri/Adacta/zaposleni/MarkoVukovic.jpg";
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
  let activePage = -1;

  switch (location.pathname) {
    case "/nasi-partneri":
      activePage = -1;
      break;
    case "/nasi-partneri/adacta":
      activePage = 1;
      break;
    case "/nasi-partneri/eyesee":
      activePage = 2;
      break;
    case "/nasi-partneri/prime-software":
      activePage = 3;
      break;
    case "/nasi-partneri/semos-education":
      activePage = 4;
      break;
    case "/nasi-partneri/raiffeisen":
      activePage = 5;
      break;
    case "/nasi-partneri/a1":
      activePage = 6;
      break;
    default:
      activePage = -1;
      break;
  }

  const zaposleniA1 = [
    {
      name: "Renata Čolić",
      zaposleniJeRekao:
        "Stručnjak za marketinške komunikacije. Ono što je veoma važno je da prilike za učenje nisu ni blizu iscrpljene i da svako gladan znanja u ovako dinamičnom i raznovrsnom okruženju može da pronađe priliku za razvoj. Monotonost u poslu nije nešto što vas čeka u A1 Srbija.",
      photo: RenataColic,
    },
    {
      name: "Uroš Komlenović",
      zaposleniJeRekao:
        "Stručnjak za treninge. A1 Srbija kao članica A1 Telekom Grupe omogućila mi je da učim od kolega iz Austrije, Nemačke, Slovenije i Bugarske. Ali rad u A1 Srbiji nije samo učenje, uvek se nađe vreme i za druženje sa kolegama uz „Pivski petak“, žurke i proslave.",
      photo: UrosKomlenovic,
    },
  ];

  const zaposleniAdacta = [
    {
      name: "Marko Vuković",
      zaposleniJeRekao:
        "U Adactu me je privukao AdInsure koji pokriva sve core procese osiguranja i uspešno je implementiran u više država. Svako osiguravajuće društvo je specifično i dinamično, pa je samim tim izazov veći da se jednim rešenjem sve to podrži. Baza znanja je široka i uvek ima nešto novo da se nauči od iskusnih kolega.",
      photo: MarkoVukovic,
    },
    {
      name: "Una Gvozdenov",
      zaposleniJeRekao:
        "U Adactu sam došla kao student sa potencijalom za daljim usavršavanjem. Pored sebe sam imala odličan tim developera koji su mi pružali konstantku podršku. Danas, tri i po godine kasnije, sam dostigla sve ciljeve koje sam postavila na početku rada u Adacti i u tom smeru nastavljam. U mom timu vlada pozitivna atmosfera, ne samo da vredno radimo već i uživamo u drugim aktivnostima.",
      photo: UnaGvozdenov,
    },
  ];

  const zaposleniEyesee = [
    {
      name: "Miloš Živanić",
      zaposleniJeRekao:
        "Pridružio sam se timu za istraživanje i razvoj pre dve godine kao JavaScript developer. Projekti na kojima radimo su dinamični i kompleksni, što mi daje priliku da se stalno unapređujem i upoznajem sa novim tehnologijama. Najveće prednosti su opuštena atmosfera i odličan tim, uvek spreman da uskoči u pomoć.",
      photo: MilosZivanic,
    },
    {
      name: "Nikola Miljević",
      zaposleniJeRekao:
        "Nekoliko stvari se ističe u EyeSee-u: rad na izazovnim projektima je ogromna prilika za učenje; korišćenje najnovijih tehnologija; proizvodi svetske klase; i odličan menadžment koji je uspeo da poveća prihode tokom pandemije tako da kompanija bude sigurna. Odličan tim i radno okruženje bez pritiska.",
      photo: NikolaMiljevic,
    },
    {
      name: "Vladimir Matić",
      zaposleniJeRekao:
        "Na nedeljnom nivou, EyeSee analizira stotine korisničkih video snimaka kroz projekte istraživanja tržišta. Ako voliš video processing, Computer Vision i Deep Learning, ovo je savršeno mesto za tebe da razviješ state-of-the-art AI modele za analizu emocija i ponašanja, u agilnom i motivisanom timu.",
      photo: VladimirMatic,
    },
  ];

  const zaposleniPrime = [
    {
      name: "Aleksandra Đorđević",
      zaposleniJeRekao:
        "Počela sam da radim prošle godine nakon završene prakse i ovo je moje prvo radno iskustvo u oblasti IT-ja. Bio mi je dodeljen mentor koji je redovno pratio moj napredak i smatram da je ovo veoma bitna stavka za juniorske pozicije jer se može stvoriti jasnija photo o tome kojim veštinama i tehnologijima treba posvetiti više pažnje. Koristimo moderne tehhologij i kroz svaki zadatak se nauči nešto novo.",
      photo: AleksandraDjordjevic,
    },
    {
      name: "Damjan Mladenović",
      zaposleniJeRekao:
        "U kompaniji sam više od 2 godine. S obzirom na to da radimo sa puno klijenata, samim tim radimo na različitim projektima, proširujemo svoja znanja i pratimo nove tehnologije. Rad u Prime Software-u mi je omogućio da iz prve ruke naučim šta podrazumeva jedan projekat: proces inicijalnog planiranja projekta, njegov razvoj i završetak, kao i koliko specifičnosti ulazi u svaku fazu.",
      photo: DamjanMladenovic,
    },
  ];

  const zaposleniRaiffeisen = [
    {
      name: "Aleksandar Smiljković",
      zaposleniJeRekao:
        "Raiffeisen je austrijska banka koja postoji više od 130 godina, a trenutno je najinovativnija banka na našem tržistu. Ja sam u Raiffeisenu više od 5 godina, što je za tehnološki sektor daleko iznad proseka i postoje dobri razlozi za to. Danas je nikad lakše naći posao u IT-u, ali onih pravih prilika je malo i treba ih iskoristiti kada se pojave!",
      photo: AleksandarSmiljkovic,
    },
    {
      name: "Stefan Gavrilović",
      zaposleniJeRekao:
        "Raiffeisen banka je sigurno bila jedna od prvih banaka kod nas koja je prepoznala da mora svoju ponudu uskladiti sa potrebama klijenata koje su se promenile. Rekao bih da je rad u IT sektoru Raiffeisen banke rad u jednom velikom i stabilnom sistemu, koji istovremeno ostavlja dovoljno fleksibilnosti za lični razvoj i napredovanje u jednoj velikoj korporaciji.",
      photo: StefanGavrilovic,
    },
  ];

  const zaposleniSemos = [
    {
      name: "Andrea Adamović",
      zaposleniJeRekao:
        "Gejming industrija odavno nije dečija igra, već najbrže rastuća medijska industrija u svetu, koja je već odavno prevazišla vrednost Holivuda. Mi smo jedini Unity trening partner u regionu i svakome ko smatra da je programiranje i kreiranje igara izazov, naša obuka će pružiti sjajnu osnovu za dalji karijerni razvoj.",
      photo: AndreaAdamovic,
    },
    {
      name: "Boris Kolaković",
      zaposleniJeRekao:
        "Programe koje organizuje Semos Education odlikuje intenzivno učenje i jedinstveni program u trajanju od 3 meseca, na kojem polaznici imaju priliku da uz podršku sertifikovanih trenera steknu nova znanja i veštine radeći na praktičnim projektima.",
      photo: BorisKolakovic,
    },
    {
      name: "Jana Filipović",
      zaposleniJeRekao:
        "Naše obuke namenjene su sticanju praktičnih veština individualnih korisnika ali i čitavih timova iz različitih sfera poslovanja, fokusirajući se na njihove potrebe, njihov rast i razvoj.",
      photo: JanaFilipovic,
    },
  ];

  const [visibleEmployee, setVisibleEmployee] = useState(0);

  return (
    <>
      <Nav />
      <div className="partners-nav">
        <ul>
          <Link to="adacta" onClick={() => setVisibleEmployee(0)}>
            <li className={activePage === 1 ? "active" : ""}>Adacta</li>
          </Link>
          <Link to="eyesee" onClick={() => setVisibleEmployee(0)}>
            <li className={activePage === 2 ? "active" : ""}>EyeSee</li>
          </Link>
          <Link to="prime-software" onClick={() => setVisibleEmployee(0)}>
            <li className={activePage === 3 ? "active" : ""}>Prime software</li>
          </Link>
          <Link to="semos-education" onClick={() => setVisibleEmployee(0)}>
            <li className={activePage === 4 ? "active" : ""}>
              Semos Education
            </li>
          </Link>
          <Link to="raiffeisen" onClick={() => setVisibleEmployee(0)}>
            <li className={activePage === 5 ? "active" : ""}>
              Raiffeisen banka
            </li>
          </Link>
          <Link to="a1" onClick={() => setVisibleEmployee(0)}>
            <li className={activePage === 6 ? "active" : ""}>A1</li>
          </Link>
        </ul>
      </div>
      <Routes>
        <Route
          path="adacta"
          element={
            <PartnerSnimak
              video={adactaVideo}
              employee={zaposleniAdacta}
              prevLink="/nasi-partneri/a1"
              nextLink="/nasi-partneri/eyesee"
              partnerName="Adacta"
              aboutPartner="Adacta je međunarodna softverska kompanija osnovana u Ljubljani 1989.godine. Danas ima oko 400 članova u više evropskih gradova: Ljubljani, Mariboru, Beogradu, Moskvi, Brnu, Zagrebu i Amsterdamu. Njihov produkt - AdInsure je moćna platforma koja podržava sve core procese u osiguravajućoj kući. Vizija kompanije je integrisanje najnovijih platformi, tehnologija i razvoja za stvaranje inovativnih rešenja sa fokusom na potrebe osiguranja. Tehnologije koje koriste su C#, Angular, SaaS, HTML, JS, MySQL, Oracle, TypeScript… Adacta nudi odlične mogućnosti za početak karijere, podršku kolega, fleksibilnost, izazove, napredovanje i zabavu."
              poster={adactaLoading}
              visibleEmployee={visibleEmployee}
              setVisibleEmployee={setVisibleEmployee}
            />
          }
        />

        <Route
          path="eyesee"
          element={
            <PartnerSnimak
              video={eyeseeVideo}
              employee={zaposleniEyesee}
              prevLink="/nasi-partneri/adacta"
              nextLink="/nasi-partneri/prime-software"
              partnerName="EyeSee"
              aboutPartner="EyeSee je najbrže rastuća kompanija koja se bavi bihevioralnim istraživanjima, sa sedištima u Njujorku, Antverpenu, Parizu, Londonu, Singapuru, Meksiko Sitiju i Beogradu. Da bi razumeli svoje mušterije i korisnike, pa samim tim uticali na uspeh svog brenda i proizvoda, kompanije pribegavaju istraživanju tržišta. Udruživanjem konvencionalnih i bihevioralnih metoda utvrđuju šta je to što ljudima privlači pažnju, izaziva reakcije ili se prodaje u supermarketima ili na ogromnim e-commerce sajtovima. Usluge i tehnologiju kompanije EyeSee koriste mnoge globalne firme poput Twitter-a, Microsoft-a, Google-a, Colgate-a. Eyesee je unapredio starije, nepouzdane i subjektivne metode istraživanja uvodeći inovativne metode poput eye-tracking-a, facial coding-a, merenja brzine odgovora i virtuelne kupovine. EyeSee sjedinjava naučni pristup, najmoderniju tehnologiju i istraživanja, da bi pružili dublje razumevanje ljudskog ponašanja. Vode se sloganom Razumi ponašanje, rasti brže."
              poster={eyeseeLoading}
              visibleEmployee={visibleEmployee}
              setVisibleEmployee={setVisibleEmployee}
            />
          }
        />
        <Route
          path="prime-software"
          element={
            <PartnerSnimak
              video={primeVideo}
              employee={zaposleniPrime}
              prevLink="/nasi-partneri/eyesee"
              nextLink="/nasi-partneri/semos-education"
              partnerName="prime software"
              aboutPartner="Prime Software je deo kompanije Prime Holding JSC. Kancelarije ove kompanije su locirane u šest gradova u Bugarskoj. Sedište kompanije je u Plovdivu, dok Prime Software posluje u Nišu. Prime Holding JSC uključuje vodeće bugarske IT kompanije, od kojih su neke osnovane pre više od 17 godina. Kompanija se bavi razvojem softvera, IT konsultacijama, integracijom softvera, podrškom proizvodima i profesionalnim uslugama. Njihova tehnička ekspertiza uključuje razvoj i konsalting u tehnologijama PHP, Java, C, C++, C#, Scala, R, Python, JavaScript i slično. Njihov tim primenjuje najbolje prakse u razvoju softvera u oblasti FinTech-a, Blockchain-a, Salesforce-a, Network Infrastructure-a i DevOps-a za brojne klijente iz Sjedinjenih Američkih Država, Evrope i sa Bliskog Istoka."
              poster={primeLoading}
              visibleEmployee={visibleEmployee}
              setVisibleEmployee={setVisibleEmployee}
            />
          }
        />
        <Route
          path="semos-education"
          element={
            <PartnerSnimak
              video={semosVideo}
              employee={zaposleniSemos}
              prevLink="/nasi-partneri/prime-software"
              nextLink="/nasi-partneri/raiffeisen"
              partnerName="Semos Education"
              aboutPartner="Semos Education je lider u oblasti IT obuka u regionu. Ponosno ističu da su jedan od osnivača i članica LLPA, odnosno „Leading Learning Partners Association“, za stručno usavršavanje kadrova domaćih i internacionalnih kompanija iz celog sveta. Tokom 26 godina rada, razvili su preko 300 edukativnih programa, koje je pohađalo preko 100.000 ljudi i postavili visoke standarde razvijajući širok spektar IT treninga. Obuke koje organizuju su zvanične, akreditovane i sertifikovane od strane najvećih svetskih softverskih kompanija. Takođe, njihov portfolio sadrži obuke iz oblasti projektnog menadžmenta (Scrum, ITIL), kreativnih industrija (Unity, Autodesk, Adobe), Open Source treninge (Angular, React, Node, Python), kao i specijalizovane, prilagođene trening programe."
              poster={semosLoading}
              visibleEmployee={visibleEmployee}
              setVisibleEmployee={setVisibleEmployee}
            />
          }
        />
        <Route
          path="raiffeisen"
          element={
            <PartnerSnimak
              video={raiffeisenVideo}
              employee={zaposleniRaiffeisen}
              prevLink="/nasi-partneri/semos-education"
              nextLink="/nasi-partneri/a1"
              partnerName="Raiffeisen banka"
              aboutPartner="Raiffeisen banka a.d. Beograd je jedna od vodećih banaka u Srbiji po svim najvažnijim kriterijumima. Svoje poslovanje u Srbiji započela je 2001. godine, kao prva domaća banka u stoprocentnom stranom vlasništvu. Posluje u okviru grupacije Raiffeisen Bank International, jedne od najvećih bankarskih grupacija u srednjoj i istočnoj Evropi. Mreža Raiffeisen banke pokriva 81 poslovnicu širom Srbije, u njoj radi više od 1.500 zaposlenih, a kapital banke iznosi preko pola milijarde evra. Raiffeisen banka je dobitnik brojnih prestižnih priznanja za Najbolju banku, dodeljenih od strane renomiranih finansijskih magazina tokom njenog poslovanja u Srbiji, titule Najbolja digitalna banka kojom ju je dve godine zaredom nagrađivao magazin Global Finance (2020. i 2021), kao i dvostruke titule Najbolja banka u oblasti privatnog bankarstva u 2021. godini (EMEA Finance i Global Finance)."
              poster={raiffeisenLoading}
              visibleEmployee={visibleEmployee}
              setVisibleEmployee={setVisibleEmployee}
            />
          }
        />
        <Route
          path="a1"
          element={
            <PartnerSnimak
              video={a1Video}
              employee={zaposleniA1}
              prevLink="/nasi-partneri/raiffeisen"
              nextLink="/nasi-partneri/adacta"
              partnerName="A1"
              aboutPartner="A1 Srbija je deo Telekom Austrija Grupe koja posluje u 7 zemalja, što joj omogućava brži razvoj kroz internacionalnu saradnju. Više od 1.500 zaposlenih ove kompanije posvećeno je kreiranju inovativnih rešenja i usluga, omogućavajući da 2.4 miliona korisnika, u skladu sa svojim potrebama, odaberu i na najbolji način iskoriste mogućnosti koje digitalizacija nudi. Kompanija se vodi time da svaki pojedinac ima moć da napravi velike promene i da uz pomoć tehnologije ta moć zaista može preoblikovati naša iskustva i učiniti svet boljim mestom."
              poster={a1Loading}
              visibleEmployee={visibleEmployee}
              setVisibleEmployee={setVisibleEmployee}
            />
          }
        />
      </Routes>
    </>
  );
};

export default NasiPartneri;
