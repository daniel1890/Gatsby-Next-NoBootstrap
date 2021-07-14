import React from "react"
import "./Cards3.css"
import { Link } from "gatsby"
import { Button } from "../Button/Button"
import { StaticImage } from "gatsby-plugin-image"

function Cards3() {
  return (
    <div className="pricing__section">
      <div className="pricing__wrapper">
        <div className="pricing__container">
          <Link to="/sign-up" className="pricing__container-card">
            <div className="pricing__container-cardInfo">
              <div className="icon">
                <StaticImage
                  className="card__image"
                  src="../../images/hardlopen.jpeg"
                  alt="hardlopende mensen"
                ></StaticImage>
              </div>
              <h3>Voor Cliënten</h3>
              <p>
                Ben jij op zoek naar een veilige en rustige woonomgeving die
                kleinschalig is, waar contact en betrokkenheid centraal staan?
                Dan is NEXT jouw volgende stap!
              </p>
              <Button
                className="btn"
                buttonSize="btn--medium"
                buttonColor="primary"
              >
                Choose Plan
              </Button>
            </div>
          </Link>
          <Link to="/sign-up" className="pricing__container-card test">
            <div className="pricing__container-cardInfo">
              <div className="icon">
                <StaticImage
                  className="card__image"
                  src="../../images/wandelen.jpeg"
                  alt="wandelende mensen"
                ></StaticImage>
              </div>
              <h3>Voor Verwijzers</h3>
              <p>
                Next werkt op basis van wetenschappelijke kennis en
                maatschappelijke inzichten om te komen tot een integraal
                zorgaanbod. Neem contact op voor een oriënterend gesprek.
              </p>
              <Button
                className="btn"
                buttonSize="btn--medium"
                buttonColor="primary"
              >
                Choose Plan
              </Button>
            </div>
          </Link>
          <Link to="/sign-up" className="pricing__container-card">
            <div className="pricing__container-cardInfo">
              <div className="icon">
                <StaticImage
                  className="card__image"
                  src="../../images/davidjip.jpeg"
                  alt="david en jip bespreken iets"
                ></StaticImage>
              </div>
              <h3>Over Ons</h3>
              <p>
                Het contact met naasten van onze bewoners heeft voor ons een
                hoge prioriteit. Met onze collega's zijn wij 24 uur per dag
                bereikbaar. Neem contact met ons op als u vragen heeft.
              </p>
              <Button
                className="btn"
                buttonSize="btn--medium"
                buttonColor="primary"
              >
                Choose Plan
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Cards3
