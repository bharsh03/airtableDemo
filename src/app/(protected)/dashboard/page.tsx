"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import Button from "@/layouts/ui/Button"

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const router = useRouter()

  function handleLogout() {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-neutral-50">
      <h1 className="text-4xl font-medium text-secondary-800">
        Welcome, {user?.username}!
      </h1>
      <Button variant="outline" onClick={handleLogout} className="px-6 py-3">
        Logout
      </Button>
    </div>
  )
}
