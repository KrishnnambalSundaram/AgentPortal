/**
 * Google Analytics 4 Utility
 * 
 * Usage:
 * 1. Replace 'G-XXXXXXXXXX' in index.html with your actual Measurement ID
 * 2. Import and use these functions throughout your app
 */

// Track page views
export const trackPageView = (path, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title
    });
  }
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Track agent views
export const trackAgentView = (agentId, agentName) => {
  trackEvent('view_agent', {
    agent_id: agentId,
    agent_name: agentName
  });
};

// Track agent access requests
export const trackAgentAccessRequest = (agentId, agentName, email) => {
  trackEvent('request_agent_access', {
    agent_id: agentId,
    agent_name: agentName,
    user_email: email
  });
};

// Track authentication events
export const trackLogin = (email, isInflectoEmployee) => {
  trackEvent('login', {
    method: 'email',
    user_email: email,
    is_inflecto_employee: isInflectoEmployee
  });
};

export const trackRegister = (email, isInflectoEmployee) => {
  trackEvent('sign_up', {
    method: 'email',
    user_email: email,
    is_inflecto_employee: isInflectoEmployee
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  trackEvent('click', {
    button_name: buttonName,
    location: location
  });
};

// Track errors
export const trackError = (errorMessage, errorType, location) => {
  trackEvent('exception', {
    description: errorMessage,
    error_type: errorType,
    location: location,
    fatal: false
  });
};

// Track search/explore
export const trackSearch = (searchTerm) => {
  trackEvent('search', {
    search_term: searchTerm
  });
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  trackEvent('social_click', {
    platform: platform
  });
};

// Track video plays
export const trackVideoPlay = (agentId, agentName) => {
  trackEvent('video_play', {
    agent_id: agentId,
    agent_name: agentName
  });
};
