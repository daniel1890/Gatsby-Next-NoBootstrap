import React, { useState } from "react"
import "./RadioButtonGroupCard.css"

function RadioButtonGroupCard({
  questionState,
  setQuestionState,
  cardHeader,
  labels,
  values,
  formInfo,
  flexRow,
}) {
  return (
    <div className="radio-container">
      <h3>{cardHeader}</h3>
      <div className="radio-form-container">
        <div
          className="radio-btn-container"
          style={
            flexRow
              ? { ...{ display: "flex", flexDirection: "row" } }
              : {
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    margin: "1rem 0 1rem 0",
                  },
                }
          }
        >
          {labels.map((label, index) => (
            <RadioInput
              key={index}
              label={label}
              value={values[index]}
              checked={questionState}
              setter={setQuestionState}
            />
          ))}
        </div>

        {formInfo ? (
          <div className="radio-form-info">
            <p>
              1 = Zeer onprettig, weinig aan gehad
              <br />
              10 = Uitstekend, veel aan gehad
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

const RadioInput = ({ label, value, checked, setter }) => {
  return (
    <label className="radio">
      <input
        type="radio"
        checked={checked === value}
        onChange={() => setter(value)}
      />
      <span>{label}</span>
    </label>
  )
}

export default RadioButtonGroupCard
