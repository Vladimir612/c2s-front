//godisnji
import devit from "./Images/Partners/godisnji/devit.png";
import digitec from "./Images/Partners/godisnji/digitec.png";
import fon from "./Images/Partners/godisnji/fon.png";
import guarana from "./Images/Partners/godisnji/guarana.png";
import hedwell from "./Images/Partners/godisnji/hedwell.png";
import mainstream from "./Images/Partners/godisnji/mainstream.png";
import prime from "./Images/Partners/godisnji/prime.png";

//robni
import escape from "./Images/Partners/robni/escape.png";
import nescafe from "./Images/Partners/robni/nescafe.png";
import dragibravo from "./Images/Partners/robni/DragiBravo.jpg";
import equilibrio from "./Images/Partners/robni/equilibrio.jpg";
import gorstak from "./Images/Partners/robni/gorstak.jpg";
import jdp from "./Images/Partners/robni/jdp.jpg";
import museum from "./Images/Partners/robni/museum.jpg";
import stark from "./Images/Partners/robni/stark.jpg";
import vajat from "./Images/Partners/robni/vajat.jpg";
import atlantic from "./Images/Partners/robni/atlantic.jpg";

//medijiski
import bestBg from "./Images/Partners/medijski/bestBg.png";
import caseFon from "./Images/Partners/medijski/case.png";
import eestec from "./Images/Partners/medijski/eestec.png";
import fonovCentar from "./Images/Partners/medijski/fonovCentar.png";
import kancelarija from "./Images/Partners/medijski/kancelarija.png";
import savez from "./Images/Partners/medijski/savez.png";
import spof from "./Images/Partners/medijski/spof.png";
import suma from "./Images/Partners/medijski/suma.png";
import svetKompjutera from "./Images/Partners/medijski/svetKompjutera.png";
import unija from "./Images/Partners/medijski/unija.png";
import viser from "./Images/Partners/medijski/viser.jpg";
import brainz from "./Images/Partners/medijski/brainz.jpg";
import cysecor from "./Images/Partners/medijski/cysecor.jpg";
import electron from "./Images/Partners/medijski/electron.jpg";
import itNetwork from "./Images/Partners/medijski/itNetwork.jpg";
import magazinStudent from "./Images/Partners/medijski/magazinStudent.jpg";
import masinski from "./Images/Partners/medijski/masinski.jpg";
import mingl from "./Images/Partners/medijski/mingl.jpg";
import orgViser from "./Images/Partners/medijski/orgViser.jpg";
import prObjave from "./Images/Partners/medijski/prObjave.png";
import studGrad from "./Images/Partners/medijski/studGrad.jpg";
import studZivot from "./Images/Partners/medijski/studZivot.jpg";
import suetf from "./Images/Partners/medijski/suetf.jpg";
import youth from "./Images/Partners/medijski/youth.jpg";

export const allSettings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  swipeToSlide: true,
  autoplaySpeed: 1500,
  centerPadding: "60px",
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const homeSettings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  swipeToSlide: true,
  autoplaySpeed: 1500,
  centerPadding: "60px",
};

export const annualPartners = [
  {
    partnerImage: fon,
    partnerName: "Fon",
    bgColor: "#fff",
    link: "http://fon.bg.ac.rs/",
  },
  {
    partnerImage: prime,
    partnerName: "Prime",
    bgColor: "#fff",
    link: "https://www.primeholding.com/",
  },
  {
    partnerImage: mainstream,
    partnerName: "Mainstream",
    bgColor: "#fff",
    link: "https://www.mainstream.rs/",
  },
  {
    partnerImage: devit,
    partnerName: "DevIT",
    bgColor: "#fff",
    link: "https://www.devit.rs/",
  },
  {
    partnerImage: guarana,
    partnerName: "Guarana",
    bgColor: "#fff",
    link: "https://knjaz.rs/portfolio/guarana/",
  },
  {
    partnerImage: hedwell,
    partnerName: "Hedwell",
    bgColor: "#fff",
    link: "https://hedwell.com/",
  },
  {
    partnerImage: digitec,
    partnerName: "Digitec",
    bgColor: "#fff",
    link: "https://www.digitec.rs/reklamni_materijali",
  },
];

export const naturalPartners = [
  {
    partnerImage: dragibravo,
    partnerName: "Dragi Bravo",
    bgColor: "#fff",
    link: "https://www.instagram.com/dragibravo/",
  },
  {
    partnerImage: escape,
    partnerName: "Escape",
    bgColor: "#fff",
    link: "https://escapegame.rs/",
  },
  {
    partnerImage: nescafe,
    partnerName: "Nescafe",
    bgColor: "#fff",
    link: "https://www.nescafe.com/rs/nase-kafe/nescafe-2in1",
  },
  {
    partnerImage: equilibrio,
    partnerName: "Equilibrio",
    bgColor: "#fff",
    link: "https://www.stranijezici.com/",
  },
  {
    partnerImage: gorstak,
    partnerName: "Gorštak",
    bgColor: "#fff",
    link: "https://gorstak.org/",
  },
  {
    partnerImage: jdp,
    partnerName: "Jugoslovensko dramsko pozorište",
    bgColor: "#fff",
    link: "https://www.jdp.rs/rs/",
  },
  {
    partnerImage: museum,
    partnerName: "Selfie museum expose",
    bgColor: "#fff",
    link: "https://selfiemuseum.rs/",
  },
  {
    partnerImage: stark,
    partnerName: "Štark",
    bgColor: "#fff",
    link: "https://www.stark.rs/",
  },
  {
    partnerImage: vajat,
    partnerName: "Stepin vajat",
    bgColor: "#fff",
    link: "https://www.burgers.rs/",
  },
  {
    partnerImage: atlantic,
    partnerName: "Atlantic",
    bgColor: "#fff",
    link: "https://www.atlanticgrupa.com/en/",
  },
];

export const mediaPartners = [
  {
    partnerImage: bestBg,
    partnerName: "Best Beograd",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: brainz,
    partnerName: "Brainz",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: caseFon,
    partnerName: "Case study club",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: cysecor,
    partnerName: "Cysecor",
    bgColor: "#121e2a",
    link: "#",
  },
  {
    partnerImage: eestec,
    partnerName: "eestec",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: electron,
    partnerName: "electron",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: fon,
    partnerName: "FON",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: fonovCentar,
    partnerName: "Fonov centar za razvoj karijere",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: itNetwork,
    partnerName: "itNetwork",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: kancelarija,
    partnerName: "Kancelarija",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: magazinStudent,
    partnerName: "magazinStudent",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: masinski,
    partnerName: "masinski",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: mingl,
    partnerName: "mingl",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: orgViser,
    partnerName: "Studentska organizacija Viser",
    bgColor: "#242424",
    link: "#",
  },
  {
    partnerImage: prObjave,
    partnerName: "prObjave",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: savez,
    partnerName: "Savez studenata Fona",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: spof,
    partnerName: "SPOF",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: studGrad,
    partnerName: "studGrad",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: studZivot,
    partnerName: "studZivot",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: suetf,
    partnerName: "suetf",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: suma,
    partnerName: "suma",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: svetKompjutera,
    partnerName: "Svet kompjutera",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: unija,
    partnerName: "Unija",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: viser,
    partnerName: "Viser",
    bgColor: "#fff",
    link: "#",
  },
  {
    partnerImage: youth,
    partnerName: "Youth",
    bgColor: "#1d1e19",
    link: "#",
  },
];
