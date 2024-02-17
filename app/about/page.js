import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <section className='text-white' id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
          <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-xl md:text-3xl font-bold text-white mb-4'>
              About Me
            </h2>
            <p>
              {/* add attributes to HYVE link below: */}I am a Front End
              Developer with commercial experience in a junior role for{' '}
              <Link href={'https://www.trainhyve.com/'}>HYVE</Link> , a
              revolutionary gym and wellbeing centre.
              <br />
              {/* add date of graduation? and link to CI website?: */}
              Having graduated with a Diploma in Web Application Development
              from Code Institute, I am happily a career changer. Previously, I
              held supervisory and team leader roles for hugely successful
              companies in the UK and Australia and have over 10 years of
              experience working within the telecommunications, energy and
              financial sectors.
              <br />
              {/* add link to Projects/GitHub page below - add span?: */}I have
              built multiple{' '}
              <Link href={'https://github.com/rhysmoggs'} className='font-bold'>
                projects
              </Link>{' '}
              and have collaborated on both personal and professional projects
              along with a Hackathon - a finance budget calculator and currency
              converter.
              <br />
              I am currently studying towards certification as an AWS Cloud
              Practitioner & Solutions Architect and have previously studied
              Game Design at University.
              <br />
              {/* add link to Projects/GitHub page below: */}
              Please take some time to look around.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
