import React from "react";
import "./ONama.scss";
import nekiLjudi from "../../Assets/Images/ljudi.png";
import Footer from "../../Components/Footer/Footer";
import Nav from "./../../Components/Nav/Nav";

const ONama = () => {
  return (
    <>
    <Nav />
    <div className="o-nama-container">
      {/* <div className="logo-c2s">
        <div className="levi-trapez"></div>
        <div className="srednji-trapez"></div>
        <div className="desni-trapez"></div>
        <div className="lopte-nav">
          <div className="lop lopta-1 active">1</div>
          <div className="lop lopta-2">2</div>
          <div className="lop lopta-3">3</div>
          <div className="lop lopta-4">4</div>
          <div className="lop lopta-5">5</div>
          <div className="lop lopta-6">6</div>
        </div>
        <div className="linije-nav">
          <div className="lin linija-1"></div>
          <div className="lin linija-2"></div>
          <div className="lin linija-3"></div>
          <div className="lin linija-4"></div>
          <div className="lin linija-5"></div>
        </div>
      </div> */}
      <div class="o-nama-flex">
            <div className="left-content">
                <h2>O FONISU</h2>
                <p>FONIS predstavlja ujedinjujuću tačku studenata informatike i mesto za generisanje novih i širenje postojećih znanja iz oblasti informacionih tehnologija, a takođe i mesto na kom se stvaraju nova poznanstva koja često prerastaju u neraskidiva prijateljstva.
                    Interne radionice našim članovima daju jedinstvenu priliku da svoja postojeća IT i menadžment znanja i veštine upotpune novim i primene ih pre svega na internim hakatonima, ali i kroz realizaciju projekata poput FON Hakatona, Hakatona za srednjoškolce i Studenti studentima koje dugi niz godina organizujemo.</p>
            </div>
            <div className="right-content">
              <div class="img-wrapper">
                  <img src={nekiLjudi} alt="fonis-slika" />
              </div>
            </div>
        </div>
        <div class="o-nama-flex">
            <div className="left-content">
                <h2>O FONISU</h2>
                <p>FONIS predstavlja ujedinjujuću tačku studenata informatike i mesto za generisanje novih i širenje postojećih znanja iz oblasti informacionih tehnologija, a takođe i mesto na kom se stvaraju nova poznanstva koja često prerastaju u neraskidiva prijateljstva.
                    Interne radionice našim članovima daju jedinstvenu priliku da svoja postojeća IT i menadžment znanja i veštine upotpune novim i primene ih pre svega na internim hakatonima, ali i kroz realizaciju projekata poput FON Hakatona, Hakatona za srednjoškolce i Studenti studentima koje dugi niz godina organizujemo.</p>
            </div>
            <div className="right-content">
              <div class="img-wrapper">
                  <img src={nekiLjudi} alt="fonis-slika" />
              </div>
            </div>
        </div>
        {/* <div class="o-nama-timovi">
            <h2>ORGANIZACIONI TIM PROJEKTA</h2>
            <div class="o-nama-carousel">
                <div class="o-nama-navigation">

                </div>
                <div class="o-nama-content">
                    <div class="o-nama-content-text">
                        <h2>CORE TIM</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci incidunt, tempora iure veniam, sint, officiis nostrum distinctio at dolorem facere ab reiciendis delectus id odit error eveniet culpa hic beatae!</p>
                        <div class="o-nama-coordinator">
                            <div class="o-nama-coordinator-img">
                                <img src="" alt="">
                            </div>
                            <div class="o-nama-coordinator-text">

                            </div>
                        </div>
                    </div>
                    <div class="o-nama-content-img">
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
    <Footer />
    </>
  );
};

export default ONama;
