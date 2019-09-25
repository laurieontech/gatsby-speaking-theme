import React from 'react'

import './talks.css'

const Talks = ({ talks }) => {
  return (
    <section key="talks" className="wrapper">
      <h2>Current Talks</h2>
      {talks.edges.map(({ node }) => (
        <div key={node.title}>
          <h3>{node.title}</h3>
          <p>{node.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Talks
