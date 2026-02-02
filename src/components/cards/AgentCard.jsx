import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import Frame from "../../assets/frame.svg";

const COLORS = ["#F9F0F9", "#DBD7D2", "#E3FBFC", "#F3A7A066", "#FFFFE2"];
const TEXTCOLORS = ["#5B2E59", "#6F522C", "#1F6A6C", "#ffffff", "#6B6A00"];

const AgentCard = ({ agent, cardIndex, expanded, onExpand, disableAbsoluteExpand = false }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const descRef = useRef(null);

  useEffect(() => {
    if (descRef.current) {
      const { scrollHeight, clientHeight } = descRef.current;
      setIsTruncated(scrollHeight > clientHeight);
    }
  }, [agent.capability]);

  return (
    <div
      // onClick={onExpand}
      onFocus={() => setHovered(true)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
      }}
      className={`group w-sm hover:translate-y-[-10px] duration-300 ease-in transition-all overflow-hidden rounded-[20px] border border-neutral-700/30 m-1
                  hover:bg-gradient-to-r from-black/30 to-zinc-800 hover:shadow-neutral-400/30 shadow-md
                  ${
                    expanded
                      ? `${disableAbsoluteExpand ? 'relative' : 'md:absolute'} z-50 max-h-[1000px] transition-all duration-1500 ease-in-out`
                      : "relative z-0 max-h-[225px] transition-all duration-300 ease-in-out"
                  } 
                  transition-all duration-300 ease-in-out overflow-hidden hover:scale-103 transform`}
      // style={{
      //   backgroundImage: `url(${Frame})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "right top",
      //   backgroundSize: "150px 150px",
      // }}
    >
      <div className="relative inset-0 p-4 rounded-2xl w-full h-full">
      {/* Title */}
      <h2
        className={`text-lg manrope-medium text-white group-hover:text-shadow-lg transition-all duration-300 ease-in-out ${
          expanded ? "" : "truncate group-hover:text-shadow-lg transition-all duration-300 ease-in-out"
        }`}
      >
        {agent.name}
      </h2>

      {/* Tags */}
      <div
        className={`flex gap-2 mt-2 ${
          expanded ? "flex-wrap" : "overflow-hidden whitespace-nowrap"
        } transition-all duration-400 ease-in-out`}
      >
        {agent.tech_stack.map((item, index) => {
          const color =
            COLORS[(cardIndex + index) % COLORS.length] || COLORS[0];
          const textColor =
            TEXTCOLORS[(cardIndex + index) % TEXTCOLORS.length] ||
            TEXTCOLORS[0];
          return (
            <div
              key={index}
              style={{ backgroundColor: color, color: textColor }}
              className={`inline-block outfit-regular rounded-2xl px-2 text-xs py-1`}
            >
              {item}
            </div>
          );
        })}
      </div>

      {/* Description */}
      <div className="min-h-16">
        <p
          ref={descRef}
          className={`mt-2 text-sm text-gray-300 outfit-regular ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {agent.description}
        </p>

        {!expanded && isTruncated && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onExpand()
            }}
            className="absolute mb-1 text-[#70CBCF] hover:text-[#B978B2] text-xs outfit-regular transition"
          >
            Read more
          </button>
        )}

        {expanded && isTruncated && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onExpand()
            }}
            className="absolute mb-1 text-[#70CBCF] hover:text-[#B978B2] text-xs outfit-regular transition"
          >
            Read less
          </button>
        )}
      </div>

      {/* Bottom Button */}
      <div className={` ${isTruncated?"mt-6":"mt-6"}`}>
        <div
          className={`w-full rounded-xl ${
            agent.video_url === null
              ? "bg-gray-800/50 border border-gray-700"
              : `${
                  hovered
                    ? "border-0 bg-gradient-to-r from-zinc-800 to-black/30 hover:bg-gradient-to-r hover:from-black/30 hover:to-zinc-800 hover:shadow-neutral-400/30 hover:shadow-md hover:scale-102 transition-all duration-300 ease-in-out"
                    : "border border-white/30"
                }`
          } transition-all`}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (agent.video_url !== null && agent.id) {
                navigate(`/agent/${agent.id}`, { state: { agent } });
              }
            }}
            className={`group flex flex-row items-center justify-center w-full rounded-2xl py-2 text-sm outfit-medium ${
              agent.video_url === null
                ? "pointer-events-none text-gray-600"
                : hovered
                ? "text-white cursor-pointer font-semibold"
                : "text-white cursor-pointer"
            } text-center transition-all`}
          >
            <BsStars
              size={16}
              color={agent.video_url === null ? "#666" : "white"}
              className="mr-2 group-hover:animate-pulse"
            />{" "}
            {agent.video_url === null ? "Coming Soon" : "Explore Agent"}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AgentCard;
