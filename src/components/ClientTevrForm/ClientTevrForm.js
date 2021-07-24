import React, { useState } from "react"
import RadioButtonGroupCard from "../RadioButtonGroupCard/RadioButtonGroupCard"
import { Button } from "../Button/Button"
import "./ClientTevrForm.css"

function ClientTevrForm() {
  const [q1, setQ1] = useState("")
  const [q2, setQ2] = useState("")
  const [q3, setQ3] = useState("")
  const [q4, setQ4] = useState("")
  const [q5, setQ5] = useState("")

  const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  const valuesQ5 = [
    "Niet mee eens",
    "Gedeeltelijk niet mee eens",
    "Mee eens",
    "Helemaal mee eens",
  ]

  const labelsQ5 = [
    "Niet mee eens - ik heb dezelfde soort of intensievere begeleiding nodig.",
    "Gedeeltelijk niet mee eens - met een lichtere vorm van hulp red ik het goed.",
    "Mee eens - voor nu heb ik geen verdere hulp nodig. Misschien op een later moment.",
    "Helemaal mee eens - ik heb geen verdere hulp meer nodig.",
  ]

  const handleSubmit = e => {
    e.preventDefault()
    const data = { q1, q2, q3, q4, q5 }
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
            cardHeader="Hoe prettig heb je de hulp/begeleiding door NEXT ervaren? (verplicht)"
            labels={labels}
            values={values}
            formInfo={true}
            flexRow={true}
          ></RadioButtonGroupCard>

          <RadioButtonGroupCard
            questionState={q2}
            setQuestionState={setQ2}
            cardHeader="Heb je met de begeleiding goed aan je doelen gewerkt?"
            labels={labels}
            values={values}
            formInfo={true}
            flexRow={true}
          ></RadioButtonGroupCard>

          <RadioButtonGroupCard
            questionState={q3}
            setQuestionState={setQ3}
            cardHeader="Is de begeleiding goed bereikbaar voor je?"
            labels={labels}
            values={values}
            formInfo={true}
            flexRow={true}
          ></RadioButtonGroupCard>

          <RadioButtonGroupCard
            questionState={q4}
            setQuestionState={setQ4}
            cardHeader="Sluit de begeleiding goed bij je aan?"
            labels={labels}
            values={values}
            formInfo={true}
            flexRow={true}
          ></RadioButtonGroupCard>

          <RadioButtonGroupCard
            questionState={q5}
            setQuestionState={setQ5}
            cardHeader="Heb je voldoende aan de hulp gehad om zelf verder te gaan?"
            labels={labelsQ5}
            values={valuesQ5}
            formInfo={false}
            flexRow={false}
          ></RadioButtonGroupCard>

          <div
            className="radio-form-footer"
            style={{ padding: "2rem 0 4rem 0" }}
          >
            <h4>Alvast bedankt voor jouw medewerking!</h4>
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
