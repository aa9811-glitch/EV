import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { QuickLinksSection } from "@/components/QuickLinksSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { Footer } from "@/components/Footer";
import { VisitorCounter } from "@/components/VisitorCounter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <QuickLinksSection />
      <BenefitsSection />
      <VisitorCounter />
      <Footer />
    </div>
  );
}
