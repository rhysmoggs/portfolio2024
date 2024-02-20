import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'

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
              <button className='rounded-full border-2 border-red-500 px-6 py-3 text-xl cursor-pointer'>
                All
              </button>
              <button className='rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer'>
                Web
              </button>
            </div>
          </div>
          <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {projectsData.map((project) => {
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
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
