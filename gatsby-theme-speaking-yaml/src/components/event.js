import React from 'react'
import Img from 'gatsby-image'

const Event = ({ event }) => {
  return (
    <div key={event.date} className="conference">
      <p className="date">{event.date}</p>
      <Img
        sizes={{
          ...event.image.childImageSharp.fluid,
          aspectRatio: 4 / 3,
        }}
        alt={event.conference}
      />
      <br />
      <a
        className="conf"
        target="_blank"
        rel="noopener noreferrer"
        href={event.url}
      >
        {event.conference}
      </a>
      <p className="location">{event.location}</p>
      <ul>
        {event.talks.map(({ title, video, type }) => (
          <li key={title} className="talk">
            <p>{title}</p>
            <a
              className={video ? 'button' : 'emptyvideo'}
              target="_blank"
              rel="noopener noreferrer"
              href={video}
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
