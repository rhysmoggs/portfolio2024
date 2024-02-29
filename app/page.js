import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <main className='flex h-screen flex-col bg-[#121212] border border-pink-500'>
      {/* <div className='container min-h-screen mt-24 mx-auto px-12 py-4 border border-yellow-500'> */}
      <HeroSection />
      {/* </div> */}
    </main>
  )
}
