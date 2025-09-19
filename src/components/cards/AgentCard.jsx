import React, { useState, useRef, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import Frame from "../../assets/frame.svg";

const COLORS = ["#F9F0F9", "#DBD7D2", "#E3FBFC", "#F3A7A066", "#FFFFE2"];
const TEXTCOLORS = ["#5B2E59", "#6F522C", "#1F6A6C", "#973B32", "#6B6A00"];

const AgentCard = ({ agent, cardIndex, expanded, onExpand }) => {
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
      className={`w-full max-w-sm overflow-hidden rounded-[20px] shadow-lg border border-[#C7C7C7] p-4 bg-white cursor-pointer
                  ${
                    expanded
                      ? "md:absolute z-50 max-h-[1000px] transition-all duration-1500 ease-in-out"
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
      {/* Title */}
      <h2
        className={`text-lg manrope-medium text-gray-900 ${
          expanded ? "" : "truncate"
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
          className={`mt-2 text-sm text-[#565656] outfit-regular ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {agent.capability}
        </p>

        {!expanded && isTruncated && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onExpand()
            }}
            className="absolute mb-1 text-[#C94D40] text-xs outfit-regular"
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
            className="absolute mb-1 text-[#C94D40] text-xs outfit-regular"
          >
            Read less
          </button>
        )}
      </div>

      {/* Bottom Button */}
      <div className={` ${isTruncated?"mt-6":"mt-6"}`}>
        <div
          className={`w-full rounded-2xl p-[1px] ${
            agent.url === null
              ? "bg-[#F2F2F2]"
              : `hover:scale-102 ${
                  hovered
                    ? "border-0 bg-[linear-gradient(105.83deg,rgba(231,230,42,0.32)_0%,rgba(185,100,178,0.32)_31.73%,rgba(112,203,207,0.32)_61.54%,rgba(228,99,86,0.32)_89.9%)]"
                    : "border border-[#4B371C]"
                }`
          }`}
        >
          <a
            href={agent.url === null ? "" : agent.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-row items-center justify-center w-full rounded-2xl py-2 text-sm outfit-medium ${
              agent.url === null
                ? "pointer-events-none text-[#333333]"
                : "text-[#4B371C]"
            } text-center`}
          >
            <BsStars
              size={16}
              color={hovered ? "black" : "#4B371C"}
              className="mr-2"
            />{" "}
            {agent.url === null ? "Coming Soon" : "Explore Agent"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
