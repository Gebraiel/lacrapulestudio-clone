import React, { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { ThemeContext } from '../context/ThemeContext'

export default function Header() {
  const {isDark} =useContext(ThemeContext);
  return (
    <header className='absolute left-0 top-0 w-full z-10'>

      <div className='container'>
          <div className='flex justify-between'>
            <Link to="/" ><span className={`block w-[100px] ${isDark ? 'fill-white' : 'fill-black'}`}><Logo/></span></Link>
            <nav>
              <ul className={`flex gap-3 font-bold uppercase text-sm ${isDark?'text-white':'text-black'}`}>
                <li><NavLink to="/" className={({ isActive})=>`${isActive && (isDark?'border-b border-white/60' : 'border-b border-black')}`}>Home</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive})=>`${isActive && (isDark?'border-b border-white/60' : 'border-b border-black')}`}> Projects</NavLink></li>
                <li><NavLink to="/about" className={({ isActive})=>`${isActive && (isDark?'border-b border-white/60' : 'border-b border-black')}`}>About</NavLink></li>
              </ul>
            </nav>
          </div>
      </div>
    </header>
  )
}
