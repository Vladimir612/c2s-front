import React from "react";
import "./Faq.scss";
import FaqQuestion from "./FaqQuestion";
import Nav from "./../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import koverta from "../../Assets/Images/koverta.svg";

import { motion } from "framer-motion";

const Faq = () => {
  return (
    <>
      <Nav />
      <div className="faq-container">
        <h2 className="naslov">FAQ</h2>
        <div class="questions">
          <ul>
            <FaqQuestion
              question="Koliko članova tim može imati?"
              answer="Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi. Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi. Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi."
            />
            <FaqQuestion
              question="Koliko članova tim može imati?"
              answer="Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi. Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi. Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi."
            />
            <FaqQuestion
              question="Koliko članova tim može imati?"
              answer="Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi. Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi. Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi."
            />
            <FaqQuestion
              question="Koliko članova tim može imati?"
              answer="Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi. Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi. Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi."
            />
            <FaqQuestion
              question="Koliko članova tim može imati?"
              answer="Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi. Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi. Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi."
            />
          </ul>
        </div>
        <h3 class="naslov">Postavite nam pitanje</h3>
        <div class="postavite-pitanje">
          <div class="img-wrapper">
            <img src={koverta} alt="Koverta" />
          </div>
          <div class="mejl">
            <div class="ime">
              <input
                class="unos unos1 polja"
                type="text"
                name="text1"
                placeholder="Mejl"
              />
            </div>
            <div class="poruka">
              <textarea
                class="unos unos2 polja"
                name="poruka1"
                rows="6"
                cols="45"
                wrap="virtual"
                placeholder="Poruka"
              ></textarea>
            </div>
            <motion.button
              className="dugme-prijavi"
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              Pošalji
            </motion.button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
