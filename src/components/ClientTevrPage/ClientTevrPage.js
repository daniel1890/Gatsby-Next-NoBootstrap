import React, { useState } from "react"
import Layout from "../layout"
import LoginPage from "../LoginPage/LoginPage"
import { Button } from "../Button/Button"

function ClientTevrPage() {
  const adminUser = {
    password: "admin123",
  }

  const [user, setUser] = useState(false)
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details)

    if (details.password == adminUser.password) {
      console.log("Logged In!")
      setUser(true)
    } else {
      console.log("Details do not Match!")
      setError("Onjuist Wachtwoord!")
    }
  }

  const Logout = () => {
    console.log("Logout")
    setUser(false)
  }

  return (
    <div>
      {user == true ? (
        <Layout>
          <p>FORMULIER LOGGED IN</p>
          <Button onClick={Logout}>Log Uit</Button>
        </Layout>
      ) : (
        <LoginPage Login={Login} error={error}></LoginPage>
      )}
    </div>
  )
}

export default ClientTevrPage
