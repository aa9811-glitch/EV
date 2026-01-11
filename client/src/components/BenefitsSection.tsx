import { Card } from "@/components/ui/card";
import { Leaf, DollarSign, Zap, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function BenefitsSection() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Leaf,
      title: t('benefits.environmental.title'),
      description: t('benefits.environmental.desc'),
    },
    {
      icon: DollarSign,
      title: t('benefits.cost.title'),
      description: t('benefits.cost.desc'),
    },
    {
      icon: Zap,
      title: t('benefits.performance.title'),
      description: t('benefits.performance.desc'),
    },
    {
      icon: Clock,
      title: t('benefits.convenience.title'),
      description: t('benefits.convenience.desc'),
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-benefit-${index}`}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
