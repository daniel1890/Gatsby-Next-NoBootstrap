import React from "react"
import "./Footer.css"
import { Link } from "gatsby"

function Footer() {
  let today = new Date()
  let currentYear = today.getFullYear()

  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>NEXT Arnhem</h2>
            <p>
              Next biedt deskundige woon- en trainingstrajecten voor mensen die
              zich verder willen ontwikkelen. Wij bieden een voor van
              individuele begeleiding en beschermd wonen.
            </p>
          </div>

          <div className="footer-link-items middle-footer">
            <h2>Service</h2>
            <Link to="/">Privacy Verklaring NEXT</Link>
            <Link to="/">Klachtenformulier NEXT</Link>
            <Link to="/">Klachtenverslag</Link>
            <Link to="/">Klachtenreglement</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>NEXT Arnhem</h2>
            <Link to="/">Rosendaalsestraat 414</Link>
            <Link to="/">6824 CS Arnhem</Link>
            <Link to="/">0636353066</Link>
            <Link to="/">info@nextarnhem.nl</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Next@Work | {currentYear}</small>
        </div>
      </section>
    </div>
  )
}

export default Footer
