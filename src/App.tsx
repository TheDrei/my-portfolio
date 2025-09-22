import React from "react";
import "./assets/styles/App.css"; // Tailwind directives here

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Skills />
        <Portfolio />
         <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
