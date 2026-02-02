import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AgentPage from "./pages/AgentPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import VerifyPage from "./pages/VerifyPage.jsx";
import { AuthProvider } from "./context/AuthContext";
import RouteChangeTracker from "./components/RouteChangeTracker.jsx";
import CookieConsent from "./components/CookieConsent.jsx";

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
    <AuthProvider>
      <RouteChangeTracker />
      <CookieConsent />
      <div className="min-h-screen overflow-hidden">
        <Routes>
          {/* Main pages with header and footer */}
          <Route path="/" element={
            <>
              <Header />
              <Body />
              <Footer />
            </>
          } />
          <Route path="/agent/:id" element={
            <>
              <Header />
              <AgentPage />
              <Footer />
            </>
          } />
          
          {/* Auth pages without header/footer */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify" element={<VerifyPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
