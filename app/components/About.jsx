'use client'
import Link from 'next/link'
import { useState, useTransition } from 'react'
import TabButton from '../components/TabButton'

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

const About = ({ hideClass }) => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }
  return (
    // <section className='text-white' id='about'>
    <section className={`${hideClass ? 'hidden' : 'text-white'}`} id='about'>
      <div className='py-2 px-2 xl:px-8'>
        <p className='text-base'>
          {/* add attributes to HYVE link below: */}I am a Front End Developer
          with commercial experience in a junior role for{' '}
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
          Having graduated with a Diploma in Web Application Development from
          Code Institute, I am happily a career changer. Previously, I held
          supervisory and team leader roles for hugely successful companies in
          the UK and Australia and have over 10 years of experience working
          within the telecommunications, energy and financial sectors.
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
          and have collaborated on both personal and professional projects along
          with a Hackathon - a finance budget calculator and currency converter.
          <br />
          <br />
          I am currently studying towards certification as an AWS Cloud
          Practitioner & Solutions Architect and have previously studied Game
          Design at University.
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
        <div className='mt-2'>{TAB_DATA.find((t) => t.id === tab).content}</div>
      </div>
    </section>
  )
}

export default About
