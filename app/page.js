'use client'
import { useState } from 'react'
import About from './components/About'
import Hero from './components/Hero'

//add id's to tabs/page sections

export default function Home() {
  const [open, isOpen] = useState(false)
  const toggleView = () => {
    isOpen(!open)
  }
  return (
    <main className='flex h-screen flex-col bg-[#121212] border border-pink-500'>
      <section className='pt-2'>
        <div className='md:grid grid-cols-12 mx-8 my-4'>
          <div className='hidden md:block col-span-2 mx-2 border border-red-500'>
            {/* <div className='hidden md:block col-span-2 mx-2 place-self-center border border-red-500'> */}
            <button
              onClick={toggleView}
              className='border border-green-500 m-2'
            >
              <h1 className='text-white text-xl'>01:</h1>
              <h1 className='text-white text-2xl lg:text-6xl'>hero</h1>
            </button>
            <button className='border border-green-500 m-2'>
              <h1 className='text-white text-xl'>02:</h1>
              <h1 className='text-white text-2xl lg:text-6xl'>about</h1>
            </button>
            <button className='border border-green-500 m-2'>
              <h1 className='text-white text-xl'>03:</h1>
              <h1 className='text-white text-2xl lg:text-6xl'>project</h1>
            </button>
          </div>
          <div className='col-span-10 border border-blue-500'>
            {open ? (
              <div className='border border-green-500 m-2'>
                <Hero />
              </div>
            ) : null}
            <div className='border border-green-500 m-2'>
              <About />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
