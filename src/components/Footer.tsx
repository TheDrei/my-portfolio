import React from "react";
import { FaReact } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-auto border-t border-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-sm">
        <p>© {new Date().getFullYear()} Drei Cambay. All rights reserved.</p>
        <p>
          Powered by{" "}
          <span className="text-blue-400 font-semibold flex items-center justify-center space-x-1">
            <FaReact /> React JS, TypeScript, Vite
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
