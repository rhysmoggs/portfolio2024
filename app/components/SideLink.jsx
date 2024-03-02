// 'use client'
import Link from 'next/link'
import React from 'react'

function SideLink({ href, title, pageNo, onClick }) {
  // const [isOpen, setIsOpen] = useState()
  // const toggleView = () => {
  //   console.log('isOpen child: ', isOpen)
  //   setIsOpen(!isOpen)
  // }
  return (
    <>
      <Link
        href={href}
        onClick={onClick}
        className='border border-green-500 m-2 text-right'
      >
        <h1 className='text-white text-xl'>{0 + `${pageNo}`}</h1>
        <h1 className='text-white text-2xl md:text-4xl lg:text-5xl'>{title}</h1>
      </Link>
    </>
  )
}

export default SideLink
