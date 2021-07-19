import React from "react"
import Layout from "../layout"
import { klusHero } from "./Data"
import HeroSection from "../HeroSection/HeroSection"
import TwoInfoCards from "../TwoInfoCards/TwoInfoCards"
import { rij2__tekstContent, rij1__tekstContent } from "./Data"

import "./OverOnsPage.css"

function OverOnsPage() {
  return (
    <Layout>
      <div className="overons__container">
        <div id="rij1__twocards">
          <TwoInfoCards {...rij1__tekstContent}></TwoInfoCards>
        </div>

        <div id="rij2__tekst">
          <TwoInfoCards {...rij2__tekstContent}></TwoInfoCards>
        </div>

        <div id="rij3__heroimage">
          <HeroSection {...klusHero}></HeroSection>
        </div>
      </div>
    </Layout>
  )
}

export default OverOnsPage
