import HomeHeroSection from "@/layouts/home/HomeHeroSection";
import LogoStrip from "@/layouts/home/LogoStrip";
import OperationalizeSection from "@/layouts/home/OperationalizeSection";
import PlatformSection from "@/layouts/home/PlatformSection";
import WorkflowSection from "@/layouts/home/WorkflowSection";
import FloatingCTASection from "@/layouts/home/FloatingCTASection";
import IntegrationSection from "@/layouts/home/IntegrationSection";
import ResultsSection from "@/layouts/home/ResultsSection";
import ResourcesSection from "@/layouts/home/ResourcesSection";
import BottomCTASection from "@/layouts/home/BottomCTASection";
export default function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <LogoStrip />
      <OperationalizeSection />
      <PlatformSection />
      <WorkflowSection />
      <FloatingCTASection />
      <IntegrationSection />
      <ResultsSection />
      <ResourcesSection />
      <BottomCTASection />
    </main>
  );
}
