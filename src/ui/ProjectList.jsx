import React, { useEffect, useState } from 'react'
import FadeIn from './Animation/FadeIn';

export default function ProjectList({projects,filter}) {
  const [filteredProjects,setFilteredProjects] = useState([]);
  console.log(filteredProjects)
  useEffect(()=>{
    if(filter == ''){
        setFilteredProjects(projects);
    }else{
        const newProjects = projects.filter((project)=>project.categories.includes(filter) );
        setFilteredProjects(newProjects)
    }
  },[filter])
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
        {filteredProjects.map((project)=>{
           return(
           <FadeIn key={project.name}>
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
            </FadeIn>)
        })}
    </div>
  )
}
