'use client'
import Link from 'next/link'
import { useEffect, useState, useTransition } from 'react'
import TabButton from '../components/TabButton'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

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

  const pathname = usePathname()
  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])

  return (
    <motion.section
      animate={{ opacity: 1, y: 0, scale: 1 }}
      initial={{ opacity: 0, y: 500, scale: 0.9 }}
      transition={{ duration: 0.6 }}
      className='text-white calcWidth flex-grow'
    >
      <div className='pt-8 md:px-4 xl:px-16'>
        <div className='md:mt-4 flex flex-col h-full'>
          {/* <h2 className='md:hidden text-center text-2xl md:text-4xl font-bold text-white md:mt-10 mb-4 md:mb-0'>
            About Me
          </h2> */}
        </div>
      </div>
      <div className='md:grid md:grid-cols-3'>
        <div className='w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] relative overflow-hidden mx-auto md:mt-28 md:pr-4 lg:pr-14'>
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
        <div className='py-8 md:px-8 md:mx-8 col-span-2'>
          <p className='text-sm xl:text-base'>
            I am a Front End Developer with commercial experience in a junior
            role for{' '}
            <Link
              href={'https://www.trainhyve.com/'}
              target='_blank'
              rel='noreferrer'
              className='font-bold'
            >
              HYVE
            </Link>
            , a revolutionary gym and wellbeing centre.
            <br />
            <br />
            Having graduated with a Diploma in Web Application Development from
            Code Institute in December 2022, I am happily a career changer.
            Previously, I held supervisory and team leader roles for hugely
            successful companies in the UK and Australia and have over 10 years
            of experience working within the telecommunications, energy and
            financial sectors.
            <br />
            <br />I have built multiple{' '}
            <Link href={'/projects'} className='font-bold'>
              projects
            </Link>{' '}
            and have collaborated on both personal and professional projects
            along with a Hackathon - a finance budget calculator and currency
            converter.
            <br />
            <br />
            I am currently studying towards certification as an AWS Cloud
            Practitioner & Solutions Architect and have previously studied Game
            Design at University.
            <br />
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
    </motion.section>
  )
}
