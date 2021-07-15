import React from "react"
import "./Cards.css"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "../Button/Button"

function Cards() {
  return (
    <div className="cards__section">
      <div className="cards__wrapper">
        <div className="cards__container">
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
                kleinschalig is, waar contact en betrokkenheid centraal staan?
                Dan is NEXT jouw volgende stap!
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
                kleinschalig is, waar contact en betrokkenheid centraal staan?
                Dan is NEXT jouw volgende stap!
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
    </div>
  )
}

export default Cards
