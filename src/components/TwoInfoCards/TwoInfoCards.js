import React from "react"
import { Button } from "../Button/Button"

import "./TwoInfoCards.css"

function TwoInfoCards(props) {
  return (
    <div className="twocard__container">
      {props.cards.map((card, index) => (
        <div
          key={index}
          className={
            props.lightShadow
              ? "twocard__card light__shadow light__card"
              : "twocard__card dark__shadow dark__card"
          }
        >
          <div
            className="twocard__cardinfo"
            style={{ minHeight: props.cardHeight }}
          >
            <h3 className={props.lightShadow ? "dark__text" : "dark__header"}>
              {card.header}
            </h3>
            {card.content.map((content, index) => (
              <p
                key={index}
                className={props.lightShadow ? "dark__text" : "light__text"}
              >
                {content}
              </p>
            ))}
            {card.bottomtext !== "" ? (
              <p className="bottom__text">{card.bottomtext}</p>
            ) : (
              card.btn !== ""("")
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
