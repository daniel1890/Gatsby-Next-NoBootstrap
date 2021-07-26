import React, { useState } from "react"
import FormSignup from "./FormSignup"
import FormSucces from "./FormSucces"
import "./Form.css"

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }

  return (
    <>
      <div className="signupform-container">
        <span className="close-btn">x</span>
        <div className="signupform-content-left"></div>

        {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSucces />}
      </div>
    </>
  )
}

export default Form
