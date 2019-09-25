import React from 'react'
import Event from './event'

import './events.css'

const EventGrid = ({ events }) => {
  return (
    <section key="events" className="wrapper">
      <h2>Appearances</h2>
      <div className="eventwrap">
        {events.edges.map(({ node: event }) => (
          <Event event={event} key={event.date} />
        ))}
      </div>
    </section>
  )
}

export default EventGrid
