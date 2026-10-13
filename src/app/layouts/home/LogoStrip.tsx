import Container from "../ui/Container"
import ColeHaanLogo from "../icons/ColeHaanLogo"
import ExpediaLogo from "../icons/ExpediaLogo"
import LevelsLogo from "../icons/LevelsLogo"
import TimeLogo from "../icons/TimeLogo"
import ShopifyWordmark from "../icons/ShopifyWordmark"
import MediumWordmark from "../icons/MediumWordmark"

export default function LogoStrip() {
  return (
    <section className="section48">
      <Container className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center gap-8 lg:gap-6">
        <ColeHaanLogo width={100} height={30} />
        <ExpediaLogo width={132} height={30} />
        <LevelsLogo width={100} height={30} />
        <TimeLogo width={100} height={30} />
        <ShopifyWordmark width={100} height={30} />
        <MediumWordmark width={100} height={30} />
      </Container>
    </section>
  )
}
