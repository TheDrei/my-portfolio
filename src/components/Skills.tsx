import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiPhp,
  SiMysql,
  SiCodeigniter,
  SiGraphql,
  SiWordpress,
  SiJoomla,
  SiMoodle,
  SiLinux,
  SiApache,
  SiGit,
  SiPostman,
  SiNotion,
  SiJira,
  SiTrello,
  SiAmazon,
  SiLaravel
} from "react-icons/si";
import { FaFreebsd } from "react-icons/fa";

const Skills: React.FC = () => {
  const skillGroups = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", level: 95, icon: <SiHtml5 className="text-orange-600" /> },
        { name: "CSS", level: 95, icon: <SiCss3 className="text-blue-600" /> },
        { name: "Bootstrap", level: 95, icon: <SiBootstrap className="text-purple-600" /> },
        { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "JavaScript (jQuery)", level: 95, icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React.js", level: 90, icon: <SiReact className="text-sky-500" /> },
        { name: "Vue.js", level: 75, icon: <SiVuedotjs className="text-green-500" /> },
        { name: "TypeScript", level: 90, icon: <SiTypescript className="text-blue-600" /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "PHP (Laravel Framework)", level: 95, icon: <SiLaravel className="text-blue-700" /> },
        { name: "MySQL", level: 95, icon: <SiMysql className="text-blue-600" /> },
        { name: "CodeIgniter", level: 75, icon: <SiCodeigniter className="text-red-600" /> },
        { name: "Laminas (RESTful API)", level: 70, icon: <SiPhp className="text-blue-700" /> },
        { name: "GraphQL", level: 55, icon: <SiGraphql className="text-pink-500" /> },
      ],
    },
    {
      category: "CMS / Platforms",
      skills: [
        { name: "WordPress", level: 80, icon: <SiWordpress className="text-blue-700" /> },
        { name: "Joomla", level: 95, icon: <SiJoomla className="text-red-600" /> },
        { name: "Moodle", level: 95, icon: <SiMoodle className="text-orange-600" /> },
      ],
    },
    {
      category: "Server / DevOps",
      skills: [
        { name: "Linux", level: 90, icon: <SiLinux className="text-black" /> },
        { name: "FreeBSD", level: 85, icon: <FaFreebsd className="text-red-600" /> },
        { name: "Apache", level: 85, icon: <SiApache className="text-red-500" /> },
        { name: "AWS (Lambda, S3, API Gateway)", level: 85, icon:  <SiAmazon className="text-orange-500" /> },
      ],
    },
    {
      category: "Version Control / Tools",
      skills: [
        { name: "Git", level: 95, icon: <SiGit className="text-orange-600" /> },
        { name: "Postman", level: 80, icon: <SiPostman className="text-orange-500" /> },
        { name: "Notion", level: 75, icon: <SiNotion className="text-gray-800" /> },
        { name: "Jira", level: 75, icon: <SiJira className="text-blue-600" /> },
        { name: "Trello", level: 70, icon: <SiTrello className="text-blue-500" /> },
      ],
    },
  ];

  const getLabel = (level: number) => {
    if (level >= 85) return "Expert";
    if (level >= 70) return "Advanced";
    if (level >= 55) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="py-10 bg-gray-50 w-full relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-[#001f3f]"
          data-aos="fade-down"
        >
          Skills
        </h2>

        <p className="text-black text-lg leading-relaxed mb-8 text-left">
          I have strong expertise in the LAMP stack (Linux, Apache, MySQL, PHP/Laravel) and frontend technologies including HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and TypeScript. I have advanced experience with React.js, intermediate experience with Vue.js, CodeIgniter, and Laminas (REST API), and familiarity with GraphQL and AWS. I regularly use tools such as Git, Postman, Notion, Jira, and Trello, and have experience with CMS platforms including WordPress, Joomla, and Moodle, enabling me to build versatile and scalable web solutions.
        </p>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          spaceBetween={30}
          slidesPerView={1}
          loop
        >
          {skillGroups.map((group, i) => (
            <SwiperSlide key={i}>
              <div data-aos="fade-up" data-aos-delay={i * 100}>
                <h3 className="text-2xl pt-4 font-bold text-gray-800 mb-6 text-center border-b-2 border-blue-600 pb-2">
                  {group.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6 px-6">
                  {group.skills.map((skill, index) => (
                    <div key={index} className="mb-4 flex items-center gap-3">
                      <div className="text-2xl">{skill.icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-800 font-medium">{skill.name}</span>
                          <span className="text-sm px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-semibold">
                            {getLabel(skill.level)}
                          </span>
                        </div>
                        <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-800 rounded-full transition-all duration-1000 ease-in-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom navigation arrows */}
          <div className="swiper-button-prev-custom absolute top-1/2 -left-0 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-400/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500 transition duration-300 shadow-lg">
            <FaChevronLeft className="text-white text-lg" />
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 -right-0 transform -translate-y-1/2 z-10 w-10 h-10 bg-gray-400/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500 transition duration-300 shadow-lg">
            <FaChevronRight className="text-white text-lg" />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
