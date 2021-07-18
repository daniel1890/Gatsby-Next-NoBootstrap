import React from "react"
import HeroSection from "../HeroSection/HeroSection"
import Cards from "../Cards/Cards"
import { homeObjOne, homeObjTwo, AlgemeneCards } from "./Data"
import { mdwks } from "./Data"
import Cards3 from "../Cards3/Cards3"
import Cards4 from "../Cards4/Cards4"
import FPImage from "../FrontpageImage/FPImage"
import ContainerFade from "../ContainerFade/ContainerFade"
import { Button } from "../Button/Button"

function Home() {
  const top = {
    position: true,
  }

  const medewerkers = mdwks

  return (
    <div>
      <FPImage />
      <Cards {...AlgemeneCards}></Cards>
      <ContainerFade />
      <HeroSection {...homeObjOne} />
      <ContainerFade {...top} />
      <Cards {...mdwks}></Cards>
      <div
        className="btn__allewerknemers"
        style={{ textAlign: "center", margin: "0 0 4rem 0" }}
      >
        <Button className="btn" buttonSize="btn--large" buttonColor="primary">
          Alle Werknemers
        </Button>
      </div>
    </div>
  )
}

export default Home
