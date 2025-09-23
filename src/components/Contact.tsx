import React from "react";
import { FaEnvelope, FaPhone, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-10 bg-gray-200 flex flex-col items-center text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black" data-aos="fade-down">
        Contact Me
      </h2>

      <p className="mb-12 text-gray-600 max-w-xl">
        I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision!
      </p>

      <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-left">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-blue-900" />
          <a href="mailto:dreivilarcambay@gmail.com" className="text-blue-600 hover:underline">
            dreivilarcambay@gmail.com
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <FaPhone className="text-blue-900" />
          <a href="tel:+639661802254" className="text-blue-600 hover:underline">
            +63 966 180 2254
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <FaLinkedinIn className="text-blue-900" />
          <a href="https://linkedin.com/in/thedreicambay" target="_blank" className="text-blue-600 hover:underline">
            thedreicambay
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <FaGithub className="text-blue-900" />
          <a href="https://github.com/TheDrei" target="_blank" className="text-blue-600 hover:underline">
            TheDrei
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
