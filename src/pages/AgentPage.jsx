import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import { IoChevronBack } from "react-icons/io5";
import InfoCard from "../components/cards/InfoCard";
import AgentCard from "../components/cards/AgentCard";
import { getAgents } from "../services/AgentApi";

const COLORS = ["#F9F0F9", "#DBD7D2", "#E3FBFC", "#F3A7A066", "#FFFFE2"];
const TEXTCOLORS = ["#5B2E59", "#6F522C", "#1F6A6C", "#973B32", "#6B6A00"];

const AgentPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const [agent, setAgent] = useState(state?.agent || null);
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(!state?.agent);
  const [expandedMoreAgent, setExpandedMoreAgent] = useState(null);

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

  const otherAgents = useMemo(() => {
    if (!agent) return agents.slice(0, 2);
    return agents.filter((item) => item.id !== agent.id).slice(0, 2);
  }, [agent, agents]);

  const handleNavigateHome = () => navigate("/");

  if (loading) {
    return (
      <main className="flex w-full items-center justify-center py-24">
        <p className="text-[#565656] outfit-regular">Loading agent...</p>
      </main>
    );
  }

  if (!agent) {
    return (
      <main className="flex w-full items-center justify-center py-24 px-4">
        <div className="max-w-lg text-center space-y-4 bg-white/70 border border-[#E5E5E5] rounded-2xl p-6 shadow-sm">
          <p className="text-lg manrope-medium text-[#4B371C]">
            Agent not found.
          </p>
          <p className="text-sm text-[#565656] outfit-regular">
            We could not load the selected agent. Please return to the agent
            list and try again.
          </p>
          <button
            type="button"
            onClick={handleNavigateHome}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4B371C] px-4 py-2 text-white outfit-medium hover:opacity-90 transition"
          >
            <IoChevronBack size={18} /> Back to Agents
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col w-full bg-[#F8F8F8]">
      {/* Hero / Demo */}
      <section className="w-full">
        <div className="max-w-6xl w-[92%] mx-auto pt-28 pb-10 space-y-6">
          <button
            type="button"
            onClick={handleNavigateHome}
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
          >
            <IoChevronBack size={18} />
            Back to Agents
          </button>

          <div className="overflow-hidden rounded-[28px]">
            <iframe
              src="https://drive.google.com/file/d/19pI5spyB39VAQ7hToIo_vDwfapJLUnj-/preview"
              className="w-full aspect-video"
              allow="autoplay"
              allowFullScreen
              title="Agent Demo Video"
            />
          </div>
        </div>
      </section>

      {/* Details + More agents */}
      <section className="w-full bg-[#F8F8F8]">
        <div className="max-w-6xl w-[92%] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 py-12">
          <div className="bg-white border border-[#E5E5E5] rounded-2xl p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-2xl manrope-medium text-[#4B371C]">
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
                    className="inline-flex items-center rounded-2xl text-xs px-3 py-1 outfit-regular"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
            <p className="text-[#565656] text-sm sm:text-base leading-relaxed outfit-regular whitespace-pre-line">
              {agent.capability || agent.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={handleNavigateHome}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#C7C7C7] px-5 py-3 text-[#4B371C] outfit-medium hover:bg-[#F7F7F7] transition"
              >
                <IoChevronBack size={16} />
                Browse all agents
              </button>
            </div>
          </div>

          <div className="bg-white border border-[#E5E5E5] rounded-2xl p-5 shadow-sm">
            <p className="text-lg manrope-medium text-[#4B371C] mb-4">
              More Agents
            </p>
            <div className="flex flex-col gap-4">
              {otherAgents.length === 0 ? (
                <p className="text-sm text-[#565656] outfit-regular">
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
    </main>
  );
};

export default AgentPage;
