import React from 'react'

const Content = ({ title, link, type }) => {
  return (
    <li className="event-content">
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
  )
}

export default Content
