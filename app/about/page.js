import Navbar from '../components/Navbar'

export default function About() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
          About
        </h1>
      </div>
    </main>
  )
}
