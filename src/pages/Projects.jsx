import React, { useContext, useEffect, useState } from 'react'
import { AnimationContext } from '../context/AnimationContext';
import SlideDown from '../ui/Animation/SlideDown';
import ProjectList from '../ui/ProjectList';
import ClipLine from '../ui/ClipLine';
import { ThemeContext } from '../context/ThemeContext';
import SplitText from '../ui/Animation/SplitText';
import FadeUp from '../ui/Animation/FadeUp';
import FadeIn from '../ui/Animation/FadeIn';
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
    
  ]
export default function Projects() {
  const [filter,setFilter] = useState("");
  const {setIsDark} = useContext(ThemeContext);

  useEffect(()=>{
    setIsDark(true);
  },[])
  return (
      <SlideDown >
        <div className='container'>
          <div>
            <div>
                <span className='font-jetbrains text-xs uppercase text-white/60'>Filter By</span>
                {filter && <span className='font-jetbrains text-xs uppercase text-white/60 ml-10 cursor-pointer' onClick={()=>setFilter("")}>Reset </span>}
            </div>
            <ul className='mt-8'>
                {categories.map((category)=>{
                  return(
                      <li onClick={()=>setFilter(category)}className={`text-[clamp(2.3125rem,1.4963rem_+_3.4824vw,6.9375rem)] leading-none uppercase font-saans font-bold cursor-pointer ${category == filter  ? 'text-white': filter =='' ?"text-white  hover:text-white/60 duration-300" :"text-white/60"}`} >
                        <SplitText Animation={FadeUp}>
                          {category}
                        </SplitText>
                      </li>
                  )
                })}
            </ul>
          </div>
          <div className='mt-20'>
            <ClipLine/>
            <b className='block my-5 text-center uppercase text-sm text-white/60'><FadeIn>Selected Projects</FadeIn></b>
            <ProjectList projects={projects} filter={filter}/>
          </div>
        </div>

      </SlideDown>
  )
}
