import React from 'react'
import Img from 'gatsby-image'

import './hero.css'

const Hero = ({ image, title }) => {
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
      </div>
    </section>
  )
}

export default Hero
