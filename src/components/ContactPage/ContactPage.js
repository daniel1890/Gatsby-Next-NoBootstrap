import React from "react"
import Layout from "../layout"
import Form from "../SignupForm/Form"

import "./ContactPage.css"

function ContactPage() {
  return (
    <div>
      <Layout>
        <FormHeaderCard></FormHeaderCard>
        <Form></Form>
      </Layout>
    </div>
  )
}

const FormHeaderCard = () => {
  return (
    <div className="signupform-header-card-container">
      <div className="signupform-header-card">
        <h2 style={{ textAlign: "center" }}>
          Vragen? Neem contact met ons op.
        </h2>
        <p>
          Heb je vragen of wil je iets weten dat niet op onze website te vinden
          is? Neem dan gerust contact met ons op. Je kunt ons bereiken via
          onderstaand contactformulier of telefonisch contact opnemen. Wij
          proberen je vraag zo snel mogelijk te beantwoorden.
        </p>
      </div>
    </div>
  )
}

export default ContactPage
