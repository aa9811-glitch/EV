import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Wrench, 
  BarChart3, 
  ArrowRight,
  Zap,
  Car,
  Calculator
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function QuickLinksSection() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const cards = [
    {
      id: "insights",
      title: t('quickLinks.insightsTitle'),
      description: t('quickLinks.insightsDesc'),
      icon: Lightbulb,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      link: "/about",
      features: [
        t('quickLinks.insightsFeature1'),
        t('quickLinks.insightsFeature2'),
        t('quickLinks.insightsFeature3'),
      ]
    },
    {
      id: "tools",
      title: t('quickLinks.toolsTitle'),
      description: t('quickLinks.toolsDesc'),
      icon: Wrench,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      link: "/simulator",
      features: [
        { text: t('quickLinks.toolsFeature1'), link: "/simulator", icon: Zap },
        { text: t('quickLinks.toolsFeature2'), link: "/evse", icon: Calculator },
        { text: t('quickLinks.toolsFeature3'), link: "/vehicle-selection", icon: Car },
      ]
    },
    {
      id: "statistics",
      title: t('quickLinks.statsTitle'),
      description: t('quickLinks.statsDesc'),
      icon: BarChart3,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      link: "#benefits",
      stats: [
        { value: "80%", label: t('quickLinks.stat1Label') },
        { value: "50%", label: t('quickLinks.stat2Label') },
        { value: "0", label: t('quickLinks.stat3Label') },
      ]
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('quickLinks.sectionTitle')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('quickLinks.sectionSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden group"
            >
              {/* Card Header */}
              <div className={`p-6 ${card.bgColor}`}>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${card.color} shadow-lg mb-4`}>
                  <card.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {card.description}
                </p>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {card.features && (
                  <ul className="space-y-3">
                    {card.features.map((feature, idx) => (
                      typeof feature === 'string' ? (
                        <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ) : (
                        <li key={idx}>
                          <Link 
                            href={feature.link}
                            className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors group/item"
                          >
                            <feature.icon className="w-4 h-4 text-gray-400 group-hover/item:text-primary" />
                            <span className="text-sm">{feature.text}</span>
                            <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </Link>
                        </li>
                      )
                    ))}
                  </ul>
                )}

                {card.stats && (
                  <div className="grid grid-cols-3 gap-4">
                    {card.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-2xl font-bold bg-gradient-to-br ${card.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Card Footer */}
                {card.link.startsWith('#') ? (
                  <button 
                    onClick={() => scrollToSection(card.link.substring(1))}
                    className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link w-full"
                  >
                    <span>{t('quickLinks.exploreMore')}</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <Link 
                    href={card.link}
                    className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    <span>{t('quickLinks.exploreMore')}</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

