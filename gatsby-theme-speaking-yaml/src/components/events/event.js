import React from 'react'
import Img from 'gatsby-image'

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
        {event.content.map(({ title, link, type }) => (
          <li key={title} className="talk">
            <p>{title}</p>
            <a
              className={link ? 'button' : 'no-link'}
              target="_blank"
              rel="noopener noreferrer"
              href={link}
            >
              {type}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Event
