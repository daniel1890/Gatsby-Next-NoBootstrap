import { Button } from "../Button/Button"
import Cards from "../Cards/Cards"
import CardsPassProps from "../CardsPassProps/CardsPassProps"
import { useStaticQuery, graphql } from "gatsby"
import HeroSection from "../HeroSection/HeroSection"
import { homeObjOne, AlgemeneCards } from "./Data"
import { mdwks } from "./Data"
import FPImage from "../FrontpageImage/FPImage"
import Layout from "../layout"
import React from "react"

function Home() {
  const data = useStaticQuery(graphql`
    {
      allStrapiMedewerker {
        nodes {
          name
          description
          avatar {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: AUTO
                )
              }
            }
          }
        }
      }
    }
  `)
  const medewerkers = data.allStrapiMedewerker.nodes

  return (
    <Layout>
      <FPImage />
      <Cards {...AlgemeneCards}></Cards>
      <HeroSection {...homeObjOne} />
      <Cards {...mdwks}></Cards>
      <CardsPassProps {...medewerkers} />
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
