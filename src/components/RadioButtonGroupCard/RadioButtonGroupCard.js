import React, { useState } from "react"
import "./RadioButtonGroupCard.css"

function RadioButtonGroupCard({ questionState, setQuestionState, cardHeader }) {
  return (
    <div className="radio-container">
      <h3>{cardHeader}</h3>
      <div className="radio-form-container">
        <div
          className="radio-btn-container"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div>
            <RadioInput
              label="1"
              value="1"
              checked={questionState}
              setter={setQuestionState}
            />
            <RadioInput
              label="2"
              value="2"
              checked={questionState}
              setter={setQuestionState}
            />
            <RadioInput
              label="3"
              value="3"
              checked={questionState}
              setter={setQuestionState}
            />
            <RadioInput
              label="4"
              value="4"
              checked={questionState}
              setter={setQuestionState}
            />
            <RadioInput
              label="5"
              value="5"
              checked={questionState}
              setter={setQuestionState}
            />
            <RadioInput
              label="6"
              value="6"
              checked={questionState}
              setter={setQuestionState}
            />
            <RadioInput
              label="7"
              value="7"
              checked={questionState}
              setter={setQuestionState}
            />
            <RadioInput
              label="8"
              value="8"
              checked={questionState}
              setter={setQuestionState}
            />
            <RadioInput
              label="9"
              value="9"
              checked={questionState}
              setter={setQuestionState}
            />
            <RadioInput
              label="10"
              value="10"
              checked={questionState}
              setter={setQuestionState}
            />
          </div>
        </div>
        <div className="radio-form-info">
          <p>
            1 = Zeer onprettig, weinig aan gehad
            <br />
            10 = Uitstekend, veel aan gehad
          </p>
        </div>
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

export default RadioButtonGroupCard
