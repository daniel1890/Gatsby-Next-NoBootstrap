import React, { useState } from "react"
import { MenuItems } from "./MenuItems"
import { Dropdown } from "./Dropdown"
import Logo from "../../images/Next-logo.png"
import "./MyNavbar.css"
import { Button } from "../Button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

function MyNavbar() {
  const [clicked, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

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
              <Link as="a" className={item.cName} to={item.url}>
                {item.dropDown !== "" ? (
                  <>
                    {item.title + " "}
                    <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                  </>
                ) : (
                  item.title
                )}
              </Link>
            </li>
          )
        })}
      </ul>
      <Link to="/contact">
        <Button buttonStyle="btn--blue">Contact</Button>
      </Link>
    </nav>
  )
}

export default MyNavbar
