import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import favicon from './favicon.ico'; // Your favicon file

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  once: true, // animate only once
});

// Component to dynamically set favicon
const FaviconSetter: React.FC = () => {
  useEffect(() => {
    const link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = favicon;
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = favicon;
      document.head.appendChild(newLink);
    }
  }, []);

  return null; // Does not render anything
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FaviconSetter />
    <App />
  </StrictMode>,
);
