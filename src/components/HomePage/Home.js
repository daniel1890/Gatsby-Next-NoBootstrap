import React from "react"
import HeroSection from "../HeroSection/HeroSection"
import { homeObjOne, homeObjTwo } from "./Data"

function Home() {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </div>
  )
}

export default Home
