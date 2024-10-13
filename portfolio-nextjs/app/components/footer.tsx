import React from 'react'
import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className='bg-black h-14 flex justify-center items-center mt-4 space-x-44'>
    <div className='text-white'>&copy; 2024 Shah's Portfolio. All Rights Reserved.</div>
    <div className="flex justify-between space-x-7 text-white ml-11 text-xl">
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
    </>
  )
}

export default Footer