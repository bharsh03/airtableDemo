import { BlogResponse, LoginRequest, LoginResponse, ProductsResponse, UsersResponse } from '@/app/types';
import axiosClient from '../api/axiosclient';


export const login = (payload: LoginRequest) =>
  axiosClient.post<LoginResponse>("/auth/login", payload);


export const logout = () => axiosClient.post("/auth/logout");

export const getUsers = () =>
  axiosClient.get<UsersResponse>("/users?limit=0");

export const getProducts = () =>
  axiosClient.get<ProductsResponse>("/products?limit=0");

export const getBlogs = () =>
  axiosClient.get<BlogResponse>("/posts?limit=0");