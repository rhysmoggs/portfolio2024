import React from 'react'

function ProjectTag({ name, onClick, isSelected }) {
  const buttonStyles = isSelected
    ? 'text-white border-primary-500'
    : 'text-white-[#ADB7BE]border-secondary-600 hover:border-white'
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-3 py-2 text-base md:text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  )
}

export default ProjectTag
