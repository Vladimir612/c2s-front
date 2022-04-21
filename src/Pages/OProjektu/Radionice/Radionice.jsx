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
    naslov: "Konvergentni sistemi za naplatu",
    prviParagraf:
      "Konvergentni sistemi za naplatu objedinjuju online i offline sisteme za naplatu i adresiraju nove modele za monetizaciju koje donose 5G sistemi. Dinamično tržište donosi potrebu za fleksibilnim biznis modelima, prilagođenim krajnjim korisnicima. Konvergenti sistemi za naplatu postaju presudni za određivanje pozicije na konkurentnom tržištu jer pružaju podršku za brzo primenljive (time-to-market) personalizovane biznis modele sa osvrtom na korisničko iskustvo (naplata u realnom vremenu) i niske troškove održavanja (skalabilnost i sposobnost integracije).",
    drugiParagraf:
      "Konvergentni sistemi za naplatu objedinjuju online i offline sisteme za naplatu i adresiraju nove modele za monetizaciju koje donose 5G sistemi. Dinamično tržište donosi potrebu za fleksibilnim biznis modelima, prilagođenim krajnjim korisnicima. Konvergenti sistemi za naplatu postaju presudni za određivanje pozicije na konkurentnom tržištu jer pružaju podršku za brzo primenljive (time-to-market) personalizovane biznis modele sa osvrtom na korisničko iskustvo (naplata u realnom vremenu) i niske troškove održavanja (skalabilnost i sposobnost integracije).",
    predavac: {
      ime: "Mihajlo Milanović",
      vise: "Rođen 1990. godine u Beogradu. Završio je 2013. godine osnovne studije na Elektrotehničkom fakultetu Univerziteta u Beogradu, na smeru telekomunikacije i informacione tehnologije. Master studije je završio na istom odseku 2014. godine. Ponosni je član A1 tima od 2021. godine na poziciji Stariji stručnjak za informacione tehnologije i servise. Ima 8 godina iskustva u radu u telekomunikacionoj industriji na projektima integracije i održavanja sveobuhvatnih softverskih rešenja za kontrolu naplate usluga.",
      slika: MihajloMilanovic,
    },
    predavac2: {
      ime: "Ana Nikolić",
      vise: "Završila osnovne studije na Fakultetu organizacionih nauka, smer informacioni sistemi i tehnologije. Tokom završne godine studija dobila je studentsku praksu u kompaniji A1 Srbija. Nakon završene prakse započela je svoju karijeru u IT sektoru, gde se 5 godina na poziciji IT Service Expert-a bavila podrškom sistema za naplatu. Odnedavno je napredovala na poziciju IT Business Analyst-a. Ana se redovno bavi sportom, voli čitanje i uvek želi da bude u toku sa novim tehnologijama, kao i načinima poboljšanja svakodnevnog rada.",
      slika: AnaNikolic,
    },
    kompanija: {
      ime: "A1",
      link: "/nasi-partneri/a1",
      slika: a1,
    },
  };

  const radionica2 = {
    naslov: "Uvod u Angular",
    prviParagraf:
      "Ako želite da naučite osnove Angular framework-a i zajedno sa iskusnim predavačem prođete kroz razvoj Angular Web aplikacije koirsteći TypeScript, kao i kreiranje ekstenzije za Visual Studio Code, imaćete priliku za to na radionici koju će držati predstavnici iz kompanije Adacta. Predavači na ovoj radionici biće Goran Vujanović i Nenad Maričić, zaposleni u kompaniji Adacta.",
    drugiParagraf:
      "Ako želite da naučite osnove Angular framework-a i zajedno sa iskusnim predavačem prođete kroz razvoj Angular Web aplikacije koirsteći TypeScript, kao i kreiranje ekstenzije za Visual Studio Code, imaćete priliku za to na radionici koju će držati predstavnici iz kompanije Adacta.Nakon uvodnog predavanja gde možete da naučite više o razvoju web aplikacija sa fokusom na SPA (Single Page Application), Angular i TypeScript, HTML i CSS bićete u prilici da čujete opis osnovnih koncepata koji se koriste u Angular aplikaciji, ali i to koje su prednosti i mane u odnosu na druge tehnologije. Prvi dan radionice će u velikoj meri biti posvećen praktičnom radu - uz podršku predavača moći ćete da napravite i pokrenete Angular aplikaciju po zadatim zahtevima.Drugi dan biće posvećen predavanju o ekstenzijama za Visual Studio Code, kako je moguće napraviti ekstenziju koristeći Angular i TypeScript, koja su ograničenja i slično. Praktičan rad biće obeležen pravljenjem ekstenzije za Visual Studio Code koristeći Angular aplikaciju sa prvog dana radionice. Predavači na ovoj radionici biće Goran Vujanović i Nenad Maričić, zaposleni u kompaniji Adacta.",
    predavac: {
      ime: "Goran Vujanović",
      vise: "Goran Vujanović je iskusni tim lider i developer, sa više od 10 godina iskustva u razvoju softvera za različite finansijske institucije koristeći C#, .NET, Angular, SQL i mnoge druge tehnologije. Trenutno radi na poziciji Technical Team Lead-a u Adacti i vođa je frontend tima koji razvija novu verziju AdInsure-a, core rešenja za osiguranje.",
      slika: GoranVujanovic,
    },
    predavac2: {
      ime: "Nenad Maričić",
      vise: "Nenad je tim i tehnički lider u timu Core u Adacti još od samog početka, zapravo, još i pre zvaničnog osnivanja Adacte u Beogradu. Aktivno je učestvovao u izgradnji i još uvek doprinosi jačanju tima beogradske kancelarije, tako što svoje dvodecenijsko iskustvo i znanje nesebično prenosi mlađim kolegama. AdInsure je Adactin produkt čije je temelje postavio baš on, te se na toj dobro postavljenoj osnovi grade dalje nove verzije.",
      slika: NenadMaricic,
    },
    kompanija: {
      ime: "Adacta",
      link: "/nasi-partneri/adacta",
      slika: adacta,
    },
  };

  const radionica3 = {
    naslov: "Lorem 1",
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
      ime: "EyeSee",
      link: "/nasi-partneri/eyesee",
      slika: eyesee,
    },
  };

  const radionica4 = {
    naslov: "Spring Boot",
    prviParagraf:
      "Kada govorimo o zahtevima tržišta u IT industriji, ukoliko pogledate trenutno stanje na bilo kom poslovnom portalu, videćete da je tražnja za Java programerima koji vladaju Spring radnim okruženjem ogromna. Zašto je to tako? Odgovor na to pitanje ćete dobiti na ovoj dvodnevnoj radionici. Cilj radionice jeste da zajedno izgradimo API backend sistem koristeći Spring Boot radno okruženje, koristeći najbolje prakse na tržištu i prateći principe clean code-a.",
    drugiParagraf:
      "Plan za prvi dan jeste upoznavanje sa Spring Boot radnim okruženjem. Saznaćete kako u par koraka možete napraviti svoju aplikaciju koristeći Spring Initializer. Zatim, kroz razgovor o samom Spring Boot-u, pričaćemo o clean code-u i njegovoj primeni u izgradnji API sistema, istovremeno gradeći različite slojeve aplikacije prateći N-layered arhitekturu. Drugi dan će biti fokusiran na naprednije teme, posebno se fokusirajući na obezbeđivanje aplikacije i važnost testiranja softvera. U svrhu bezbednosti, Spring nam je pružio poseban projekat - Spring Security, čija svrha jeste upravo podizanje bezbednosnih sistema oko aplikacije.",
    predavac: {
      ime: "Milica Milekić",
      vise: "Milica je svoju svoju IT karijeru započela u kompaniji Prime Software 2021. godine. Prve korake je napravila kroz program prakse kao potpuni početnik. Praksa joj je omogućila da teoretsko znanje sa kojim je došla na program prakse upotrebi u praktičnom radu i sticanju prvog profesionalnog iskustva. Zahvaljujući velikoj posvećenosti, dobila je mogućnost da ostane da radi u kompaniji na poziciji Junior Java Developer-a. Trenutno radi na Spring Boot projektu u kom se koriste MySQL za bazu podataka, Maven, JPA, Hibernate, Lombok i ostale napredne Java tehnologije.",
      slika: MilicaMilekic,
    },
    predavac2: {
      ime: "Dragan Kocić",
      vise: "Dragan radi u Prime Software-u od 2019. godine kao Software Developer, sa akcentom na radu u Spring Boot okruženju. Poslednje tri godine proveo je na projektu za američko tržište koji kao tehnologije koristi Spring Boot i Angular sa MongoJS kao bazom podataka. U razvoju je koristio mnoge razvojne tehnologije kao što su Docker, AWS, Kubernetes i RabbitMQ.Nakon tri godine u kompaniji, odlučuje da se posveti prenošenju svog znanja, istovremeno razvijajući i svoje i pridružuje se Education Initiative odeljenju kompanije. Trenutno radi i kao Java mentor u programu prakse, istovremeno držeći predavanja na temu Java i Spring okruženja širom Srbije.",
      slika: DraganKocic,
    },
    kompanija: {
      ime: "Prime software",
      link: "/nasi-partneri/prime-software",
      slika: prime,
    },
  };

  const radionica5 = {
    naslov: "Lorem 2",
    prviParagraf:
      "Ovladavanje temom agilnog razvoja softvera postaje sve više traženo u oblasti informacionih tehnologija. Priliku za upoznavanje sa ovom oblašću i primenu alata na konkretnom, prethodno razvijenom projektu imaćete upravo na radionici koju će držati zaposleni u kompaniji Raiffeisen banka.",
    drugiParagraf:
      "Ukoliko se odlučite za radionicu kompanije Raiffeisen banka trebalo bi pre samog dolaska da imate implementiranu aplikaciju u nekoj od predloženih tehnologija (JavaScript, Java, Python, C#), čiju kompleksnost određujete samostalno. Prilikom razvoja aplikacije, potrebno je verzionisati kod korišćenjem Git-a, dok bi ciljana platforma za kreiranje repozitorijuma bi bio Gitlab. Drugi dan dan radionice biće posvećen DevOps pristupu, gde bi bila obrađena kontejnerizacija projekata i upoznavanje sa pisanjem CI/CD skripti.",
    predavac: {
      ime: "Iva Krčmar",
      vise: "Iva Krčmar je rođena 1993. godine u Beogradu, završila Petu ekonomsku školu Rakovica i student je završne godine na Fakultetu organizacionih nauka u Beogradu, smer informacioni sistemi i tehnologije. Od 2018. godine radi u razvojnom timu Raiffeisen banke kao web developer. Imala je priliku da radi na razvoju projekata kako za fizička, tako i za pravna lica.  Deo je agilnog tima koji se pretežno bavi razvojem online kredita i tekućih računa za small business klijente.",
      slika: IvaKrcmar,
    },
    predavac2: {
      ime: "Mirko Milošević",
      vise: "Mirko Milošević je rođen 1993. godine u Beogradu, gde je i završio Trinaestu beogradsku gimnaziju i Elektrotehnički fakultet, smer računarska tehnika i informatika. Tokom studiranja učestvovao u radu međunarodnih studentskih organizacija. Od 2018. godine radi za Raiffeisen banku kao backend developer na njihovim digitalnim proizvodima. Deo je agilnog tima koji se pretežno bavi razvojem online kredita i tekućih računa za small business klijente.",
      slika: MarkoMilosevic,
    },
    kompanija: {
      ime: "Raiffeisen",
      link: "/nasi-partneri/raiffeisen",
      slika: raiffeisen,
    },
  };

  const radionica6 = {
    naslov: "Game Development",
    prviParagraf:
      "Ako želiš da uđeš u svet Game Development-a i zajedno sa iskusnim predavačem prođeš kroz korišćenje ključnih alata potrebnih za kreiranje 3D igara, onda je radionica koju će držati kompanija Semos pravi izbor za tebe. Zajedno sa predavačem ćeš proći kroz kontrolisanje karaktera u cilju izvršavanja korisničke naredbe, implementaciju skripti u cilju pravljenja osnovne gameplay mehanike, kao i buildovanje i pokretanje kompletnog projekta na računarima.",
    drugiParagraf:
      "Ako želiš da uđeš u svet Game Development-a i zajedno sa iskusnim predavačem prođeš kroz korišćenje ključnih alata potrebnih za kreiranje 3D igara, onda je radionica koju će držati kompanija Semos pravi izbor za tebe. Zajedno sa predavačem ćeš proći kroz kontrolisanje karaktera u cilju izvršavanja korisničke naredbe, implementaciju skripti u cilju pravljenja osnovne gameplay mehanike, kao i buildovanje i pokretanje kompletnog projekta na računarima.",
    predavac: {
      ime: "Nikola Garabandić",
      vise: "Nikola Garabandić je završio osnovne akademske studije na Fakultetu tehničkih nauka na smeru softversko inženjerstvo i informacione tehnologije. Svoje prve game development korake je napravio još u srednjoj elektrotehničkoj školi Mihajlo Pupin gde je učio da pravi igre u C-u i nakon toga u Javi. Unity-jem je počeo profesionalno da se bavi 2017. godine kada je zajedno sa svojim prijateljem pokrenuo firmu Stick & Rope. Od 2019. godine je angažovan od strane M2H i Blackmill Studija (za koje radi i danas) na ispravci bagova na igrama koje pripadaju WW1 Game Series franšizi, Tannenberg i Verdun, i na radu na najnovijoj igri franšize - Isonzo.",
      slika: NikolaGarabandic,
    },
    predavac2: {
      ime: "Nikola Garabandić",
      vise: "Nikola Garabandić je završio osnovne akademske studije na Fakultetu tehničkih nauka na smeru softversko inženjerstvo i informacione tehnologije. Svoje prve game development korake je napravio još u srednjoj elektrotehničkoj školi Mihajlo Pupin gde je učio da pravi igre u C-u i nakon toga u Javi. Unity-jem je počeo profesionalno da se bavi 2017. godine kada je zajedno sa svojim prijateljem pokrenuo firmu Stick & Rope. Od 2019. godine je angažovan od strane M2H i Blackmill Studija (za koje radi i danas) na ispravci bagova na igrama koje pripadaju WW1 Game Series franšizi, Tannenberg i Verdun, i na radu na najnovijoj igri franšize - Isonzo.",
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
            Na radionicama ćeš ove godine imati priliku da od stručnjaka iz
            brojnih kompanija naučiš nešto novo o tehnologijama koje oni koriste
            u svakodnevnom poslovanju i na taj način pojačaš svoje kompetencije
            i veštine. U toku dva dana trajanja radionica ćeš kroz praktičan rad
            i uz podršku predavača proširiti svoja znanja iz oblasti IT-ja koje
            poslodavci danas visoko cene. Stalno unapređivanje znanja i
            sposobnosti je ono što će te izdvojiti na tržištu rada, a posebno u
            oblasti IT-ja koji svakodnevno napreduje. Želiš da se istakneš?
            Prijavi se! If you wait for IT, you won’t make IT.
          </p>
        </div>
      </div>
      {/* <div className="presek-dana">
        <div className="krug-presek">
          <p>1.dan</p>
        </div>
      </div> */}
      <RadionicaKartica radionica={radionica1} />
      <RadionicaKartica radionica={radionica2} />
      <RadionicaKartica radionica={radionica3} />
      {/* <div className="presek-dana">
        <div className="krug-presek">
          <p>2.dan</p>
        </div>
      </div> */}
      <RadionicaKartica radionica={radionica4} />
      <RadionicaKartica radionica={radionica5} />
      <RadionicaKartica radionica={radionica6} />
    </div>
  );
};

export default Radionice;
