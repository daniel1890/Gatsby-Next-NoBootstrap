import React, { useState } from "react"
import { Button } from "../Button/Button"
import "./RBGTest.css"

function RBGTest() {
  const [q1, setQ1] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    const data = { q1 }
    const json = JSON.stringify(data)
    console.clear()
    console.log(json)
  }

  return (
    <div className="radio-container">
      <h3>Wat vond je van de begeiding?</h3>
      <div className="radio-form-container">
        <form onSubmit={handleSubmit}>
          <div
            className="radio-btn-container"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div>
              <RadioInput label="1" value="1" checked={q1} setter={setQ1} />
              <RadioInput label="2" value="2" checked={q1} setter={setQ1} />
              <RadioInput label="3" value="3" checked={q1} setter={setQ1} />
              <RadioInput label="4" value="4" checked={q1} setter={setQ1} />
              <RadioInput label="5" value="5" checked={q1} setter={setQ1} />
              <RadioInput label="6" value="6" checked={q1} setter={setQ1} />
              <RadioInput label="7" value="7" checked={q1} setter={setQ1} />
              <RadioInput label="8" value="8" checked={q1} setter={setQ1} />
              <RadioInput label="9" value="9" checked={q1} setter={setQ1} />
              <RadioInput label="10" value="10" checked={q1} setter={setQ1} />
            </div>
          </div>
          <div className="radio-form-info">
            <p>
              1 = Zeer onprettig, weinig aan gehad
              <br />
              10 = Uitstekend, veel aan gehad
            </p>

            <Button type="submit">click</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

const RadioInput = ({ label, value, checked, setter }) => {
  return (
    <label className="radio">
      <input
        type="radio"
        checked={checked == value}
        onChange={() => setter(value)}
      />
      <span>{label}</span>
    </label>
  )
}

export default RBGTest
