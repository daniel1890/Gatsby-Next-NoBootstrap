import React from "react"
import Layout from "../layout"
import {
  rij1__tekstContent,
  mindfullHero,
  hardloopHero,
  bespreekHero,
  rij2__tekstContent,
} from "./Data"
import TwoInfoCards from "../TwoInfoCards/TwoInfoCards"
import HeroSection from "../HeroSection/HeroSection"

import "./ClientPage.css"

function ClientPage() {
  return (
    <div>
      <Layout>
        <TwoInfoCards {...rij1__tekstContent}></TwoInfoCards>

        <div className="first__hero">
          <HeroSection {...mindfullHero}></HeroSection>
        </div>

        <TwoInfoCards {...rij2__tekstContent}></TwoInfoCards>

        <div className="second__hero">
          <HeroSection {...hardloopHero}></HeroSection>
        </div>

        <div className="third__hero">
          <HeroSection {...bespreekHero}></HeroSection>
        </div>
      </Layout>
    </div>
  )
}

export default ClientPage
