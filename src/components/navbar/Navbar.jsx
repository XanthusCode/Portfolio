/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const active = location.pathname;

  return (
    <div className="w-full h-[8ch] bg-neutral-950 shadow-sm border-b border-neutral-900/50 lg:px-80 md:px-60 sm:px-7 px-4 flex justify-between">
      {/* Logo Section */}
      <div className="flex items-center ml-2"> {/* ml-4 agrega margen izquierdo */}
        <img src="src/assets/logo.png" alt="Logo" className="w-20 h-auto" />
      </div>


      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <ul className="list-none md:text-base text-sm text-neutral-400 font-medium flex items-center md:gap-8 gap-4">
        <li>
            <Link
              to={"/"}
              className={`hover:text-neutral-500 ease-in-out duration-300 ${
                active === '/' ? 'text-green-500' : 'text-neutral-400'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/projects"}
              className={`hover:text-neutral-500 ease-in-out duration-300 ${
                active === '/projects' ? 'text-green-500' : 'text-neutral-400'
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to={"/me"}
              className={`hover:text-neutral-500 ease-in-out duration-300 ${
                active === '/me' ? 'text-green-500' : 'text-neutral-400'
              }`}
            >
              About Me
            </Link>
          </li>
        </ul>

        {/* GitHub Icon */}
        <Link
          to={"https://github.com/Jagc-1"} className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-neutral-900/40 flex items-center justify-center text-neutral-400 text-lg hover:text-neutral-500 ease-in-out duration-300"
        >
          <FaGithub />
        </Link>

         {/* LinkedIn Icon */}
      <Link
        to={"https://www.linkedin.com/in/johan-alexander-garcia/"} // Reemplaza con tu perfil de LinkedIn
        className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-neutral-900/40 flex items-center justify-center text-neutral-400 text-lg hover:text-neutral-500 ease-in-out duration-300"
      >
        <FaLinkedin />
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
