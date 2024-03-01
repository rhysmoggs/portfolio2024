'use client'
import React from 'react'
import SideLink from './SideLink'
import Hero from './Hero'
import About from './About'

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
  return (
    <div className='md:grid grid-cols-12 mx-8 my-4'>
      {sidenavLinks.map((data, index) => (
        <>
          <div className='hidden md:block col-span-2 mx-2 place-self-center border border-red-500 text-right'>
            <SideLink
              key={index}
              href={data.path}
              title={data.title}
              pageNo={data.pageNo}
            />
          </div>
          <div className='col-span-10 border border-blue-500'>
            {data.title === 'hero' ? <Hero /> : null}
            {data.title === 'about' ? <About /> : null}
          </div>
        </>
      ))}
    </div>
  )
}

export default Sidenav
