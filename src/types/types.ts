export interface Article {
  id: number;
  title: string;
  author: string;
  institution: string;
  abstract: string;
  content: string;
  tags: string[];
  image_url: string;
  likes: number;
  comments: number;
  publish_date: string;
}

export interface Comment {
  id: number;
  article_id: number;
  user_id: number;
  content: string;
  created_at: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
