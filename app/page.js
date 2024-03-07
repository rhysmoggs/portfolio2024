'use client'
import Link from 'next/link'
// import Hero from './components/Hero'
// import { useState } from 'react'
// import About from './components/About'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

export default function Home({ hideClass }) {
  // const [isOpen, setIsOpen] = useState(false)
  // const [showPage, setShowPage] = useState('hero')

  // const togglePage = (e) => {
  //   const id = e.currentTarget.id
  //   setShowPage(id)
  //   setIsOpen((prevState) => !prevState)
  // }

  //fix navigation for mobile. look at "hidden" class below?:

  return (
    <div
      // className='grid grid-cols-1 sm:grid-cols-12 '
      className={`${
        hideClass ? 'hidden' : 'grid grid-cols-1 sm:grid-cols-12 calcWidth'
      }`}
      id='hero'
    >
      <div className='col-span-8 place-self-center text-center sm:text-left md:justify-self-start'>
        <h1 className='text-white mb-4 text-xl md:text-3xl lg:text-5xl lg:leading-normal font-extrabold'>
          <span className='text-primary-500'>Hello, </span>
          <span className='text-secondary-100'>I&apos;m </span>
          <br />
          <TypeAnimation
            sequence={[
              'Rhys',
              1000,
              'a Junior Fontend Developer',
              1000,
              'Welsh',
              1000,
              'in development',
              1000,
            ]}
            wrapper='span'
            speed={20}
            deletionSpeed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={0}
          />
        </h1>
        <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-lg'>
          Professional Portfolio for Rhys Morgan / rhysmoggs. Currently in
          development.
        </p>
        <div>
          <Link
            href={'https://www.linkedin.com/in/rhysmoggs/'}
            target='_blank'
            rel='noreferrer'
            className='px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-100 bg-primary-500 hover:bg-secondary-200 text-black'
          >
            Hire Me @ LinkedIn
          </Link>
          <Link
            href={'https://github.com/rhysmoggs'}
            target='_blank'
            rel='noreferrer'
            className='px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-secondary-100 to-primary-500 hover:bg-secondary-800 text-white mt-3'
          >
            <span className='block bg-[#121212] hover:bg-secondary-800 rounded-full px-5 py-2'>
              GitHub
            </span>
          </Link>
        </div>
      </div>
      <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
        <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden'>
          <Image
            src='/images/headshot.jpg'
            alt='headshot of developer rhysmoggs'
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-auto'
            priority={true}
          />
        </div>
      </div>
    </div>
  )
}
