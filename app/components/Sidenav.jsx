'use client'
import React, { useState } from 'react'
import SideLink from './SideLink'

const sidenavLinks = [
  {
    title: 'hero',
    path: '#hero',
    pageNo: 1,
  },
  {
    title: 'about',
    path: '#about',
    pageNo: 2,
  },
  {
    title: 'test',
    path: '#test',
    pageNo: 3,
  },
]

const Sidenav = () => {
  // const [navbarOpen, setNavbarOpen] = useState(false)
  //rename this state:
  const [isOpen, setIsOpen] = useState(false)

  const toggleView = () => {
    console.log('isOpen parent: ', isOpen)
    setIsOpen(!isOpen)
  }
  return (
    <div className='md:grid grid-cols-12 mx-8 my-4'>
      {sidenavLinks.map((data, index) => (
        <>
          <div className='hidden md:block col-span-2 mx-2 place-self-center border border-red-500 text-right'>
            <SideLink
              key={index}
              href={data.path}
              onClick={toggleView}
              title={data.title}
              pageNo={data.pageNo}
            />
          </div>
        </>
      ))}
    </div>
  )
}

export default Sidenav
