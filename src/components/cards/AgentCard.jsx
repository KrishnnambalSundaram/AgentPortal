import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import Frame from '../../assets/frame.svg'

const COLORS = ['#F9F0F9','#DBD7D2','#E3FBFC','#F3A7A066','#FFFFE2']
const TEXTCOLORS = ['#5B2E59','#6F522C','#1F6A6C','#973B32','#6B6A00']
const AgentCard = ({ agent, cardIndex }) => {
    const [hovered,setHovered] = useState(false)
    const [expanded,setExpanded] = useState(false)
  return (
    <div 
      onClick={()=>setHovered(true)}
      onFocus={()=>setHovered(true)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        setExpanded(false)
      }} 
      className={` w-full max-w-sm overflow-hidden rounded-[20px] shadow-lg border border-[#C7C7C7] p-4 bg-white cursor-pointer
                  ${expanded ? "lg:absolute z-50 max-h-[1000px] transition-all duration-1500 ease-in-out" : "relative z-0 max-h-[225px] transition-all duration-1000 ease-in-out"} 
                  transition-all duration-400 ease-in-out overflow-hidden hover:scale-103 transform`}
                    style={{
        backgroundImage: `url(${Frame})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        backgroundSize: "150px 150px",
      }}
      >
      {/* Title */}
      <h2 className={`text-lg font-semibold text-gray-900 ${expanded?'':'truncate'}`}>{agent.name}</h2>

      {/* Tags */}
      <div className={`flex gap-2 mt-2 ${expanded?'flex-wrap':'overflow-hidden whitespace-nowrap'} transition-all duration-400 ease-in-out`}>
        {
          agent.techStack.split(',').map((item,index)=>{
            const color = COLORS[cardIndex % COLORS.length + index] || COLORS[index % cardIndex]
            const textColor = TEXTCOLORS[cardIndex % TEXTCOLORS.length + index] || TEXTCOLORS[index % cardIndex]
           return(
            <div key={index} style={{backgroundColor: color, color: textColor}} className={`inline-block rounded-2xl px-2 text-xs py-1`}>{item}</div>
          )})
        }
      </div>

      {/* Description */}
      <p className={`mt-3 text-sm text-gray-700 ${expanded ? "" : "line-clamp-3"}`}>
  {expanded ? agent.capability : (
    <>
      {agent.capability.length > 100
        ? agent.capability.slice(0, 100) + "..."
        : agent.capability}
      {agent.capability.length > 100 && !expanded && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            setExpanded(true)}}
          className="ml-1 text-[#C94D40] text-xs font-medium "
        >
          Read more
        </button>
      )}
    </>
  )}
</p>

{expanded && agent.capability.length > 100 && (
  <button
    onClick={(e) => {
            e.stopPropagation()
            setExpanded(false)}}
    className="mt-1 text-[#C94D40] text-xs font-medium "
  >
    Read less
  </button>
)}


      {/* Bottom Button */}
      <div className="mt-4">
        <div className={`w-full rounded-2xl p-[1px] ${agent.link===''?'bg-[#F2F2F2]':`hover:scale-102 ${hovered?'border-0 bg-[linear-gradient(105.83deg,rgba(231,230,42,0.32)_0%,rgba(185,100,178,0.32)_31.73%,rgba(112,203,207,0.32)_61.54%,rgba(228,99,86,0.32)_89.9%)]':'border border-[#4B371C]'}`}`}>
          <a
            href={agent.link===''?'':agent.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-row items-center justify-center w-full rounded-2xl py-2 text-sm font-semibold ${agent.link===''?'pointer-events-none text-[#333333]':'text-[#4B371C]'} text-center`}
          >
             <BsStars size={16} color={hovered?'black':'#4B371C'} className="mr-2"/> {agent.link===''?'Coming Soon':'Explore Agent'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;

