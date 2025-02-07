import { createContext, useContext, useEffect, useState } from 'react';
import { loginUser, registerUser } from '../api/auth';

interface AuthContextType {
  user: any;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  register: (userData: { username: string; email: string; password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (credentials: { email: string; password: string }) => {
    const user = await loginUser(credentials);
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  const register = async (userData: { username: string; email: string; password: string }) => {
    const user = await registerUser(userData);
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
