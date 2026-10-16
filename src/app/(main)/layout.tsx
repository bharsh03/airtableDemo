import type { ReactNode } from "react"
import Announcementbar from "@/layouts/common/Announcementbar"
import Header from "@/layouts/common/Header"
import Footer from "@/layouts/common/Footer"

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Announcementbar />
      <Header />
      {children}
      <Footer />
    </>
  )
}
