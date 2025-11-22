import React from "react";
import FadeRight from "./Animation/FadeRight";
import FadeLeft from "./Animation/FadeLeft";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="flex justify-between items-center text-[clamp(0.625rem,0.5478rem_+_0.3294vw,1.0625rem)] font-bold font-jetbrains uppercase">
          <FadeRight>
            <p>
              LA CRAPULE STUDIO &copy; <span className="year">{year}</span>
              <br /> ALL RIGHTS RESERVED
            </p>
          </FadeRight>
          <FadeLeft>
            <p className="cursor-pointer hover:text-gray-500 duration-300">
              Made By Anime Z.
            </p>
          </FadeLeft>
        </div>
      </div>
    </footer>
  );
}
