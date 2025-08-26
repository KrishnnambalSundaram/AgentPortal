import React, { useState } from 'react'
import InflectoExplore from '../assets/inflecto-explore.svg'
import HeroBackground from '../assets/hero-background.svg'
import InfoCard from './cards/InfoCard';
import AgentCard from './cards/AgentCard';
// import imagebg from '../assets/background.jpg'
const agents = [
  {
    id: 1,
    name: 'Invoice Extractor',
    description: 'Extracts key invoice data and auto-updates Google Sheets using OCR and GenAI.',
    icon: '🧾',
    techStack: 'Python, OpenAI, Google Sheets API, Google Sheets API, Google Sheets API',
    capability: 'Leverages GenAI and OCR to identify invoice number, date, and amount; validates entries and auto-logs to Google Sheets Leverages GenAI and OCR to identify invoice number, date, and amount; validates entries and auto-logs to Google Sheets.',
    link: 'http://invoiceextractor.inflectotechnologies.com',
  },
  {
    id: 2,
    name: 'Clause Guard',
    description: 'Highlights risky clauses and enables GenAI-based contract Q&A.',
    icon: '📄',
    techStack: 'Python, OpenAI',
    capability: 'Agentic AI detects risky clauses, summarizes risks, and allows GenAI-powered natural language Q&A on contract content Leverages GenAI and OCR to identify invoice number, date, and amount; validates entries and auto-logs to Google Sheets.',
    link: 'http://invoxanalyser.inflectotechnologies.com',
  },
  {
    id: 3,
    name: 'HR Policy Assistant',
    description: 'Answers questions strictly related to HR policies using domain-tuned GenAI.',
    icon: '🧠',
    techStack: 'Python, OpenAI',
    capability: 'Built with domain-aligned GenAI, this agent answers HR-specific questions while rejecting unrelated ones, ensuring high precision.',
    link: 'https://chat.inflectotechnologies.com/',
  },
  {
    id: 4,
    name: 'Lead Qualifier (UnifyApps)',
    description: 'Analyzes lead quality using interactive Q&A and schedules meetings.',
    icon: '📈',
    techStack: 'UnifyApps, OpenAI GPT-4',
    capability: 'Agentic AI captures user intent, qualifies leads based on contextual GenAI and workflow automation trigger refund processing when email contains relevant GenAI and workflow automation trigger refund processing when email contains relevant GenAI and workflow automation trigger refund processing when email contains relevant GenAI and workflow automation trigger refund processing when email contains relevant  input, updates CRM, and schedules meetings—all automated.',
    link: 'https://uat.unifyapps.com/p/0/copilot?agentId=e_6878d7149c9ea95a603ed112&b_GPiry-chatId=new',
  },
  {
    id: 5,
    name: 'Patient Management System',
    description: 'OutSystems app to book, view, and manage patient appointments.',
    icon: '🩺',
    techStack: 'OutSystems',
    capability: 'GenAI and workflow automation trigger refund processing when email contains relevant GenAI and workflow automation trigger refund processing when email contains relevant A responsive web app for booking appointments and managing visit history, offering streamlined care through low-code automation.',
    link: 'https://krishnnambal-sundaram.outsystemscloud.com/PatientPortal/',
  },
  {
    id: 6,
    name: 'Home Insurance Portal',
    description: 'Interactive OutSystems portal for insurance quotes and payments.',
    icon: '🏠',
    techStack: 'OutSystems',
    capability: 'Captivating UI with embedded workflows to generate quotes, collect payments, and drive digital engagement through low-code experience design.',
    link: 'https://krishnnambal-sundaram.outsystemscloud.com/HomeInsurancePortal/',
  },
  {
    id: 7,
    name: 'Intelligent Refund Processing',
    description: 'Email-triggered automation for refund validation and routing.',
    icon: '💸',
    techStack: 'UnifyApps, OpenAI',
    capability: 'GenAI and workflow automation trigger refund processing when email contains relevant keywords; validates and routes based on context.GenAI and workflow automation trigger refund processing when email contains relevant GenAI and workflow automation trigger refund processing when email contains relevant GenAI and workflow automation trigger refund processing when email contains relevant ',
    link: '',
  },
  {
    id: 8,
    name: 'Lead Qualifier (Python)',
    description: 'Python-based agent to qualify leads and book meetings intelligently.',
    icon: '🤖',
    techStack: 'Python, OpenAI',
    capability: 'Agentic AI analyzes responses to qualify leads, stores data, and sends meeting invites—all in one seamless Python-based flow.',
    link: '',
  },
  // {
  //   id: 9,
  //   name: 'Intelligent Travel Concierge Assistant',
  //   description: 'Python-based agent to qualify leads and book meetings intelligently.',
  //   icon: '🤖',
  //   techStack: 'Python, NLU, GenAI,  API Integrations',
  //   capability: 'The Intelligent Travel Concierge Assistant is an AI-powered travel companion that helps users plan and manage trips with minimal effort. It can generate detailed itineraries, fetch live flight and hotel information, provide destination insights, and even email travel plans directly to the user.',
  //   link: '',
  // }
];
const Body = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const scrollToAgents = () => {
    document.getElementById("ai-agents-section").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="flex flex-col items-center  justify-center w-full relative">
      {/* Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(105.83deg, rgba(231, 230, 42, 0.288) 0%, rgba(112, 203, 207, 0.288) 31.73%, rgba(185, 120, 178, 0.288) 61.54%, rgba(228, 99, 86, 0.288) 89.9%)",
        }}
        className="relative flex flex-col justify-center items-center w-full min-h-100 md:min-h-170 lg:min-h-185 xl:min-h-screen  text-white text-center px-6 pt-20"
      >
        {/* Responsive Background */}
        <img
          src={HeroBackground}
          alt="Hero Background"
          className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] 
            rounded-full opacity-100 rotate-[-169.49deg] object-cover pointer-events-none select-none"
        />

        {/* Centered Content */}
        <div className="flex flex-col justify-center items-center space-y-6 max-w-2xl sm:max-w-6xl">
          <h1 className="text-3xl sm:text-5xl md:text-7xl manrope-bold select-none text-black">
            Your Gateway To <span className="text-[#70CBCF]">Agentic AI</span>
          </h1>
          <p className="text-[#565656] text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl outfit-regular select-none">
            {`Access, explore, and collaborate with powerful AI agents designed for different needs`}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <div
              onClick={scrollToAgents}
              className="flex items-center gap-3 bg-white rounded-2xl px-6 py-3 cursor-pointer hover:scale-105 transition"
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
        className="flex flex-col items-center px-4 md:px-8 py-16 h-auto md:h-auto lg:h-auto pb-30"
      >
        <h2 className="text-2xl md:text-4xl manrope-bold mt-4 mb-8 text-center text-[#4B371C]">
          EXPLORE OUR AI AGENTS
        </h2>

        <div className="grid relative gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:w-[95%] xl:w-[90%] w-full h-auto">
          {agents.map((agent,index) => (
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