import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext();

const TOKEN_KEY = 'certpath_token';
const USER_KEY = 'certpath_user';

// Get the API base URL depending on environment
const API_URL = import.meta.env.PROD ? '' : 'http://localhost:3001';

function loadStoredAuth() {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    const userData = localStorage.getItem(USER_KEY);
    if (token && userData) {
      return { token, user: JSON.parse(userData) };
    }
  } catch (e) {
    console.error('Failed to load auth:', e);
  }
  return { token: null, user: null };
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(loadStoredAuth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { token, user } = auth;
  const isAuthenticated = !!token && !!user;

  // Persist auth to localStorage
  useEffect(() => {
    if (token && user) {
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
  }, [token, user]);

  // Helper for API calls with auth header
  const authFetch = useCallback(async (url, options = {}) => {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return fetch(`${API_URL}${url}`, { ...options, headers });
  }, [token]);

  // Register
  const register = useCallback(async (name, email, password, language) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, language }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setAuth({ token: data.token, user: data.user });
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Login
  const login = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      setAuth({ token: data.token, user: data.user });
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Logout
  const logout = useCallback(() => {
    setAuth({ token: null, user: null });
    setError(null);
  }, []);

  // Update user data in state (e.g. after purchase status change)
  const updateUser = useCallback((updatedFields) => {
    setAuth(prev => ({
      ...prev,
      user: prev.user ? { ...prev.user, ...updatedFields } : null
    }));
  }, []);

  // Refresh user profile from server
  const refreshUser = useCallback(async () => {
    if (!token) return;
    try {
      const res = await authFetch('/api/users/me');
      if (res.ok) {
        const userData = await res.json();
        setAuth(prev => ({ ...prev, user: userData }));
      } else if (res.status === 401) {
        // Token expired or invalid — log out
        setAuth({ token: null, user: null });
      }
    } catch (err) {
      console.error('Failed to refresh user:', err.message);
    }
  }, [token, authFetch]);

  // Clear error
  const clearError = useCallback(() => setError(null), []);

  return (
    <AuthContext.Provider value={{
      user,
      token,
      isAuthenticated,
      loading,
      error,
      register,
      login,
      logout,
      updateUser,
      refreshUser,
      clearError,
      authFetch,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
