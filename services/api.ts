import axios from 'axios';

const API_BASE_URL = 'https://backend-api-9idz.onrender.com/api';

export const fetchArticles = async () => {
  const response = await axios.get(`${API_BASE_URL}/articles`);
  return response.data;
};

export const fetchArticleById = async (id: number) => {
  const response = await axios.get(`${API_BASE_URL}/articles/${id}`);
  return response.data;
};

export const addComment = async (comment: { articleId: number; userId: number; content: string }, token: string) => {
  const response = await axios.post(`${API_BASE_URL}/articles/comments`, comment, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const login = async (credentials: { email: string; password: string }) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
  return response.data;
};

export const signup = async (userData: { name: string; email: string; password: string; role: string }) => {
  const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
  return response.data;
};

export const uploadArticle = async (articleData: FormData, token: string) => {
  const response = await axios.post(`${API_BASE_URL}/articles`, articleData, {
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};
