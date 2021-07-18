import React from "react"
import "./Cards.css"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button } from "../Button/Button"
import { graphql } from "gatsby"

function Cards(props) {
  console.log(props)

  return (
    <div className="cards__section">
      <div className={props[0].cardsInARow}>
        <div className="singlecard__container">
          <div className="singlecard__info">
            <div className="cardimage__wrapper">
              <img src={props[0].imageSrc} className="card__image"></img>
            </div>
            <h3>{props[0].cardTitle}</h3>
            <p>{props[0].cardDesc}</p>
            <div className="btn__holder">
              <Button
                className="card__btn"
                buttonSize="btn--medium"
                buttonColor="primary"
              >
                {props[0].btnDesc}
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
