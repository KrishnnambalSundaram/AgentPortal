import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InflectoLogo from "../assets/inflecto-logo.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosGlobe } from "react-icons/io";
import { useAuth } from "../context/AuthContext";
import { logout } from "../services/AuthService";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlairButton from "./FlairButton";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Desktop animations only
    mm.add("(min-width: 768px)", () => {
      // Shrink header on scroll with smooth easing
      gsap.to("#header", {
        scrollTrigger: {
          trigger: "body",
          start: "50px top",
          end: "150px top",
          scrub: 0.5,
        },
        width: "50%",
        borderWidth:'1px',
        borderColor: '#ffffff50',
        backgroundColor:'#00000050',
        borderRadius: "50px",
        padding: "8px 20px",
        top: "12px",
        ease: "power2.inOut",
      });

      // Shrink logo smoothly
      gsap.to("#header-logo", {
        scrollTrigger: {
          trigger: "body",
          start: "50px top",
          end: "150px top",
          scrub: 0.5,
        },
        scale: 0.8,
        ease: "power2.inOut",
      });

      // Shrink buttons
      gsap.to(".header-action", {
        scrollTrigger: {
          trigger: "body",
          start: "50px top",
          end: "150px top",
          scrub: 0.5,
        },
        scale: 0.85,
        ease: "power2.inOut",
      });
    });

    return () => mm.revert();
  }, []);
  return (
    <header
      id="header"
      style={{width:'85%'}}
      className="fixed z-100 left-1/2 -translate-x-1/2 
             flex justify-between items-center 
             px-4 md:px-8 py-3 md:py-4
             rounded-3xl backdrop-blur-2xl
             top-6 md:top-7 transition-all duration-300 ease-out"
    >
      {/* Logo */}
      <div id="header-logo" className="flex items-center shrink-0">
        <img
          src={InflectoLogo}
          alt="Inflecto Logo"
          className="h-10 md:h-12 object-contain transition-all duration-300 ease-out"
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-2 lg:gap-3">
        {/* <a
          href="https://inflectotechnologies.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="header-action flex items-center gap-2 text-white text-sm lg:text-base outfit-medium 
                     bg-white/5 rounded-2xl border border-white/20 
                     hover:bg-white/10 hover:border-white/40
                     py-2.5 px-4 lg:px-5
                     transition-all duration-200 ease-out
                     group"
        >
          <IoIosGlobe size={18} className="group-hover:rotate-12 transition-transform duration-200"/>
          <span className="hidden lg:inline">Visit Website</span>
          <span className="lg:hidden">Website</span>
        </a> */}
        <FlairButton
                  href='https://inflectotechnologies.com/'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-black/50 px-5 py-3 text-white outfit-medium hover:bg-black transition"
                  flairColor="#B978B2"
                  flairOpacity={0.3}
                  flairSize={128}
                >
                  Visit Our Website
            </FlairButton>

        {/* User Menu (Only if logged in) */}
        {user && (
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="header-action flex items-center gap-2 text-white text-sm lg:text-base outfit-medium 
                        bg-white/5 rounded-2xl border border-white/20
                        hover:bg-white/10 hover:border-white/40
                        py-2.5 px-4 lg:px-5
                        transition-all duration-200 ease-out"
            >
              <div className="w-7 h-7 rounded-full bg-[#70CBCF]/20 border border-[#70CBCF]/40 flex items-center justify-center">
                <FaUser size={14} className="text-[#70CBCF]"/>
              </div>
              <span className="max-w-[100px] lg:max-w-[150px] truncate">{user.fullname}</span>
            </button>

            {/* User Dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 mt-3 w-64 bg-black/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)] py-3 z-50 overflow-hidden">
                <div className="px-4 py-3 border-b border-white/10">
                  <p className="text-sm manrope-medium text-white truncate">{user.fullname}</p>
                  <p className="text-xs outfit-regular text-gray-400 truncate mt-0.5">{user.email}</p>
                  {user.isinflectoemployee && (
                    <span className="inline-flex items-center mt-2 text-xs px-2.5 py-1 bg-[#70CBCF]/10 text-[#70CBCF] border border-[#70CBCF]/30 rounded-full outfit-medium">
                      ✦ Inflecto Employee
                    </span>
                  )}
                </div>
                <button
                  onClick={() => {
                    logout();
                    setShowUserMenu(false);
                  }}
                  className="w-full text-left px-4 py-2.5 text-sm outfit-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-white text-2xl relative z-50 
                   w-10 h-10 flex items-center justify-center
                   bg-white/5 border border-white/20 rounded-xl
                   hover:bg-white/10 hover:border-[#70CBCF]/50
                   transition-all duration-200 ease-out
                   active:scale-95"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 top-full mt-3
                        w-[280px]
                        bg-black/95 backdrop-blur-2xl 
                        shadow-[0_8px_32px_rgba(0,0,0,0.6)]
                        border border-white/20
                        rounded-2xl overflow-hidden
                        z-50 md:hidden"
            >
              <div className="flex flex-col p-4 space-y-3">
                <a
                  href="https://inflectotechnologies.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm outfit-medium text-white 
                           bg-white/5 border border-white/20 rounded-xl
                           hover:bg-white/10 hover:border-white/40
                           py-3 px-4 transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  <IoIosGlobe size={18}/>
                  Visit Our Website
                </a>

                {user && (
                  <>
                    <div className="border-t border-white/10 pt-3 mt-2">
                      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                        <div className="w-10 h-10 rounded-full bg-[#70CBCF]/20 border border-[#70CBCF]/40 flex items-center justify-center shrink-0">
                          <FaUser size={16} className="text-[#70CBCF]"/>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm manrope-medium text-white truncate">{user.fullname}</p>
                          <p className="text-xs outfit-regular text-gray-400 truncate">{user.email}</p>
                        </div>
                      </div>
                      {user.isinflectoemployee && (
                        <span className="inline-flex items-center mt-2 text-xs px-2.5 py-1 bg-[#70CBCF]/10 text-[#70CBCF] border border-[#70CBCF]/30 rounded-full outfit-medium">
                          ✦ Inflecto Employee
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setMenuOpen(false);
                      }}
                      className="text-sm outfit-medium text-red-400 
                               bg-red-500/10 border border-red-500/20 rounded-xl
                               hover:bg-red-500/20 hover:border-red-500/40
                               py-3 px-4 transition-all duration-200"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
