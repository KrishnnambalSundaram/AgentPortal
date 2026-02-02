import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { BsCookie } from 'react-icons/bs';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    } else if (consent === 'accepted') {
      // Load Google Analytics
      loadGoogleAnalytics();
    }
  }, []);

  useGSAP(() => {
    if (isVisible && !isClosing) {
      gsap.from('#cookie-banner', {
        y: 100,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      });
    }
  }, [isVisible, isClosing]);

  const loadGoogleAnalytics = () => {
    // Load GA4 script
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-HTE0DBLFPQ';
    
    // Create script tag for gtag.js
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_path: window.location.pathname,
      send_page_view: true,
      anonymize_ip: true
    });
  };

  const handleAccept = () => {
    // Store consent
    localStorage.setItem('cookie_consent', 'accepted');
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    
    // Load Google Analytics
    loadGoogleAnalytics();
    
    // Close banner
    closeWithAnimation();
  };

  const handleDecline = () => {
    // Store rejection
    localStorage.setItem('cookie_consent', 'declined');
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    
    // Close banner without loading GA
    closeWithAnimation();
  };

  const closeWithAnimation = () => {
    setIsClosing(true);
    gsap.to('#cookie-banner', {
      y: 100,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        setIsVisible(false);
        setIsClosing(false);
      }
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto" />
      
      <div 
        id="cookie-banner"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl pointer-events-auto z-[10000]"
      >
        <div className="bg-black/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] p-6 md:p-8">
          {/* Close button */}
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
            aria-label="Close"
          >
            <IoClose className="text-white/60 group-hover:text-white text-lg" />
          </button>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
            {/* Icon */}
            <div className="shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#70CBCF]/20 to-[#70CBCF]/5 border border-[#70CBCF]/30 flex items-center justify-center">
                <BsCookie className="text-[#70CBCF] text-2xl" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              <h3 className="text-white text-xl md:text-2xl font-semibold outfit-semibold">
                Cookie Preferences
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed outfit-regular">
                We use cookies and analytics to improve your experience and understand how you interact with our AI Agents Portal. 
                Your data helps us build better tools for you.
                {' '}
                <a 
                  href="https://www.inflectotechnologies.com/privacypolicy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#70CBCF] hover:text-[#70CBCF]/80 underline underline-offset-2"
                >
                  Learn more
                </a>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={handleDecline}
                className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm outfit-medium transition-all duration-200 hover:border-white/30 whitespace-nowrap"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 rounded-xl bg-[#70CBCF] hover:bg-[#70CBCF]/90 text-black text-sm outfit-semibold transition-all duration-200 hover:shadow-[0_0_30px_rgba(112,203,207,0.4)] whitespace-nowrap"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
