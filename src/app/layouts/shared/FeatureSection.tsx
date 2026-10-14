import Image from "next/image"
import type { ReactNode } from "react"
import Container from "../ui/Container"
import ArrowRightIcon from "../icons/ArrowRightIcon"

interface CTAProps {
  text: string
  href: string
}

interface FeatureSectionProps {
  imagePosition?: "left" | "right"
  image: string
  imageWidth: number
  imageHeight: number
  imageAlt?: string
  headline: ReactNode
  headlineClassName?: string
  subtext?: string
  cta?: CTAProps
  bgClassName?: string
}

export default function FeatureSection({
  imagePosition = "right",
  image,
  imageWidth,
  imageHeight,
  imageAlt = "",
  headline,
  headlineClassName = "text-neutral-900",
  subtext,
  cta,
  bgClassName = "bg-white",
}: FeatureSectionProps) {
  const textCol = (
    <div className="flex-1 flex flex-col gap-6 justify-center">
      <h2
        className={`text-3xl md:text-4xl font-medium leading-12 tracking-normal ${headlineClassName}`}
      >
        {headline}
      </h2>

      {subtext && (
        <p className="text-lg font-normal text-neutral-800 leading-[24.3px] tracking-[0.18px]">
          {subtext}
        </p>
      )}

      {cta && (
        <a
          href={cta.href}
          className="inline-flex items-center gap-2 text-md font-medium text-primary-300 hover:text-primary-900 transition-colors self-start"
        >
          {cta.text}
          <ArrowRightIcon width={16} height={11} />
        </a>
      )}
    </div>
  )

  const imageCol = (
    <div className="flex-1 flex items-center justify-center">
      <Image
        src={image}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="w-full h-auto object-contain"
      />
    </div>
  )

  return (
    <section className={`common-section-large ${bgClassName}`}>
      <Container
        className={`flex flex-col ${imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
      >
        {textCol}
        {imageCol}
      </Container>
    </section>
  )
}
