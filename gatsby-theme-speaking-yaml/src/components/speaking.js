import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Event from './event'
import Hero from './hero'
import Talks from './talks'

const SpeakingPage = () => {
  const data = useStaticQuery(graphql`
    {
      allSpeakingYaml(sort: { fields: [index], order: DESC }) {
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
            talks {
              title
              video
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
      banner: file(relativePath: { eq: "headers/computer.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
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
        title="SPEAKING ENGAGEMENTS"
      />
      <section id="speaking" className="wrapper style4 container">
        <div className="container">
          <h2>Appearances</h2>
          <div className="wrapper" id="speakwrap">
            {data.allSpeakingYaml.edges.map(({ node }) => (
              <Event event={node} />
            ))}
          </div>
        </div>
      </section>
      <Talks talks={data.talks} />
    </section>
  )
}

export default SpeakingPage
