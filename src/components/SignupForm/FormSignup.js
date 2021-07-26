import React from "react"
import { Button } from "../Button/Button"
import useForm from "./useForm"
import validate from "./validateInfo"
import "./Form.css"

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  )

  return (
    <div className="signupform-content-right">
      <form className="signupform" onSubmit={handleSubmit}>
        <h1>Contactformulier</h1>
        <div className="signupform-inputs">
          <label htmlFor="name" className="signupform-label">
            Uw Naam
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="signupform-input"
            placeholder="Schrijf hier uw naam"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className="signupform-inputs">
          <label htmlFor="email" className="signupform-label">
            Uw Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="signupform-input"
            placeholder="Voorbeeld: gebruiker@email.com"
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <div className="signupform-inputs">
          <label htmlFor="subject" className="signupform-label">
            Onderwerp Bericht
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            className="signupform-input"
            placeholder="Voer hier het onderwerp van uw vraag in"
            value={values.subject}
            onChange={handleChange}
          />
          {errors.subject && <p>{errors.subject}</p>}
        </div>

        <div className="signupform-inputs" style={{ margin: "0 0 1rem 0" }}>
          <label htmlFor="message" className="signupform-label">
            Uw Bericht
          </label>
          <textarea
            id="message"
            type="text"
            name="message"
            className="signupform-input signupform-textarea"
            placeholder="Schrijf hier uw vraag"
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>
        <Button className="signupform-input-btn" as="input" type="submit">
          Verzenden
        </Button>
      </form>
    </div>
  )
}

export default FormSignup
