import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useAuth } from "../context/AuthContext";
import { trackAgentAccessRequest } from "../utils/analytics";

const AgentAccessModal = ({ isOpen, onClose, agentId, agentName }) => {
  const { user } = useAuth();
  const [useMyDetails, setUseMyDetails] = useState(true);
  const [isConsentOpen, setIsConsentOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subscribe: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Pre-fill form when modal opens with logged-in user data
  useEffect(() => {
    if (isOpen && user && useMyDetails) {
      setFormData({
        fullname: user.fullname || "",
        email: user.email || "",
        subscribe: false
      });
    } else if (isOpen && !useMyDetails) {
      setFormData({
        fullname: "",
        email: "",
        subscribe: false
      });
    }
  }, [isOpen, user, useMyDetails]);

  useGSAP(() => {
    if (isOpen) {
      gsap.from("#modal-content", {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`http://localhost:4000/api/ai-agents/${agentId}/share`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullname: formData.fullname,
          email: formData.email,
          subscribe: formData.subscribe
        })
      });

      const data = await response.json();
      setIsConsentOpen(false);
      if (!response.ok) {
        throw new Error(data.message || "Failed to send access request");
      }

      // Track successful access request
      trackAgentAccessRequest(agentId, agentName, formData.email);

      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setFormData({ fullname: "", email: "", subscribe: false });
        setUseMyDetails(true);
      }, 3000);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;
  if(isConsentOpen) return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        id="modal-content"
        className="relative w-full max-w-md bg-black/95 border border-white/30 rounded-2xl shadow-2xl overflow-hidden pb-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <IoClose size={24} />
        </button>
      <div className="p-6 pb-4 border-b border-white/10">
        <h2 className="text-2xl manrope-bold text-white mb-2">
          Request Agent Access
        </h2>
        <p className="text-sm text-gray-400 outfit-regular">
          {agentName}
        </p>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-300 outfit-regular mb-6 leading-relaxed">
          Please confirm if the email address <span className="font-bold underline underline-offset-1">{formData.email}</span> is correct.
        </p>
      </div>
      <div className="flex flex-row justify-between gap-2 px-5">
        <button onClick={() => setIsConsentOpen(false)} className="w-full bg-[#70CBCF] text-black py-3 rounded-xl manrope-semibold hover:bg-[#5ab5b9] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
          No, Take me back! 
        </button>
        <button
            onClick={handleSubmit}
            disabled={loading}
              className="w-full bg-[#70CBCF] text-black py-3 rounded-xl manrope-semibold hover:bg-[#5ab5b9] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading && (
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {loading ? "Sending Request..." : "Yes, it is correct"}
          </button>
        {/* <button onClick={handleSubmit} className="w-full bg-[#70CBCF] text-black py-3 rounded-xl manrope-semibold hover:bg-[#5ab5b9] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
          
        </button> */}
      </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        id="modal-content"
        className="relative w-full max-w-md bg-black/95 border border-white/30 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <IoClose size={24} />
        </button>

        {/* Header */}
        <div className="p-6 pb-4 border-b border-white/10">
          <h2 className="text-2xl manrope-bold text-white mb-2">
            Request Agent Access
          </h2>
          <p className="text-sm text-gray-400 outfit-regular">
            {agentName}
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl manrope-semibold text-white mb-2">
                Request Submitted!
              </h3>
              <p className="text-gray-400 text-sm outfit-regular">
                Access URL has been sent to your email address.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-300 outfit-regular mb-6 leading-relaxed">
                Please provide your details below to receive secure access to our AI Agents. 
                The access URL will be sent directly to your registered email address.
              </p>

              {/* Logged-in user option */}
              {user && (
                <div className="mb-6 p-4 bg-white/5 border border-white/20 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm manrope-medium text-white">
                      Use my account details
                    </span>
                    <button
                      type="button"
                      onClick={() => setUseMyDetails(!useMyDetails)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        useMyDetails ? 'bg-[#70CBCF]' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          useMyDetails ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  {useMyDetails && (
                    <div className="text-xs text-gray-400 outfit-regular space-y-1">
                      <p>Name: {user.fullname}</p>
                      <p>Email: {user.email}</p>
                    </div>
                  )}
                </div>
              )}

              {error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm outfit-regular">
                  {error}
                </div>
              )}

              <form onSubmit={() => setIsConsentOpen(true)} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm manrope-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    disabled={user && useMyDetails}
                    className={`w-full px-4 py-3 border border-white/30 bg-black/50 rounded-xl outfit-regular focus:outline-none focus:border-[#70CBCF] focus:ring-2 focus:ring-[#70CBCF]/20 text-base text-white placeholder-gray-500 transition-all duration-200 ${
                      user && useMyDetails ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm manrope-medium text-white mb-2">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={user && useMyDetails}
                    className={`w-full px-4 py-3 border border-white/30 bg-black/50 rounded-xl outfit-regular focus:outline-none focus:border-[#70CBCF] focus:ring-2 focus:ring-[#70CBCF]/20 text-base text-white placeholder-gray-500 transition-all duration-200 ${
                      user && useMyDetails ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* Subscribe Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-white/30 bg-black/50 text-[#70CBCF] focus:ring-[#70CBCF] focus:ring-offset-0"
                  />
                  <label htmlFor="subscribe" className="text-sm text-gray-300 outfit-regular leading-relaxed cursor-pointer">
                    I agree to receive general communications, including product updates, insights, and relevant announcements.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#70CBCF] text-black py-3 rounded-xl manrope-semibold hover:bg-[#5ab5b9] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading && (
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  {loading ? "Sending Request..." : "Request Access"}
                </button>
              </form>

              {/* Footer */}
              <p className="mt-4 text-xs text-gray-500 outfit-regular text-center leading-relaxed">
                *Your information will be used solely for access provisioning and communication purposes, in accordance with our privacy policy.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentAccessModal;
