import React from "react"

function ContainerFade({ position }) {
  return position ? (
    <div className="containerfade">
      <hr
        style={{
          width: "100%",
          margin: "0",
          border: "dotted 1px",
          color: "#1c2237",
          opacity: "75%",
        }}
      ></hr>
      <hr
        style={{
          width: "100%",
          margin: "0",
          border: "dotted 1px",
          color: "#1c2237",
          opacity: "50%",
        }}
      ></hr>
      <hr
        style={{
          width: "100%",
          margin: "0",
          border: "dotted 1px",
          color: "#1c2237",
          opacity: "25%",
        }}
      ></hr>
    </div>
  ) : (
    <div className="containerfade">
      <hr
        style={{
          width: "100%",
          margin: "0",
          border: "dotted 1px",
          color: "#1c2237",
          opacity: "25%",
        }}
      ></hr>
      <hr
        style={{
          width: "100%",
          margin: "0",
          border: "dotted 1px",
          color: "#1c2237",
          opacity: "50%",
        }}
      ></hr>
      <hr
        style={{
          width: "100%",
          margin: "0",
          border: "dotted 1px",
          color: "#1c2237",
          opacity: "75%",
        }}
      ></hr>
    </div>
  )
}

export default ContainerFade
