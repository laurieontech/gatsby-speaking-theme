import React from 'react'
import Event from './event'

import './events.css'

const EventGrid = ({ events }) => {
  return (
    <section key="events" className="wrapper">
      <h2>Appearances</h2>
      <div className="eventwrap">
        {events.edges.map(({ node }) => (
          <Event event={node} key={node.date} />
        ))}
      </div>
    </section>
  )
}

export default EventGrid
