import React from 'react'

const Talks = ({ talks }) => {
  return (
    <section id="speaking" className="wrapper style4 container">
      <h2>Current Talks</h2>
      {talks.edges.map(({ node }) => (
        <div>
          <h3>{node.title}</h3>
          <p>{node.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Talks
