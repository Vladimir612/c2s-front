import React from "react";
import c2sSvetli from "../../Assets/Images/c2slogo_svetli.svg";
import "./Footer.scss";
import { motion } from "framer-motion";
import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsArrowUpShort,
} from "react-icons/bs";

export const scrollFunc = (sectionName) => {
  sectionName.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "end",
  });
};

const Footer = (props) => {
  return (
    <footer>
      <div className="img-wrapper">
        <img src={c2sSvetli} alt="c2s logo" />
      </div>
      <motion.button
        className="dugme sivo"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        onClick={() => scrollFunc(props.pocetakPocetna)}
      >
        idi na vrh
        <BsArrowUpShort size={25} color="#14191b" />
      </motion.button>
      <div className="kontakt-section">
        <motion.button
          className="dugme transparentno"
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          kontakt
        </motion.button>
        <BsInstagram size={30} color="#fff" />
        <BsFacebook size={30} color="#fff" />
        <BsLinkedin size={30} color="#fff" />
      </div>
    </footer>
  );
};

export default Footer;
