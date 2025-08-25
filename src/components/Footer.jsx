import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import FooterBackground from '../assets/Footer.svg'
import InflectoLogo from "../assets/inflecto-logo.svg";


const Footer = () => {
  return (
    <footer className="relative bg-white text-black">
      {/* Top Section */}
      <div className="w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-10">
        {/* Logo */}
        <img
          src={InflectoLogo}
          alt="Inflecto Logo"
          className="object-contain select-none"
        />

        {/* Address */}
        <div className="text-center md:text-left text-sm md:text-base leading-relaxed max-w-xl">
          <p className="block mb-2 text-center">INFLECTO TECHNOLOGIES</p>
          Ernst & Wales Business Center, Fronds Building, M floor (Above QMotors) <br />
          Sheikh Zayed Road, Close to Equity metro, Industrial Area 3, Dubai, UAE
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/company/inflecto"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100 transition"
          >
            <FaLinkedinIn className="text-black" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100 transition"
          >
            <FaFacebookF className="text-black" />
          </a>
          <a
            href="https://twitter.com/inflectotech"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100 transition"
          >
            <FaTwitter className="text-black" />
          </a>
        </div>
      </div>
      <div className="absolute flex items-center justify-center  w-full bottom-15 text-white py-4 text-sm">
        <p className="text-center">© 2025 Inflecto Technologies. All Rights Reserved.</p>
      </div>
      {/* Waves */}
      <img src={FooterBackground} alt='footer' className="w-full "/>
    </footer>
  );
};

export default Footer;
