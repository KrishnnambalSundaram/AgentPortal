import React from 'react';
import './App.css';
import Body from './components/Body.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
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



function App() {
  return (
    <div className="min-h-screen">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
