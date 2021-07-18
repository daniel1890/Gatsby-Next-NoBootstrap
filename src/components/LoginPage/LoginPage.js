import React, { useState } from "react"
import { Button } from "../Button/Button"
import "./LoginPage.css"

function LoginPage({ Login, error }) {
  const [details, setDetails] = useState({ password: "" })

  const submitHandler = e => {
    e.preventDefault()

    Login(details)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h3>Deze inhoud is met een wachtwoord beschermd.</h3>
        <h3>Vul hieronder het wachtwoord in om de inhoud te bekijken.</h3>
        {/* ERROR */}
        <div className="form-group">
          <label htmlFor="password">Wachtwoord:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={e => setDetails({ ...details, password: e.target.value })}
            value={details.password}
          />
        </div>
        <Button as="input" type="submit">
          Enter
        </Button>
      </div>
    </form>
  )
}

export default LoginPage
