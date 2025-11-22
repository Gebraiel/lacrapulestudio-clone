import React, { useState } from 'react'
import { AnimationContext } from '../context/AnimationContext';
import SlideDown from '../ui/Animation/SlideDown';
import ProjectList from '../ui/ProjectList';

export default function Projects() {
  const [start,setStart] = useState(false);
  const [filter,setFilter] = useState("");
  const categories = ["creative direction","3d & cgi","mixed media","post production"];
  const projects = [
  
    {
      name:"coperni",
      preview:"/clients/audemars.avif",
      client:"Disney X Coperni",
      categories:["creative direction","3d & cgi"]
    },
    {
      name:"Audemars Piguet",
      preview:"/clients/audemars.avif",
      client:"ROYAL OAK-1017 ALYX 95M",
      categories:["creative direction","3d & cgi","post production"]
    },
    {
      name:"MCM",
      preview:"/clients/audemars.avif",
      client:"PINK & BLUE VISETOS",
      categories:["creative direction","3d & cgi","post production"]
    },
    {
      name:"MCM",
      preview:"/clients/audemars.avif",
      client:"PINK & BLUE VISETOS",
      categories:["creative direction","3d & cgi","post production"]
    },
  ]
  return (
    <AnimationContext.Provider value={{ start, setStart }}>
      <SlideDown bg="#1d1d1d">
        <div className='container'>
          <div>
            <div>
                <span className='font-jetbrains text-xs uppercase text-white/60'>Filter By</span>
                {filter && <span className='font-jetbrains text-xs uppercase text-white/60 ml-10 cursor-pointer' onClick={()=>setFilter("")}>Reset </span>}
            </div>
            <ul className='mt-8'>
                {categories.map((category)=>{
                  return(
                      <li onClick={()=>setFilter(category)}className='text-[clamp(2.3125rem,1.4963rem_+_3.4824vw,6.9375rem)] leading-none text-white uppercase font-saans font-bold cursor-pointer hover:text-white/60 duration-300 ' >{category}</li>
                  )
                })}
            </ul>
          </div>
          <ProjectList projects={projects}/>
        </div>

      </SlideDown>
    </AnimationContext.Provider>
  )
}
