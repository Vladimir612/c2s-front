import React, { useRef, useEffect } from "react";
import "./OurPartners.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Employee from "./Employee";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { scrollFunc } from "../../Components/Footer/Footer";
import LazyLoad from "react-lazyload";

const PartnerVideo = (props) => {
  const pageStartRef = useRef();

  useEffect(() => {
    scrollFunc(pageStartRef);
  }, []);

  const handleMoveEmployees = (forward) => {
    if (forward) {
      if (props.visibleEmployee === props.employee.length - 1) {
        props.setVisibleEmployee(0);
      } else {
        props.setVisibleEmployee(props.visibleEmployee + 1);
      }
    } else {
      if (props.visibleEmployee === 0) {
        props.setVisibleEmployee(props.employee.length - 1);
      } else {
        props.setVisibleEmployee(props.visibleEmployee - 1);
      }
    }
  };

  return (
    <>
      <div className="ref-start" ref={pageStartRef}></div>
      <div className="partners-container">
        <div className="video-wrapper">
          <LazyLoad>
            <video autoPlay loop muted key={props.video} poster={props.poster}>
              <source src={props.video} type="video/mp4" />
            </video>
          </LazyLoad>
        </div>
        <div className="left-arrow">
          <Link to={props.prevLink} onClick={() => props.setVisibleEmployee(0)}>
            <FiChevronLeft size={40} color="#b4afb3" />
          </Link>
        </div>
        <div className="right-arrow">
          <Link to={props.nextLink} onClick={() => props.setVisibleEmployee(0)}>
            <FiChevronRight size={40} color="#b4afb3" />
          </Link>
        </div>

        <div className="content">
          <div className="about-company">
            <h2>{props.partnerName}</h2>
            <p>{props.aboutPartner}</p>
          </div>
          <div className="employee-slider">
            {props.employee.map(
              (radnik, index) =>
                props.visibleEmployee === index && (
                  <Employee
                    key={index}
                    employeeImg={radnik.photo}
                    employeeName={radnik.name}
                    employeeHasTold={radnik.employeeHasTold}
                  />
                )
            )}
            <div className="employee-nav">
              <div className="employee-left">
                <FiChevronLeft
                  color="#fff"
                  size={25}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleMoveEmployees(false)}
                />
              </div>
              <div className="employee-right">
                <FiChevronRight
                  color="#fff"
                  size={25}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleMoveEmployees(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer pageStartRef={pageStartRef} />
    </>
  );
};

export default PartnerVideo;
