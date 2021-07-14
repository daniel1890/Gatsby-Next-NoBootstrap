import React from "react"
import HeroSection from "../HeroSection/HeroSection"
import { homeObjOne, homeObjTwo } from "./Data"
import Cards3 from "../Cards3/Cards3"
import Cards4 from "../Cards4/Cards4"
import FPImage from "../FrontpageImage/FPImage"

function Home() {
  return (
    <div>
      <FPImage />
      <Cards3></Cards3>
      <HeroSection {...homeObjOne} />
      <Cards4></Cards4>
    </div>
  )
}

export default Home
