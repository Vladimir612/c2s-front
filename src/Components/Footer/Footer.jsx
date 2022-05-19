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
import { Link } from "react-router-dom";

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
        className="btn sivo"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        onClick={() => scrollFunc(props.pageStartRef)}
      >
        idi na vrh
        <BsArrowUpShort size={25} color="#14191b" />
      </motion.button>
      <div className="contact-section">
        <Link to="/faq/kontakt">
          <motion.button
            className="btn transparent"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            kontakt
          </motion.button>
        </Link>
        <a
          href="https://www.instagram.com/fonis_fon/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram size={36} />
        </a>
        <a
          href="https://www.facebook.com/fonis.rs/"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook size={36} />
        </a>
        <a
          href="https://www.linkedin.com/company/fonis"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={36} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
