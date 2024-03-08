import Link from 'next/link'
import React from 'react'

const NavLink = ({ href, title, pageNo }) => {
  return (
    <>
      <Link
        href={href}
        className='block py-4 text-black sm:text-xl rounded hover:text-white'
      >
        <h1 className='text-white text-xl'>{0 + `${pageNo}`}</h1>
        <h1 className='text-white md:font-medium xl:font-semibold text-2xl md:text-4xl lg:text-5xl'>
          {title}
        </h1>
      </Link>
    </>
  )
}

export default NavLink
