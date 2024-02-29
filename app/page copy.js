import About from './components/About'
import Hero from './components/Hero'

//add id's to tabs/page sections

export default function Home() {
  return (
    <main className='flex h-screen flex-col bg-[#121212] border border-pink-500'>
      {/* <div className='container min-h-screen mt-24 mx-auto px-12 py-4 border border-yellow-500'> */}
      <section className='pt-10'>
        <div className='grid grid-cols-12 mx-8 my-4'>
          <div className='hidden md:block col-span-2 mx-2 place-self-center border border-red-500'>
            <h1 className='text-white text-3xl'>01:</h1>
            <h1 className='text-white text-3xl'>HERO</h1>
          </div>
          <div className='col-span-10 border border-blue-500'>
            <Hero />
          </div>
        </div>
        <div className='grid grid-cols-12 mx-8 my-4'>
          <div className='hidden md:block col-span-2 mx-2 place-self-center border border-red-500'>
            <h1 className='text-white text-3xl'>02:</h1>
            <h1 className='text-white text-3xl'>About</h1>
          </div>
          <div className='col-span-10 border border-blue-500'>
            <About />
          </div>
        </div>
      </section>
      {/* </div> */}
    </main>
  )
}
