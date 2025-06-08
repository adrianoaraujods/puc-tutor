import { ContributionSection } from "@/components/layout/contribution-section";
import { FeaturesSection } from "@/components/layout/features-section";
import { HeroSection } from "@/components/layout/hero-section";

import type { Metadata } from "next";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <FeaturesSection />

      <ContributionSection />
    </>
  );
}

export const metadata: Metadata = {
  title: "PUC Tutor",
  description: "O melhor Tutor para o seu Curso de Tecnologia!",
};
