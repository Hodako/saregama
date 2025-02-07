import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

interface AuthResponse {
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
    avatar_url?: string;
  };
}

export const loginUser = async (credentials: { email: string; password: string }) => {
  const response = await axios.post<AuthResponse>(`${API_URL}/auth/login`, credentials);
  return response.data;
};

export const registerUser = async (userData: { 
  username: string; 
  email: string; 
  password: string 
}) => {
  const response = await axios.post<AuthResponse>(`${API_URL}/auth/register`, userData);
  return response.data;
};
