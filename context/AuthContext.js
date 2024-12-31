// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check token on initial load
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token and set user
      const user = verifyToken(token);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        localStorage.removeItem('token'); // Remove expired token
      }
    } else {
      setUser(null);
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    const user = verifyToken(token); // Decode token and set user
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/authentication/sign-in');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
