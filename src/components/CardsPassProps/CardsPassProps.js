import React from "react"
import "./CardsPassProps.css"
import { Button } from "../Button/Button"
import { Link } from "gatsby"

const CardsPassProps = props => {
  // Deze code is nodig omdat de graphql query niet een zuivere array teruggeeft, hierdoor stop ik de waardes in een nieuwe array om hierover heen te loopen.
  const medewerkers = []

  for (var medewerker in props) {
    medewerkers.push(props[medewerker])
  }

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
