import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <section className='text-white' id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
          <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-xl md:text-3xl font-bold text-white mb-4'>
              Projects
            </h2>
          </div>
          <div>
            <ProjectCard />
          </div>
        </div>
      </section>
    </main>
  )
}
