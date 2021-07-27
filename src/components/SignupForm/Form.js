import React, { useState } from "react"
import FormSignup from "./FormSignup"
import FormSucces from "./FormSucces"
import FormLeft from "./FormLeft"
import "./Form.css"

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }

  return (
    <>
      <div className="signupform-container">
        <div className="signupform-content-left">
          <FormLeft></FormLeft>
        </div>

        {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSucces />}
      </div>
    </>
  )
}

export default Form
