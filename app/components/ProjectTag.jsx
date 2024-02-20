import React from 'react'

function ProjectTag({ name, onClick, isSelected }) {
  const buttonStyles = isSelected
    ? 'text-white bg-red-500'
    : 'text-white-[#ADB7BE]border-slate-600 hover:border-white'
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default ProjectTag
