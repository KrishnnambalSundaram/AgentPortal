import { useEffect, useRef, useState } from "react";
import PrimaryActionButton from "./PrimaryActionButton";

export default function AgentCard({ agent, tagStyles }) {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    requestAnimationFrame(() => {
      if (el.scrollHeight > el.clientHeight) {
        setShowToggle(true);
      }
    });
  }, []);

  return (
    <div
      className="
        w-[352px]
        self-start
        rounded-[20px]
        border
        border-[#E0E0E0]
        bg-white
        flex
        flex-col
        pt-[10px]
        px-[24px]
        pb-[24px]
        shadow-[0_4px_16px_rgba(0,0,0,0.06)]
      "
    >
      {/* TITLE */}
      <h3 className="font-manrope font-semibold text-[20px] text-[#252525] mb-[8px]">
        {agent.title}
      </h3>

      {/* TAGS */}
      <div className="flex flex-wrap gap-[8px] mb-[12px]">
        {agent.tags.map((tag, i) => (
          <span
            key={i}
            className={`text-[12px] px-[10px] py-[4px] rounded-full ${tagStyles[tag]}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* DESCRIPTION */}
      <p
        ref={textRef}
        className={`font-outfit text-[16px] leading-[155%] text-[#565656] ${
          !expanded ? "line-clamp-3" : ""
        }`}
      >
        {agent.description}
      </p>

      {/* READ MORE / LESS */}
      {showToggle && (
        <span
          onClick={() => setExpanded(!expanded)}
          className="mt-[2px] text-[14px] text-[#E5533D] cursor-pointer self-start"
        >
          {expanded ? "Read Less..." : "Read More..."}
        </span>
      )}

      {/* BUTTON */}
      <div className="mt-auto pt-[16px]">
        <PrimaryActionButton
          text={agent.button}
          disabled={agent.button === "Coming Soon"}
        />
      </div>
    </div>
  );
}
