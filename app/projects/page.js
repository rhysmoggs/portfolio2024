'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import ProjectTag from '../components/ProjectTag'
import Footer from '../components/Footer'

const projectsData = [
  {
    id: 1,
    title: 'Bakes by Noemie',
    description:
      'A bakery website developed as part of Code Institutes Diploma. Early stages of learning HTML, CSS and basic web development fundamentals.',
    image: '/images/projects/ms1.png',
    github: 'https://github.com/rhysmoggs/ms1-bakes-by-noemie',
    techstack: ['HTML', 'CSS', 'Markdown'],
    tag: ['All', 'Web'],
  },
  {
    id: 2,
    title: 'Globe Trotter Quiz',
    description: 'Original travel and geography-themed quiz.',
    techstack: ['HTML', 'CSS', 'JavaScript', 'Markdown'],
    image: '/images/projects/ms2.png',
    github: 'https://github.com/rhysmoggs/ms2-quiz',
    tag: ['All', 'Web'],
  },
]

export default function Projects() {
  const [tag, setTag] = useState('All')

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <section className='text-white' id='projects'>
        <div className='py-8 px-4 sm:py-16 xl:px-16'>
          <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
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
            </div>
          </div>
          <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {Object.keys(filteredProjects).length !== 0 ? (
              filteredProjects.map((project) => {
                return (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    techstack={project.techstack}
                    image={project.image}
                    github={project.github}
                  />
                )
              })
            ) : (
              <>
                <h5 className='text-center text-2xl text-white mt-4 mb-8 md:mb-12'>
                  No current projects in {tag} category.
                </h5>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
