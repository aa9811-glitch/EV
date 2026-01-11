import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import level1Image from "@assets/generated_images/Level_1_charging_diagram_3bab2f75.png";
import level2Image from "@assets/generated_images/Level_2_wall_charger_58ddd636.png";
import dcFastImage from "@assets/generated_images/DC_fast_charging_station_92073e7e.png";

export function ChargingSystemsSection() {
  const { t } = useLanguage();

  const chargingSystems = [
    {
      title: t('chargingSystems.level1Title'),
      subtitle: t('chargingSystems.level1Subtitle'),
      image: level1Image,
      power: t('chargingSystems.level1Power'),
      time: t('chargingSystems.level1Time'),
      description: t('chargingSystems.level1Desc'),
      features: [
        t('chargingSystems.level1Feature1'),
        t('chargingSystems.level1Feature2'),
        t('chargingSystems.level1Feature3'),
      ],
    },
    {
      title: t('chargingSystems.level2Title'),
      subtitle: t('chargingSystems.level2Subtitle'),
      image: level2Image,
      power: t('chargingSystems.level2Power'),
      time: t('chargingSystems.level2Time'),
      description: t('chargingSystems.level2Desc'),
      features: [
        t('chargingSystems.level2Feature1'),
        t('chargingSystems.level2Feature2'),
        t('chargingSystems.level2Feature3'),
      ],
    },
    {
      title: t('chargingSystems.dcFastTitle'),
      subtitle: t('chargingSystems.dcFastSubtitle'),
      image: dcFastImage,
      power: t('chargingSystems.dcFastPower'),
      time: t('chargingSystems.dcFastTime'),
      description: t('chargingSystems.dcFastDesc'),
      features: [
        t('chargingSystems.dcFastFeature1'),
        t('chargingSystems.dcFastFeature2'),
        t('chargingSystems.dcFastFeature3'),
      ],
    },
  ];

  return (
    <section id="charging" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('chargingSystems.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('chargingSystems.subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {chargingSystems.map((system, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="flex-1">
                <Card className="overflow-hidden h-full">
                  <img 
                    src={system.image} 
                    alt={system.title}
                    className="w-full h-64 object-cover"
                  />
                </Card>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                    {system.title}
                  </h3>
                  <p className="text-primary font-medium">{system.subtitle}</p>
                </div>
                <div className="flex gap-8">
                  <div>
                    <p className="text-sm text-muted-foreground">{t('chargingSystems.powerOutput')}</p>
                    <p className="text-lg font-semibold text-foreground">{system.power}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('chargingSystems.chargeTime')}</p>
                    <p className="text-lg font-semibold text-foreground">{system.time}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{system.description}</p>
                <ul className="space-y-2">
                  {system.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
