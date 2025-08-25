import React from "react";
import infoCardBackground from "../../assets/info-card-background.svg";
import { IoIosGlobe } from "react-icons/io";

const InfoCard = () => {
  return (
    <div
      className="relative flex w-full items-center justify-center bg-[#EDFEFF] px-4 py-12 sm:py-16 md:py-20"
    >
      {/* Content Overlay */}
      <div className="text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl px-3 sm:px-6">
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#4B371C] leading-snug select-none">
          Explore More With Inflecto
        </h2>
        <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-[#565656] select-none">
          Discover our full range of solutions, insights, and resources on our official website.
        </p>
        <div className="mt-5 sm:mt-7 inline-block rounded-2xl p-[1px] bg-[conic-gradient(from_90deg_at_0.25%_50%,#70CBCF_0deg,#E36256_180deg,#FFFF7A_270deg,#B978B2_360deg)] hover:scale-105 transition">
            <div className="w-[160px] sm:w-[200px] md:w-[239px] bg-white rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 cursor-pointer text-sm sm:text-base md:text-lg font-medium select-none text-center shadow-lg">
                <a
          href="https://axxeltechnologies.com/inflecto"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-row items-center text-gray-800 bg-white/60 rounded-xl gap-2 `}
        >
          <IoIosGlobe size={25}/> Visit Our Website
        </a>
            </div>
        </div>

      </div>
    </div>
  );
};

export default InfoCard;
