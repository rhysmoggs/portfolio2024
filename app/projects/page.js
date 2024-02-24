'use client'
import { useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import ProjectTag from '../components/ProjectTag'
import Footer from '../components/Footer'
import { motion, useInView } from 'framer-motion'

const projectsData = [
  {
    id: 1,
    title: 'Morgan & Co',
    description:
      'A furniture e-commerce store. Full-stack Django project using stripe payments and webhooks..',
    techstack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'Flask',
      'PostgreSQL',
      'MongoDB',
      'materializeCSS',
      'Heroku',
      'Markdown',
    ],
    image: '/images/projects/ms4.png',
    github: 'https://github.com/rhysmoggs/ms4-morgan-and-co',
    tag: ['All', 'Web', 'Database', 'E-commerce'],
  },
  {
    id: 2,
    title: 'The Cocktail Cabinet',
    description:
      'A cocktail recepie sharing website, showcasing database management.',
    techstack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'Flask',
      'PostgreSQL',
      'MongoDB',
      'materializeCSS',
      'Heroku',
      'Markdown',
    ],
    image: '/images/projects/ms3.png',
    github: 'https://github.com/rhysmoggs/ms3-final-cocktails',
    tag: ['All', 'Web', 'Database'],
  },
  {
    id: 3,
    title: 'Globe Trotter Quiz',
    description: 'Original travel and geography-themed quiz.',
    techstack: ['HTML', 'CSS', 'JavaScript', 'Markdown'],
    image: '/images/projects/ms2.png',
    github: 'https://github.com/rhysmoggs/ms2-quiz',
    tag: ['All', 'Web'],
  },
  {
    id: 4,
    title: 'WIP: Globe Trotter Quiz v2.0',
    description:
      'WIP: Redevelopment of original quiz idea to advance NextJS skills.',
    image: '/images/projects/ms2.png',
    github: 'https://github.com/rhysmoggs/nextjs13-quiz',
    techstack: ['HTML', 'CSS', 'JavaScript', 'Next.js'],
    tag: ['All', 'Web', 'Database'],
  },
  {
    id: 5,
    title: 'Bakes by Noemie',
    description:
      'A bakery website developed as part of Code Institutes Diploma. Early stages of learning HTML, CSS and basic web development fundamentals.',
    image: '/images/projects/ms1.png',
    github: 'https://github.com/rhysmoggs/ms1-bakes-by-noemie',
    techstack: ['HTML', 'CSS', 'Markdown'],
    tag: ['All', 'Web'],
  },
]

export default function Projects() {
  const [tag, setTag] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <section className='text-white' id='projects'>
        <div className='py-8 px-4 sm:py-16 xl:px-16 min-h-screen'>
          <div className='mt-4 text-left flex flex-col h-full'>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
              Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
              <ProjectTag
                onClick={handleTagChange}
                name={'All'}
                isSelected={tag === 'All'}
              />
              <ProjectTag
                onClick={handleTagChange}
                name={'Web'}
                isSelected={tag === 'Web'}
              />
              <ProjectTag
                onClick={handleTagChange}
                name={'Mobile'}
                isSelected={tag === 'Mobile'}
              />
              <ProjectTag
                onClick={handleTagChange}
                name={'Database'}
                isSelected={tag === 'Database'}
              />
              <ProjectTag
                onClick={handleTagChange}
                name={'E-commerce'}
                isSelected={tag === 'E-commerce'}
              />
            </div>
          </div>
          <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {Object.keys(filteredProjects).length !== 0 ? (
              filteredProjects.map((project, index) => (
                <motion.li
                  key={index}
                  variants={cardVariants}
                  initial='initial'
                  animate={isInView ? 'animate' : 'initial'}
                  transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    techstack={project.techstack}
                    image={project.image}
                    github={project.github}
                  />
                </motion.li>
              ))
            ) : (
              <>
                <h5 className='text-center text-2xl text-white mt-4 mb-8 md:mb-12'>
                  No current projects in {tag} category.
                </h5>
              </>
            )}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  )
}
