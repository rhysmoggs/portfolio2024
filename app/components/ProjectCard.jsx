import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { motion } from 'framer-motion'

function ProjectCard({ image, title, description, techstack, github }) {
  return (
    <div>
      <div
        className='h-52 md:h-72 rounded-t-xl relative group'
        style={{ background: `url(${image})`, backgroundSize: 'cover' }}
      >
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 translate-all duration-500'>
          <Link
            href={github}
            target='_blank'
            rel='noreferrer'
            className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
          >
            <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:white' />
          </Link>
          <Link
            href='/about'
            className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
          >
            <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:white' />
          </Link>
        </div>
      </div>
      <motion.div
        whileHover={{ y: 10 }}
        transition={{ easeInOut: 0.5 }}
        className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 line-clamp-4 hover:line-clamp-none'
      >
        <h5 className='font-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
        <br />
        <ul className='text-[#ADB7BE] underline'>Techstack:</ul>
        {techstack.map((tech, id) => {
          return (
            <li className='text-[#ADB7BE]' key={id}>
              {tech}
            </li>
          )
        })}
        <br />
        <a href={github} className='text-[#ADB7BE]'>
          {github}
        </a>
      </motion.div>
    </div>
  )
}

export default ProjectCard
