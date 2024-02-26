'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
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
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Professional Portfolio for Rhys Morgan / rhysmoggs. Currently in
            development.
          </p>
          <div>
            <Link
              href={'https://www.linkedin.com/in/rhysmoggs/'}
              target='_blank'
              rel='noreferrer'
              className='px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-100 bg-primary-500 hover:bg-secondary-200 text-black'
              // className='px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-100 to-primary-500 hover:bg-secondary-200 text-black'
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
    </section>
  )
}

export default HeroSection
