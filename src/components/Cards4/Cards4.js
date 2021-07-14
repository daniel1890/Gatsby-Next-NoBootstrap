import React from "react"
import "./Cards4.css"
import { Link } from "gatsby"
import { Button } from "../Button/Button"
import { StaticImage } from "gatsby-plugin-image"

function Cards4() {
  return (
    <div className="pricing__section">
      <div className="pricing__wrapper">
        <div className="pricing__container">
          <Link to="/sign-up" className="pricing__container-card4">
            <div className="pricing__container-cardInfo">
              <div className="icon">
                <StaticImage
                  className="card__image"
                  src="../../images/-david,rinsampessy.jpeg"
                  alt="david"
                ></StaticImage>
              </div>
              <h3>David Rinsampessy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                saepe.
              </p>
              <Button
                className="btn"
                buttonSize="btn--medium"
                buttonColor="primary"
              >
                Meer Informatie
              </Button>
            </div>
          </Link>

          <Link to="/sign-up" className="pricing__container-card4 test">
            <div className="pricing__container-cardInfo">
              <div className="icon">
                <StaticImage
                  className="card__image"
                  src="../../images/-jup,wassink.jpeg"
                  alt="wandelende mensen"
                ></StaticImage>
              </div>
              <h3>Jup Wassink</h3>
              <p>
                Et nesciunt adipisci voluptatem eos blanditiis eum odio
                necessitatibus qui.
              </p>
              <Button
                className="btn"
                buttonSize="btn--medium"
                buttonColor="primary"
              >
                Meer Informatie
              </Button>
            </div>
          </Link>

          <Link to="/sign-up" className="pricing__container-card4">
            <div className="pricing__container-cardInfo">
              <div className="icon">
                <StaticImage
                  className="card__image"
                  src="../../images/-rick,wubs.jpeg"
                  alt="david en jip bespreken iets"
                ></StaticImage>
              </div>
              <h3>Rick Wubs</h3>
              <p>
                Architecto modi perspiciatis deserunt ut quas unde ad illo
                assumenda voluptas?
              </p>
              <Button
                className="btn"
                buttonSize="btn--medium"
                buttonColor="primary"
              >
                Meer Informatie
              </Button>
            </div>
          </Link>

          <Link to="/sign-up" className="pricing__container-card4">
            <div className="pricing__container-cardInfo">
              <div className="icon">
                <StaticImage
                  className="card__image"
                  src="../../images/-amir,behi.jpeg"
                  alt="david en jip bespreken iets"
                ></StaticImage>
              </div>
              <h3>Amir Behi</h3>
              <p>
                Molestias culpa quae eius nisi iste libero, sapiente officiis,
                suscipit illum?
              </p>
              <Button
                className="btn"
                buttonSize="btn--medium"
                buttonColor="primary"
              >
                Meer Informatie
              </Button>
            </div>
          </Link>
        </div>
      </div>
      <div className="div btn__allewerknemers">
        <Button className="btn" buttonSize="btn--large" buttonColor="primary">
          Alle Werknemers
        </Button>
      </div>
    </div>
  )
}
export default Cards4
