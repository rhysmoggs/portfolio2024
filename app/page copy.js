'use client'
// import Link from 'next/link'
import Hero from './components/Hero'
import { useState } from 'react'
import About from './components/About'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPage, setShowPage] = useState('hero')

  const togglePage = (e) => {
    const id = e.currentTarget.id
    setShowPage(id)
    setIsOpen((prevState) => !prevState)
  }

  //fix navigation for mobile. look at "hidden" class below?:

  return (
    <main className='flex h-screen flex-col bg-[#121212] border border-pink-500'>
      <section className='pt-2'>
        <div className='md:block col-span-2 mx-2 border border-red-500'>
          <div className='md:grid grid-cols-12 mx-8 my-4'>
            <div className='hidden md:block col-span-2 mx-2 border border-red-500 text-right'>
              <button
                // href={'#hero'}
                // id={1}
                id={'hero'}
                onClick={(e) => togglePage(e)}
                className='border border-green-500 m-2 text-right'
              >
                <h1 className='text-white text-xl'>01</h1>
                <h1 className='text-white text-2xl md:text-4xl lg:text-5xl'>
                  hero
                </h1>
              </button>
              <button
                // href={'#about'}
                // id={2}
                id={'about'}
                onClick={(e) => togglePage(e)}
                className='border border-green-500 m-2 text-right'
              >
                <h1 className='text-white text-xl'>02</h1>
                <h1 className='text-white text-2xl md:text-4xl lg:text-5xl'>
                  about
                </h1>
              </button>
              <button
                // href={'#projects'}
                // id={3}
                id={'projects'}
                onClick={(e) => togglePage(e)}
                className='border border-green-500 m-2 text-right'
              >
                <h1 className='text-white text-xl'>03</h1>
                <h1 className='text-white text-2xl md:text-4xl lg:text-5xl'>
                  projects
                </h1>
              </button>
            </div>
            <div className='col-span-10 border border-blue-500'>
              {showPage === 'hero' ? <Hero /> : null}
              {showPage === 'about' ? <About /> : null}
              {showPage === 'projects' ? (
                <h1 className='text-white'>PROJECTS</h1>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
