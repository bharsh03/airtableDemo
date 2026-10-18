"use client"

import type { ReactNode } from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated, hydrated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (hydrated && !isAuthenticated) {
      router.replace("/sign-in")
    }
  }, [hydrated, isAuthenticated, router])

  if (!hydrated) return null
  if (!isAuthenticated) return null

  return <>{children}</>
}
