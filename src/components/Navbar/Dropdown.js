import React, { useState } from "react"
import { Link } from "gatsby"
import "./Dropdown.css"

const Dropdown = ({ props }) => {
  const path = props.path
  const name = props.linkName
  const cssClass = props.cName

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div>
      <ul onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
        {props.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Dropdown
