import React from 'react'

const Content = ({ item }) => {
  return (
    <li className="event-item">
      <p>{item.title}</p>
      <a
        className={item.link ? 'button' : 'no-link'}
        target="_blank"
        rel="noopener noreferrer"
        href={item.link}
      >
        {item.type}
      </a>
    </li>
  )
}

export default Content
