import React from "react"
import "./CardsPassProps.css"
import { Button } from "../Button/Button"
import { Link } from "gatsby"

const CardsPassProps = props => {
  const medewerkers = [props[0], props[1], props[2], props[3]]
  console.log(medewerkers)

  return (
    <div className="cards__section">
      <div className="cards__container__4cards">
        {medewerkers.map((card, index) => (
          <div key={index} className="singlecard__container">
            <div className="singlecard__info">
              <div className="cardimage__wrapper">
                <img
                  src={
                    card.avatar.localFile.childImageSharp.gatsbyImageData.images
                      .fallback.src
                  }
                  className="card__image small__image"
                  alt={card.name}
                ></img>
              </div>
              <h3>{card.name}</h3>
              <p>{card.description}</p>
              <div className="btn__holder">
                <a href={card.btnLink}>
                  <Button
                    className="card__btn"
                    buttonSize="btn--medium"
                    buttonColor="primary"
                  >
                    Meer Informatie
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardsPassProps
