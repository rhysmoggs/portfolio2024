'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'

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
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className='fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 pb-4 md:pb-1'>
      <div class='relative h-16 md:h-24 lg:h-32 w-screen'>
        <div class='absolute left-0 top-0 h-16 w-16'>
          {/* empty div for space */}
        </div>
        <div class='absolute inset-x-0 top-0 h-16 text-center'>
          <Link
            href={'/'}
            className='text-6xl md:text-7xl lg:text-8xl text-white text-center'
          >
            <span className='text-primary-500 font-semibold tracking-tighter'>
              r
            </span>
            <span className='text-secondary-100 font-semibold tracking-tighter'>
              m
            </span>
            <span className='block text-xs md:text-sm leading-3 text-secondary-100'>
              rhysmoggs - dev.
            </span>
          </Link>
        </div>
        <div class='absolute top-0 right-0 h-16 w-16'>
          <div className='mobile-menu block md:hidden'>
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className='flex items-center px-3 py-2 border rounded border-secondary-200 text-secondary-200 hover:text-white hover:border-white'
              >
                <Bars3Icon className='h-5 w-5' />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className='flex items-center px-3 py-2 border rounded border-secondary-200 text-secondary-200 hover:text-white hover:border-white'
              >
                <XMarkIcon className='h-5 w-5' />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center menu' id='navbar'>
        <ul className='hidden md:flex md:flex-row md:space-x-8 py-2'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar
