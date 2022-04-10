import React from 'react'
import "./AgendaItem.scss"

const AgendaItem = (props) => {
  return (
    <div className={props.obrnuto ? "agenda-item obrnuto": "agenda-item"}>
        <div className="left-content">
            <h3>{props.datum}</h3>
            <p className="mesto">ikonica {props.mesto}</p>
        </div>
        <div className="right-content">
            <ul>
            {
                props.raspored.map((rasporedEl, index)=> {
                    return <li key={index}>
                        <span>{rasporedEl.vreme}</span>
                        <span>{rasporedEl.desavanje}</span>
                    </li>
                })
            }
            </ul>
        </div>
    </div>
  )
}

export default AgendaItem