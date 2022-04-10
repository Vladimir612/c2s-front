import React from "react";
import "./AgendaItem.scss";

import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { useState } from "react";

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
        className={props.obrnuto ? "agenda-item obrnuto" : "agenda-item"}
        animate={visibleAgendaItem && { y: 0, opacity: 1 }}
        initial={{
          y: 80,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
      >
        <div className="left-content">
          <h3>{props.datum}</h3>
          <p className="mesto">ikonica {props.mesto}</p>
        </div>
        <div className="right-content">
          <ul>
            {props.raspored.map((rasporedEl, index) => {
              return (
                <li key={index}>
                  <span>{rasporedEl.vreme}</span>
                  <span>{rasporedEl.desavanje}</span>
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
