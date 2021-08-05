import React, { useState } from "react"
import { MenuItems } from "./MenuItems"
import Logo from "../../images/Next-logo.png"
import "./MyNavbar.css"
import { Button } from "../Button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import Dropdown from "./Dropdown"

function MyNavbar() {
  const [clicked, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  function clickMenu() {
    setClick(click => (click = !click))
  }

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
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
            <li key={index} className="nav-item">
              <Link as="a" className={item.cName} to={item.url}>
                {item.dropDown !== "" ? (
                  <>
                    <li
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                      className="nav-item"
                    >
                      {item.title + "  "}
                      <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                      {dropdown && <Dropdown {...item} />}
                    </li>
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
