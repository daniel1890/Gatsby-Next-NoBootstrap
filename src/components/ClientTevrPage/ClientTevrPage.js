import React, { useState } from "react"
import Layout from "../layout"
import LoginPage from "../LoginPage/LoginPage"

function ClientTevrPage() {
  const [user, setUser] = useState(false)
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details)
  }

  const Logout = () => {
    console.log("Logout")
  }

  return (
    <div>
      {user == true ? (
        <Layout>
          <p>FORMULIER LOGGED IN</p>
        </Layout>
      ) : (
        <LoginPage Login={Login}></LoginPage>
      )}
    </div>
  )
}

export default ClientTevrPage
