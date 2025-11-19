import React from 'react'

export default function About() {
  const paragraphs = ["Since 2021, LaCrapule Studio has been building a distinct visual language rooted in precision, curiosity, and cultural relevance. We aim to create bold visuals, that blur the lines between reality and fiction.","From fashion to music, tech to art, we move across worlds to craft images that speak to now. Whether it's a product, a film, or a digital experiment - each project is a way to push boundaries and tell stories that leave a mark."]
  const clients = [
    {
      name:"Audemars Piguet",
      image:"/clients/audemars.webp"
    },
    {
      name:"Nike",
      image:"/clients/nike.webp"
    },
    {
      name:"Prada",
      image:"/clients/prada.webp"
    },
    {
      name:"Google",
      image:"/clients/google.webp"
    },
    {
      name:"Coperni Lancôme",
      image:"/clients/coperni-lancome.webp"
    },
    {
      name:"Rabanne",
      image:"/clients/rabanne.webp"
    },
    {
      name:"L'Oreal",
      image:"/clients/loreal.webp"
    },
    {
      name:"Lacoste",
      image:"/clients/lacoste.webp"
    },
    {
      name:"Carolina Herrera",
      image:"/clients/carolina-herrera.webp"
    },
    {
      name:"Vogue Italia",
      image:"/clients/vogue.webp"
    },
    {
      name:"Booba",
      image:"/clients/booba.webp"
    },


  ]
  const presses =["Vogue Italia","Vogue China", "Paper Magazine", "Konbini", "Libération", "Highsnobiety", "Exhibition Magazine"]
  return (
    <>
      <section className='py-20'>
        <div className='container'>
          <ul className='w-[90%] max-w-[1250px] space-y-5' >
            {paragraphs.map((p,index)=>{
              return <li className='text-4xl font-bold'>

                <p><span className='mr-15'>{index+1}.</span>{p}</p>
              </li>
            })}
          </ul>

        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex">
            <div className="w-full grid gap-10 grid-cols-2 grid-rows-2" >
              <div>
                <b className='text-gray-500 text-xs font-jetbrains'>TRUSTED US</b>
                <ul className='flex flex-wrap gap-x-2 justify-start'>
                  {clients.map((client)=>{
                    return <li key={client.name} className='text-sm font-bold after:content-[""] after:block after:w-full after:h-[2px] after:bg-black after:absolute relative after:left-0 after:bottom-[3px] after:origin-right  hover:after:scale-x-0 after:duration-300' image={client.image}>
                      {client.name},
                    </li>
                  })}
                </ul>
              </div>
              <div>
                <b className='text-gray-500 text-xs font-jetbrains'>TRUSTED US</b>
                <ul className='flex flex-wrap gap-x-2 justify-start'>
                  {presses.map((press)=>{
                    return <li key={press} className='text-sm font-bold after:content-[""] after:block after:w-full after:h-[1px] after:bg-black after:absolute relative after:left-0 after:bottom-[0px] after:origin-left after:scale-x-0  hover:after:scale-x-100  after:duration-300' >
                      {press},
                    </li>
                  })}
                </ul>
              </div>
              <div>
                <b className='text-gray-500 text-xs font-jetbrains'>TRUSTED US</b>
                <ul className='flex flex-wrap gap-x-2 justify-start'>
                  {clients.map((client)=>{
                    return <li key={client.name} className='text-sm font-bold after:content-[""] after:block after:w-full after:h-[2px] after:bg-black after:absolute relative after:left-0 after:bottom-[3px] after:origin-right  hover:after:scale-x-0 after:duration-300' image={client.image}>
                      {client.name},
                    </li>
                  })}
                </ul>
              </div>
              <div>
                <b className='text-gray-500 text-xs font-jetbrains'>TRUSTED US</b>
                <ul className='flex flex-wrap gap-x-2 justify-start'>
                  {clients.map((client)=>{
                    return <li key={client.name} className='text-sm font-bold after:content-[""] after:block after:w-full after:h-[2px] after:bg-black after:absolute relative after:left-0 after:bottom-[3px] after:origin-right  hover:after:scale-x-0 after:duration-300' image={client.image}>
                      {client.name},
                    </li>
                  })}
                </ul>
              </div>

            </div>
            <div className='w-full'></div>
          </div>
        </div>
      </section>

    </>
  )
}
