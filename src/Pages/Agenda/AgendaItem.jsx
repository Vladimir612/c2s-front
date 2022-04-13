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
        className={props.obrnuto ? "agenda-item obrnuto" : "agenda-item"}
        animate={visibleAgendaItem && { y: "0%" }}
        initial={{
          y: "50%",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="left-content">
          <h3>{props.datum}</h3>
          <p className="mesto">
            <MdLocationPin size={25} /> {props.mesto}
          </p>
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
