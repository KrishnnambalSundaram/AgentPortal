import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/AuthService';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { trackRegister } from '../utils/analytics';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const nameInputRef = useRef(null);

  useGSAP(() => {
    gsap.from('#register-card', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power3.out'
    });
  }, []);

  useEffect(() => {
    // Auto-focus name input
    nameInputRef.current?.focus();
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
      setError('Registration is restricted to Inflecto Associates only. Please use your @inflectotechnologies.com or @axxeltechnologies.com email address.');
      setLoading(false);
      return;
    }

    try {
      const result = await register(formData.fullname, formData.email, formData.password);
      
      // Track successful registration
      const isInflecto = formData.email.toLowerCase().endsWith('@inflectotechnologies.com') || 
                        formData.email.toLowerCase().endsWith('@axxeltechnologies.com');
      trackRegister(formData.email, isInflecto);
      
      // Immediate navigation to verification
      navigate('/verify', { 
        state: { 
          email: formData.email,
          message: result.message || 'Registration successful! Check your email for OTP.',
          isNewUser: true
        },
        replace: true
      });
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Registration failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full">
        {/* Card */}
        <div id="register-card" className="bg-black/95 rounded-2xl border border-white/30 overflow-hidden backdrop-blur-lg shadow-2xl">
          {/* Header */}
          <div className="p-8 pb-6 text-center border-b border-white/10">
            <h1 className="text-3xl manrope-bold text-white">Register</h1>
            <p className="text-gray-400 outfit-regular mt-2">
              Register as an Inflecto Associate
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
                  Full Name
                </label>
                <input
                  ref={nameInputRef}
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/30 bg-black/50 rounded-xl outfit-regular focus:outline-none focus:border-[#70CBCF] focus:ring-2 focus:ring-[#70CBCF]/20 text-base text-white placeholder-gray-500 transition-all duration-200"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm manrope-medium text-white mb-2">
                  Email Address
                </label>
                <input
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
                  placeholder="Create a password"
                  autoComplete="new-password"
                  minLength={6}
                  required
                />
                <p className="mt-1 text-xs text-gray-500 outfit-regular">
                  Minimum 6 characters
                </p>
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
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm outfit-regular text-gray-400">
                Already have an account?{' '}
                <Link to="/login" className="text-white manrope-medium hover:underline">
                  Sign In
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

export default RegisterPage;
