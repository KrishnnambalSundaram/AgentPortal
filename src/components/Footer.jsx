import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import FooterBackground from '../assets/Footer.svg'
import InflectoLogo from "../assets/inflecto-logo.svg";
import { trackSocialClick } from "../utils/analytics";
import { useAuth } from "../context/AuthContext";


const Footer = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <footer className="relative bg-black text-white min-h-[30vh] overflow-hidden">
      <div className="w-[90%] md:w-[85%] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 py-10 md:py-12 lg:py-16 relative z-10">
        <div className="shrink-0">
          <img
            src={InflectoLogo}
            alt="Inflecto Logo"
            className="h-10 sm:h-12 md:h-14 object-contain select-none"
          />
        </div>

        <div className="flex-1 text-center md:text-left text-xs sm:text-sm md:text-base leading-relaxed outfit-regular max-w-xl">
          <p className="manrope-semibold mb-2 md:mb-3 text-white text-sm sm:text-base">
            INFLECTO TECHNOLOGIES
          </p>
          <p className="text-gray-400">
            Ernst & Wales Business Center, Fronds Building, M floor (Above QMotors)
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Sheikh Zayed Road, Close to Equity metro
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Industrial Area 3, Dubai, UAE
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 shrink-0">
          {/* Social Media Icons */}
          <div className="flex gap-3 sm:gap-4">
            <a
              href="https://linkedin.com/company/inflecto"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick('LinkedIn')}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-[#70CBCF] hover:border-[#70CBCF] transition-all duration-200 group"
            >
              <FaLinkedinIn className="text-white text-sm sm:text-base" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick('Facebook')}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-[#70CBCF] hover:border-[#70CBCF] transition-all duration-200 group"
            >
              <FaFacebookF className="text-white text-sm sm:text-base" />
            </a>
            <a
              href="https://twitter.com/inflectotech"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick('Twitter')}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-[#70CBCF] hover:border-[#70CBCF] transition-all duration-200 group"
            >
              <FaTwitter className="text-white text-sm sm:text-base" />
            </a>
          </div>

          {/* Auth Buttons */}
          {!user && (
            <div className="flex gap-3 mt-2">
              <button
                onClick={() => navigate('/login')}
                className="flex items-center text-white text-sm outfit-medium 
                          bg-white/5 rounded-xl border border-white/20 
                          hover:bg-white/10 hover:border-[#70CBCF]/50 hover:shadow-[0_0_20px_rgba(112,203,207,0.2)]
                          py-2 px-4
                          transition-all duration-200 ease-out"
              >
                Login as Inflecto Associate
              </button>
              {/* <button
                onClick={() => navigate('/register')}
                className="flex items-center text-black text-sm outfit-semibold 
                          bg-[#70CBCF] rounded-xl border border-[#70CBCF]
                          hover:bg-[#5ab5b9] hover:shadow-[0_0_30px_rgba(112,203,207,0.5)]
                          py-2 px-5
                          transition-all duration-200 ease-out"
              >
                Register
              </button> */}
            </div>
          )}
        </div>
      </div>
        <h1 className="absolute anton-regular text-center w-full text-[100px] md:text-[150px] lg:text-[250px] -bottom-10 md:-bottom-17 lg:-bottom-25 text-neutral-800/40 -z-0">AI AGENTS</h1>
      
      
    </footer>
  );
};

export default Footer;
