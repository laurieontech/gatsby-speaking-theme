import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import './talks.css'

const Talks = () => {
  const data = useStaticQuery(graphql`
    {
      talks: allTalksYaml {
        edges {
          node {
            title
            description
          }
        }
      }
    }
  `)
  return (
    <section key="talks" className="wrapper">
      <h2>Current Talks</h2>
      {data.talks.edges.map(({ node }) => (
        <div key={node.title}>
          <h3>{node.title}</h3>
          <p>{node.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Talks
