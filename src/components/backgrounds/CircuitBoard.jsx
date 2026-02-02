import React from "react";

const CircuitBoard = ({ 
  primaryColor = "rgba(112, 203, 207, 0.05)",
  secondaryColor = "rgba(112, 203, 207, 0.02)",
  primarySize = "100px",
  secondarySize = "20px",
  className = ""
}) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none select-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(90deg, ${primaryColor} 1px, transparent 1px),
          linear-gradient(${primaryColor} 1px, transparent 1px),
          linear-gradient(90deg, ${secondaryColor} 1px, transparent 1px),
          linear-gradient(${secondaryColor} 1px, transparent 1px)
        `,
        backgroundSize: `${primarySize} ${primarySize}, ${primarySize} ${primarySize}, ${secondarySize} ${secondarySize}, ${secondarySize} ${secondarySize}`
      }}
    />
  );
};

export default CircuitBoard;
