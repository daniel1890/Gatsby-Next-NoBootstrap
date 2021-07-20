import React from "react"
import "./HeroSection.css"

function HeroSection({
  greyBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <div
      className={greyBg ? "home__hero-section greyBg" : "home__hero-section"}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="home__hero-text-wrapper">
              <div className={lightText ? "top-line" : "top-line dark"}>
                {topLine}
              </div>
              <h1 className={lightText ? "heading" : "heading dark"}>
                {headline}
              </h1>
              <p
                className={
                  lightTextDesc
                    ? "home__hero-subtitle light"
                    : "home__hero-subtitle dark"
                }
              >
                {description}
              </p>
            </div>
          </div>

          <div className="col">
            <div className="home__hero-img-wrapper">
              <img src={img} alt={alt} className="home__hero-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
