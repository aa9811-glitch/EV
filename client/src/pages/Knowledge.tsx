import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Zap, 
  Battery, 
  Leaf, 
  DollarSign,
  ExternalLink
} from "lucide-react";
import { Link } from "wouter";

export default function Knowledge() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const topics = [
    {
      id: "ev-basics",
      title: t('knowledge.basicsTitle'),
      description: t('knowledge.basicsDesc'),
      icon: Zap,
      color: "bg-blue-500",
      articles: [
        t('knowledge.basicsArticle1'),
        t('knowledge.basicsArticle2'),
        t('knowledge.basicsArticle3'),
      ]
    },
    {
      id: "charging",
      title: t('knowledge.chargingTitle'),
      description: t('knowledge.chargingDesc'),
      icon: Battery,
      color: "bg-emerald-500",
      articles: [
        t('knowledge.chargingArticle1'),
        t('knowledge.chargingArticle2'),
        t('knowledge.chargingArticle3'),
      ]
    },
    {
      id: "environment",
      title: t('knowledge.envTitle'),
      description: t('knowledge.envDesc'),
      icon: Leaf,
      color: "bg-green-500",
      articles: [
        t('knowledge.envArticle1'),
        t('knowledge.envArticle2'),
        t('knowledge.envArticle3'),
      ]
    },
    {
      id: "costs",
      title: t('knowledge.costsTitle'),
      description: t('knowledge.costsDesc'),
      icon: DollarSign,
      color: "bg-amber-500",
      articles: [
        t('knowledge.costsArticle1'),
        t('knowledge.costsArticle2'),
        t('knowledge.costsArticle3'),
      ]
    },
  ];

  const scrollToCharging = () => {
    window.location.href = "/#charging";
  };

  const resources = [
    {
      title: t('knowledge.resource1Title'),
      description: t('knowledge.resource1Desc'),
      button: t('knowledge.resource1Button'),
      link: "/simulator",
      isPage: true
    },
    {
      title: t('knowledge.resource2Title'),
      description: t('knowledge.resource2Desc'),
      button: t('knowledge.resource2Button'),
      link: "/evse",
      isPage: true
    },
    {
      title: t('knowledge.resource3Title'),
      description: t('knowledge.resource3Desc'),
      button: null,
      link: null,
      isPage: false
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
              <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
              {t('knowledge.label')}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('knowledge.pageTitle')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            {t('knowledge.pageSubtitle')}
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 lg:px-8 py-16">
        {/* Topics Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t('knowledge.topicsTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.id}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${topic.color} rounded-xl`}>
                      <topic.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {topic.description}
                      </p>
                      <ul className="space-y-2">
                        {topic.articles.map((article, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <div className="w-1 h-1 rounded-full bg-gray-400" />
                            {article}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Resources */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-8">
            {t('knowledge.resourcesTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 flex flex-col ${!resource.button ? 'opacity-75' : ''}`}
              >
                <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-4">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow mb-6">
                  {resource.description}
                </p>
                {resource.button && resource.link && (
                  <div>
                    <Link
                      href={resource.link}
                      className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
                    >
                      {resource.button}
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">{t('knowledge.faqTitle')}</h2>
          <p className="text-indigo-100 mb-6 max-w-xl mx-auto">
            {t('knowledge.faqDesc')}
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
          >
            {t('knowledge.faqButton')}
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

