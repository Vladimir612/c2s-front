import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/fonislogo_beli.svg";
import "./Nav.scss";
import { motion } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [oProjektuAktiv, setOProjektuAktiv] = useState(false);
  const [nasiPartneriAktiv, setNasiPartneriAktiv] = useState(false);

  return (
    <>
      <div className="bg-container"></div>
      <nav>
        <div className="logo-wrapper">
          <img src={logo} alt="Fonis Logo" />
        </div>
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
                setNasiPartneriAktiv(false);
                setOProjektuAktiv(!oProjektuAktiv);
              }}
              datacontent={"O Projektu"}
              className={oProjektuAktiv ? "active" : ""}
            >
              <span>O Projektu</span>
              <FaCaretDown color={oProjektuAktiv ? "#fff" : "#ffffffb3"} />
              <motion.ul
                className="sub-linkovi"
                animate={{ height: oProjektuAktiv ? "8.5rem" : 0 }}
                initial={{ height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <li>Radionice</li>
                <li>Panel</li>
                <li>Speed dating</li>
                <li>Tech challenge</li>
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
                setOProjektuAktiv(false);
                setNasiPartneriAktiv(!nasiPartneriAktiv);
              }}
              datacontent={"Naši partneri"}
              className={nasiPartneriAktiv ? "active" : ""}
            >
              <span>Naši partneri</span>
              <FaCaretDown color={nasiPartneriAktiv ? "#fff" : "#ffffffb3"} />
              <motion.ul
                className="sub-linkovi"
                animate={{ height: nasiPartneriAktiv ? "11rem" : 0 }}
                initial={{ height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/nasi-partneri/raiffeisen">
                  <li>Raiffeisen</li>
                </Link>
                <Link to="/nasi-partneri/addacta">
                  <li>Addacta</li>
                </Link>
                <Link to="/nasi-partneri/aisi">
                  <li>Aisi</li>
                </Link>
                <Link to="/nasi-partneri/prime-software">
                  <li>Prime software</li>
                </Link>
                <Link to="/nasi-partneri/samos-education">
                  <li>Samos education</li>
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
        <div className="desno">
          <motion.button
            className="dugme-prijavi"
            style={{ marginRight: "1rem" }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
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
              CV Generator
            </Link>
          </motion.button>

          <motion.button
            className="dugme-prijavi"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <Link
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
              Prijavi se
            </Link>
          </motion.button>
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
              setNasiPartneriAktiv(false);
              setOProjektuAktiv(!oProjektuAktiv);
            }}
            datacontent={"O projektu"}
            className={oProjektuAktiv ? "active nema-padding" : "nema-padding"}
          >
            <span>O projektu</span>
            <FaCaretDown color={oProjektuAktiv ? "#fff" : "#ffffffb3"} />

            <motion.ul
              className="sub-linkovi"
              animate={{ height: oProjektuAktiv ? "7.5rem" : 0 }}
              initial={{ height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li>Radionice</li>
              <li>Panel</li>
              <li>Speed dating</li>
              <li>Tech challenge</li>
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
              setOProjektuAktiv(false);
              setNasiPartneriAktiv(!nasiPartneriAktiv);
            }}
            datacontent={"Naši partneri"}
            className={
              nasiPartneriAktiv ? "active nema-padding" : "nema-padding"
            }
          >
            <span>Naši partneri</span>
            <FaCaretDown color={nasiPartneriAktiv ? "#fff" : "#ffffffb3"} />

            <motion.ul
              className="sub-linkovi"
              animate={{ height: nasiPartneriAktiv ? "9.5rem" : 0 }}
              initial={{ height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/nasi-partneri/raiffeisen">
                <li>Raiffeisen</li>
              </Link>
              <Link to="/nasi-partneri/addacta">
                <li>Addacta</li>
              </Link>
              <Link to="/nasi-partneri/aisi">
                <li>Aisi</li>
              </Link>
              <Link to="/nasi-partneri/prime-software">
                <li>Prime software</li>
              </Link>
              <Link to="/nasi-partneri/samos-education">
                <li>Samos education</li>
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
          <motion.button
            className="dugme-prijavi"
            style={{ marginRight: "1rem" }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
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
              CV Generator
            </Link>
          </motion.button>
          <motion.button
            className="dugme-prijavi"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <Link
              to="/prijava"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Prijavi se
            </Link>
          </motion.button>
        </ul>
      </motion.div>
    </>
  );
};

export default Nav;
