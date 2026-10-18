"use client"

import { createContext, useContext, useState, useEffect } from "react"
import type { AuthContextType, AuthProviderProps, LoginRequest, LoginResponse } from "@/app/types"
import { login as loginApi, logout as logoutApi } from "@/api/apihandler"

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<LoginResponse | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("auth_user")
    if (stored) setUser(JSON.parse(stored))
  }, [])

  async function login(data: LoginRequest) {
    const res = await loginApi(data)
    setUser(res.data)
    localStorage.setItem("auth_user", JSON.stringify(res.data))
  }

  function logout() {
    setUser(null)
    localStorage.removeItem("auth_user")
    logoutApi().catch(() => {})
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
