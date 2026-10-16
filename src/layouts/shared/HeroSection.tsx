import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

interface CTAProps {
  text: string;
  href: string;
}

interface HeroSectionProps {
  badge?: BadgeProps;
  headline: React.ReactNode;
  subtext: string;
  primaryCTA: CTAProps;
  secondaryCTA?: CTAProps;
  backgroundImage: string;
  foregroundImage: string;
  foregroundImageAlt?: string;
  foregroundImageWidth?: number;
  foregroundImageHeight?: number;
}

export default function HeroSection({
  badge,
  headline,
  subtext,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  foregroundImage,
  foregroundImageAlt = "Hero image",
  foregroundImageWidth = 580,
  foregroundImageHeight = 440,
}: HeroSectionProps) {
  return (
    <section
      className="common-section-large relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:flex-none lg:w-[40%] flex flex-col gap-6">
          {badge && (
            <a
              href={badge.href ?? "#"}
              className="inline-flex items-center gap-2 self-start px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-full border border-white/80 text-sm font-medium text-secondary-800 leading-5.25 tracking-[0.21px] hover:bg-white/80 transition-colors"
            >
              {badge.icon}
              <span>{badge.text}</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary-300 text-white text-xs shrink-0">
                +
              </span>
            </a>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary-900 leading-tight lg:leading-17.5 tracking-normal mx-auto">
            {headline}
          </h1>

          <p className="text-lg font-medium text-primary-500 leading-[24.3px] tracking-[0.18px] w-full lg:max-w-lg text-center lg:text-start">
            {subtext}
          </p>

          <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-start">
            <Button
              variant="filled"
              href={primaryCTA.href}
              className="px-5 py-3 text-lg leading-[24.3px] tracking-[0.18px]"
            >
              {primaryCTA.text}
            </Button>
            {secondaryCTA && (
              <Button
                variant="outline"
                href={secondaryCTA.href}
                className="px-5 py-3 text-lg leading-[24.3px] tracking-[0.18px]"
              >
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>

        <div className="w-full lg:flex-1 relative">
          <Image
            src={foregroundImage}
            alt={foregroundImageAlt}
            width={foregroundImageWidth}
            height={foregroundImageHeight}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
