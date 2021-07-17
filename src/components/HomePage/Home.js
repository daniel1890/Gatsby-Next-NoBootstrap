import React from "react"
import HeroSection from "../HeroSection/HeroSection"
import Cards from "../Cards/Cards"
import { homeObjOne, homeObjTwo } from "./Data"
import { mdwks } from "./Data"
import Cards3 from "../Cards3/Cards3"
import Cards4 from "../Cards4/Cards4"
import FPImage from "../FrontpageImage/FPImage"
import ContainerFade from "../ContainerFade/ContainerFade"

function Home({ data }) {
  const top = {
    position: true,
  }

  const medewerkers = mdwks
  console.log(medewerkers)

  return (
    <div>
      <FPImage />
      <Cards3></Cards3>
      <ContainerFade />
      <HeroSection {...homeObjOne} />
      <ContainerFade {...top} />
      <Cards {...mdwks}></Cards>
    </div>
  )
}

export default Home
