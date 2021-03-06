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
      <div className="herosection-container">
        <div className={imgStart ? "hero__row" : "hero__row reverse-column"}>
          <div className="hero__col">
            <div className="home__hero-img-wrapper">
              <img src={img} alt={alt} className="home__hero-img" />
            </div>
          </div>

          <div className="hero__col">
            <div className="home__hero-text-wrapper greyBg">
              <div className={lightText ? "top-line" : "top-line"}>
                <h2>{topLine}</h2>
              </div>
              <h1 className={lightText ? "heading" : "heading"}>{headline}</h1>

              {description.map((description, index) => (
                <p
                  key={index}
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle light"
                      : "home__hero-subtitle light"
                  }
                >
                  {description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
