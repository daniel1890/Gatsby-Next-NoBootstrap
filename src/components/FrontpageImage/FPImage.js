import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./FPImage.css"

function FPImage() {
  return (
    <StaticImage
      className="frontpage-image"
      src="../images/foto1.png"
      alt="next-locatie"
    ></StaticImage>
  )
}

export default FPImage
