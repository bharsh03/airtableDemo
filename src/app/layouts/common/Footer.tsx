"use client"

import { useState } from "react"
import Container from "../ui/Container"
import FacebookIcon from "../icons/FacebookIcon"
import LinkedInIcon from "../icons/LinkedInIcon"
import InstagramIcon from "../icons/InstagramIcon"
import YouTubeIcon from "../icons/YouTubeIcon"
import XIcon from "../icons/XIcon"
import AppStoreBadge from "../icons/AppStoreBadge"
import GooglePlayBadge from "../icons/GooglePlayBadge"

const navLinks = [
  { text: "Platform", href: "#" },
  { text: "Solutions", href: "#" },
  { text: "Resources", href: "#" },
  { text: "Pricing", href: "#" },
  { text: "Contact Sales", href: "#" },
]

const columns = [
  {
    heading: "Platform",
    links: ["Platform Overview", "Integrations", "Extensions", "App Building", "AI", "Connected Data"],
    moreLinks: ["Views", "Automations"],
  },
  {
    heading: "Solutions",
    links: ["Product", "Marketing", "Operations", "Human Resources", "Sales", "Finance"],
    moreLinks: ["Legal", "IT"],
  },
  {
    heading: "Learn",
    links: ["Learning Center", "Events", "Video Center", "Demos", "Customer Stories", "Webinars"],
    moreLinks: ["Blog", "Podcast"],
  },
  {
    heading: "Resources",
    links: ["Partners", "Services", "Developers", "Community", "Templates", "Airtable Universe"],
    moreLinks: ["Marketplace", "Guides"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Blog", "Status", "Newsroom", "Try Airtable for free"],
    moreLinks: null,
    badges: { Careers: "POPULAR" },
  },
]

const legalLinks = ["Security", "API", "Sitemap", "Privacy", "Terms", "Do Not Sell/Share My Info", "Cookie Preferences"]



export default function Footer() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set())

  function toggle(i: number) {
    setExpanded(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <footer className="bg-white pt-8 pb-8">
      <Container>
        <div className="flex items-center mb-6">
          <img src="/icons/Link → SVG.svg" width={32} height={27} alt="Airtable" />
          <nav className="hidden lg:flex items-center gap-8 ml-8.5">
            {navLinks.map(link => (
              <a
                key={link.text}
                href={link.href}
                className="text-md font-medium text-secondary-800 leading-[21.6px] tracking-[0.16px] hover:text-primary-300 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 ml-auto">
            <a href="#" aria-label="Facebook" className="text-neutral-500 hover:text-secondary-800 transition-colors">
              <FacebookIcon size={21} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-neutral-500 hover:text-secondary-800 transition-colors">
              <LinkedInIcon size={21} />
            </a>
            <a href="#" aria-label="X" className="text-neutral-500 hover:text-secondary-800 transition-colors">
              <XIcon size={21} />
            </a>
            <a href="#" aria-label="Instagram" className="text-neutral-500 hover:text-secondary-800 transition-colors">
              <InstagramIcon size={21} />
            </a>
            <a href="#" aria-label="YouTube" className="text-neutral-500 hover:text-secondary-800 transition-colors">
              <YouTubeIcon size={21} />
            </a>
          </div>
        </div>

        <hr className="border-neutral-200 mb-8" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 mb-10">
          {columns.map((col, i) => (
            <div key={col.heading}>
              <h3 className="text-md font-medium text-secondary-800 leading-[21.6px] tracking-[0.16px] mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map(text => (
                  <li key={text}>
                    <a href="#" className="inline-flex items-center gap-2 text-md font-normal text-neutral-800 leading-[21.6px] tracking-[0.16px] hover:text-secondary-800 transition-colors">
                      {text}
                      {"badges" in col && (col.badges as Record<string, string>)[text] && (
                        <span className="inline-flex items-center text-sm font-medium text-primary-500 bg-primary-100 py-0.5 px-1.5 rounded-lg leading-[18.9px] tracking-[0.7px] uppercase">
                          {(col.badges as Record<string, string>)[text]}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
                {expanded.has(i) && col.moreLinks?.map(text => (
                  <li key={text}>
                    <a href="#" className="text-md font-normal text-neutral-800 leading-[21.6px] tracking-[0.16px] hover:text-secondary-800 transition-colors">
                      {text}
                    </a>
                  </li>
                ))}
                {col.moreLinks && (
                  <li>
                    <button
                      onClick={() => toggle(i)}
                      className="text-md font-medium text-secondary-800 leading-[21.6px] tracking-[0.16px] hover:text-primary-300 transition-colors"
                    >
                      {expanded.has(i) ? "See less" : "See more"}
                    </button>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-neutral-200 pt-6">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map(text => (
              <a key={text} href="#" className="text-sm font-normal text-neutral-800 hover:text-secondary-800 transition-colors">
                {text}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a href="#"><AppStoreBadge /></a>
            <a href="#"><GooglePlayBadge /></a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
