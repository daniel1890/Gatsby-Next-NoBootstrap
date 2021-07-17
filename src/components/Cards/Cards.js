import React from "react"
import "./Cards.css"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button } from "../Button/Button"
import { graphql } from "gatsby"

function Cards({ imageSrc, cardTitle, cardDesc, btnDesc, cardsInARow }) {
  return (
    <div className="cards__section">
      <div className={cardsInARow}>
        <div className="singlecard__container">
          <div className="singlecard__info">
            <div className="cardimage__wrapper">
              <GatsbyImage
                image={imageSrc}
                className="card__image"
              ></GatsbyImage>
            </div>
            <h3>{cardTitle}</h3>
            <p>{cardDesc}</p>
            <div className="btn__holder">
              <Button
                className="card__btn"
                buttonSize="btn--medium"
                buttonColor="primary"
              >
                {btnDesc}
              </Button>
            </div>
          </div>
        </div>

        <div className="singlecard__container">
          <div className="singlecard__info">
            <div className="cardimage__wrapper">
              <StaticImage
                src="../../images/-amir,behi.jpeg"
                className="card__image"
              ></StaticImage>
            </div>
            <h3>Voor Cliënten</h3>
            <p>
              Ben jij op zoek naar een veilige en rustige woonomgeving die
              kleinschalig is, waar contact en betrokkenheid centraal staan? Dan
              is NEXT jouw volgende stap!
            </p>
            <Button
              className="card__btn"
              buttonSize="btn--medium"
              buttonColor="primary"
            >
              Meer Informatie
            </Button>
          </div>
        </div>

        <div className="singlecard__container">
          <div className="singlecard__info">
            <div className="cardimage__wrapper">
              <StaticImage
                src="../../images/-amir,behi.jpeg"
                className="card__image"
              ></StaticImage>
            </div>
            <h3>Voor Cliënten</h3>
            <p>
              Ben jij op zoek naar een veilige en rustige woonomgeving die
              kleinschalig is, waar contact en betrokkenheid centraal staan? Dan
              is NEXT jouw volgende stap!
            </p>
            <Button
              className="card__btn"
              buttonSize="btn--medium"
              buttonColor="primary"
            >
              Meer Informatie
            </Button>
          </div>
        </div>

        <div className="singlecard__container">
          <div className="singlecard__info">
            <div className="cardimage__wrapper">
              <StaticImage
                src="../../images/-amir,behi.jpeg"
                className="card__image"
              ></StaticImage>
            </div>
            <h3>Voor Cliënten</h3>
            <p>
              Ben jij op zoek naar een veilige en rustige woonomgeving die
              kleinschalig is, waar contact en betrokkenheid centraal staan? Dan
              is NEXT jouw volgende stap!
            </p>
            <Button
              className="card__btn"
              buttonSize="btn--medium"
              buttonColor="primary"
            >
              Meer Informatie
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
