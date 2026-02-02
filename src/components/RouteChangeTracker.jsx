import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

/**
 * RouteChangeTracker
 * Automatically tracks page views when routes change in React Router
 */
const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Get page title
    const pageTitle = document.title || 'Inflecto AI Agents';
    
    // Track page view
    trackPageView(location.pathname + location.search, pageTitle);
  }, [location]);

  return null; // This component doesn't render anything
};

export default RouteChangeTracker;
