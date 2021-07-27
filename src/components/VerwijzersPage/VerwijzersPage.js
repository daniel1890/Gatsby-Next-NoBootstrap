import React from "react"
import HeroSection from "../HeroSection/HeroSection"
import Layout from "../layout"
import TwoInfoCards from "../TwoInfoCards/TwoInfoCards"
import { rij1__tekstContent, rij2__tekstContent, wachtLijstHero } from "./Data"

import "./VerwijzersPage.css"

function VerwijzersPage() {
  return (
    <div>
      <Layout>
        <TwoInfoCards {...rij1__tekstContent}></TwoInfoCards>

        <div className="verwijzerspage-row2-container">
          <TwoInfoCards {...rij2__tekstContent}></TwoInfoCards>
        </div>

        <HeroSection {...wachtLijstHero}></HeroSection>
      </Layout>
    </div>
  )
}

export default VerwijzersPage
