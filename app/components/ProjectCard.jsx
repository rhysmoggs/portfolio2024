import React from 'react'

function ProjectCard({ imgUrl, title, description }) {
  return (
    <div>
      <div
        style={{ background: `url(${imgUrl}), backgroundSize: "cover"` }}
      ></div>
      <div className='text-white'>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
