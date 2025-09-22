import React from "react";

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-black/60 backdrop-blur shadow-sm">
      <nav className="flex items-center justify-between py-4 px-6">
        {/* Logo flush left */}
        <div className="text-[2.3rem] font-bold">
          <span className="text-blue-900">Dev</span>Drei
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex space-x-8 font-medium text-white">
            <li>
            <a
              onClick={() => scrollToSection("hero")}
              className="transition hover:text-blue-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("about")}
              className="transition hover:text-blue-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("portfolio")}
              className="transition hover:text-blue-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("contact")}
              className="transition hover:text-blue-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
