import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, title }) => {
  const pathname = usePathname()
  return (
    <>
      <Link
        href={href}
        className='block py-2 text-black rounded hover:text-white uppercase md:normal-case'
      >
        <motion.h1
          whileHover={{ scale: 1.15 }}
          initial={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`text-sm md:font-medium xl:font-semibold md:text-4xl lg:text-5xl ${
            pathname === href ? 'text-red-500' : 'text-white'
          }`}
        >
          {title}
        </motion.h1>
        <span className='hidden md:block text-xs text-secondary-100 text-center'>
          ___________
        </span>
      </Link>
    </>
  )
}

export default NavLink
