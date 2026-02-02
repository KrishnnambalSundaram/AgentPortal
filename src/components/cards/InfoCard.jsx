import React from "react";
import infoCardBackground from "../../assets/info-card-background.svg";
import { IoIosGlobe } from "react-icons/io";
import leftBg from '../../assets/left-bg.png'
import rightBg from '../../assets/right-bg.png'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlairButton from "../FlairButton";
gsap.registerPlugin(ScrollTrigger);

const InfoCard = () => {
  useGSAP(() => {
    // Animate title with word split effect
    gsap.from("#info-title", {
      scrollTrigger: {
        trigger: "#info-section",
        start: "top 75%",
      },
      opacity: 0,
      y: 50,
      scale: 0.9,
      duration: 1,
      ease: "power3.out"
    });

    // Animate description
    gsap.from("#info-description", {
      scrollTrigger: {
        trigger: "#info-section",
        start: "top 75%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2,
      ease: "power2.out"
    });

    // Animate button with bounce
    gsap.from("#info-button", {
      scrollTrigger: {
        trigger: "#info-section",
        start: "top 75%",
      },
      opacity: 0,
      scale: 0,
      rotation: 360,
      duration: 1,
      delay: 0.4,
      ease: "elastic.out(1, 0.5)"
    });

    // Animate background images
    gsap.from(".info-bg-left", {
      scrollTrigger: {
        trigger: "#info-section",
        start: "top 75%",
      },
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });

    gsap.from(".info-bg-right", {
      scrollTrigger: {
        trigger: "#info-section",
        start: "top 75%",
      },
      x: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });
  }, []);

  return (
    <div
      id="info-section"
      className="relative flex w-full items-center justify-center bg-black px-4 py-12 sm:py-16 md:py-20"
    >
      <img src={leftBg} className="info-bg-left hidden md:absolute md:block left-0 bottom-0 z-0 pointer-events-none"/>
      <img src={rightBg} className="info-bg-right absolute right-0 top-0 z-0 pointer-events-none"/>

      {/* Content Overlay */}
      <div className="text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl px-3 sm:px-6 z-10">
        <h2 id="info-title" className="text-lg sm:text-2xl md:text-3xl lg:text-4xl manrope-bold text-white leading-snug select-none">
          Explore More With Inflecto
        </h2>
        <p id="info-description" className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl outfit-regular text-gray-300 select-none">
          Discover our full range of solutions, insights, and resources on our official website.
        </p>
        <div className="mt-5 sm:mt-7 inline-block rounded-2xl">
            {/* <div id="info-button" className="z-100 w-auto bg-white hover:bg-gray-200 rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 cursor-pointer text-sm sm:text-base md:text-lg font-semibold select-none text-center transition-all hover:scale-105"> */}
                {/* <a
                  href="https://inflectotechnologies.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row outfit-regular items-center text-black rounded-xl gap-2"
                >
                <IoIosGlobe size={25}/> Visit Our Website
              </a> */}
              
            {/* </div> */}
            <FlairButton
                  href='https://inflectotechnologies.com/'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-black/50 px-5 py-3 text-white outfit-medium hover:bg-black transition"
                  flairColor="#B978B2"
                  flairOpacity={0.3}
                  flairSize={128}
                >
                  Visit Our Website
            </FlairButton>
        </div>

      </div>
    </div>
  );
};

export default InfoCard;
