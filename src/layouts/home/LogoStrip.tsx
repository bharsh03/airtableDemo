import ColeHaanLogo from "../icons/ColeHaanLogo"
import ExpediaLogo from "../icons/ExpediaLogo"
import LevelsLogo from "../icons/LevelsLogo"
import TimeLogo from "../icons/TimeLogo"
import ShopifyWordmark from "../icons/ShopifyWordmark"
import MediumWordmark from "../icons/MediumWordmark"

const logos = [
  <ColeHaanLogo key="cole" width={100} height={30} />,
  <ExpediaLogo key="expedia" width={132} height={30} />,
  <LevelsLogo key="levels" width={100} height={30} />,
  <TimeLogo key="time" width={100} height={30} />,
  <ShopifyWordmark key="shopify" width={100} height={30} />,
  <MediumWordmark key="medium" width={100} height={30} />,
]

export default function LogoStrip() {
  return (
    <section className="common-section-small overflow-hidden">
      <div className="flex w-max animate-marquee">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center justify-center px-12 shrink-0">
            {logo}
          </div>
        ))}
      </div>
    </section>
  )
}
