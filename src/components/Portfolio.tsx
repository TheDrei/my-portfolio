import React from "react";
import projectOneImg from "../assets/img/work-1-ihrms.jpg";
import projectTwoImg from "../assets/img/work-2-ipmis.jpg";
import projectThreeImg from "../assets/img/work-3-palms.jpg";
import projectFourImg from "../assets/img/work-4-servicedesk.jpg";
import projectFiveImg from "../assets/img/work-5-quest.jpg";
import projectSixImg from "../assets/img/work-6-sle.jpg";
import projectSevenImg from "../assets/img/work-7-alveo.jpg";
import projectEightImg from "../assets/img/work-8-hirecarefully.jpg";
import projectNineImg from "../assets/img/work-9-weather-app.jpg";

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "DOST Integrated Human Resources Management System (iHRMS)",
      desc: `
        <ul class="list-disc list-inside space-y-1">
          <li>Developed core features for Learning and Development Module: PDS, Competency Analysis, and Development Plans.</li>
          <li>Streamlined employee profiling and training; adopted by multiple DOST agencies.</li>
          <li>Covers the full HR lifecycle with 4 key modules of PRIME-HRM.</li>
        </ul>
        <br/>
        <p><strong>Tools:</strong> Linux, Apache, MySQL, PHP (Laravel), HTML, CSS, Bootstrap, JavaScript (jQuery), Git</p>
      `,
      img: projectOneImg,
      link: "https://github.com/TheDrei/ehrms",
    },
    {
      title: "Integrated Project Management Information System (IPMIS)",
      desc: `
        <ul class="list-disc list-inside space-y-1">
          <li>Enhanced UI for proposal modules and developed nationwide project dashboard.</li>
          <li>Implemented user management, library, and utilities; integrated Google Gemini AI chatbot for improved engagement.</li>
          <li>Supported R&D program monitoring and data-driven decisions.</li>
        </ul>
        <br/>
        <p><strong>Tools:</strong> Linux, Apache, MySQL, PHP (Laravel), HTML, CSS, Bootstrap, JavaScript (jQuery), Highcharts, Git</p>
      `,
      img: projectTwoImg,
      link: "https://ipmis.pcaarrd.dost.gov.ph/",
    },
    {
      title: "PCAARRD Advanced Learning Management System (PALMS)",
      desc: `
        <ul class="list-disc list-inside space-y-1">
          <li>Online platform built using Moodle for non-degree training and asynchronous courses.</li>
          <li>Integrated NDT Assessment, automated certificates, and chatbot to enhance user engagement.</li>
          <li>Developed Laravel dashboard for enrollment metrics and responsive UI enhancements.</li>
        </ul>
        <br/>
        <p><strong>Tools:</strong> Linux, Apache, MySQL, Moodle CMS, PHP (Laravel), HTML, CSS, Bootstrap, JavaScript (jQuery), Chart.js, Git</p>
      `,
      img: projectThreeImg,
      link: "https://palms.pcaarrd.dost.gov.ph/",
    },
    {
      title: "PCAARRD Service Desk",
      desc: `
        <ul class="list-disc list-inside space-y-1">
          <li>Laravel-based ticketing system for ICT, facility, and administrative requests.</li>
          <li>Supported task tracking, status updates, and service ratings.</li>
        </ul>
        <br/>
        <p><strong>Tools:</strong> Linux, Apache, MySQL, PHP (Laravel), JavaScript (jQuery), HTML, Tailwind CSS, Chart.js, Git</p>
      `,
      img: projectFourImg,
      link: "",
    },
    {
      title: "QuestJobs Canada",
      desc: `
        <ul class="list-disc list-inside space-y-1">
          <li>A job aggregation platform to streamline job search and application processes in Canada.</li>
          <li>Implemented a subscription-based payment system using <strong>Stripe API</strong> for secure, automated transactions.</li>
          <li>Developed responsive, user-friendly interfaces with Laravel, HTML, CSS, Bootstrap, and JavaScript (jQuery).</li>
          <li>Managed database operations with MySQL and optimized platform performance on Hostinger Linux servers (Apache/LiteSpeed).</li>
          <li>Applied best practices for clean, maintainable code and version control using Git.</li>
        </ul><br/>
          <p><strong>Tools:</strong> Hostinger (Linux-based hosting with Apache/LiteSpeed), MySQL, PHP (Laravel), HTML, CSS, Bootstrap, JavaScript (jQuery), Git</p>
      `,
      img: projectFiveImg,
      link: "https://www.questjobs.io",
    },
    {
      title: "Study. Live. Explore Canada Student Planner (slebeta.online)",
      desc: `
        <ul class="list-disc list-inside space-y-1">
          <li>Developed using CodeIgniter, MySQL, Bootstrap, and jQuery; built features like registration, login, course creation, and mentor applications.</li>
          <li>Collaborated via GitHub and oversaw deployment to Hostinger.</li>
        </ul>
        <br/>
        <p><strong>Tools:</strong> Hostinger (Linux-based hosting with Apache/LiteSpeed), MySQL, PHP (CodeIgniter), HTML, CSS, Bootstrap, JavaScript (jQuery), Git</p>
      `,
      img: projectSixImg,
      link: "https://slebeta.online/",
    },
    {
      title: "Alveo Prime Properties",
      desc: `
        <ul class="list-disc list-inside space-y-1">
          <li>Developed using WordPress Content Management System for an Alveo Real Estate agent. Contains important information of the residential/commercial lots, and condominiums for sale. Used Google Ads to manage and optimize PPC campaigns to increase traffic to the website.</li>
        </ul>
        <br/>
        <p><strong>Tools:</strong> Hostinger (Linux-based hosting with Apache/LiteSpeed), MySQL, WordPress, Google Ads</p>
      `,
      img: projectSevenImg,
      link: "https://alveoprimeproperties.com/",
    },
     {
      title: "Hirecarefully",
      desc: `
        <ul class="list-disc list-inside space-y-1">
          <li>HireCarefully is a Laravel-based platform that categorizes job opportunities into local, abroad, and sea-based jobs. It provides a user-friendly interface for easy navigation, helping users find and apply for jobs in their preferred locations.</li>
        </ul>
        <br/>
        <p><strong>Tools:</strong> Hostinger (Linux-based hosting with Apache/LiteSpeed), MySQL, PHP (CodeIgniter), HTML, CSS, Bootstrap, JavaScript (jQuery), Git</p>
      `,
      img: projectEightImg,
      link: "https://www.hirecarefully.com/",
    },
    {
    title: "Japan Weather App",
    desc: `
        <ul class="list-disc list-inside space-y-1">
        <li>A web application that provides Japan weather forecasts using the OpenWeather API.</li>
        <li>Displays recommended accommodations and popular tourist spots using the Geoapify API for easy travel planning.</li>
        </ul>
        <br/>
        <p><strong>Tools:</strong> Laravel, Vue.js, HTML, CSS, Bootstrap, OpenWeather API, Geoapify API, Git</p>
    `,
    img: projectNineImg, // Replace with a dedicated image if available
    link: "https://github.com/TheDrei/weather-app", // Optional link
    }
  ];

  return (
    <section id="portfolio" className="p-10 py-20 bg-white w-full">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#001f3f]"
        data-aos="fade-down"
      >
        Recent Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:pl-10 md:pr-10">

        {projects.map((project, index) => (
        <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
        >
            {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                src={project.img}
                alt={project.title}
                className="w-full cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                />
            </a>
            ) : (
            <img
                src={project.img}
                alt={project.title}
                className="w-full transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            />
            )}
            <div className="p-6">
            <span className="text-black font-bold">{project.title}</span>
            <div
                className="text-gray-700 text-md leading-relaxed"
                dangerouslySetInnerHTML={{ __html: project.desc }}
            />
            </div>
        </div>
        ))}

      </div>
    </section>
  );
};

export default Portfolio;
