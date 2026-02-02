import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../services/AuthService';
import { useAuth } from '../context/AuthContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { trackLogin } from '../utils/analytics';

const LoginPage = () => {
  const navigate = useNavigate();
  const { updateUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const emailInputRef = useRef(null);

  useGSAP(() => {
    gsap.from('#login-card', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power3.out'
    });
  }, []);

  useEffect(() => {
    // Auto-focus email input
    emailInputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const validateEmail = (email) => {
    const allowedDomains = ['@inflectotechnologies.com', '@axxeltechnologies.com'];
    return allowedDomains.some(domain => email.toLowerCase().endsWith(domain));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate email domain
    if (!validateEmail(formData.email)) {
      setError('Login is restricted to Inflecto Associates only. Please use your @inflectotechnologies.com or @axxeltechnologies.com email address.');
      setLoading(false);
      return;
    }

    try {
      const result = await login(formData.email, formData.password);
      updateUser(result.data.user);
      
      // Track successful login
      trackLogin(result.data.user.email, result.data.user.isinflectoemployee);
      
      // Immediate navigation
      navigate('/', { replace: true });
      window.location.reload();
    } catch (err) {
      const errorData = err.response?.data;
      if (errorData?.requiresVerification) {
        // Redirect immediately with message
        navigate('/verify', { 
          state: { 
            email: formData.email,
            message: 'Please verify your email first. Check your inbox for OTP.' 
          },
          replace: true
        });
      } else {
        setError(errorData?.message || err.message || 'Login failed. Please check your credentials.');
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full">
        {/* Card */}
        <div id="login-card" className="bg-black/95 rounded-2xl border border-white/30 overflow-hidden backdrop-blur-lg shadow-2xl">
          {/* Header */}
          <div className="p-8 pb-6 text-center border-b border-white/10">
            <h1 className="text-3xl manrope-bold text-white">Login</h1>
            <p className="text-gray-400 outfit-regular mt-2">
              Login as an Inflecto Associate
            </p>
          </div>

          {/* Form */}
          <div className="p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm outfit-regular">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm manrope-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  ref={emailInputRef}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/30 bg-black/50 rounded-xl outfit-regular focus:outline-none focus:border-[#70CBCF] focus:ring-2 focus:ring-[#70CBCF]/20 text-base text-white placeholder-gray-500 transition-all duration-200"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
                <p className="mt-1 text-xs text-[#70CBCF] outfit-regular">
                  Required: @inflectotechnologies.com or @axxeltechnologies.com
                </p>
              </div>

              <div>
                <label className="block text-sm manrope-medium text-white mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/30 bg-black/50 rounded-xl outfit-regular focus:outline-none focus:border-[#70CBCF] focus:ring-2 focus:ring-[#70CBCF]/20 text-base text-white placeholder-gray-500 transition-all duration-200"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black py-3 rounded-xl manrope-medium hover:bg-gray-200 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading && (
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm outfit-regular text-gray-400">
                Don't have an account?{' '}
                <Link to="/register" className="text-white manrope-medium hover:underline">
                  Create Account
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <Link to="/" className="text-sm outfit-regular text-gray-500 hover:text-white transition">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
