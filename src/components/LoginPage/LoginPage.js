import React, { useState } from "react"
import { Link } from "gatsby"
import { Button } from "../Button/Button"
import "./LoginPage.css"

function LoginPage({ Login, error }) {
  const [details, setDetails] = useState({ password: "" })

  const submitHandler = e => {
    e.preventDefault()

    Login(details)
  }

  return (
    <div>
      <div style={{ margin: "4rem 0 0 6rem", position: "absolute" }}>
        <Link to="/">
          <Button>Terug naar Hoofdpagina</Button>
        </Link>
      </div>
      <div className="login__container">
        <form className="login__form" onSubmit={submitHandler}>
          <div className="login__form-inner">
            <h3>
              Deze inhoud is met een wachtwoord beschermd, vul hieronder het
              wachtwoord in om de inhoud te bekijken.
            </h3>
            {error !== "" ? <div className="error">{error}</div> : ""}
            <div className="login__form-group">
              <label htmlFor="password">Wachtwoord:</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={e =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
            </div>
            <Button
              as="input"
              type="submit"
              buttonSize="btn--medium"
              buttonStyle="btn--blue"
            >
              Enter
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
