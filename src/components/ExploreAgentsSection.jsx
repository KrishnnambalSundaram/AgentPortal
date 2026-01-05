

import AgentCard from "../components/AgentCard";

export default function ExploreAgentsSection() {
  const agents = [
    {
      title: "Clause Guard",
      tags: ["OpenAI", "Python"],
      description:
        "Agentic AI detects risky clauses, summarizes risks, and allows GenAI-powered natural language Q&A on contract content.",
      button: "Explore Agent",
    },
    {
      title: "Home Insurance Portal",
      tags: ["OutSystems"],
      description:
        "Invoice Extractor leverages GenAI and OCR to identify invoice number, date, and amount; validates entries and auto-logs to Google Sheets.",
      button: "Explore Agent",
    },
    {
      title: "HR Policy Assistant",
      tags: ["OpenAI", "Python"],
      description:
        "Built with domain-aligned GenAI, this agent answers HR-specific questions while rejecting unrelated ones, ensuring high precision.",
      button: "Explore Agent",
    },
    {
      title: "Invoice Extractor",
      tags: ["Google Sheets API", "OpenAI", "Python"],
      description:
        "Invoice Extractor leverages GenAI and OCR to identify invoice number, date, and amount; validates entries and auto-logs to Google Sheets. Invoice Extractor leverages GenAI and OCR to identify invoice number, date, and amount; validates entries and auto-logs to Google Sheets.",
      button: "Explore Agent",
    },
    {
      title: "Lead Qualifier (UnifyApps)",
      tags: ["OpenAI GPT-4", "UnifyApps"],
      description:
        "Agentic AI captures user intent, qualifies leads based on contextual input, updates CRM, and schedules meetings automatically.",
      button: "Explore Agent",
    },
    {
      title: "Patient Management System",
      tags: ["OutSystems"],
      description:
        "Invoice Extractor leverages GenAI and OCR to identify invoice number, date, and amount; validates entries and auto-logs to Google Sheets.",
      button: "Explore Agent",
    },
    {
      title: "Intelligent Refund Processing",
      tags: ["OpenAI", "UnifyApps"],
      description:
        "Invoice Extractor leverages GenAI and OCR to identify invoice number, date, and amount; validates entries and auto-logs to Google Sheets.",
      button: "Coming Soon",
    },
    {
      title: "Lead Qualifier (Python)",
      tags: ["OpenAI", "Python"],
      description:
        "Invoice Extractor leverages GenAI and OCR to identify invoice number, date, and amount; validates entries and auto-logs to Google Sheets. Invoice Extractor leverages GenAI and OCR to identify invoice number, date, and amount; validates entries and auto-logs to Google Sheets.",
      button: "Coming Soon",
    },
  ];

  const tagStyles = {
    OpenAI: "bg-[#FFF6C7] text-[#6B6A00]",
    "OpenAI GPT-4": "bg-[#FFF6C7] text-[#6B6A00]",
    Python: "bg-[#F4E8FF] text-[#6A2EA6]",
    OutSystems: "bg-[#FFE3E0] text-[#C03A2B]",
    UnifyApps: "bg-[#F3E9DA] text-[#8B6A3D]",
    "Google Sheets API": "bg-[#E6F6F0] text-[#1E7F5C]",
  };

  return (
    <section className="w-full bg-white py-[80px]">
      <div className="max-w-[1240px] mx-auto px-[40px]">

        <h2 className="font-manrope font-bold text-[48px] leading-[78px] text-center text-[#4B371C] mb-[64px]">
          Explore The AI Agents
        </h2>

        {/* 🔑 KEY FIX: items-start */}
        <div className="grid grid-cols-3 gap-x-[24px] gap-y-[32px] items-start">
          {agents.map((agent, index) => (
            <AgentCard
              key={index}
              agent={agent}
              tagStyles={tagStyles}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
