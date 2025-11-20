import React, { useRef, useState } from "react";
import SplitText from "../ui/Animation/SplitText";
import FadeUp from "../ui/Animation/FadeUp";

export default function About() {
  const [active, setActive] = useState(-1);
  const paragraphs = [
    "Since 2021, LaCrapule Studio has been building a distinct visual language rooted in precision, curiosity, and cultural relevance. We aim to create bold visuals, that blur the lines between reality and fiction.",
    "From fashion to music, tech to art, we move across worlds to craft images that speak to now. Whether it's a product, a film, or a digital experiment - each project is a way to push boundaries and tell stories that leave a mark.",
  ];
  const clients = [
    {
      name: "Audemars Piguet",
      image: "/clients/audemars.avif",
    },
    {
      name: "Nike",
      image: "/clients/nike.avif",
    },
    {
      name: "Prada",
      image: "/clients/prada.avif",
    },
    {
      name: "Google",
      image: "/clients/google.avif",
    },
    {
      name: "Coperni",
      image: "/clients/coperni.avif",
    },
    {
      name: "Lancôme",
      image: "/clients/lancome.avif",
    },
    {
      name: "Rabanne",
      image: "/clients/rabanne.avif",
    },
    {
      name: "L'Oreal",
      image: "/clients/loreal.avif",
    },
    {
      name: "Lacoste",
      image: "/clients/lacoste.avif",
    },
    {
      name: "Carolina Herrera",
      image: "/clients/carolina.avif",
    },
    {
      name: "Vogue Italia",
      image: "/clients/vogue.avif",
    },
    {
      name: "Booba",
      image: "/clients/booba.avif",
    },
  ];
  const presses = [
    "Vogue Italia",
    "Vogue China",
    "Paper Magazine",
    "Konbini",
    "Libération",
    "Highsnobiety",
    "Exhibition Magazine",
  ];
  const services = [
    "Creative Direction",
    "Consulting",
    "CGI & 3D Services",
    "Mixed Media",
    "Post-Production",
    "Motion Design",
  ];
  const contacts = [
    {
      title: "Email",
      content: (
        <a
          href="mailto:hello@lacrapulestudio.com"
          className='after:content-[""] after:block after:w-full after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[0px] after:origin-left after:scale-x-0  hover:after:scale-x-100  after:duration-300'
        >
          hello@lacrapulestudio.com
        </a>
      ),
    },
    {
      title: "Socials",
      content: (
        <a
          href="https://instagram.com"
          target="__blank"
          className='after:content-[""] after:block after:w-full after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[0px] after:origin-left after:scale-x-0  hover:after:scale-x-100  after:duration-300'
        >
          Instagram
        </a>
      ),
    },
  ];
  return (
    <>
      <ul
        className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] w-3/4 max-w-[1250px] aspect-video bg-white"
      >
        {clients.map((client, index) => {
          return (
            <li
              className={`size-full absolute duration-500 ${
                active == index ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
              key={client.image}
            >
              <img
                className="size-full object-cover object-center"
                src={client.image}
                alt={client.name}
              />
            </li>
          );
        })}
      </ul>
      <div className="relative mix-blend-exclusion z-1 text-white ">

        <section className="3xl:py-32 py-10 relative  ">
          <div className="container">
            <ul className="w-[90%] max-w-[1950px] space-y-5">
              {paragraphs.map((p, index) => {
                return (
                  <li className="text-[clamp(0.9375rem,0.4963rem_+_1.8824vw,3.4375rem)] leading-none font-bold">
                      <p>
                        <FadeUp><span className="mr-15">{index + 1}.</span></FadeUp>
                        <SplitText>
                          {p}
                        </SplitText>
                      </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="flex lg:flex-row max-w-[2250px] gap-5 flex-col justify-between">
              <div className="lg:w-1/2 w-full grid lg:gap-10 gap-5 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-4">
                <div>
                  <FadeUp><b className="text-gray-500 text-[clamp(0.625rem,0.5478rem_+_0.3294vw,1.0625rem)] font-jetbrains uppercase">
                    TRUSTED US
                  </b></FadeUp>
                  <ul className="flex flex-wrap gap-x-2 justify-start max-w-[350px]">
                    {clients.map((client, index) => {
                      return (
                        <FadeUp><li
                          onMouseOver={() => setActive(index)}
                          onMouseLeave={() => setActive(-1)}
                          key={client.name}
                          className='text-[clamp(0.75rem,0.6176rem_+_0.5647vw,1.5rem)] font-bold after:content-[""] after:block after:w-full after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[3px] after:origin-right  hover:after:scale-x-0 after:duration-300'
                          index={index}
                        >
                          {client.name},
                        </li></FadeUp>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <FadeUp>
                    <b className="text-gray-500 text-[clamp(0.625rem,0.5478rem_+_0.3294vw,1.0625rem)] font-jetbrains uppercase">
                    press
                  </b>
                  </FadeUp>
                  <ul className="flex flex-wrap gap-x-2 justify-start max-w-[350px]">
                    {presses.map((press) => {
                      return (
                        <FadeUp>
                          <li
                          key={press}
                          className='text-[clamp(0.75rem,0.6176rem_+_0.5647vw,1.5rem)] font-bold after:content-[""] after:block after:w-full after:h-[1px] after:bg-white after:absolute relative after:left-0 after:bottom-[0px] after:origin-left after:scale-x-0  hover:after:scale-x-100  after:duration-300'
                        >
                          {press},
                        </li>
                        </FadeUp>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <FadeUp>
                    <b className="text-gray-500 text-[clamp(0.625rem,0.5478rem_+_0.3294vw,1.0625rem)] font-jetbrains uppercase ">
                      Services
                    </b>
                  </FadeUp>
                  <ul className="flex flex-wrap gap-x-2 justify-start max-w-[350px]">
                    {services.map((service) => {
                      return (
                        <FadeUp>
                          <li
                            key={service}
                            className="text-[clamp(0.75rem,0.6176rem_+_0.5647vw,1.5rem)] font-bold "
                          >
                            {service},
                          </li>
                        </FadeUp>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <FadeUp>
                    <b className="text-gray-500 text-[clamp(0.625rem,0.5478rem_+_0.3294vw,1.0625rem)] font-jetbrains">
                      Contact
                    </b>
                  </FadeUp>
                  <ul className="flex flex-col gap-x-2 justify-start">
                    {contacts.map((contact) => {
                      return (
                        <FadeUp>
                          <li
                          key={contact.title}
                          className="text-[clamp(0.75rem,0.6176rem_+_0.5647vw,1.5rem)] font-bold "
                        >
                          <span>{contact.title}</span> : {contact.content}
                        </li>
                        </FadeUp>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2 w-full max-w-xl">
                <h1 className="font-defonte text-[clamp(2.3125rem,1.8382rem_+_2.0235vw,5rem)] leading-none ">
                  LET'S CREATE BOLD VISUAL TOGETHER
                </h1>
                <button className="font-jetbrains text-black bg-white px-5 py-2 text-sm rounded-sm mt-5">
                  LET'S WORK TOGETHER
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
