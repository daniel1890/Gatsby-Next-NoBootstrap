import React from "react"
import StaticImage from "gatsby-plugin-image"

const FormSucces = () => {
  return (
    <div className="signupform-content-right">
      <div className="signupform-succes">We hebben uw bericht ontvangen!</div>
      <img
        src="..\images\img-2.svg"
        alt="succes-image"
        className="signupform-img-2"
      ></img>
    </div>
  )
}

export default FormSucces
