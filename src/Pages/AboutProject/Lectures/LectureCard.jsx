import React, { useState } from "react";
import "./LectureCard.scss";
import { MdExpandMore } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

import balls2 from "../../../Assets/Images/krugovi-radionica.png";
import { Link } from "react-router-dom";

const LectureCard = (props) => {
  const [showMore, setShowMore] = useState(false);
  const [displayedLecture, setDisplayedLecture] = useState(false);

  const sameLecturers =
    props.lecture.lecturer.name === props.lecture.lecturer2.name;

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && !displayedLecture) {
          setDisplayedLecture(true);
        }
        return;
      }}
      delayedCall
      partialVisibility
    >
      <motion.div
        className="lecture-card"
        animate={displayedLecture && { y: 0, opacity: 1 }}
        initial={{
          y: 80,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
      >
        <div className="top">
          <div className="balls-photo">
            <img src={balls2} alt="Lopte" />
          </div>
          <div className="left">
            <h2>{props.lecture.heading}</h2>
            <p>{props.lecture.firstPar}</p>
            <motion.p
              animate={{
                height: showMore ? "auto" : "0rem",
                width: showMore ? "auto" : "0rem",
                opacity: showMore ? [0, 0, 1] : [1, 0, 0],
              }}
              initial={{ height: "0rem", width: "0rem", opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {props.lecture.secondPar}
              <br></br>
              {props.lecture.heading === "Uvod u 3D Game Development" && (
                <span style={{ color: "#cc203a" }}>
                  Napomena: Za ovu radionicu potrebno je poneti sopstveni
                  laptop.
                </span>
              )}
            </motion.p>
          </div>
          <motion.div className={showMore ? "right" : "right hidden"}>
            <motion.div
              className="lecturer"
              animate={{
                height: showMore ? "100%" : "0rem",
              }}
              initial={{ height: "0rem" }}
              transition={{ duration: 0.5 }}
            >
              <div className="photo-lecturer">
                <div className="img-wrapper">
                  <img
                    src={props.lecture.lecturer.photo}
                    alt={props.lecture.lecturer.name}
                  />
                </div>
              </div>
              <motion.div
                className="about-lecturer"
                animate={{
                  height: showMore ? "auto" : "0rem",
                  width: showMore ? "auto" : "0rem",
                  opacity: showMore ? [0, 0, 1] : [1, 0, 0],
                }}
                initial={{ height: "0rem", width: "0rem", opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="lecturer-name">{props.lecture.lecturer.name}</p>
                <p className="lecturer-indicator">PREDAVAČ</p>
                <p className="lecturer-more-info">
                  {props.lecture.lecturer.moreInfo}
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className={sameLecturers ? "lecturer duplicate" : "lecturer"}
            >
              <div className="photo-lecturer">
                <div className="img-wrapper">
                  <img
                    src={props.lecture.lecturer2.photo}
                    alt={props.lecture.lecturer2.name}
                  />
                </div>
              </div>
              <motion.div
                className="about-lecturer"
                animate={{
                  height: showMore ? "auto" : "0rem",
                  width: showMore ? "auto" : "0rem",
                  opacity: showMore ? [0, 0, 1] : [1, 0, 0],
                }}
                initial={{ height: "0rem", width: "0rem", opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="lecturer-name">{props.lecture.lecturer2.name}</p>
                <p className="lecturer-indicator">PREDAVAČ</p>
                <p className="lecturer-more-info">
                  {props.lecture.lecturer2.moreInfo}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="bottom">
          {showMore && (
            <div className="balls-photo">
              <img src={balls2} alt="Lopte" />
            </div>
          )}
          <div className="show-hide" onClick={() => setShowMore(!showMore)}>
            {!showMore ? <p>Prikaži detaljnije</p> : <p>Sakrij detalje</p>}
            <motion.div
              className="arrow-wrapper"
              animate={{ rotate: showMore ? -180 : 0 }}
              initial={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MdExpandMore size={45} color="#14191b" />
            </motion.div>
          </div>
          <Link to={props.lecture.company.link}>
            <div className="find-about-company">
              <div className="img-wrapper">
                <img
                  src={props.lecture.company.photo}
                  alt={props.lecture.company.name}
                />
              </div>
              <p>Saznaj više o kompaniji</p>
              <BsArrowRight size={25} color="#14191b" />
            </div>
          </Link>
        </div>
      </motion.div>
    </VisibilitySensor>
  );
};

export default LectureCard;
