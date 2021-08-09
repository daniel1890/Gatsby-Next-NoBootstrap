import React from "react"
import Layout from "../layout"
import Form from "../SignupForm/Form"

import "./AanmeldPage.css"

function AanmeldPage() {
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
        <h2 style={{ textAlign: "center" }}>Aanmelden bij Next.</h2>
        <p style={{ textAlign: "center" }}>
          Wil je je aanmelden bij Next? Laat je gegevens achter en wij nemen zo
          spoedig mogelijk contact met je op.
        </p>
      </div>
    </div>
  )
}

export default AanmeldPage
