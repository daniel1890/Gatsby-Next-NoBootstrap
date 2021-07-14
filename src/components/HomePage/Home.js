import React from "react"
import HeroSection from "../HeroSection/HeroSection"
import { homeObjOne, homeObjTwo } from "./Data"
import Cards3 from "../Cards3/Cards3"

function Home() {
  return (
    <div>
      <Cards3></Cards3>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </div>
  )
}

export default Home
