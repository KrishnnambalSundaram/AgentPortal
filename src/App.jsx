import React from 'react';
import './App.css';
// import './index.css';

// const agents = [
//   {
//     id: 1,
//     name: 'Invoice Extractor',
//     description: 'Extracts key information from invoices and provides a summary with insights.',
//     icon: '🧾',
//     link: 'http://invoiceextractor.inflectotechnologies.com',
//   },
//   {
//     id: 2,
//     name: 'ClauseGuard',
//     description: 'Analyzes contracts to highlight risky clauses and provide a clear risk score with actionable insights.',
//     icon: '📊',
//     link: 'http://invoxanalyser.inflectotechnologies.com',
//   },
//   {
//     id: 3,
//     name: 'Chat',
//     description: 'Instantly answers your company policy-related queries in a conversational style.',
//     icon: '🧠',
//     link: 'https://chat.inflectotechnologies.com/',
//   },
// ];

const agents = [
  {
    id: 1,
    name: 'Invoice Extractor',
    description: 'Extracts key invoice data and auto-updates Google Sheets using OCR and GenAI.',
    icon: '🧾',
    techStack: 'Python, OpenAI, Google Sheets API',
    capability: 'Leverages GenAI and OCR to identify invoice number, date, and amount; validates entries and auto-logs to Google Sheets.',
    link: 'http://invoiceextractor.inflectotechnologies.com',
  },
  {
    id: 2,
    name: 'Clause Guard',
    description: 'Highlights risky clauses and enables GenAI-based contract Q&A.',
    icon: '📄',
    techStack: 'Python, OpenAI',
    capability: 'Agentic AI detects risky clauses, summarizes risks, and allows GenAI-powered natural language Q&A on contract content.',
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
    capability: 'Agentic AI captures user intent, qualifies leads based on contextual input, updates CRM, and schedules meetings—all automated.',
    link: 'https://uat.unifyapps.com/p/0/copilot?agentId=e_6878d7149c9ea95a603ed112&b_GPiry-chatId=new',
  },
  {
    id: 5,
    name: 'Patient Management System',
    description: 'OutSystems app to book, view, and manage patient appointments.',
    icon: '🩺',
    techStack: 'OutSystems',
    capability: 'A responsive web app for booking appointments and managing visit history, offering streamlined care through low-code automation.',
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
    capability: 'GenAI and workflow automation trigger refund processing when email contains relevant keywords; validates and routes based on context.',
    link: 'Coming Soon!',
  },
  {
    id: 8,
    name: 'Lead Qualifier (Python)',
    description: 'Python-based agent to qualify leads and book meetings intelligently.',
    icon: '🤖',
    techStack: 'Python, OpenAI',
    capability: 'Agentic AI analyzes responses to qualify leads, stores data, and sends meeting invites—all in one seamless Python-based flow.',
    link: 'Coming Soon!',
  }
];

function App() {
  return (
    <div className="app-wrapper">
{/* <header className="header">
  <div className="header-logo">
    <img src="https://axxeltechnologies.com/wp-content/uploads/2025/04/Untitled-design1.png" alt="Inflecto Logo" />
  </div>
  <div className="header-title">Agents Portal</div>
</header> */}

<header className="header"> 
<div className="header-left">
  <div className="logo-wrapper">
  <div className="header-logo">
    <img
      src="/logo.png"
      alt="Chat Logo"
    />
  </div>
</div>
</div>
  <div className="header-right">
    <a
      href="https://axxeltechnologies.com/inflecto"
      target="_blank"
      rel="noopener noreferrer"
      className="inflecto-button"
    >
      Visit Inflecto
    </a>
  </div>
</header>


  <main>
  <h1 className="portal-title">EXPLORE OUR AI AGENTS</h1>
  <div className="agent-container">
    {agents.map(agent => (
      <div className="agent-card" key={agent.id}>
        <div className="agent-icon">{agent.icon}</div>
        <h2>{agent.name}</h2>
        <p>{agent.capability}</p>
        
         <div className="tech-stack">
            {agent.techStack.split(',').map((tech, index) => (
                  <span className="tech-tag" key={index}>{tech.trim()}</span>
           ))}
        </div>
        <br/>
        {agent.link.toLowerCase().includes('coming') ? (
                <span className="coming-soon-tag">COMING SOON</span>
) : (
  <a href={agent.link} target="_blank" rel="noopener noreferrer">
    Open Agent
  </a>
)}
      </div>
    ))}
  </div>
</main>

<footer className="footer">
  <div className="footer-columns">
    {/* Left column: Address + Image */}
    <div className="footer-address">
      <img src="https://axxeltechnologies.com/wp-content/uploads/2025/06/burjkhalifa.svg" alt="Dubai" className="dubai-icon" />
      <div>
        <strong>INFLECTO TECHNOLOGIES</strong><br />
        Ernst & Wales Business Center, Fronds Building, M floor (Above QMotors)<br />
        Sheikh Zayed Road, Close to Equity metro, Industrial Area 3, Dubai, UAE
      </div>
    </div>

    {/* Right column: Contact and Socials */}
    <div className="footer-contact">
  <div className="connect-title">CONNECT WITH US</div>
  <div className="footer-socials">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
    <a href="https://linkedin.com/company/inflecto" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
    <a href="https://twitter.com/inflectotech" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
  </div>
</div>

  </div>

  <div className="footer-bottom">
    © 2025 Inflecto. All rights reserved.
  </div>
</footer>

    </div>
  );
}

export default App;
