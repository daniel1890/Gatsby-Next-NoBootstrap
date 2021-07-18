import React from "react"
import "./TwoCards.css"
import { Button } from "../../Button/Button"

function TwoCards() {
  return (
    <div className="twocard__container">
      <div className="twocard__card">
        <div className="twocard__cardinfo">
          <h3>Over Next Arnhem</h3>
          <p>
            Next is er voor iederen die hulp, advies of informatie nodig heeft.
          </p>
          <div className="btn__wrapper">
            <Button>Hoe kunnen wij jou helpen?</Button>
          </div>
        </div>
      </div>
      <div className="twocard__card">
        <div className="twocard__cardinfo" style={{ textAlign: "center" }}>
          <p>
            "Next werkt op basis van actuele wetenschappelijke kennis en
            maatschappelijke inzichten om in samenwerking met partners te komen
            tot een integraal zorg aanbod waarin klinisch, maatschappelijk en
            persoonlijk herstel op elkaar zijn afgestemd."{" "}
          </p>
          <br />
          <p className="bottom__text">
            David Rinsampessy, mede-oprichter Next Arnhem
          </p>
        </div>
      </div>
    </div>
  )
}

export default TwoCards
