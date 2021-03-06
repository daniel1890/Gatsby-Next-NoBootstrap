import React from "react"
import HeroSection from "../HeroSection/HeroSection"
import Cards from "../Cards/Cards"
import { homeObjOne, AlgemeneCards } from "./Data"
import { mdwks } from "./Data"
import FPImage from "../FrontpageImage/FPImage"
import { Button } from "../Button/Button"
import Layout from "../layout"

function Home() {
  return (
    <Layout>
      <FPImage />
      <Cards {...AlgemeneCards}></Cards>
      <HeroSection {...homeObjOne} />
      <Cards {...mdwks}></Cards>
      <div
        className="btn__allewerknemers"
        style={{ textAlign: "center", margin: "0 0 4rem 0" }}
      >
        <Button className="btn" buttonSize="btn--large" buttonColor="primary">
          Alle Werknemers
        </Button>
      </div>
    </Layout>
  )
}

export default Home
