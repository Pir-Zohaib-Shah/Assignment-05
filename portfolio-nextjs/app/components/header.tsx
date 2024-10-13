import React from "react";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row pt-6 h-16 w-full justify-between bg-cyan-900 bg-opacity-15 backdrop-blur-sm ">
      <ul className="flex flex-col md:flex-row px-2 md:space-y-0 md:space-x-16 ml-4 md:ml-36 text-lg text-white ">
        <li>
          <Link
            href={"#sectionHome"}
            className="hover:bg-white hover:text-black px-4 py-2 rounded-full 
               border-2 border-transparent 
               active:border-white active:text-black focus:border-white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"#sectionProjects"}
            className="hover:bg-white hover:text-black px-4 py-2 rounded-full 
               border-2 border-transparent 
               active:border-white active:text-black focus:border-white"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href={"#sectionAbout"}
            className="hover:bg-white hover:text-black px-4 py-2 rounded-full 
               border-2 border-transparent 
               active:border-white active:text-black focus:border-white"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={"#sectionContact"}
            className="hover:bg-white hover:text-black px-4 py-2 rounded-full 
               border-2 border-transparent 
               active:border-white active:text-black focus:border-white"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 text-2xl mr-4 md:mr-36 text-white">
        <Link href={"/"} className="ml-3 mt-14 md:ml-0 md:mt-0 hover:text-blue-500">
          <FaFacebookF />
        </Link>
        <Link href={"/"} className="hover:text-purple-500 ">
          <FaInstagram />
        </Link>
        <Link href={"/"} className="hover:text-green-500">
          <FaWhatsapp />
        </Link>
        <Link href={"/"} className="hover:text-blue-500">
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Header;
