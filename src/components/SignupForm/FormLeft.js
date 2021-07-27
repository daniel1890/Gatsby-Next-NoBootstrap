import React from "react"
import LeafletMap from "../LeafletMap/LeafletMap"

const FormLeft = () => {
  return (
    <div>
      <div className="signupform-contact-container">
        <h1>Contactgegevens</h1>
        <div className="signupform-contact-content">
          <ul>
            <li>NEXT Arnhem</li>
            <li>Rosendaalsestraat 414</li>
            <li>6824 CS Arnhem</li>
            <li>T: 06 3635 3066</li>
            <li>E: info@nextarnhem.nl</li>
          </ul>
        </div>

        <h1>Hoofdlocatie</h1>
        <div className="signupform-contact-content">
          <LeafletMap className="leafletmap-element"></LeafletMap>
        </div>
      </div>
    </div>
  )
}

export default FormLeft
