import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Home from "../components/HomePage/Home"
import FPImage from "../components/FrontpageImage/FPImage"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <FPImage />
    <Home />
  </Layout>
)

export default IndexPage
