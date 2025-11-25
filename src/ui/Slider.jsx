import React, { useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';

import CTAButton from "./CTAButton";
export default function Slider({ slider }) {
  const [active,setActive] = useState(1);
  const swiperRef = useRef(null);
  const sliderDuration = 5;
  const { sliders, bullets } = slider;
  return (
    <Swiper className="w-screen h-screen relative"
        slidesPerView={1}
        modules={[Navigation,EffectFade,Autoplay]}
        autoplay={{
            delay: sliderDuration * 1000,
            disableOnInteraction: false,
        }}
        effect="fade"
        navigation={
            {
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
            }
        }
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
         onSlideChange={(swiper) => {
            setActive(swiper.realIndex+1)
        }}
    >
      {sliders.map((slider) => {
        return (
          <SwiperSlide
            key={slider.id}
            className="slider bg-black"
          >
            <div className="size-full relative">
              <video
                src={slider.media}
                playsInline
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              ></video>
              <div className="absolute size-full inset-0 bg-black/30 z-1"></div>
            </div>
            <div className="container w-full absolute z-10 left-0 top-1/2">
              <div className="w-full flex sm:flex-row gap-5 flex-col justify-between sm:items-center items-end">
                <div className="flex sm:flex-row flex-col sm:items-center items-start gap-10 sm:w-1/4">
                  <div className="navigation-buttons flex sm:flex-col flex-row-reverse  items-center gap-3">
                    <button className="next-btn bg-white text-black cursor-pointer text-lg font-bold size-10 rounded-lg">
                      &#x203A;
                    </button>
                    <span className="counter text-xl text-white">0{active}</span>
                    <button className="prev-btn bg-white text-black cursor-pointer text-lg font-bold size-10 rounded-lg -scale-x-100">
                      {" "}
                      &#x203A;
                    </button>
                  </div>
                  <div className="slide-content">
                    <h1 className="text-[clamp(2.5rem,1.5294rem_+_4.1412vw,8rem)] uppercase text-white font-defonte font-bold leading-none">
                      {slider.title}
                    </h1>
                    <h2 className="sm:text-lg text-sm uppercase text-white">
                      [ {slider.subtitle} ]
                    </h2>
                  </div>
                </div>
                <div>
                  <div className="sm:block hidden">
                    <CTAButton />
                  </div>
                  <div className="block sm:hidden">
                    <button className="text-black bg-white font-jetbrains px-5 py-2 text-sm uppercase rounded-md">
                      view project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}

      <div className="sm:flex hidden justify-center items-center gap-3 z-10 w-full absolute bottom-0 left-0 p-5">
        {bullets.map((bullet) => {
          return (
            <button onClick={() => {swiperRef.current?.slideToLoop(bullet.sliderId-1)}} key={bullet.sliderId} className={`text-sm ${active == bullet.sliderId ? 'text-black bg-white' : 'text-white bg-transparent'} cursor-pointer border border-dashed border-white px-5 py-2 rounded-sm `}>
              {bullet.title}
            </button>
          );
        })}
      </div>
      <motion.div
        key={active}
        initial={{ height: 0 }}
        animate={{ height: "100%", transition: { duration: sliderDuration } }}
        exit={{ height: 0 }}
        className="progress-bar sm:w-2 w-1 absolute left-0 top-0 bg-white z-10"
      ></motion.div>
    </Swiper>
  );
}
