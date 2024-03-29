import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col pt-6 items-center'>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} pageNo={link.pageNo} />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay
