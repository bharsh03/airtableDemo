"use client"

import Header from "@/layouts/common/Header"
import PricingSection from "@/layouts/home/PricingSection"

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <PricingSection />
      </main>
    </>
  )
}
