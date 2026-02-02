import React, { useEffect, useState } from "react";
import InflectoExplore from "../assets/inflecto-explore.svg";
import HeroBackground from "../assets/hero-background.svg";
import InfoCard from "./cards/InfoCard";
import AgentCard from "./cards/AgentCard";
import { getAgents } from "../services/AgentApi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Background Effects
import RadialGlow from "./backgrounds/RadialGlow";
import DotMatrix from "./backgrounds/DotMatrix";
import AnimatedGradientMesh from "./backgrounds/AnimatedGradientMesh";
import CircuitBoard from "./backgrounds/CircuitBoard";

gsap.registerPlugin(ScrollTrigger);

const Body = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const scrollToAgents = () => {
    document.getElementById("ai-agents-section").scrollIntoView({
      behavior: "smooth",
    });
  };
  const [agents, setAgents] = useState([]);
  useGSAP(()=>{
    // Hero scroll animation
    gsap.timeline(
      {scrollTrigger:{
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }}
    ).to("#hero-section", {
      scale: 0.97,
      borderRadius: "24px",
      overflow: "hidden",
      duration: 1,
      ease: "power2.inOut",
    },0).to("#hero-content", {
      y: 300,
      duration: 1,
      ease: "power2.inOut",
    },0).to("#hero-image", {
      scale: 3,
      duration: 1,
      ease: "power2.inOut",
    },0)

    // Text animations on load
    const heroTimeline = gsap.timeline({ delay: 0.3 });

    // Animate "Your Gateway To" word by word
    const titleWords = document.querySelectorAll("#hero-title .word");
    heroTimeline.from(titleWords, {
      opacity: 0,
      y: 50,
      rotationX: -90,
      transformOrigin: "top center",
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)"
    });

    // Animate "Agentic AI" with special effect
    heroTimeline.from("#hero-gradient-text", {
      opacity: 0,
      scale: 0.5,
      rotationY: 180,
      duration: 1,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.4");

    // Animate description characters
    const descChars = document.querySelectorAll("#hero-description .char");
    heroTimeline.from(descChars, {
      opacity: 0,
      y: 20,
      stagger: 0.02,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.5");


    // Animate agents section title
    gsap.from("#agents-title", {
      scrollTrigger: {
        trigger: "#agents-title",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "play none reverse none",
      },
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    // Stagger animate agent cards
    gsap.from(".agent-card", {
      scrollTrigger: {
        trigger: ".agent-card",
        start: "top 85%",
      },
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    });
  },[gsap])
  useEffect(() => {
   async function getAgentsData() {
    try {
      const data = await getAgents();
      const sortedData = data.data.sort((a,b)=>a.id-b.id)
      setAgents(sortedData)
      console.log(sortedData)
    } catch (e) {
      console.error("Error fetching agents:", e.message);
    }
  }
  getAgentsData();
  }, []);

  return (
    <main className="flex flex-col items-center  justify-center w-full relative bg-black">
      {/* Hero Section */}
      <section
        id="hero-section"
        // style={{
        //   background:
        //     "linear-gradient(105.83deg, rgba(231, 230, 42, 0.288) 0%, rgba(112, 203, 207, 0.288) 31.73%, rgba(185, 120, 178, 0.288) 61.54%, rgba(228, 99, 86, 0.288) 89.9%)",
        // }}
        className="relative overflow-hidden flex flex-col justify-center items-center w-full min-h-100 md:min-h-170 lg:min-h-185 xl:min-h-screen text-center px-6 pt-20"
      >
        {/* Responsive Background */}
        <img
          id="hero-image"
          src={HeroBackground}
          alt="Hero Background"
          className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] 
            rounded-full opacity-100 rotate-[-169.49deg] object-cover pointer-events-none select-none"
        />

        {/* Background Effects - Choose one or combine multiple! */}
        
        {/* Option 1: Radial Glow - Professional spotlight effect */}
        {/* <RadialGlow /> */}
        
        {/* Option 2: Dot Matrix - Modern tech pattern */}
        {/* <DotMatrix dotColor="rgba(112, 203, 207, 0.2)" spacing="40px" /> */}
        
        {/* Option 3: Animated Gradient Blobs - Premium dynamic effect */}
        <AnimatedGradientMesh opacity={0.15} blur="100px" duration="25s" />
        
        {/* Option 4: Circuit Board - Tech grid pattern */}
        <CircuitBoard />
        
        {/* Combine multiple effects for unique look! */}
        {/* <CircuitBoard />
        <AnimatedGradientMesh opacity={0.1} blur="120px" /> */}

        {/* Centered Content */}
        <div id="hero-content" className="flex flex-col justify-center items-center space-y-6 max-w-2xl sm:max-w-6xl">
          <h1 id="hero-title" className="text-3xl sm:text-5xl md:text-7xl manrope-bold select-none text-white">
            <span className="word inline-block mr-3">Your</span>
            <span className="word inline-block mr-3">Gateway</span>
            <span className="word inline-block mr-3">To</span>{" "}
            <span
              id="hero-gradient-text"
              className="inline-block bg-clip-text text-[#70CBCF] 
              [text-shadow:1px_1px_2px_rgba(0,0,0,0.25)] 
              [webkit-text-stroke:1px_black]"
            >
              Agentic AI
            </span>
          </h1>

          <p id="hero-description" className="text-[#9c9c9c] text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-2xl outfit-regular select-none">
            {`Access, explore, and collaborate with powerful AI agents designed for different needs`.split(' ').map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-1">
                {word.split('').map((char, charIndex) => (
                  <span key={`${wordIndex}-${charIndex}`} className="char inline-block">
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
            <div
              id="hero-button"
              onClick={scrollToAgents}
              className="flex items-center gap-3 bg-white rounded-2xl px-6 py-3 "
            >
              <img
                src={InflectoExplore}
                alt="Logo"
                className="h-6 w-6 z-10 select-none"
              />
              <span className="text-black select-none outfit-medium">Explore Agents</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section
        id="ai-agents-section"
        className="flex flex-col items-center px-4 md:px-8 py-16 min-h-[550px] w-full pb-30 transition-all ease-in-out duration-300"
      >
        <h2 id="agents-title" className="text-2xl md:text-4xl manrope-bold mt-4 mb-8 text-center text-white">
          EXPLORE OUR AI AGENTS
        </h2>

        <div className="grid relative gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-fr">
          {
          (!agents || agents.length === 0)
            ? Array(9).fill(null).map((_, index) => (
                <div
                  key={index}
                  className="h-[225px] w-sm rounded-lg bg-neutral-200 animate-pulse"
                />
              )):
          agents.map((agent,index) => (
            <div key={agent.id} className="flex relative justify-center">
              <AgentCard
                agent={agent}
                cardIndex={index}
                expanded={expandedCard === agent.id}
                onExpand={() =>
                  setExpandedCard(expandedCard === agent.id ? null : agent.id)
                }
              />
            </div>
          ))}

        </div>
      </section>
      <InfoCard/>
    </main>
  );
};

export default Body;