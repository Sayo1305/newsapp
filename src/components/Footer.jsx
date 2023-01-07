import React from "react";
import logo from '../assets/images/news-app-icon.png';
const Footer = () => {
  return (
    <footer className="p-4 bg-black rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
          <img src={logo} className="h-8 mr-3" alt="OMNI Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            OMNI
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-8 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-8">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 OMNI™. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
