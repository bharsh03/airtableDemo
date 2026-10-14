"use client"

import { useState } from "react"
import Image from "next/image"
import Button from "../ui/Button"
import profileIconSvg from "@/assets/icons/profileicon.svg"
import EquinoxLogo from "../icons/EquinoxLogo"
import SliderPrevButton from "../icons/SliderPrevButton"
import SliderNextButton from "../icons/SliderNextButton"
import slideBackground from "@/assets/images/div.VideoPane_slideBackground__21zFk.png"
import productImg from "@/assets/images/span.png"

const slides = [
  {
    backgroundImage: slideBackground.src,
    stat: "40x",
    statLabel: "more on-demand content",
    quote: "We were able to produce and deliver so much more than we ever had before.",
    personName: "Lindsay Puccio",
    personTitle: "Product Manager, Equinox",
    productImage: productImg.src,
  },
  {
    backgroundImage: slideBackground.src,
    stat: "40x",
    statLabel: "more on-demand content",
    quote: "We were able to produce and deliver so much more than we ever had before.",
    personName: "Lindsay Puccio",
    personTitle: "Product Manager, Equinox",
    productImage: productImg.src,
  },
  {
    backgroundImage: slideBackground.src,
    stat: "40x",
    statLabel: "more on-demand content",
    quote: "We were able to produce and deliver so much more than we ever had before.",
    personName: "Lindsay Puccio",
    personTitle: "Product Manager, Equinox",
    productImage: productImg.src,
  },
]

export default function ResultsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i - 1 + slides.length) % slides.length)
  const next = () => setCurrent(i => (i + 1) % slides.length)

  const slide = slides[current]

  return (
    <section className="bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-start ps-6 md:ps-8 lg:ps-43 pe-6 md:pe-8 lg:pe-16 pt-12 pb-29.5">
        <h2 className="text-3xl md:text-4xl font-medium text-secondary-800 leading-12 tracking-normal">
          Results you can measure
        </h2>
        <div className="flex flex-col gap-5 flex-1 lg:w-95 lg:shrink-0 w-60 ps-9">
          <p className="text-lg font-normal text-neutral-800 leading-[24.3px] tracking-[0.18px] w-90">
            Find out how customers from all kinds of industries achieve amazing outcomes with Airtable.
          </p>
          <Button variant="outline" href="#" className="px-5 py-3 text-lg self-start mt-15">
            Read customer stories
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-8 px-6 md:px-8 lg:px-12 pb-12">
        <div
          className="relative w-full rounded-2xl overflow-hidden h-80 md:h-120 lg:h-144 bg-cover bg-center"
          style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/10 to-black/50" />
          <div className="absolute md:right-24 lg:right-98 top-1/2 -translate-y-1/2 translate-x-1/7 flex flex-col gap-4 z-10">
            <EquinoxLogo width={140} height={22} />
            <div className="flex items-center gap-3">
              <div className="w-0.75 self-stretch bg-accent-500 rounded-full" />
              <div>
                <p className="text-4xl font-medium text-white leading-none">{slide.stat}</p>
                <p className="text-md text-white/80 mt-1">{slide.statLabel}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center  mx-auto">
          <div className="flex flex-col gap-5 flex-1">
            <p className="text-xl font-medium text-neutral-800 leading-6.75 tracking-[0.1px]">
              &ldquo;{slide.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <img
                src={profileIconSvg}
                width={48}
                height={48}
                alt={slide.personName}
                className="rounded-full shrink-0"
              />
              <div>
                <p className="text-xs font-medium text-neutral-800 leading-4.5">{slide.personName}</p>
                <p className="text-xs font-normal text-neutral-800 leading-4.5">{slide.personTitle}</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={slide.productImage}
              alt="Product screenshot"
              width={427}
              height={240}
              sizes="(max-width: 1024px) 100vw, 427px"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-10.5 h-10.5 rounded-full bg-neutral-200 flex items-center justify-center hover:opacity-80 transition-opacity shrink-0"
          >
            <SliderPrevButton size={18} className="text-secondary-800" />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.25 rounded-full transition-all duration-300 ${
                  i === current ? "w-10 bg-primary-300" : "w-3 bg-neutral-200"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="w-10.5 h-10.5 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors shrink-0"
          >
            <SliderNextButton size={18} className="text-secondary-800" />
          </button>
        </div>

      </div>
    </section>
  )
}
