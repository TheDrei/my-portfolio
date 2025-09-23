import React from "react";
import img from "../assets/img/drei-graduation.png";

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-10 bg-gray-50 flex justify-center">
      <div
        className="bg-white rounded-3xl shadow-xl p-6 md:p-12 w-full max-w-7xl grid md:grid-cols-[1fr_2fr] gap-8 items-center"
        data-aos="fade-up"
      >
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={img}
            alt="Profile"
            className="rounded-2xl shadow-lg border-4 border-white w-2/3 md:w-full max-w-[250px] md:max-w-[300px]"
            data-aos="fade-right"
          />
        </div>

        {/* About Text */}
        <div data-aos="fade-left" className="text-gray-700">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#001f3f] text-left">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            I’m a <span className="font-semibold text-[#001f3f]">full-stack web developer</span> with over 7 years of experience building scalable, high-performing applications using <span className="font-semibold text-blue-600">PHP (Laravel), MySQL</span>, and modern frontend technologies. Skilled in Agile methodologies, CMS/LMS development, and user-centered design, I focus on delivering clean code and solutions that not only meet business goals but also enhance performance and create seamless user experiences.
          </p>
          <p className="text-lg leading-relaxed">
           Outside of work, I’m really into biking and gaming. There’s something about hitting the trails and being out in nature that’s both challenging and relaxing at the same time—kind of like web development. It’s all about the journey and the people you do it with. And when I’m gaming, it’s the same vibe. Whether I’m diving into a solo game or teaming up with friends, it’s a mix of strategy, problem-solving, and good times. Both biking and gaming help me unwind, push my limits, and connect with others who are into the same stuff.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
