//companies
import semos from "../../../Assets/Images/Partneri/pokrovitelji/semos.png";
import a1 from "../../../Assets/Images/Partneri/pokrovitelji/a1.png";
import adacta from "../../../Assets/Images/Partneri/pokrovitelji/adacta.png";
import eyesee from "../../../Assets/Images/Partneri/pokrovitelji/eyesee.png";
import prime from "../../../Assets/Images/Partneri/godisnji/prime.png";

//lecturers
import AnaNikolic from "../../../Assets/Images/Partneri/A1/panel/AnaNikolic.jpg";
import MihajloMilanovic from "../../../Assets/Images/Partneri/A1/radionice/MihajloMilanovic.jpg";

import GoranVujanovic from "../../../Assets/Images/Partneri/Adacta/radionice/GoranVujanovic.jpg";
import NenadMaricic from "../../../Assets/Images/Partneri/Adacta/radionice/NenadMaricic.jpg";

import NikolaMihajlovic from "../../../Assets/Images/Partneri/Eyesee/radionice/NikolaMihajlovic.jpg";
import VladimirMatic from "../../../Assets/Images/Partneri/Eyesee/zaposleni/VladimirMatic.jpg";

import DraganKocic from "../../../Assets/Images/Partneri/Prime/radionice/DraganKocic.jpg";
import MilicaMilekic from "../../../Assets/Images/Partneri/Prime/radionice/MilicaMilekic.jpg";

import NikolaGarabandic from "../../../Assets/Images/Partneri/Semos/radionice/NikolaGarabandic.jpg";

const lecture1 = {
  heading: "Izazovi u B2C monetizaciji 5G usluga",
  firstPar:
    "Konvergentni sistemi za naplatu objedinjuju online i offline sisteme za naplatu i adresiraju nove modele za monetizaciju koje donose 5G sistemi. Dinamično tržište donosi potrebu za fleksibilnim biznis modelima, prilagođenim krajnjim korisnicima.",
  secondPar:
    "Konvergentni sistemi za naplatu postaju presudni za određivanje pozicije na konkurentnom tržištu jer pružaju podršku za brzo primenljive (time-to-market) personalizovane biznis modele sa osvrtom na korisničko iskustvo (naplata u realnom vremenu) i niske troškove održavanja (skalabilnost i sposobnost integracije).",
  lecturer: {
    name: "Mihajlo Milanović",
    moreInfo:
      "Osnovne i master studije završio je na Elektrotehničkom fakultetu, na smeru telekomunikacije i informacione tehnologije. Ponosni je član A1 tima od 2021. godine na poziciji Stariji stručnjak za informacione tehnologije i servise. Ima 8 godina iskustva u radu u telekomunikacionoj industriji na projektima integracije i održavanja sveobuhvatnih softverskih rešenja za kontrolu naplate usluga.",
    photo: MihajloMilanovic,
  },
  lecturer2: {
    name: "Ana Nikolić",
    moreInfo:
      "Završila osnovne studije na FON-u, smer informacioni sistemi i tehnologije. Nakon završene studentske prakse u kompaniji A1 Srbija započela je svoju karijeru u IT sektoru, gde se 5 godina na poziciji IT Service Expert-a bavila podrškom sistema za naplatu. Odnedavno je napredovala na poziciju IT Business Analyst-a. Ana se redovno bavi sportom, voli čitanje i uvek želi da bude u toku sa novim tehnologijama, kao i načinima poboljšanja svakodnevnog rada.",
    photo: AnaNikolic,
  },
  company: {
    name: "A1",
    link: "/nasi-partneri/a1",
    photo: a1,
  },
};

const lecture2 = {
  heading: "Angular: Razvoj web aplikacije i VS Code ekstenzije",
  firstPar:
    "Ako želite da naučite osnove Angular-a i zajedno sa iskusnim predavačem prođete kroz razvoj Angular Web aplikacije koristeći TypeScript, kao i kreiranje ekstenzije za Visual Studio Code, imaćete priliku za to na radionici koju će držati predstavnici iz kompanije Adacta. Nakon uvodnog predavanja gde možete da naučite više o razvoju web aplikacija sa fokusom na Single Page aplikacije, Angular i TypeScript, bićete u prilici da čujete opis osnovnih koncepata koji se koriste u Angular aplikaciji.",
  secondPar:
    "Prvi dan radionice će u velikoj meri biti posvećen praktičnom radu - uz podršku predavača moći ćete da napravite i pokrenete Angular aplikaciju po zadatim zahtevima. Drugi dan biće posvećen predavanju o ekstenzijama za Visual Studio Code nakon čega će se na bazi Angular aplikacije praviti ekstenzija.",
  lecturer: {
    name: "Goran Vujanović",
    moreInfo:
      "Goran Vujanović je iskusni tim lider i developer, sa više od 10 godina iskustva u razvoju softvera za različite finansijske institucije koristeći C#, .NET, Angular, SQL i mnoge druge tehnologije. Trenutno radi na poziciji Technical Team Lead-a u Adacti i vođa je frontend tima koji razvija novu verziju AdInsure-a, core rešenja za osiguranje.",
    photo: GoranVujanovic,
  },
  lecturer2: {
    name: "Nenad Maričić",
    moreInfo:
      "Nenad je tim i tehnički lider u timu Core u Adacti još od samog početka, zapravo, još i pre zvaničnog osnivanja Adacte u Beogradu. Aktivno je učestvovao u izgradnji i još uvek doprinosi jačanju tima beogradske kancelarije, tako što svoje dvodecenijsko iskustvo i znanje nesebično prenosi mlađim kolegama. AdInsure je Adactin produkt čije je temelje postavio baš on, te se na toj dobro postavljenoj osnovi grade dalje nove verzije.",
    photo: NenadMaricic,
  },
  company: {
    name: "Adacta",
    link: "/nasi-partneri/adacta",
    photo: adacta,
  },
};

