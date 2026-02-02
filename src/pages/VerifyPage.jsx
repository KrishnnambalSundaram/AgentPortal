import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { verifyOTP, resendOTP } from '../services/AuthService';
import { useAuth } from '../context/AuthContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const VerifyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(location.state?.message || '');
  const [otp, setOTP] = useState('');
  const email = location.state?.email || '';
  const isNewUser = location.state?.isNewUser || false;
  const otpInputRef = useRef(null);

  useGSAP(() => {
    gsap.from('#verify-card', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power3.out'
    });
  }, []);

  useEffect(() => {
    // Auto-focus OTP input
    if (email) {
      otpInputRef.current?.focus();
    }
  }, [email]);

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Only numbers
    if (value.length <= 4) {
      setOTP(value);
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 4) {
      setError('Please enter a 4-digit OTP');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await verifyOTP(email, otp);
      updateUser(result.data.user);
      // Immediate navigation
      navigate('/', { replace: true });
      window.location.reload();
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Invalid or expired OTP. Please try again.');
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      console.log('Resending OTP to:', email);
      await resendOTP(email);
      setSuccess('OTP resent successfully! Check your email.');
    } catch (err) {
      console.error('Resend OTP error:', err);
      setError(err.response?.data?.message || err.message || 'Failed to resend OTP');
    } finally {
      setLoading(false);
    }
  };

  if (!email) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-black/95 rounded-2xl border border-white/30 p-8 text-center backdrop-blur-lg">
          <h2 className="text-2xl manrope-bold text-white mb-4">Email Required</h2>
          <p className="text-gray-400 outfit-regular mb-6">
            Please register or login first
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-black py-3 px-6 rounded-xl manrope-medium hover:bg-gray-200 transition"
          >
            Go to Register
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full">
        {/* Card */}
        <div id="verify-card" className="bg-black/95 rounded-2xl border border-white/30 overflow-hidden backdrop-blur-lg shadow-2xl">
          {/* Header */}
          <div className="p-8 pb-6 text-center border-b border-white/10">
            <h1 className="text-3xl manrope-bold text-white">Verify Email</h1>
            <p className="text-gray-400 outfit-regular mt-2">Enter the OTP sent to your email</p>
          </div>

          {/* Form */}
          <div className="p-8">
            <div className="text-center mb-8">
              <p className="text-sm outfit-regular text-gray-400 mb-2">
                We've sent a 4-digit OTP to
              </p>
              <p className="text-base manrope-medium text-[#70CBCF] break-all">
                {email}
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm outfit-regular animate-shake">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm outfit-regular">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm manrope-medium text-white mb-2 text-center">
                  Enter 4-Digit OTP
                </label>
                <input
                  ref={otpInputRef}
                  type="text"
                  value={otp}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-white/30 bg-black/50 rounded-xl outfit-regular text-center text-3xl tracking-[0.5em] focus:outline-none focus:border-[#70CBCF] focus:ring-2 focus:ring-[#70CBCF]/20 text-white placeholder-gray-600 transition-all duration-200"
                  placeholder="••••"
                  inputMode="numeric"
                  maxLength={4}
                  autoComplete="one-time-code"
                  required
                />
                <p className="mt-2 text-xs text-center text-gray-500 outfit-regular">
                  OTP expires in 10 minutes
                </p>
              </div>

              <button
                type="submit"
                disabled={loading || otp.length !== 4}
                className="w-full bg-white text-black py-3 rounded-xl manrope-medium hover:bg-gray-200 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading && (
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {loading ? 'Verifying...' : 'Verify Email'}
              </button>

              <button
                type="button"
                onClick={handleResendOTP}
                disabled={loading}
                className="w-full border border-white/30 bg-black/50 text-white py-3 rounded-xl manrope-medium hover:bg-black active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading && (
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                Resend OTP
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/login" className="text-sm outfit-regular text-gray-500 hover:text-white transition">
                ← Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
