import React from "react"
import Layout from "../layout"
import { klusHero } from "./Data"
import TwoCards from "./TwoCards/TwoCards"
import RowText from "./RowText/RowText"
import { rij2__tekstContent } from "./Data"

import "./OverOnsPage.css"

function OverOnsPage() {
  return (
    <Layout>
      <div className="overons__container">
        <div id="rij1__twocards">
          <TwoCards />
        </div>

        <div id="rij2__tekst">
          <RowText {...rij2__tekstContent[0]} className="col1"></RowText>
          <RowText {...rij2__tekstContent[1]} className="col2"></RowText>
        </div>

        <div id="rij3__heroimage"></div>
      </div>
    </Layout>
  )
}

export default OverOnsPage