const lecture3 = {
  heading: "React: Razvoj Emotion Viewer aplikacije",
  firstPar:
    "Kreiraj real-world aplikaciju od nule uz React, TypeScript, Chakra UI i Zustand. Na ovoj radionici imaćeš priliku da kreiraš Emotion Viewer aplikaciju od nule i uz to naučiš neke od najsavremenijih tehnologija koje se koriste u EyeSee-u. Ova aplikacija će moći da izlista video snimke, pregleda ih i utvrdi koju emociju pokazuje tester na video snimku. ",
  secondPar:
    "Poslednji deo radionice će biti rezervisan za Facial Coding eksperta/stručnjaka iz EyeSee-a koji će ti pokazati kako algoritam može da određuje emocije koristeći mašinsko učenje. Aplikacije ovog tipa imaju veliku primenu i pozadinu u istraživačkim kompanijama kao što je EyeSee, tako da će ti ono što učiš na ovoj radionici pružiti znanje koje ćeš moći da primeniš u bliskoj budućnosti.",
  lecturer: {
    name: "Nikola Mihajlović",
    moreInfo:
      "Nikola od 2020. radi u EyeSee-u kao JavaScript developer, pri čemu najviše koristi React, Node.js, Electron i Chrome ekstenzije. Kao IT edukator predaje skoro pet godina. Predavanja su mu fokusirana na JavaScript, klijentsku i serversku stranu. Takođe, učestvovao je u izradi nekih open-source projekata.",
    photo: NikolaMihajlovic,
  },
  lecturer2: {
    name: "Vladimir Matić",
    moreInfo:
      "Vladimir je Computer Vision i Machine Learning Research Scientist. Trenutno u EyeSee-u razvija novi sistem prepoznavanja lica kako bi razumeo ljudsko ponašanje. Doktorirao je u oblasti primenjenog mašinskog učenja (KU Leuven, Belgija). Pored toga, bio je istraživač-saradnik (2 godine) kao i vanredni profesor i prodekan (2 godine).",
    photo: VladimirMatic,
  },
  company: {
    name: "EyeSee",
    link: "/nasi-partneri/eyesee",
    photo: eyesee,
  },
};

const lecture4 = {
  heading: "Spring Boot: Razvoj API backend sistema",
  firstPar:
    "Kada govorimo o zahtevima tržišta u IT industriji, ukoliko pogledate trenutno stanje na bilo kom poslovnom portalu, videćete da je tražnja za Java programerima koji vladaju Spring radnim okruženjem ogromna. Zašto je to tako? Odgovor na to pitanje ćete dobiti na ovoj dvodnevnoj radionici. Cilj radionice jeste da zajedno izgradimo API backend sistem koristeći Spring Boot radno okruženje, koristeći najbolje prakse na tržištu i prateći principe clean code-a.",
  secondPar:
    "Plan za prvi dan jeste upoznavanje sa Spring Boot radnim okruženjem. Saznaćete kako u par koraka možete napraviti svoju aplikaciju koristeći Spring Initializer. Zatim, kroz razgovor o samom Spring Boot-u, pričaćemo o clean code-u i njegovoj primeni u izgradnji API sistema, istovremeno gradeći različite slojeve aplikacije prateći N-layered arhitekturu. Drugi dan će biti fokusiran na naprednije teme, posebno se fokusirajući na obezbeđivanje aplikacije i važnost testiranja softvera. U svrhu bezbednosti, Spring nam je pružio poseban projekat - Spring Security, čija svrha jeste upravo podizanje bezbednosnih sistema oko aplikacije.",
  lecturer: {
    name: "Milica Milekić",
    moreInfo:
      "Milica je svoju svoju IT karijeru započela u kompaniji Prime Software 2021. godine. Prve korake je napravila kroz program prakse kao potpuni početnik. Praksa joj je omogućila da teoretsko znanje sa kojim je došla na program prakse upotrebi u praktičnom radu i sticanju prvog profesionalnog iskustva. Zahvaljujući velikoj posvećenosti, dobila je mogućnost da ostane da radi u kompaniji na poziciji Junior Java Developer-a. Trenutno radi na Spring Boot projektu u kom se koriste MySQL za bazu podataka, Maven, JPA, Hibernate, Lombok i ostale napredne Java tehnologije.",
    photo: MilicaMilekic,
  },
  lecturer2: {
    name: "Dragan Kocić",
    moreInfo:
      "Dragan radi u Prime Software-u od 2019. godine kao Software Developer, sa akcentom na radu u Spring Boot okruženju. Poslednje tri godine proveo je na projektu za američko tržište koji kao tehnologije koristi Spring Boot i Angular sa MongoJS kao bazom podataka. U razvoju je koristio mnoge razvojne tehnologije kao što su Docker, AWS, Kubernetes i RabbitMQ.Nakon tri godine u kompaniji, odlučuje da se posveti prenošenju svog znanja, istovremeno razvijajući i svoje i pridružuje se Education Initiative odeljenju kompanije. Trenutno radi i kao Java mentor u programu prakse, istovremeno držeći predavanja na temu Java i Spring okruženja širom Srbije.",
    photo: DraganKocic,
  },
  company: {
    name: "Prime software",
    link: "/nasi-partneri/prime-software",
    photo: prime,
  },
};

