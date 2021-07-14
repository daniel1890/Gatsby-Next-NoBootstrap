import React from "react"
import HeroSection from "../HeroSection/HeroSection"
import { homeObjOne, homeObjTwo } from "./Data"
import Cards3 from "../Cards3/Cards3"
import Cards4 from "../Cards4/Cards4"
import FPImage from "../FrontpageImage/FPImage"
import ContainerFade from "../ContainerFade/ContainerFade"

function Home() {
  const top = {
    position: true,
  }

  return (
    <div>
      <FPImage />
      <Cards3></Cards3>
      <ContainerFade />
      <HeroSection {...homeObjOne} />
      <ContainerFade {...top} />
      <Cards4></Cards4>
      <ContainerFade />
    </div>
  )
}

export default Home
