import React from 'react'
import Img from 'gatsby-image'

const Hero = ({ image, title, description = '' }) => {
  return (
    <section id="banner">
      <div className="inner">
        <header>
          <h2>{title}</h2>
        </header>
        <Img
          className="banner-image"
          css={{ top: 0, left: 0, right: 0, bottom: 0 }}
          sizes={{
            ...image,
            aspectRatio: 21 / 9,
          }}
        />
        <p>{description}</p>
      </div>
    </section>
  )
}

export default Hero
