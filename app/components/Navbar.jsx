'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import SideLink from './SideLink'
import Hero from './Hero'
import About from '../about/page'

const navLinks = [
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Projects',
    path: '/projects',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
]

const Navbar = () => {
  // const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <>
      <nav className='h-full w-1/5 bg-red-300 opacity-50 fixed'>
        <h1>Hello heading</h1>
        <div className='flex justify-center items-center menu mt-4' id='navbar'>
          <ul className='hidden md:flex md:flex-row md:space-x-8 py-2'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* <div className='bg-blue-500 float-right'>
        <h1>wrapper here</h1>
      </div> */}
    </>
  )
}

export default Navbar
