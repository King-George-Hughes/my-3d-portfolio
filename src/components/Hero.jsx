import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Computers from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Voilet design at the left */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">George Hughes</span>{" "}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, <br className="hidden sm:block" />{" "}
            native applications and user interfaces
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
