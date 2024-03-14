import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const NavLink = ({ href, title, pageNo }) => {
  return (
    <>
      <Link
        href={href}
        className='block md:py-2 text-black rounded hover:text-white'
      >
        <h1 className='text-white text-sm md:text-lg'>{0 + `${pageNo}`}</h1>
        <motion.h1
          whileHover={{ scale: 1.15 }}
          initial={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='text-white text-lg md:font-medium xl:font-semibold md:text-4xl lg:text-5xl'
        >
          {title}
        </motion.h1>
        <span className='block text-xs text-secondary-100 text-center'>
          ___________
        </span>
      </Link>
    </>
  )
}

export default NavLink
