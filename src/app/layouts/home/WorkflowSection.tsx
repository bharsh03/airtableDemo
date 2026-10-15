"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Container from "../ui/Container"
import ArrowRightIcon from "../icons/ArrowRightIcon"
import ChevronRightIcon from "../icons/ChevronRightIcon"
import cellImage from "@/assets/images/div.Cell-module_cell__1M0h9.png"

const DURATION = 5000

const accordionItems = [
  {
    title: "Marketing",
    description: "Create custom workflows to run campaigns and track successes.",
    cta: { text: "Explore Marketing", href: "#" },
  },
  {
    title: "Product",
    description: "Ship faster with connected roadmaps, feedback tracking, and launch workflows in one place.",
    cta: { text: "Explore Product", href: "#" },
  },
  {
    title: "Operations",
    description: "Automate repeatable processes and connect data across every team to keep operations running smoothly.",
    cta: { text: "Explore Operations", href: "#" },
  },
  {
    title: "Project Management",
    description: "Track every project, deadline, and deliverable with flexible views tailored to how your team works.",
    cta: { text: "Explore Project Management", href: "#" },
  },
  {
    title: "Finance",
    description: "Manage budgets, forecasts, and approvals with real-time visibility across your financial workflows.",
    cta: { text: "Explore Finance", href: "#" },
  },
  {
    title: "Human Resources",
    description: "Streamline hiring, onboarding, and employee data with a single connected HR platform.",
    cta: { text: "Explore Human Resources", href: "#" },
  },
]

export default function WorkflowSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(0)
    const startTime = Date.now()
    const tick = setInterval(() => {
      const pct = Math.min(((Date.now() - startTime) / DURATION) * 100, 100)
      setProgress(pct)
      if (pct >= 100) {
        setOpenIndex(prev => (prev + 1) % accordionItems.length)
      }
    }, 50)
    return () => clearInterval(tick)
  }, [openIndex])

  function handleClick(i: number) {
    if (i !== openIndex) setOpenIndex(i)
  }

  return (
    <section className="common-section-large bg-white">
      <Container className="flex flex-col gap-12">

        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16  lg:px-32.75">
          <h2 className="text-2xl font-medium text-secondary-800 leading-[55.2px] tracking-normal flex-1">
            No matter your workflow,
            <br />
            you can build it in Airtable
          </h2>
          <p className="text-xl font-medium text-neutral-700 leading-6.75 tracking-[0.1px] flex-1 lg:max-w-sm">
            End silos with a unique platform that connects every part of your work.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-7/12 overflow-hidden">
            <Image
              src={cellImage}
              alt="Airtable workflow dashboard"
              className="w-full h-112 object-fill"
            />
          </div>

          <div className="flex flex-col w-full lg:w-5/12">
            <div className="relative h-1 bg-gray-100 mb-1 rounded-t-xl">
              <div
                className="absolute left-0 top-0 rounded-t-xl h-full bg-accent-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex flex-col divide-y divide-neutral-50">
              {accordionItems.map((item, i) => (
                <div key={item.title}>
                  <button
                    onClick={() => handleClick(i)}
                    className="flex items-center justify-between w-full py-4 text-left gap-4"
                  >
                    <span className="text-md font-medium text-secondary-500 leading-[21.6px] tracking-[0.16px]">
                      {item.title}
                    </span>
                    <ChevronRightIcon
                      width={6}
                      height={10}
                      className={`shrink-0 text-secondary-800 transition-transform duration-200 ${
                        openIndex === i ? "-rotate-90" : "rotate-90"
                      }`}
                    />
                  </button>

                  {openIndex === i && (
                    <div className="pb-5 flex flex-col gap-3">
                      <p className="text-md font-normal text-neutral-700 leading-6 tracking-[0.16px]">
                        {item.description}
                      </p>
                      <a
                        href={item.cta.href}
                        className="inline-flex items-center gap-2 text-md font-medium text-primary-500 leading-6 tracking-[0.08px] hover:text-primary-900 transition-colors self-start"
                      >
                        {item.cta.text}
                        <ArrowRightIcon width={16} height={11} />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}
