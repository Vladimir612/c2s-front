import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/fonislogo_beli.svg";
import "./Nav.scss";
import { motion } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [aboutProjectActive, setAboutProjectActive] = useState(false);
  const [ourPartnersActive, setOurPartnersActive] = useState(false);

  return (
    <>
      <div className="bg-container"></div>
      <nav>
        <a href="https://fonis.rs/" target="_blank" rel="noreferrer">
          <div className="logo-wrapper">
            <img src={logo} alt="Fonis Logo" />
          </div>
        </a>
        <div
          className="hamburger-menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setShouldAnimate(true);
          }}
        >
          <motion.div
            className="line line-1"
            animate={
              shouldAnimate && {
                y: menuOpen
                  ? ["0rem", "0.4rem", "0.4rem"]
                  : ["0.4rem", "0.4rem", "0rem"],
                rotate: menuOpen ? [0, 0, 45] : [45, 0, 0],
              }
            }
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="line line-2"
            animate={
              shouldAnimate && {
                opacity: menuOpen ? [1, 0, 0] : [0, 0, 1],
              }
            }
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="line line-3"
            animate={
              shouldAnimate && {
                y: menuOpen
                  ? ["0rem", "-0.4rem", "-0.4rem"]
                  : ["-0.4rem", "-0.4rem", "0rem"],
                rotate: menuOpen ? [0, 0, -45] : [-45, 0, 0],
              }
            }
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
        <div className="links-wrapper">
          <ul>
            <Link
              to="/"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <li datacontent={"Početna"}>Početna</li>
            </Link>
            <li
              onClick={() => {
                setOurPartnersActive(false);
                setAboutProjectActive(!aboutProjectActive);
              }}
              datacontent={"O projektu"}
              className={aboutProjectActive ? "active" : ""}
            >
              <span>O projektu</span>
              <FaCaretDown color={aboutProjectActive ? "#fff" : "#ffffffb3"} />
              <motion.ul
                className="sub-links"
                animate={{ height: aboutProjectActive ? "9.5rem" : 0 }}
                initial={{ height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/o-projektu/radionice">
                  <li>Radionice</li>
                </Link>
                <Link to="/o-projektu/panel">
                  <li>Panel diskusija</li>
                </Link>
                <Link to="/o-projektu/speed-dating">
                  <li>Speed dating</li>
                </Link>
                <Link to="/o-projektu/tech-challenge">
                  <li>Tech Challenge</li>
                </Link>
              </motion.ul>
            </li>

            <Link
              to="/agenda"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <li datacontent={"Agenda"}>Agenda</li>
            </Link>
            <li
              onClick={() => {
                setAboutProjectActive(false);
                setOurPartnersActive(!ourPartnersActive);
              }}
              datacontent={"Naši partneri"}
              className={ourPartnersActive ? "active" : ""}
            >
              <span>Naši partneri</span>
              <FaCaretDown color={ourPartnersActive ? "#fff" : "#ffffffb3"} />
              <motion.ul
                className="sub-links"
                animate={{ height: ourPartnersActive ? "18.5rem" : 0 }}
                initial={{ height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/nasi-partneri/adacta">
                  <li>Adacta</li>
                </Link>
                <Link to="/nasi-partneri/eyesee">
                  <li>EyeSee</li>
                </Link>
                <Link to="/nasi-partneri/prime-software">
                  <li>Prime software</li>
                </Link>
                <Link to="/nasi-partneri/semos-education">
                  <li>Semos Education</li>
                </Link>
                <Link to="/nasi-partneri/raiffeisen">
                  <li>Raiffeisen banka</li>
                </Link>
                <Link to="/nasi-partneri/a1">
                  <li>A1</li>
                </Link>
                <Link to="/godisnji-naturalni-medijski">
                  <li>Godišnji i robni partneri</li>
                </Link>
              </motion.ul>
            </li>
            <Link
              to="/o-nama"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <li datacontent={"O nama"}>O nama</li>
            </Link>
            <Link
              to="/faq"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <li datacontent={"FAQ"}>FAQ</li>
            </Link>
          </ul>
        </div>
        <div className="right">
          <Link
            to="/generator"
            onClick={() => {
              setMenuOpen(false);
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <motion.button
              className="btn-application"
              style={{ marginRight: "1rem" }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              CV generator
            </motion.button>
          </Link>

          {/* <Link
            to="/prijava"
            onClick={() => {
              setMenuOpen(false);
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <motion.button
              className="btn-application"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              Prijavi se
            </motion.button>
          </Link> */}
        </div>
      </nav>
      <motion.div
        className="menu"
        animate={{ x: menuOpen ? 0 : "100%" }}
        initial={{ x: "100%" }}
        transition={{ duration: 0.5 }}
      >
        <ul>
          <Link
            to="/"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <li datacontent={"Početna"}>Početna</li>
          </Link>
          <li
            onClick={() => {
              setOurPartnersActive(false);
              setAboutProjectActive(!aboutProjectActive);
            }}
            datacontent={"O projektu"}
            className={
              aboutProjectActive ? "active nema-padding" : "nema-padding"
            }
          >
            <span>O projektu</span>
            <FaCaretDown color={aboutProjectActive ? "#fff" : "#ffffffb3"} />

            <motion.ul
              className="sub-links"
              animate={{ height: aboutProjectActive ? "8.5rem" : 0 }}
              initial={{ height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/o-projektu/radionice">
                <li>Radionice</li>
              </Link>
              <Link to="/o-projektu/panel">
                <li>Panel diskusija</li>
              </Link>
              <Link to="/o-projektu/speed-dating">
                <li>Speed dating</li>
              </Link>
              <Link to="/o-projektu/tech-challenge">
                <li>Tech Challenge</li>
              </Link>
            </motion.ul>
          </li>
          <Link
            to="/agenda"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <li datacontent={"Agenda"}>Agenda</li>
          </Link>
          <li
            onClick={() => {
              setAboutProjectActive(false);
              setOurPartnersActive(!ourPartnersActive);
            }}
            datacontent={"Naši partneri"}
            className={
              ourPartnersActive ? "active nema-padding" : "nema-padding"
            }
          >
            <span>Naši partneri</span>
            <FaCaretDown color={ourPartnersActive ? "#fff" : "#ffffffb3"} />
            <motion.ul
              className="sub-links"
              animate={{ height: ourPartnersActive ? "15.5rem" : 0 }}
              initial={{ height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/nasi-partneri/adacta"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <li>Adacta</li>
              </Link>
              <Link
                to="/nasi-partneri/eyesee"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <li>EyeSee</li>
              </Link>
              <Link
                to="/nasi-partneri/prime-software"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <li>Prime software</li>
              </Link>
              <Link
                to="/nasi-partneri/semos-education"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <li>Semos Education</li>
              </Link>
              <Link
                to="/nasi-partneri/raiffeisen"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <li>Raiffeisen banka</li>
              </Link>
              <Link
                to="/nasi-partneri/a1"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <li>A1</li>
              </Link>
              <Link
                to="/godisnji-naturalni-medijski"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <li>Godišnji i robni partneri</li> {/* izmeniti */}
              </Link>
            </motion.ul>
          </li>
          <Link
            to="/o-nama"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <li datacontent={"O nama"}>O nama</li>
          </Link>
          <Link
            to="/faq"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <li datacontent={"FAQ"}>FAQ</li>
          </Link>
          <Link
            to="/generator"
            onClick={() => {
              setMenuOpen(false);
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <motion.button
              className="btn-application"
              style={{ marginRight: "1rem" }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              CV generator
            </motion.button>
          </Link>
          {/* <Link
            to="/prijava"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <motion.button
              className="btn-application"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              Prijavi se
            </motion.button>
          </Link> */}
        </ul>
      </motion.div>
    </>
  );
};

export default Nav;
