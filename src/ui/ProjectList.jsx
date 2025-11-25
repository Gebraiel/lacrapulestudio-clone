import React, { useEffect, useState } from 'react'
import FadeIn from './Animation/FadeIn';
import ProjectCard from './ProjectCard';

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
            <ProjectCard project={project}/>
           )
        })}
    </div>
  )
}
