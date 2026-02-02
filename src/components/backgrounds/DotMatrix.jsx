import React from "react";

const DotMatrix = ({ 
  dotColor = "rgba(112, 203, 207, 0.15)",
  dotSize = "1px",
  spacing = "30px",
  className = ""
}) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none select-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}, transparent ${dotSize})`,
        backgroundSize: `${spacing} ${spacing}`
      }}
    />
  );
};

export default DotMatrix;
