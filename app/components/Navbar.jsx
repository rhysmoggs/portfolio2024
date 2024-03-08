'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'

const navLinks = [
  {
    title: 'about',
    path: '/about',
    pageNo: 1,
  },
  {
    title: 'contact',
    path: '/contact',
    pageNo: 2,
  },
  {
    title: 'projects',
    path: '/projects',
    pageNo: 3,
  },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    // <nav className='h-full w-1/5 bg-red-300 opacity-50 fixed'>
    <nav className='sticky top-0 left-0 right-0 z-10 pb-8 md:pb-1 md:h-full md:w-1/5 bg-red-300 opacity-50 md:fixed'>
      <div className='absolute left-0 top-0 h-16 w-16'>
        {/* empty div for space */}
      </div>
      <div className='inset-x-0 top-0 h-16 text-center'>
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
          <span className='block text-xs  text-secondary-100'>___________</span>
        </Link>
      </div>
      <div className='absolute top-6 right-0 h-16 w-16'>
        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-secondary-200 text-secondary-200 hover:text-white hover:border-white'
            >
              <Bars3Icon className='h-4 w-4' />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className='flex items-center px-3 py-2 border rounded border-secondary-200 text-secondary-200 hover:text-white hover:border-white'
            >
              <XMarkIcon className='h-4 w-4' />
            </button>
          )}
        </div>
      </div>
      <div className='hidden md:block col-span-2 mx-2 place-self-center border border-red-500 text-right pr-2 mt-24'>
        {navLinks.map((link, index) => (
          <div key={index}>
            <NavLink href={link.path} title={link.title} pageNo={link.pageNo} />
          </div>
        ))}
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar
