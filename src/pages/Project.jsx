import { useEffect, useLayoutEffect } from 'react';
import BlurText from '../ui/Animation/BlurText';
import FadeUp from '../ui/Animation/FadeUp';
import ClipLine from '../ui/ClipLine';
import SplitText from '../ui/SplitText';
import { Link } from 'react-router-dom';
import FadeIn from '../ui/Animation/FadeIn';
import Logo from '../ui/Logo';
import Footer from '../ui/Footer';
import FadeLeft from '../ui/Animation/FadeLeft';
import FadeRight from '../ui/Animation/FadeRight';

export default function Project() {
    useLayoutEffect(() => {
    document.documentElement.classList.add("dark")
    }, []);
    useEffect(()=>{
        window.scrollTo(0,0);
    })
  return (
    <>

        <section className='h-screen relative'>
            <img src="/project-bg.avif" className=' absolute size-full inset-0 object-cover object-center' alt="Project Background" />
            <div className="absolute inset-0 size-full bg-black/20"></div>
            <div className="3xl:py-32 py-15 h-full">
                <div className="container sm:!px-30 !px-10 z-0  relative h-full">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                        <h1 className='text-[clamp(3.125rem,1.2279rem_+_8.0941vw,13.875rem)] leading-none text-white uppercase font-defonte'>
                        <SplitText Animation={BlurText}>
                                coperni
                            </SplitText></h1>
                        <FadeUp>
                            <p className='text-[clamp(0.9375rem,0.7721rem_+_0.7059vw,1.875rem)] text-white font-saans'>[Disney X Coperni]</p>
                        </FadeUp>
                    </div>
                    <div className='flex justify-between items-end'>
                        <span className='text-white text-2xl font-bold'><FadeUp>2025</FadeUp></span>
                        <ul className='flex flex-col gap-2'>
                            <li className='font-jetbrains text-sm bg-white px-3 py-1 rounded-sm w-fit'><FadeUp>Creative Direction</FadeUp></li>
                            <li className='font-jetbrains text-sm bg-white px-3 py-1 rounded-sm w-fit'><FadeUp>3D & CGI</FadeUp></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>

        </section>
        <section >
            <div className="container !sm:px-30 !px-10">
                <div className='flex lg:flex-row flex-col justify-between gap-5 py-10'>
                    <p className="w-full md:text-3xl text-xl text-white max-w-2xl leading-none">
                        <span className="px-10"></span><SplitText Animation={FadeUp}>
                            For Coperni's collaboration with Disney, we reimagined three iconic products through a series of 3D animations. Playful metamorphoses blending fashion and fantasy, where each object shifts, twists and reveals its hidden magic. A tribute to the power of transformation.
                        </SplitText>
                    </p>
                    <div className='lg:w-1/4 w-full grid lg:grid-cols-2 lg:grid-rows-2 sm:grid-cols-4 sm:grid-rows-1 grid-cols-1 grid-rows-1 gap-3'>
                        <FadeIn>
                            <b className="text-gray-500 text-[clamp(0.625rem,0.5478rem_+_0.3294vw,1.0625rem)] font-jetbrains uppercase">
                                Directed
                            </b>
                            <p className='text-white font-bold'>LaCrapule Studio</p>
                        </FadeIn>
                        <FadeIn>
                            <b className="text-gray-500 text-[clamp(0.625rem,0.5478rem_+_0.3294vw,1.0625rem)] font-jetbrains uppercase">
                                PRODUCED
                            </b>
                            <p className='text-white font-bold'>LaCrapule Studio</p>
                        </FadeIn>
                        <FadeIn>
                            <b className="text-gray-500 text-[clamp(0.625rem,0.5478rem_+_0.3294vw,1.0625rem)] font-jetbrains uppercase">
                                CRI TEAR
                            </b>
                            <p className='text-white font-bold'>Benjamin Unger,
Clément Sachot, Greg Pfeiffer, Késiah</p>
                        </FadeIn>
                        <FadeIn>
                            <b className="text-gray-500 text-[clamp(0.625rem,0.5478rem_+_0.3294vw,1.0625rem)] font-jetbrains uppercase">
                               SOUND
                            </b>
                            <p className='text-white font-bold'>Guapo Du Soleil</p>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-10'>
            <div className='container !sm:px-30 !px-10'>
                <div className="flex flex-col gap-6">
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-6'>
                    <FadeIn>
                        <img src="/project/image-1.avif" alt="Project-Gallery 1" />
                    </FadeIn>
                    <FadeIn>
                        <img src="/project/image-2.avif" alt="Project-Gallery 2" />

                    </FadeIn>
                </div>
                <div className='grid sm:grid-cols-3 grid-cols-1 gap-6'>
                    <FadeIn>
                        <img src="/project/image-3.avif" alt="Project-Gallery 3" />
                    </FadeIn>
                    <FadeIn>
                        <img src="/project/image-4.avif" alt="Project-Gallery 4" />

                    </FadeIn>
                    <FadeIn>
                        <img src="/project/image-5.avif" alt="Project-Gallery 5" />

                    </FadeIn>
                </div>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-6'>
                    <FadeIn>
                        <img src="/project/image-6.avif" alt="Project-Gallery 6" />
                    </FadeIn>
                    <FadeIn>
                        <img src="/project/image-7.avif" alt="Project-Gallery 7" />

                    </FadeIn>
                </div>
                <div className='grid sm:grid-cols-3 grid-cols-1 gap-6'>
                    <FadeIn>
                         <img src="/project/image-8.avif" alt="Project-Gallery 8" />
                    </FadeIn>
                    <FadeIn>
                        <img src="/project/image-9.avif" alt="Project-Gallery 9" />
                    </FadeIn>
                    <FadeIn>
                        <img src="/project/image-10.avif" alt="Project-Gallery 10" />
                    </FadeIn>
                </div>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-6'>
                    <FadeIn>
                        <img src="/project/image-11.avif" alt="Project-Gallery 11" />
                    </FadeIn>
                    <FadeIn>
                        <img src="/project/image-12.avif" alt="Project-Gallery 12" />
                    </FadeIn>
                </div>
            </div>

            </div>
        </section>

        <section>

            <ClipLine/>
            <div className='container'>
                <div className="flex sm:flex-row flex-col gap-5 justify-between items-center ">
                    <FadeRight>
                        <b className='text-white sm:text-5xl text-4xl'>Explore More</b>
                    </FadeRight>
                    <FadeLeft>
                        <button className="w-fit text-black bg-white cursor border border-dashed border-white hover:bg-transparent hover:text-white duration-300 font-jetbrains px-5 py-2 text-sm uppercase rounded-md">
                      See All Projects
                    </button>
                    </FadeLeft>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-5 my-15'>
                    <FadeIn>

                        <div className='group after:content-[""] after:block after:size-full after:absolute relative after:inset-0 after:scale-95 after:bg-transparent after:border after:border-dashed after:border-white/60 '>
                                <Link to="/project" className='block group-hover:scale-90 z-1 duration-500  relative '>
                                <div className='flex flex-col justify-end p-5 absolute left-0 bottom-0 text-white z-10 bg-black/30 w-full h-full' >
                                    <b className='text-[clamp(1.9375rem,1.3971rem_+_2.3059vw,5rem)] leading-none font-defonte uppercase tracking-tight'>Lancome</b>
                                    <p className='text-[clamp(0.625rem,0.5147rem_+_0.4706vw,1.25rem)] text-white/60 uppercase'>24 GIFTING CAMPAIGN</p>
                                </div>
                                <img className='duration-500  group-hover:grayscale :' src="/other-projects/project-1.avif" alt="Project 1" />
                            </Link>
                        </div>
                    </FadeIn>

                    <FadeIn>

                        <div className='group after:content-[""] after:block after:size-full after:absolute relative after:inset-0 after:scale-95 after:bg-transparent after:border after:border-dashed after:border-white/60 '>
                                <Link to="/project" className='block group-hover:scale-90 z-1 duration-500  relative '>
                                <div className='flex flex-col justify-end p-5 absolute left-0 bottom-0 text-white z-10 bg-black/30 w-full h-full' >
                                    <b className='text-[clamp(1.9375rem,1.3971rem_+_2.3059vw,5rem)] leading-none font-defonte uppercase tracking-tight'>AUDEMARS<br/> PIGUET</b>
                                    <p className='text-[clamp(0.625rem,0.5147rem_+_0.4706vw,1.25rem)] text-white/60 uppercase'> ROYAL CAK-1017 ALYX 95M</p>
                                </div>
                                <img className='duration-500  group-hover:grayscale :' src="/other-projects/project-2.avif" alt="Project 2" />
                            </Link>
                        </div>
                    </FadeIn>


                </div>
            </div>
            <ClipLine/>
        </section>
        <section>
          <div className="container">
            <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2">
              <div>
                <FadeIn>
                  <div className="lg:w-52 w-20 fill-white">
                    <Logo />
                  </div>
                </FadeIn>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-[clamp(2.5rem,1.3971rem_+_4.7059vw,8.75rem)] font-bold leading-none font-defonte text-white uppercase filter">
                  <SplitText Animation={BlurText}>
                    Keen to work with us.
                  </SplitText>
                </p>
                <FadeUp>
                  <button className="uppercase bg-white px-6 py-3 mt-5 text-xs font-jetbrains rounded-md ">
                    Hello@Lacrapulstudio.com
                  </button>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
    </>
  )
}
