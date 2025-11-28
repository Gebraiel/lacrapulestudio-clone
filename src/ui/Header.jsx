import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'

export default function Header() {
  return (
    <header className='absolute left-0 top-0 w-full z-10'>

      <div className='container'>
          <div className='flex justify-between'>
            <Link to="/" ><span className={`block w-[100px] dark:fill-white fill-black`}><Logo/></span></Link>
            <nav>
              <ul className={`flex gap-3 font-bold uppercase text-sm dark:text-white text-black`}>
                <li><NavLink to="/" className={({ isActive})=>`${isActive && 'dark:border-b dark:border-white/60 border-b border-black'}`}>Home</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive})=>`${isActive && 'dark:border-b dark:border-white/60 border-b border-black'}`}> Projects</NavLink></li>
                <li><NavLink to="/about" className={({ isActive})=>`${isActive && 'dark:border-b dark:border-white/60 border-b border-black'}`}>About</NavLink></li>
              </ul>
            </nav>
          </div>
      </div>
    </header>
  )
}
