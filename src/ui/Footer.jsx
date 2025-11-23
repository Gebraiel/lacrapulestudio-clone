import React, { useContext } from "react";
import FadeRight from "./Animation/FadeRight";
import FadeLeft from "./Animation/FadeLeft";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const {isDark} = useContext(ThemeContext);
  return (
    <footer className={`${isDark ? 'bg-[#1d1d1d]' : 'bg-white'}`}>
      <div className="container">
        <div className={`flex justify-between items-center text-[clamp(0.625rem,0.5478rem_+_0.3294vw,1.0625rem)] font-bold font-jetbrains uppercase `}>
          <FadeRight>
            <p className={`${isDark ? "text-white/60" : "text-black"}`}>
              LA CRAPULE STUDIO &copy; <span className="year">{year}</span>
              <br /> ALL RIGHTS RESERVED
            </p>
          </FadeRight>
          <FadeLeft>
            <p className={`cursor-pointer hover:text-gray-500 duration-300 ${isDark ? "text-white/60" : "text-black"}`}>
              Made By Anime Z.
            </p>
          </FadeLeft>
        </div>
      </div>
    </footer>
  );
}
