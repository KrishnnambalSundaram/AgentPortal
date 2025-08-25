import React, { useEffect, useState } from "react";
import InflectoLogo from "../assets/inflecto-logo.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosGlobe } from "react-icons/io";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-100 left-1/2 transform -translate-x-1/2 
             w-[90%] md:w-[90%] 
             flex justify-between items-center md:px-4 px-2  
             rounded-2xl border-2 border-white/30 
             bg-gradient-to-r from-white/40 via-white/20 to-white/40 
             backdrop-blur-[40px] 
             transition-all duration-300 ease-in-out
             ${isScrolled ? `top-1.5 md:py-2 py-1 shadow-lg` : "top-7 md:py-3 py-1 shadow-sm"}`}
    >
      {/* Logo */}
      <div className="flex items-center h-full max-w-[200px]">
        <img
          src={InflectoLogo}
          alt="Inflecto Logo"
          className={`object-contain ${
            isScrolled ? "md:h-12 h-10" : "md:h-14 h-12"
          } transition-all duration-300 ease-in-out`}
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <a
          href="https://axxeltechnologies.com/inflecto"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-row items-center text-gray-800 bg-white/60 rounded-xl border border-[#737373]/30 ${
            isScrolled
              ? "py-3.5 px-4 md:text-sm text-sm"
              : "py-5 px-4 md:text-xl text-md"
          } transition-all duration-300 ease-in-out gap-2`}
        >
          <IoIosGlobe size={24}/>Visit Our Website
        </a>
      </nav>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-gray-800 text-2xl relative z-50"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Blob Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 90% 0%)" }} 
            animate={{ clipPath: "circle(150% at 90% 0%)" }}
            exit={{ clipPath: "circle(0% at 90% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute right-0 w-8/12 top-full mt-2
                      bg-white/50 backdrop-blur-[60px] 
                      shadow-lg z-50
                      flex justify-center items-start
                      border-2 border-white/30 md:hidden
                      rounded-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6 text-center py-6"
            >
              <a
                href="https://axxeltechnologies.com/inflecto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md font-semibold text-gray-800 hover:text-black transition"
              >
                🌐 Visit Our Website
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </header>
  );
};

export default Header;
