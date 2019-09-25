import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import EventGrid from './events/eventgrid'
import Hero from './hero/hero'
import Talks from './talks/talks'

const SpeakingPage = () => {
  const data = useStaticQuery(graphql`
    {
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
      talks: allTalksYaml {
        edges {
          node {
            title
            description
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
  return (
    <section>
      <Hero
        image={data.banner.childImageSharp.fluid}
        title="Speaking Engagements"
      />
      <EventGrid events={data.events} />
      <Talks talks={data.talks} />
    </section>
  )
}

export default SpeakingPage
