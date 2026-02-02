import React from "react";

const RadialGlow = ({ 
  colors = [
    { color: "rgba(112, 203, 207, 0.15)", position: "50% 50%", size: "50%" },
    { color: "rgba(185, 120, 178, 0.1)", position: "80% 20%", size: "40%" },
    { color: "rgba(231, 230, 42, 0.1)", position: "20% 80%", size: "40%" }
  ],
  className = ""
}) => {
  const gradients = colors.map(({ color, position, size }) => 
    `radial-gradient(circle at ${position}, ${color} 0%, transparent ${size})`
  ).join(", ");

  return (
    <div 
      className={`absolute inset-0 pointer-events-none select-none ${className}`}
      style={{
        background: gradients
      }}
    />
  );
};

export default RadialGlow;
