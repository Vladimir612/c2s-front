import React, { useState } from "react";
import "./AgendaItem.scss";
import { MdLocationPin } from "react-icons/md";

import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

const AgendaItem = (props) => {
  const [visibleAgendaItem, setVisibleAgendaItem] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && !visibleAgendaItem) {
          setVisibleAgendaItem(true);
        }
        return;
      }}
      delayedCall
      partialVisibility
    >
      <motion.div
        className={props.reverse ? "agenda-item reverse" : "agenda-item"}
        animate={visibleAgendaItem && { y: "0%" }}
        initial={{
          y: "50%",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="left-content">
          <h3>{props.date}</h3>
          <p className="location">
            <MdLocationPin size={25} /> {props.location}
          </p>
        </div>
        <div className="right-content">
          <ul>
            {props.schedule.map((rasporedEl, index) => {
              return (
                <li key={index}>
                  <span>{rasporedEl.time}</span>
                  <span>{rasporedEl.event}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </VisibilitySensor>
  );
};

export default AgendaItem;