const lecture6 = {
  heading: "Uvod u 3D Game Development",
  firstPar:
    "Ako želiš da uđeš u svet Game Development-a i zajedno sa iskusnim predavačem prođeš kroz korišćenje ključnih alata potrebnih za kreiranje 3D igara, onda je radionica koju će držati kompanija Semos pravi izbor za tebe.",
  secondPar:
    "Zajedno sa predavačem ćeš proći kroz kontrolisanje karaktera u cilju izvršavanja korisničke naredbe, implementaciju skripti u cilju pravljenja osnovne gameplay mehanike, kao i buildovanje i pokretanje kompletnog projekta na računarima.",
  lecturer: {
    name: "Nikola Garabandić",
    moreInfo:
      "Nikola Garabandić je završio osnovne akademske studije na Fakultetu tehničkih nauka na smeru softversko inženjerstvo i informacione tehnologije. Svoje prve game development korake je napravio još u srednjoj elektrotehničkoj školi Mihajlo Pupin gde je učio da pravi igre u C-u i nakon toga u Javi. Unity-jem je počeo profesionalno da se bavi 2017. godine kada je zajedno sa svojim prijateljem pokrenuo firmu Stick & Rope. Od 2019. godine je angažovan od strane M2H i Blackmill Studija (za koje radi i danas) na ispravci bagova na igrama koje pripadaju WW1 Game Series franšizi, Tannenberg i Verdun, i na radu na najnovijoj igri franšize - Isonzo.",
    photo: NikolaGarabandic,
  },
  lecturer2: {
    name: "Nikola Garabandić",
    moreInfo:
      "Nikola Garabandić je završio osnovne akademske studije na Fakultetu tehničkih nauka na smeru softversko inženjerstvo i informacione tehnologije. Svoje prve game development korake je napravio još u srednjoj elektrotehničkoj školi Mihajlo Pupin gde je učio da pravi igre u C-u i nakon toga u Javi. Unity-jem je počeo profesionalno da se bavi 2017. godine kada je zajedno sa svojim prijateljem pokrenuo firmu Stick & Rope. Od 2019. godine je angažovan od strane M2H i Blackmill Studija (za koje radi i danas) na ispravci bagova na igrama koje pripadaju WW1 Game Series franšizi, Tannenberg i Verdun, i na radu na najnovijoj igri franšize - Isonzo.",
    photo: NikolaGarabandic,
  },
  company: {
    name: "Semos Education",
    link: "/nasi-partneri/semos-education",
    photo: semos,
  },
};

export const lecturesArr = [lecture1, lecture2, lecture3, lecture4, lecture6];

export const lectureTextIntro =
  "Na radionicama ćeš ove godine imati priliku da od stručnjaka iz brojnih kompanija naučiš nešto novo o tehnologijama koje oni koriste u svakodnevnom poslovanju i na taj način pojačaš svoje kompetencije i veštine. U toku dva dana trajanja radionica ćeš kroz praktičan rad i uz podršku predavača proširiti svoja znanja iz oblasti IT-ja koje poslodavci danas visoko cene. Stalno unapređivanje znanja i sposobnosti je ono što će te izdvojiti na tržištu rada, a posebno u oblasti IT-ja koji svakodnevno napreduje. Želiš da se istakneš? Prijavi se! If you wait for IT, you won’t make IT.";
