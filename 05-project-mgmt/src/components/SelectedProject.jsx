import React from 'react'
import Tasks from './Tasks'

const SelectedProject = ({project, onDelete}) => {
    const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
        year : 'numeric',
        month : 'short',
        day: 'numeric'
    })
  return (
    <div className='w-[35rem] mt-16'>
      <header className='pb-4 mb-4 border-b-2 border-stone-300'>
       <div className='flex items-center justify-between'>
            <h1 className='tetx-3l font-bold text-stone-600 mb-2'>{project.title}</h1>
            <button className='text-red-500 hover:text-red-800' onClick={onDelete}>Delete</button>
        </div>
        <p className='mb-4 text-stone-400'>{formattedDate}</p>
        <p className='text-stone-600 whitespace-pre-wrap'>{project.desc}</p>
      </header>
      <div>
        {/* <Tasks /> */}
      </div>
    </div>
  )
}

export default SelectedProject
