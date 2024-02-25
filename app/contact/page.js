'use client'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Contact() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <section className='text-white' id='contact'>
        <div className='py-8 px-4 sm:py-16 xl:px-16 min-h-screen'>
          <div className='mt-4 text-left flex flex-col h-full'>
            <h2 className='text-center text-4xl font-bold text-white mt-16 mb-8 md:mb-12'>
              Contact
            </h2>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
