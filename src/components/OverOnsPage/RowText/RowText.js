import React from "react"
import "./RowText.css"

function RowText({ header, content }) {
  return (
    <div className="rowtext__container">
      <div className="text__wrapper">
        <h3>{header}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default RowText
