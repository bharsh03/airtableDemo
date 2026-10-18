"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import ArrowRightIcon from "../icons/ArrowRightIcon"
import IntegrationIcon from "../icons/IntegrationIcon"
import { getProducts } from "@/api/apihandler"
import type { Product } from "@/app/types"

const fallback = [
  { name: "Tableau",          category: "Analytics",        thumbnail: "" },
  { name: "Outlook Calendar", category: "Communication",    thumbnail: "" },
  { name: "Zendesk",          category: "Customer Support", thumbnail: "" },
  { name: "Box",              category: "File Management",  thumbnail: "" },
  { name: "Slack",            category: "Communication",    thumbnail: "" },
  { name: "Google Calendar",  category: "Productivity",     thumbnail: "" },
  { name: "Github",           category: "File Management",  thumbnail: "" },
  { name: "Twilio",           category: "Communication",    thumbnail: "" },
  { name: "Stripe",           category: "Payments",         thumbnail: "" },
]

const durations = [450, 400, 420]

export default function IntegrationSection() {
  const [products, setProducts] = useState<{ name: string; category: string; thumbnail: string }[]>(fallback)

  useEffect(() => {
    getProducts().then((res) => {
      const mapped = res.data.products
        .filter((p: Product) => !["groceries", "kitchen-accessories", "home-decoration"].includes(p.category))
        .map((p: Product) => ({
          name: p.brand,
          category: p.category,
          thumbnail: p.thumbnail,
        }))
      if (mapped.length > 0) setProducts(mapped)
    }).catch(() => {})
  }, [])

  const row1 = products
  const row2 = [...products.slice(3), ...products.slice(0, 3)]
  const row3 = [...products.slice(6), ...products.slice(0, 6)]
  const rows = [row1, row2, row3]

  return (
    <section className="common-section-medium bg-neutral-50 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 ps-6 md:ps-8 lg:ps-26.25">

        <div className="flex flex-col gap-6 w-full lg:w-95 lg:shrink-0">
          <h2 className="text-3xl md:text-4xl font-medium text-secondary-800 leading-12 tracking-normal">
            Integrate critical workflows
          </h2>
          <p className="text-lg font-normal text-neutral-800 leading-[24.3px] tracking-[0.18px]">
            Link Airtable to your existing tools, connect important business
            processes, and build more powerful applications.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-md font-medium text-primary-500 hover:text-primary-900 transition-colors self-start"
          >
            Explore all integrations
            <ArrowRightIcon width={16} height={11} />
          </a>
        </div>

        <div className="relative flex-1 flex flex-col gap-4 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />
          {rows.map((row, i) => (
            <div key={i} className="py-1">
              <div
                className="flex gap-4 w-max animate-marquee"
                style={{ ['--animate-marquee' as string]: `marquee ${durations[i]}s linear infinite` }}
              >
                {[...row, ...row].map((item, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-3 bg-white rounded-xl border border-neutral-200 px-4 py-3 w-64 shrink-0 shadow-sm"
                  >
                    {item.thumbnail ? (
                      <Image
                        src={item.thumbnail}
                        width={36}
                        height={36}
                        alt={item.name ?? ""}
                        className="rounded object-contain"
                      />
                    ) : (
                      <IntegrationIcon width={36} height={36} alt={item.name} />
                    )}
                    <div>
                      <p className="text-md font-medium text-secondary-800 leading-[21.6px]">{item.name}</p>
                      <p className="text-sm font-normal text-neutral-500 leading-[18.9px]">{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
