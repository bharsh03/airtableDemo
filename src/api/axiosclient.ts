import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? process.env.NEXT_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosClient.interceptors.request.use((config) => {
  const stored = typeof window !== "undefined" ? localStorage.getItem("auth_user") : null
  if (stored) {
    const user = JSON.parse(stored)
    if (user?.accessToken) {
      config.headers.Authorization = `Bearer ${user.accessToken}`
    }
  }
  return config
})

export default axiosClient;
