import HeroSection from "../shared/HeroSection"
import AirtableGradientBadge from "../icons/AirtableGradientBadge"
import heroBg from "@/assets/images/herosectionbackground.png"
import heroFg from "@/assets/images/div.heroMedia_foregroundImgWrap__zpWlH.png"

export default function HomeHeroSection() {
  return (
    <HeroSection
      badge={{
        icon: <AirtableGradientBadge size={28} />,
        text: "Watch an AI demo today",
        href: "#",
      }}
      headline={
        <>
          Business operations.
          Redefined
        </>
      }
      subtext="Your most critical processes, easily managed on a single platform."
      primaryCTA={{ text: "Sign up for free", href: "#" }}
      secondaryCTA={{ text: "Contact Sales", href: "#" }}
      backgroundImage={heroBg.src}
      foregroundImage={heroFg.src}
      foregroundImageAlt="Airtable dashboard"
      foregroundImageHeight={770.67}
      foregroundImageWidth={469.87}
    />
  )
}
