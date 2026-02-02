import React, { useRef } from "react";
import gsap from "gsap";

const FlairButton = ({ 
  href,
  onClick,
  children,
  className = "",
  flairColor = "#70CBCF",
  flairOpacity = 0.3,
  flairSize = 128,
  target,
  rel,
  disabled = false,
  type = "button"
}) => {
  const buttonRef = useRef(null);
  const flairRef = useRef(null);

  const handleMouseEnter = (e) => {
    if (!buttonRef.current || !flairRef.current || disabled) return;
    const bounds = buttonRef.current.getBoundingClientRect();

    gsap.set(flairRef.current, {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
      scale: 0,
    });

    gsap.to(flairRef.current, {
      scale: 2,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  const handleMouseMove = (e) => {
    if (!buttonRef.current || !flairRef.current || disabled) return;
    const bounds = buttonRef.current.getBoundingClientRect();

    gsap.to(flairRef.current, {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
      duration: 0.1,
      ease: "none",
      overwrite: "auto"
    });
  };

  const handleMouseLeave = () => {
    if (!flairRef.current || disabled) return;
    gsap.to(flairRef.current, {
      scale: 0,
      duration: 0.5,
      ease: "power3.inOut",
    });
  };

  const baseClasses = `relative overflow-hidden ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`;

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a
        ref={buttonRef}
        href={disabled ? undefined : href}
        target={target}
        rel={rel}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={baseClasses}
      >
        {/* Flair effect */}
        <span
          ref={flairRef}
          className="pointer-events-none absolute rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ 
            transformOrigin: "center",
            width: `${flairSize}px`,
            height: `${flairSize}px`,
            backgroundColor: flairColor,
            opacity: flairOpacity,
            transform: "scale(0)"
          }}
        />
        
        {/* Content */}
        <span className="relative z-10 mix-blend-difference">
          {children}
        </span>
      </a>
    );
  }

  // Otherwise, render as button
  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={baseClasses}
    >
      {/* Flair effect */}
      <span
        ref={flairRef}
        className="pointer-events-none absolute rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ 
          transformOrigin: "center",
          width: `${flairSize}px`,
          height: `${flairSize}px`,
          backgroundColor: flairColor,
          opacity: flairOpacity,
          transform: "scale(0)"
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 mix-blend-difference">
        {children}
      </span>
    </button>
  );
};

export default FlairButton;
