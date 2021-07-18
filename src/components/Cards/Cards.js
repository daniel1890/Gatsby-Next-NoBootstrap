import React from "react"
import "./Cards.css"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button } from "../Button/Button"
import { graphql } from "gatsby"

function Cards(props) {
  console.log(props)

  return (
    <div className="cards__section">
      <div className={props.cardsInARow}>
        {props.parts.map(card => (
          <div className="singlecard__container">
            <div className="singlecard__info">
              <div className="cardimage__wrapper">
                <img
                  src={card.imageSrc}
                  className="card__image"
                  alt={card.cardTitle}
                ></img>
              </div>
              <h3>{card.cardTitle}</h3>
              <p>{card.cardDesc}</p>
              <div className="btn__holder">
                <Button
                  className="card__btn"
                  buttonSize="btn--medium"
                  buttonColor="primary"
                >
                  {card.btnDesc}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
