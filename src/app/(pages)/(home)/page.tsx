import { ContributionSection } from "@/components/layout/contribution-section";
import { FeaturesSection } from "@/components/layout/features-section";
import { HeroSection } from "@/components/layout/hero-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <FeaturesSection />

      <ContributionSection />
    </>
  );
}
