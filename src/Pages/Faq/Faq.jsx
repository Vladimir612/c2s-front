import React from "react";
import "./Faq.scss";
import FaqQuestion from "./FaqQuestion";

const Faq = () => {
  return (
    <div className="faq-container">
      <p class="naslov naslov1">FAQ</p>
      <div class="questions">
        <ul>
          <FaqQuestion
            question="Koliko članova tim može imati?"
            answer="Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi."
          />
          <FaqQuestion
            question="Koliko članova tim može imati?"
            answer="Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi."
          />
          <FaqQuestion
            question="Koliko članova tim može imati?"
            answer="Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi."
          />
          <FaqQuestion
            question="Koliko članova tim može imati?"
            answer="Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi."
          />
          <FaqQuestion
            question="Koliko članova tim može imati?"
            answer="Tim treba da sadrži od 3 do 4 člana. Nije moguća individualna prijava, jer su za učesnike potrebni timovi."
          />
        </ul>
      </div>
      <div class="answers">
        <p class="naslov naslov2">Postavite nam pitanje</p>
        <div class="sve">
          <div class="slika1">
            <img class="slika-levo" src="images/mail-picture.png" alt="nema" />
          </div>
          <div class="mejl">
            <div class="ime">
              <input class="unos unos1 polja" type="text" name="text1" placeholder="Mejl" size="30" />
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
            <div class="oko-dugme">
              <button class="dugme ">Pošalji</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
