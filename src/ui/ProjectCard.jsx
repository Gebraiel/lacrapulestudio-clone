import FadeIn from './Animation/FadeIn'
import SplitText from './SplitText';
import BlurText from './Animation/BlurText';
import { Link } from 'react-router-dom';
export default function ProjectCard({project}) {
  return (
    <FadeIn key={project.name}>
        <Link to="/project" className='block aspect-[4/5] project-overlay scale-100 group border-0'>
            <img className='w-full h-full object-cover scale-100 group-hover:scale-95 duration-500' src={project.preview} alt={project.name} />
        </Link>
        <div className='text-white -translate-y-15 pl-5'>
             <b className='font-defonte uppercase text-4xl title filter'>
                <SplitText Animation={BlurText}>
                   {project.name}
                </SplitText>
            </b>

            <p className='font-saans text-sm'>{project.client}</p>
            <ul className='flex gap-2 mt-2'>
                {project.categories.map((category)=>{
                    return <li className='font-jetbrains text-[9px] border p-1 rounded-sm'>{category}</li>
                })}
            </ul>
        </div>
    </FadeIn>
  )
}
