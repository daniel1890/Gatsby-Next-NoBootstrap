import React from "react"
import Astronaut from "../../images/img-2.svg"

const FormSucces = () => {
  return (
    <div className="signupform-content-right">
      <p className="signupform-succes-text">We hebben uw bericht ontvangen!</p>
      <img src={Astronaut} alt="succes" className="signupform-img-2"></img>
    </div>
  )
}

export default FormSucces
