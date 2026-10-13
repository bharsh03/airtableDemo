import HomeHeroSection from "./layouts/home/HomeHeroSection"
import LogoStrip from "./layouts/home/LogoStrip"
import FeatureSection from "./layouts/shared/FeatureSection"
import WorkflowSection from "./layouts/home/WorkflowSection"
import FloatingCTASection from "./layouts/home/FloatingCTASection"
import IntegrationSection from "./layouts/home/IntegrationSection"
import ResultsSection from "./layouts/home/ResultsSection"
import ResourcesSection from "./layouts/home/ResourcesSection"
import BottomCTASection from "./layouts/home/BottomCTASection"

export default function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <LogoStrip />

      <FeatureSection
        imagePosition="right"
        image="/images/div.ContentfulImage_imageContainer__eVV0D-6.png"
        imageWidth={656}
        imageHeight={450}
        imageAlt="Operationalize your data"
        headline="Operationalize your critical data, move beyond rigid tools, and reimagine workflows with AI. No code required."
        headlineClassName="text-neutral-900"
        bgClassName="bg-white"
      />

      <FeatureSection
        imagePosition="left"
        image="/images/div.BkHtmlVideo-module_bkVideoNoControl__2VSPo.png"
        imageWidth={541}
        imageHeight={406}
        imageAlt="Simple to build, intuitive to use"
        headline={<>Simple to build.<br />Intuitive to use.</>}
        headlineClassName="text-secondary-800"
        subtext="Enable those closest to the real-world details of your business to customize the apps that accelerate how work gets done."
        cta={{ text: "Explore the platform", href: "#" }}
        bgClassName="bg-neutral-50"
      />

      <WorkflowSection />
      <FloatingCTASection />
      <IntegrationSection />
      <ResultsSection />
      <ResourcesSection />
      <BottomCTASection />
    </main>
  )
}
