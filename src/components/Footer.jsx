import React from "react";
import logo from '../assets/images/news-app-icon.png';
const Footer = () => {
  return (
    <footer className="p-4 bg-black shadow dark:bg-gray-900">
      <div className="flex w-full justify-between items-center md:flex-row flex-col">
      <a href="https://flowbite.com/" rel="noreferrer" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="OMNI Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            OMNI
          </span>
        </a>
        <ul className="flex flex-wrap gap-2 items-center mb-6 p-2 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            About
          </li>
          <li>
              Privacy Policy
          </li>
          <li>
              Licensing

          </li>
          <li>
              Contact
          </li>
        </ul>
      </div>
        
      <hr className="border-gray-200 dark:border-gray-700 my-4" />
      <div className="text-sm text-gray-500 text-center w-full dark:text-gray-400">
        © 2023 OMNI™. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
