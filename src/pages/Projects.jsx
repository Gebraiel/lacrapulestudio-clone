import { useLayoutEffect, useState } from "react";
import BlurText from "../ui/Animation/BlurText";
import FadeIn from "../ui/Animation/FadeIn";
import FadeUp from "../ui/Animation/FadeUp";
import SplitText from "../ui/SplitText";
import ClipLine from "../ui/ClipLine";
import CTAButton from "../ui/CTAButton";
import Footer from "../ui/Footer";
import Logo from "../ui/Logo";
import ProjectList from "../ui/ProjectList";
export const categories = [
  "creative direction",
  "3d & cgi",
  "mixed media",
  "post production",
];
export const projects = [
  {
    name: "coperni",
    preview: "/clients/audemars.avif",
    client: "Disney X Coperni",
    categories: ["creative direction", "3d & cgi"],
  },
  {
    name: "Audemars Piguet",
    preview: "/clients/audemars.avif",
    client: "ROYAL OAK-1017 ALYX 95M",
    categories: ["creative direction", "3d & cgi", "post production"],
  },
  {
    name: "MCM",
    preview: "/clients/audemars.avif",
    client: "PINK & BLUE VISETOS",
    categories: ["creative direction", "3d & cgi", "post production"],
  },
];
export default function Projects() {
  const [filter, setFilter] = useState("");
   useLayoutEffect(() => {
    document.documentElement.classList.add("dark")
  }, []);
  return (
    <>

        <section className="3xl:pt-32 pt-15">
          <div className="container">
            <div>
              <div>
                <span className="font-jetbrains text-xs uppercase text-white/60">
                  Filter By
                </span>
                {filter && (
                  <span
                    className="font-jetbrains text-xs uppercase text-white/60 ml-10 cursor-pointer"
                    onClick={() => setFilter("")}
                  >
                    Reset{" "}
                  </span>
                )}
              </div>
              <ul className="mt-8">
                {categories.map((category) => {
                  return (
                    <li
                      onClick={() => setFilter(category)}
                      className={`text-[clamp(2.3125rem,1.4963rem_+_3.4824vw,6.9375rem)] leading-none uppercase font-saans font-bold cursor-pointer ${
                        category == filter
                          ? "text-white"
                          : filter == ""
                          ? "text-white  hover:text-white/60 duration-300"
                          : "text-white/60"
                      }`}
                    >
                      <SplitText Animation={FadeUp}>{category}</SplitText>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="mt-20">
              <ClipLine />
              <b className="block my-5 text-center uppercase text-sm text-white/60">
                <FadeIn>Selected Projects</FadeIn>
              </b>
              <ProjectList projects={projects} filter={filter} />
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <ClipLine />
            <div className="flex lg:flex-row lg:gap-0 gap-10 flex-col justify-between py-20 lg:px-25 text-saans font-bold">
              <div className="lg:w-3/4">
                <p className="text-[clamp(1.9375rem,1.2904rem_+_2.4941vw,5.1875rem)] leading-none text-white">
                  <span className="px-10"></span>Let's create visuals that make
                  an impact and captivate your audience's imagination.
                </p>
              </div>
              <CTAButton />
            </div>
            <ClipLine />
          </div>
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
      <Footer />
    </>
  );
}
