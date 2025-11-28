export default function CTAButton() {
  return (
    <div className="group w-fit m-auto">
        <button className='cursor-pointer text-white text-5xl size-44 border border-white flex justify-center items-center rounded-2xl after:content-[""] after:block after:absolute relative after:w-full after:h-full after:outline-dashed after:outline-white/60 after:scale-90 group-hover:after:scale-125 group-hover:-rotate-12 group-hover:after:rotate-12 group-hover:scale-90 duration-300 after:duration-300 after:rounded-xl'>
        &#8594;
        </button>
        <p className='uppercase text-center mt-5 text-white font-jetbrains text-sm w-fit m-auto overflow-hidden after:content-[""] after:block after:absolute  relative after:-bottom-0 after:-translate-x-full group-hover:after:translate-x-0 after:duration-300 after:left-0 after:w-full after:h-0.5 after:bg-white '>
        Let's Talk
        </p>
    </div>
  )
}
