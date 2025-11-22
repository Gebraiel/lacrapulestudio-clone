import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'

export default function Header() {
  const path = useLocation();
  
  return (
    <header className='absolute left-0 top-0 w-full z-10'>

      <div className='container'>
          <div className='flex justify-between'>
            <Link to="/" ><span className='block w-[100px]'><Logo/></span></Link>
            <nav>
              <ul className='flex gap-3 font-bold uppercase text-sm'>
                <li><NavLink to="/" className={({ isActive})=>`${isActive && 'border-b border-black'}`}>Home</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive})=>`${isActive && 'border-b border-black'}`}> Projects</NavLink></li>
                <li><NavLink to="/about" className={({ isActive})=>`${isActive && 'border-b border-black'}`}>About</NavLink></li>
              </ul>
            </nav>
          </div>
      </div>
    </header>
  )
}
