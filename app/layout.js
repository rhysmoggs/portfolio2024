import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

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
        {/* <main className='flex min-h-screen flex-col'>{children}</main> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
