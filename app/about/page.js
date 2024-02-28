'use client'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { useState, useTransition } from 'react'
import TabButton from '../components/TabButton'
import Image from 'next/image'
import Footer from '../components/Footer'

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2 md:pl-0 md:grid md:grid-cols-3 gap-2'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>Python</li>
        <li>Django</li>
        <li>Flask</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>Web Application Development (Diploma - Merit)</li>
        <li>Code Institute, Dublin. Remote.</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-2'>
        <li>AWS Cloud Practitioner...pending</li>
        <li>AWS Solutions Architect...pending</li>
      </ul>
    ),
  },
]

export default function About() {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <section className='text-white' id='about'>
        <div className='pt-8 md:pt-24 lg:pt-32 px-4 xl:px-16'>
          <div className='mt-4 text-left flex flex-col h-full'>
            <h2 className='text-center text-4xl font-bold text-white mt-16 mb-4 md:mb-0'>
              About Me
            </h2>
          </div>
        </div>
        <div className='md:grid md:grid-cols-2 gap-8 px-4 xl:gap-16 xl:px-16 min-h-screen'>
          <div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden mx-auto md:mt-28'>
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
          <div className='py-8 px-4 sm:py-16 xl:px-16 min-h-screen'>
            <p className='text-base lg:text-lg'>
              {/* add attributes to HYVE link below: */}I am a Front End
              Developer with commercial experience in a junior role for{' '}
              <Link
                href={'https://www.trainhyve.com/'}
                target='_blank'
                rel='noreferrer'
              >
                HYVE
              </Link>
              , a revolutionary gym and wellbeing centre.
              <br />
              <br />
              {/* add date of graduation? and link to CI website?: */}
              Having graduated with a Diploma in Web Application Development
              from Code Institute, I am happily a career changer. Previously, I
              held supervisory and team leader roles for hugely successful
              companies in the UK and Australia and have over 10 years of
              experience working within the telecommunications, energy and
              financial sectors.
              <br />
              <br />
              {/* add link to Projects/GitHub page below - add span?: */}I have
              built multiple{' '}
              <Link
                href={'https://github.com/rhysmoggs'}
                target='_blank'
                rel='noreferrer'
                className='font-bold'
              >
                projects
              </Link>{' '}
              and have collaborated on both personal and professional projects
              along with a Hackathon - a finance budget calculator and currency
              converter.
              <br />
              <br />
              I am currently studying towards certification as an AWS Cloud
              Practitioner & Solutions Architect and have previously studied
              Game Design at University.
              <br />
              {/* add link to Projects/GitHub page below: */}
              Please take some time to look around.
            </p>
            <div className='flex flex-row justify-start my-8'>
              <TabButton
                selectTab={() => handleTabChange('skills')}
                active={tab === 'skills'}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange('education')}
                active={tab === 'education'}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange('certifications')}
                active={tab === 'certifications'}
              >
                Certifications
              </TabButton>
            </div>
            <div className='mt-2'>
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
