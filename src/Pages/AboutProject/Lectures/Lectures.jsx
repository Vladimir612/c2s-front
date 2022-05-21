import React from "react";
import "./Lectures.scss";
import radioniceSlika from "../../../Assets/Images/radionice.jpg";
import LectureCard from "./LectureCard";
import { LazyLoadImage } from "react-lazy-load-image-component";

import RaiffeisenCustomCard from "../../../Components/RaiffeisenCustomCard/RaiffeisenCustomCard";
import { lecturesArr, lectureTextIntro } from "./lecturesData";

const Lectures = () => {
  return (
    <div className="lectures-container">
      <div className="about-project-intro">
        <div className="photo">
          <LazyLoadImage effect="blur" src={radioniceSlika} alt="Radionice" />
        </div>
        <div className="text">
          <h2>RADIONICE</h2>
          <p>{lectureTextIntro}</p>
        </div>
      </div>
      {lecturesArr.map((lecture, index) => (
        <LectureCard lecture={lecture} key={index} />
      ))}
      <RaiffeisenCustomCard /> {/* not my fault*/}
    </div>
  );
};

export default Lectures;
