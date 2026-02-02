import React from "react";

const AnimatedGradientMesh = ({ 
  opacity = 0.15,
  blur = "80px",
  duration = "20s",
  className = ""
}) => {
  const blobs = [
    { color: "#70CBCF", size: "600px", animation: "blob1" },
    { color: "#B978B2", size: "500px", animation: "blob2" },
    { color: "#E7E62A", size: "550px", animation: "blob3" },
    { color: "#E46356", size: "450px", animation: "blob4" },
    { color: "#4B371C", size: "400px", animation: "blob5" }
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}>
      {blobs.map((blob, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, ${blob.color}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
            filter: `blur(${blur})`,
            animation: `${blob.animation} ${duration} ease-in-out infinite alternate`,
            willChange: 'transform'
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedGradientMesh;
