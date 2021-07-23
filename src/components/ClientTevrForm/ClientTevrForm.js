import React, { useState } from "react"
import RadioButtonGroup from "../RadioButtonGroup/RadioButtonGroup"
import RBGTest from "../RBGTest/RBGTest"
import "./ClientTevrForm.css"

function ClientTevrForm() {
  return (
    <div>
      <div className="radiogroup-form-container">
        <FormHeaderCard></FormHeaderCard>
        <RadioButtonGroup></RadioButtonGroup>
        <RBGTest></RBGTest>
      </div>
    </div>
  )
}

const FormHeaderCard = () => {
  return (
    <div className="form-header-card-container">
      <div className="form-header-card">
        <h2>Cliënttevredenheids-formulier</h2>
        <p>
          Hieronder volgt een vragenlijst. Aan jou de vraag of je deze wilt
          invullen. Dit is volledig anoniem.
        </p>
      </div>
    </div>
  )
}

export default ClientTevrForm
