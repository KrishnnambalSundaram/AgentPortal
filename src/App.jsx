import React from 'react';
import './index.css';

const agents = [
  {
    id: 1,
    name: 'Invoice Extractor',
    description: 'Extracts key information from invoices and provides a summary with insights.',
    icon: '🧾',
    link: 'http://invoiceextractor.inflectotechnologies.com',
  },
  {
    id: 2,
    name: 'Invox Analyzer',
    description: 'Analyzes invoices and highlights anomalies and trends for smarter finance decisions.',
    icon: '📊',
    link: 'http://invoxanalyser.inflectotechnologies.com',
  },
  {
    id: 3,
    name: 'Chat',
    description: 'Instantly answers your company policy-related queries in a conversational style.',
    icon: '🧠',
    link: 'https://chat.inflectotechnologies.com/',
  },
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
  <div className="container">
    {agents.map(agent => (
      <div className="agent-card" key={agent.id}>
        <div className="agent-icon">{agent.icon}</div>
        <h2>{agent.name}</h2>
        <p>{agent.description}</p>
        <a href={agent.link} target="_blank" rel="noopener noreferrer">
          Open Agent
        </a>
      </div>
    ))}
  </div>
</main>


      <footer className="footer">
        INFLECTO TECHNOLOGIES<br />
        Ernst & Wales Business Center, Fronds Building, M floor (Above QMotors)<br />
        Sheikh Zayed Road, Close to Equity metro, Industrial Area 3, Dubai, UAE
      </footer>
    </div>
  );
}

export default App;
