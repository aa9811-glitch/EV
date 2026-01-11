import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@assets/generated_images/EV_charging_at_modern_station_d2d23728.png";

export function HeroSection() {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Light mode: smooth lighter overlay, Dark mode: darker overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-white/70 dark:from-black/60 dark:via-black/50 dark:to-black/70" />
      <div className="absolute inset-0 backdrop-blur-[2px] dark:backdrop-blur-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          {t('hero.mainTitle')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-white/90 mb-12 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground border border-primary-border"
            onClick={() => scrollToSection("simulator")}
            data-testid="button-try-simulator"
          >
            {t('hero.simulatorButton')}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="backdrop-blur-md bg-gray-900/10 border-gray-900/30 text-gray-900 hover:bg-gray-900/20 dark:bg-white/20 dark:border-white/30 dark:text-white dark:hover:bg-white/30"
            onClick={() => scrollToSection("benefits")}
            data-testid="button-learn-more"
          >
            {t('common.learnMore')}
          </Button>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection("benefits")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gray-900 dark:text-white/80 dark:hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
