import React from "react";
import "./Employee.scss";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Employee = (props) => {
  return (
    <motion.div
      className="employee"
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="employee-wrapper">
        <LazyLoadImage
          effect="blur"
          src={props.employeeImg}
          alt={props.employeeName}
          className="employee-img"
        />
        <h4 className="employee-name">{props.employeeName}</h4>
      </div>
      <p className="employee-has-told">{props.employeeHasTold}</p>
    </motion.div>
  );
};

export default Employee;
