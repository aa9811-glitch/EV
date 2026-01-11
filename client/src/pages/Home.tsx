import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { QuickLinksSection } from "@/components/QuickLinksSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ChargingSystemsSection } from "@/components/ChargingSystemsSection";
import { SustainabilitySection } from "@/components/SustainabilitySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <QuickLinksSection />
      <BenefitsSection />
      <ChargingSystemsSection />
      <SustainabilitySection />
      <Footer />
    </div>
  );
}
