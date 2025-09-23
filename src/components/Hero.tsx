// src/components/Hero.tsx
import React from "react";
import { FaEye, FaDownload } from "react-icons/fa";
import pdf from "../assets/pdf/JanAndreiCambayCV.pdf";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative">
      {/* Full-viewport background layer */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-r from-[#001f3f] to-blue-900" />

      {/* Content container */}
      <div className="relative h-200 flex items-center justify-center px-6">
        <div className="text-center max-w-3xl" data-aos="fade-up">
          <h1 className="text-8xl sm:text-7xl font-extrabold mb-6">
            Hi, I’m <span className="text-blue-500">Drei <span className="wave">👋</span></span>
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-gray-100">
            Full-Stack Web Developer crafting seamless web experiences.
          </p>

          <p className="text-gray-300 mb-8">
            I love programming.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#001f3f] font-semibold rounded-lg shadow-md transform transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-xl"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FaEye /> View My Projects
            </a>

            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transform transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-xl"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
