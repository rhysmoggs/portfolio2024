import React from 'react'

function ProjectCard({ image, title, description, techstack, github }) {
  return (
    <div>
      <div
        className='h-52 md:h-72'
        style={{ background: `url(${image})`, backgroundSize: 'cover' }}
      ></div>
      <div className='text-white'>
        <h5>{title}</h5>
        <p>{description}</p>
        <ul>Techstack:</ul>
        {techstack.map((tech, id) => {
          return <li key={id}>{tech}</li>
        })}
        <a href={github}>{github}</a>
      </div>
    </div>
  )
}

export default ProjectCard
