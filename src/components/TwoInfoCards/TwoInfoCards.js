import { text } from "@fortawesome/fontawesome-svg-core"
import React from "react"
import { Button } from "../Button/Button"

import "./TwoInfoCards.css"

function TwoInfoCards(props) {
  return (
    <div className="twocard__container">
      {props.cards.map((card, index) => (
        <div
          className={
            props.lightShadow
              ? "twocard__card light__shadow"
              : "twocard__card dark__shadow"
          }
        >
          <div
            className="twocard__cardinfo"
            style={{ height: props.cardHeight }}
          >
            <h3>{card.header}</h3>
            {card.content.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
            {card.bottomtext !== "" ? (
              <p className="bottom__text">{card.bottomtext}</p>
            ) : (
              ""
            )}
            {card.btn !== "" ? (
              <div className="btn__wrapper ">
                <Button>{card.btn}</Button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TwoInfoCards
