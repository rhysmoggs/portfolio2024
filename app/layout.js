import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Image from 'next/image'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'rhysmoggs | dev',
  description: 'Software Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='flex h-screen flex-col bg-[#121212]/95'>
          <div className='-z-50'>
            <Image
              src='/images/bg.jpg'
              alt='city skyline at night'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              priority={true}
            />
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
