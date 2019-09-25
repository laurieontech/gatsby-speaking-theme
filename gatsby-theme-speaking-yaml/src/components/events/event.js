import React from 'react'
import Img from 'gatsby-image'
import EventItem from './event-item'

const Event = ({ event }) => {
  return (
    <div className="event">
      <p className="date">{event.date}</p>
      <Img
        sizes={{
          ...event.image.childImageSharp.fluid,
          aspectRatio: 3 / 3,
        }}
        alt={event.conference}
      />
      <br />
      <a
        className="event-name"
        target="_blank"
        rel="noopener noreferrer"
        href={event.url}
      >
        {event.conference}
      </a>
      <p className="location">{event.location}</p>
      <ul>
        {event.content.map((item) => (
          <EventItem item={item} key={item.title} />
        ))}
      </ul>
    </div>
  )
}

export default Event
