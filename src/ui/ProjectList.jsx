import React from 'react'

export default function ProjectList({projects}) {
  return (
    <div className='flex justify-between flex-wrap gap-y-3'> 
        {projects.map((project)=>{
           return(<div className='w-[calc(100%_/_3_-_12px)]'>
                <div className='aspect-[4/5] project-overlay scale-100 group border-0'>
                    <img className='w-full h-full object-cover scale-100 group-hover:scale-95 duration-500' src={project.preview} alt={project.name} />
                </div>
                <div className='text-white -translate-y-15 pl-5'>
                    <b className='font-defonte uppercase text-4xl'>{project.name}</b>
                    <p className='font-saans text-sm'>{project.client}</p>
                    <ul className='flex gap-2 mt-2'>
                        {project.categories.map((category)=>{
                            return <li className='font-jetbrains text-[9px] border p-1 rounded-sm'>{category}</li>
                        })}
                    </ul>
                </div>
            </div>)
        })}
    </div>
  )
}
