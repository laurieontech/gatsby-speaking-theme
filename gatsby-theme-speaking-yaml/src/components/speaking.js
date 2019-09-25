import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import EventGrid from './events/eventgrid'
import Hero from './hero/hero'
import Talks from './talks/talks'

const SpeakingPage = () => {
  const data = useStaticQuery(graphql`
    {
      sitePlugin(name: { eq: "gatsby-theme-speaking-yaml" }) {
        pluginOptions {
          heading
          displayTalks
        }
      }
      events: allSpeakingYaml(sort: { fields: [index], order: DESC }) {
        edges {
          node {
            conference
            year
            url
            date
            location
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            content {
              title
              link
              type
            }
          }
        }
      }
      banner: file(relativePath: { eq: "headers/default.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // access theme options to conditionally display talk component
  let displayTalks = ''
  if (data.sitePlugin.pluginOptions.displayTalks) {
    displayTalks = <Talks />
  }

  return (
    <section>
      <Hero
        image={data.banner.childImageSharp.fluid}
        title={data.sitePlugin.pluginOptions.heading}
      />
      <EventGrid events={data.events} />
      {displayTalks}
    </section>
  )
}

export default SpeakingPage
