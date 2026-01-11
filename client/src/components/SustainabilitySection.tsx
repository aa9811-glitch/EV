import { Card } from "@/components/ui/card";
import { TreePine, Fuel, Wind } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import sustainabilityImage from "@assets/generated_images/Renewable_energy_landscape_e8538458.png";

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export function SustainabilitySection() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: TreePine,
      value: 4600,
      unit: t('sustainability.stat1Unit'),
      label: t('sustainability.stat1Label'),
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
    },
    {
      icon: Fuel,
      value: 1200,
      unit: "$",
      label: t('sustainability.stat2Label'),
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
    {
      icon: Wind,
      value: 85,
      unit: "%",
      label: t('sustainability.stat3Label'),
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="sustainability" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('sustainability.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('sustainability.subtitle')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className={`h-12 w-12 rounded-lg ${stat.bgColor} flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-1" data-testid={`text-stat-${index}`}>
                    <AnimatedCounter end={stat.value} />
                    {stat.unit}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card className="overflow-hidden">
              <img 
                src={sustainabilityImage} 
                alt={t('sustainability.imageAlt')}
                className="w-full h-96 object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
