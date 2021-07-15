import React, { useState } from "react"
import { MenuItems } from "./MenuItems"
import Logo from "../../images/Next-logo.png"
import "./MyNavbar.css"
import { Button } from "../Button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

function MyNavbar() {
  const [clicked, setClick] = useState(false)
  function clickMenu() {
    setClick(click => (click = !click))
  }

  return (
    <nav className="NavbarItems">
      <Link to="/">
        <img className="navbar-logo" src={Logo} alt="logo"></img>
      </Link>
      <div className="menu-icon" onClick={clickMenu}>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
      <Button>Contact</Button>
    </nav>
  )
}

export default MyNavbar
