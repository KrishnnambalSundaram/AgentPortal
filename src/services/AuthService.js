import { BASE_URL } from "../utils/commons";

// Create axios-like wrapper for fetch
const apiClient = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    throw { response: { data } };
  }

  return { data };
};

// 1. Register
export const register = async (fullname, email, password) => {
  const response = await apiClient('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({ fullname, email, password }),
  });
  return response.data;
};

// 2. Verify OTP
export const verifyOTP = async (email, otp) => {
  const response = await apiClient('/api/auth/verify-otp', {
    method: 'POST',
    body: JSON.stringify({ email, otp }),
  });
  
  // Save token
  if (response.data.success) {
    localStorage.setItem('token', response.data.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.data.user));
  }
  
  return response.data;
};

// 3. Resend OTP
export const resendOTP = async (email) => {
  const response = await apiClient('/api/auth/resend-otp', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
  return response.data;
};

// 4. Login
export const login = async (email, password) => {
  const response = await apiClient('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  
  // Save token
  if (response.data.success) {
    localStorage.setItem('token', response.data.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.data.user));
  }
  
  return response.data;
};

// 5. Get current user
export const getCurrentUser = async () => {
  const response = await apiClient('/api/auth/me', {
    method: 'GET',
  });
  return response.data;
};

// 6. Logout
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = '/';
};

// 7. Check if user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

// 8. Get stored user
export const getStoredUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};
