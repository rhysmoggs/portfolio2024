import Sidenav from './components/Sidenav'

export default function Home() {
  return (
    <main className='flex h-screen flex-col bg-[#121212] border border-pink-500'>
      <section className='pt-2'>
        <div className='hidden md:block col-span-2 mx-2 border border-red-500'>
          <Sidenav />
        </div>
      </section>
    </main>
  )
}
