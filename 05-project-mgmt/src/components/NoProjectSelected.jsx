import React from 'react'
import Button from './Button'

const NoProjectSelected = ({onStartAddProject}) => {
  return (
    <div className='mt-24 text-center w-2/3'>
        {/* <img src="../assets/no-projects.png" alt="An empty task list" className='w-16 h-16 object-contain mx-auto' /> */}
        <h2 className='text-bold text-xl text-stone-500 my-4'>No project selected</h2>
        <p>Select a project or get started with a new one</p>
        <p className='mt-8'>
           <Button  onClick={onStartAddProject}>Create New Project</Button>
        </p>
    </div>
  )
}

export default NoProjectSelected
