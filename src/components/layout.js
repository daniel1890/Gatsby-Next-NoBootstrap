import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import MyNavbar from "../components/Navbar/MyNavbar"
import "./layout.css"
import Footer from "../components/Footer/Footer"
import ContainerFade from "./ContainerFade/ContainerFade"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <MyNavbar></MyNavbar>
      <div className="layout__container">{children}</div>
      <ContainerFade></ContainerFade>
      <Footer></Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
