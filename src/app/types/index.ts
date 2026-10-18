import type { ReactNode } from "react";

export interface LoginRequest {
  username: string;
  password: string;
  expiresInMins?: number;
}

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

export interface AuthContextType {
  user: LoginResponse | null;
  login: (data: LoginRequest) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  hydrated: boolean;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface UsersResponse {
  users: unknown[];
  limit: number;
}

export interface Product {
  id: number;
  category: string;
  brand: string;
  thumbnail: string;
}

export interface ProductsResponse {
  products: Product[];
  limit: number;
}

export interface Blog {
  id: number;
  title: string;
  body: string;
}

export interface BlogResponse {
  blogs: Blog[];
  limit: number;
}
