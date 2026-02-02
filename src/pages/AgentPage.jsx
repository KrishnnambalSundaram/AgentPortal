import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import { IoChevronBack } from "react-icons/io5";
import InfoCard from "../components/cards/InfoCard";
import AgentCard from "../components/cards/AgentCard";
import FlairButton from "../components/FlairButton";
import AgentAccessModal from "../components/AgentAccessModal";
import { getAgents } from "../services/AgentApi";
import { useAuth } from "../context/AuthContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { trackAgentView } from "../utils/analytics";

gsap.registerPlugin(ScrollTrigger);

const COLORS = ["#F9F0F9", "#DBD7D2", "#E3FBFC", "#F3A7A066", "#FFFFE2"];
const TEXTCOLORS = ["#5B2E59", "#6F522C", "#1F6A6C", "#973B32", "#6B6A00"];

const AgentPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const { user } = useAuth();
  const [agent, setAgent] = useState(state?.agent || null);
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(!state?.agent);
  const [expandedMoreAgent, setExpandedMoreAgent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let active = true;

    async function fetchAgents() {
      try {
        const data = await getAgents();
        const sortedAgents = data.data.sort((a, b) => a.id - b.id);
        if (!active) return;
        setAgents(sortedAgents);

        const fallbackAgent =
          state?.agent ||
          sortedAgents.find((item) => `${item.id}` === id) ||
          sortedAgents[0] ||
          null;
        setAgent(fallbackAgent);
      } catch (error) {
        console.error("Unable to load agents", error);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    if (state?.agents && state.agents.length > 0) {
      setAgents(state.agents);
      setAgent(state.agent || state.agents.find((item) => `${item.id}` === id) || state.agents[0] || null);
      setLoading(false);
    } else {
      fetchAgents();
    }

    return () => {
      active = false;
    };
  }, [id, state]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Track agent view
  useEffect(() => {
    if (agent) {
      trackAgentView(agent.id, agent.name);
    }
  }, [agent]);

  useGSAP(() => {
    if (!agent) return;

    // Each element animates only when it enters viewport
    
    // Video container
    gsap.from("#video-container", {
      scrollTrigger: {
        trigger: "#video-container",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out"
    });

    // Details section
    gsap.from("#details-section", {
      scrollTrigger: {
        trigger: "#details-section",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "power3.out"
    });

    // Sidebar
    gsap.from("#sidebar-section", {
      scrollTrigger: {
        trigger: "#sidebar-section",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: "power3.out"
    });

    // Agent title
    gsap.from("#agent-title", {
      scrollTrigger: {
        trigger: "#agent-title",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out"
    });

    // Tech stack badges
    gsap.from(".tech-badge", {
      scrollTrigger: {
        trigger: ".tech-badge",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      scale: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "back.out(1.7)"
    });

    // Description
    gsap.from("#agent-description", {
      scrollTrigger: {
        trigger: "#agent-description",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out"
    });
  }, [agent]);

  const otherAgents = useMemo(() => {
    if (!agent) return agents.slice(0, 2);
    return agents.filter((item) => item.id !== agent.id).slice(0, 2);
  }, [agent, agents]);

  const handleNavigateHome = () => navigate("/");

  if (loading) {
    return (
      <main className="flex w-full items-center justify-center py-24 bg-black min-h-screen">
        <p className="text-gray-400 outfit-regular">Loading agent...</p>
      </main>
    );
  }

  if (!agent) {
    return (
      <main className="flex w-full items-center justify-center py-24 px-4 bg-black min-h-screen">
        <div className="max-w-lg text-center space-y-4 bg-black/95 border border-white/30 rounded-2xl p-6 backdrop-blur-lg">
          <p className="text-lg manrope-medium text-white">
            Agent not found.
          </p>
          <p className="text-sm text-gray-400 outfit-regular">
            We could not load the selected agent. Please return to the agent
            list and try again.
          </p>
          <button
            type="button"
            onClick={handleNavigateHome}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-black outfit-medium hover:bg-gray-200 transition"
          >
            <IoChevronBack size={18} /> Back to Agents
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col w-full bg-black">
      {/* Hero / Demo */}
      <section className="w-full bg-black">
        <div className="max-w-6xl w-[92%] mx-auto pt-36 pb-10 space-y-6">

          <div id="video-container" className="overflow-hidden rounded-[28px] border border-white/30">
            <iframe
              src={agent.video_url}
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Agent Demo Video"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Details + More agents */}
      <section className="w-full bg-black">
        <div className="max-w-6xl w-[92%] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 py-12">
          <div id="details-section" className="bg-black/95 border border-white/30 rounded-2xl p-6 backdrop-blur-lg space-y-6">
            <div className="flex items-center gap-3">
              <div>
                <p id="agent-title" className="text-2xl manrope-medium text-white">
                  {agent.name}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {(agent.tech_stack || []).map((tag, index) => {
                const color = COLORS[index % COLORS.length] || COLORS[0];
                const textColor = TEXTCOLORS[index % TEXTCOLORS.length] || TEXTCOLORS[0];
                return (
                  <span
                    key={`${tag}-${index}`}
                    style={{ backgroundColor: color, color: textColor }}
                    className="tech-badge inline-flex items-center rounded-2xl text-xs px-3 py-1 outfit-regular"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
            <p id="agent-description" className="text-gray-300 text-sm sm:text-base leading-relaxed outfit-regular whitespace-pre-line">
              {agent.capability || agent.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={handleNavigateHome}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-black/50 px-5 py-3 text-white outfit-medium hover:bg-black transition"
              >
                <IoChevronBack size={16} />
                Browse all agents
              </button>
              
              {agent.url !== null && (
                <>
                  {/* Inflecto Employee - Direct Access */}
                  {user?.isinflectoemployee ? (
                    <FlairButton
                      href={agent.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#70CBCF]/50 bg-[#70CBCF]/10 px-5 py-3 text-[#70CBCF] outfit-medium hover:bg-[#70CBCF]/20 transition"
                      flairColor="#70CBCF"
                      flairOpacity={0.5}
                      flairSize={128}
                    >
                      <BsStars size={16} />
                      Go to Agent
                    </FlairButton>
                  ) : (
                    /* Regular Users - Request Access */
                    <FlairButton
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-black/50 px-5 py-3 text-white outfit-medium hover:bg-black transition"
                      flairColor="#70CBCF"
                      flairOpacity={0.3}
                      flairSize={128}
                    >
                      Request Access
                    </FlairButton>
                  )}
                </>
              )}
            </div>
          </div>

          <div id="sidebar-section" className="bg-black/95 border border-white/30 rounded-2xl p-5 backdrop-blur-lg">
            <p className="text-lg manrope-medium text-white mb-4">
              More Agents
            </p>
            <div className="flex flex-col gap-4">
              {otherAgents.length === 0 ? (
                <p className="text-sm text-gray-400 outfit-regular">
                  More agents will appear here soon.
                </p>
              ) : (
                otherAgents.map((item, index) => (
                  <AgentCard
                    key={item.id}
                    agent={item}
                    cardIndex={index}
                    expanded={expandedMoreAgent === item.id}
                    onExpand={() =>
                      setExpandedMoreAgent(expandedMoreAgent === item.id ? null : item.id)
                    }
                    disableAbsoluteExpand={true}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <InfoCard />

      {/* Agent Access Modal */}
      <AgentAccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        agentId={agent.id}
        agentName={agent.name}
      />
    </main>
  );
};

export default AgentPage;
