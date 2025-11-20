import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className='container'>
        <div className="flex justify-between items-center text-[clamp(0.625rem,0.5478rem_+_0.3294vw,1.0625rem)] font-bold font-jetbrains uppercase">
          <p>LA CRAPULE STUDIO &copy; <span className='year'>{year}</span><br/> ALL RIGHTS RESERVED</p>
          <p className='cursor-pointer hover:text-gray-500 duration-300'>Made By Anime Z.</p>
        </div>
      </div>
    </footer>
  )
}
