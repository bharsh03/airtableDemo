"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import AirtableLogo from "../icons/AirtableLogo"
import ChevronRightIcon from "../icons/ChevronRightIcon"
import HamburgerIcon from "../icons/HamburgerIcon"
import CloseIcon from "../icons/CloseIcon"
import Button from "../ui/Button"
import { useAuth } from "@/contexts/AuthContext"

const navItems = [
  {
    label: "Platform",
    hasDropdown: true,
    links: ["Platform Overview", "Integrations", "Extensions", "App Building", "AI", "Connected Data", "Views", "Automations"],
  },
  {
    label: "Solutions",
    hasDropdown: true,
    links: ["Product", "Marketing", "Operations", "Human Resources", "Sales", "Finance", "Legal", "IT"],
  },
  {
    label: "Resources",
    hasDropdown: true,
    links: ["Partners", "Services", "Developers", "Community", "Templates", "Airtable Universe", "Marketplace", "Guides"],
  },
  {
    label: "Pricing",
    hasDropdown: false,
    links: [],
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const { isAuthenticated, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function toggleDropdown(label: string) {
    setOpenDropdown(prev => prev === label ? null : label)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center h-16 px-4 md:px-8">
        <a href="/" className="shrink-0">
          <AirtableLogo width={136} height={32} />
        </a>

        <nav ref={navRef} className="hidden lg:flex items-center ml-6 gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              <button
                onClick={() => {
                  if (item.label === "Pricing") {
                    router.push(isAuthenticated ? "/dashboard" : "/sign-in")
                  } else {
                    item.hasDropdown && toggleDropdown(item.label)
                  }
                }}
                className="flex items-center gap-1.5 px-3 py-[3.25px] text-md font-medium leading-none text-secondary-800 hover:text-primary-300 hover:bg-neutral-50 rounded-md transition-colors cursor-pointer"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronRightIcon
                    className={`shrink-0 text-neutral-600 transition-transform duration-200 ${openDropdown === item.label ? "rotate-90" : ""}`}
                    width={5}
                    height={8}
                  />
                )}
              </button>

              {openDropdown === item.label && item.links.length > 0 && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-neutral-200 rounded-xl shadow-lg py-2 min-w-55 z-50">
                  {item.links.map(link => (
                    <a
                      key={link}
                      href="#"
                      className="block px-4 py-2 text-md font-normal text-neutral-800 leading-[21.6px] tracking-[0.16px] hover:bg-neutral-50 hover:text-secondary-800 transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex-1" />

        <div className="hidden lg:flex items-center gap-4">
          {isAuthenticated ? (
            <button className="btn-logout" onClick={() => { logout(); router.push("/") }}>
              Logout
            </button>
          ) : (
            <>
              <Button variant="outline" href="#" className="px-4 py-2 text-sm whitespace-nowrap">
                Request a demo
              </Button>
              <Button variant="filled" href="#" className="px-4 py-2 text-sm whitespace-nowrap">
                Sign up for free
              </Button>
              <Button variant="ghost" href="/sign-in" className="text-sm">
                Sign in
              </Button>
            </>
          )}
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-secondary-800 hover:text-primary-300 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col px-4 md:px-8 pt-3 pb-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => item.hasDropdown && toggleDropdown(item.label)}
                  className="flex items-center justify-between w-full px-3 py-3.5 text-md font-medium text-secondary-800 hover:text-primary-300 hover:bg-neutral-50 rounded-md transition-colors border-b border-gray-50 last:border-0"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronRightIcon
                      width={5}
                      height={8}
                      className={`text-neutral-600 transition-transform duration-200 ${openDropdown === item.label ? "rotate-90" : ""}`}
                    />
                  )}
                </button>
                {openDropdown === item.label && item.links.length > 0 && (
                  <div className="flex flex-col px-3 pb-2">
                    {item.links.map(link => (
                      <a
                        key={link}
                        href="#"
                        className="py-2 px-3 text-md font-normal text-neutral-800 hover:text-secondary-800 hover:bg-neutral-50 rounded-md transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {!isAuthenticated && (
            <div className="flex flex-col gap-3 px-4 md:px-8 py-4 border-t border-gray-100">
              <Button variant="filled" href="#" className="w-full py-3 text-md justify-center">
                Sign up for free
              </Button>
              <Button variant="outline" href="/sign-in" className="w-full py-3 text-md justify-center">
                Sign in
              </Button>
              <Button variant="ghost" href="#" className="w-full py-3 text-md justify-center">
                Request a demo
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  )
}
