import React, { useState } from "react"
import RadioButtonGroupCard from "../RadioButtonGroupCard/RadioButtonGroupCard"
import { Button } from "../Button/Button"
import "./ClientTevrForm.css"

function ClientTevrForm() {
  const [q1, setQ1] = useState("")
  const [q2, setQ2] = useState("")
  const [q3, setQ3] = useState("")
  const [q4, setQ4] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    const data = { q1, q2, q3, q4 }
    const json = JSON.stringify(data, null, 4)
    console.log(json)
  }

  return (
    <div>
      <div className="radiogroup-form-container">
        <FormHeaderCard></FormHeaderCard>
        <form onSubmit={handleSubmit}>
          <RadioButtonGroupCard
            questionState={q1}
            setQuestionState={setQ1}
            handleSubmit={handleSubmit}
            cardHeader="Hoe prettig heb je de hulp/begeleiding door NEXT ervaren? (verplicht)"
          ></RadioButtonGroupCard>

          <RadioButtonGroupCard
            questionState={q2}
            setQuestionState={setQ2}
            handleSubmit={handleSubmit}
            cardHeader="Heb je met de begeleiding goed aan je doelen gewerkt?"
          ></RadioButtonGroupCard>

          <RadioButtonGroupCard
            questionState={q3}
            setQuestionState={setQ3}
            handleSubmit={handleSubmit}
            cardHeader="Is de begeleiding goed bereikbaar voor je?"
          ></RadioButtonGroupCard>

          <RadioButtonGroupCard
            questionState={q4}
            setQuestionState={setQ4}
            handleSubmit={handleSubmit}
            cardHeader="Sluit de begeleiding goed bij je aan?"
          ></RadioButtonGroupCard>
          <div style={{ padding: "1rem 0 0 0" }}>
            <Button type="submit">Stuur Formulier</Button>
          </div>
        </form>
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
