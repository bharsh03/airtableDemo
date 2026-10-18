"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import AirtableLogo from "@/layouts/icons/AirtableLogo"
import Button from "@/layouts/ui/Button"
import bgImage from "@/assets/images/b186161ddea4e92c6f9de9e06dc5211724f60293.png"
import Container from "@/layouts/ui/Container"
import LockIcon from "@/layouts/icons/LockIcon"
import { useAuth } from "@/contexts/AuthContext"

export default function SignInPage() {
  const router = useRouter()
  const auth = useAuth()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit() {
    setError("")
    setLoading(true)
    try {
      await auth.login({ username, password })
      router.push("/dashboard")
    } catch (err: unknown) {
      const axiosErr = err as { response?: { data?: { message?: string } } }
      setError(axiosErr.response?.data?.message ?? "Invalid username or password")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="common-section-small flex">
      <Container>
        <div className="flex flex-col-reverse md:flex-row lg:h-auto">
          <div className="flex-1 mt-4 md:mt-0 md:py-28.5 md:px-7.5 bg-white xl:py-35.5 xl:px-21.5 w-full ">
            <div className="flex justify-center mb-8">
              <AirtableLogo width={122} height={26} />
            </div>

            <div className=" flex items-center justify-center gap-2 my-8">
              <h1 className="text-3xl/tight font-medium text-secondary-800">
                Sign in
              </h1>
              <LockIcon height={16} widht={16} className="text-secondary-50" />
            </div>

            <div className="mb-3">
              <label className="block text-xl text-neutral-900 mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => { setUsername(e.target.value); setError("") }}
                className="w-full btn-outline-shadow rounded-md px-4 py-3 text-sm text-secondary-800 placeholder:text-netral-100 outline-none focus:btn-outline-shadow"
                suppressHydrationWarning
              />
            </div>

            <div className="mb-3">
              <label className="block text-xl text-neutral-900 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError("") }}
                className="w-full btn-outline-shadow rounded-md px-4 py-3 text-sm text-secondary-800 placeholder:text-netral-100 outline-none focus:btn-outline-shadow"
                suppressHydrationWarning
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 mb-3">{error}</p>
            )}

            <Button
              variant="filled"
              className="w-full py-3 mt-1"
              onClick={handleSubmit}
              disabled={loading || !password}
            >
              {loading ? "Signing in..." : "Continue"}
            </Button>
          </div>

          <div className="mt-5 md:w-5/11 xl:w-4/11 relative overflow-hidden rounded-2xl mx-auto">
            <Image src={bgImage} alt="" fill className="object-cover" />
            <div className="relative z-10 pt-18 px-12 pb-80">
              <p className="text-secondary-100 text-sm font-medium">
                Quarterly Webinar
              </p>
              <h2 className="mt-4 text-secondary-200 text-xl md:text-2xl lg:text-4xl font-medium">
                Get the most out of Airtable with our new features
              </h2>
              <Button variant="outline" className="mt-8 h-11 px-12 bg-transparent! text-md!">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
