import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { 
  Users, 
  Building2, 
  GraduationCap, 
  Landmark,
  MessageSquare,
  Mail,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";

export default function Stakeholder() {
  const { t } = useLanguage();

  const stakeholders = [
    {
      id: "consumers",
      title: t('stakeholder.consumersTitle'),
      description: t('stakeholder.consumersDesc'),
      icon: Users,
      color: "bg-blue-500",
      points: [
        t('stakeholder.consumersPoint1'),
        t('stakeholder.consumersPoint2'),
        t('stakeholder.consumersPoint3'),
      ]
    },
    {
      id: "industry",
      title: t('stakeholder.industryTitle'),
      description: t('stakeholder.industryDesc'),
      icon: Building2,
      color: "bg-emerald-500",
      points: [
        t('stakeholder.industryPoint1'),
        t('stakeholder.industryPoint2'),
        t('stakeholder.industryPoint3'),
      ]
    },
    {
      id: "education",
      title: t('stakeholder.educationTitle'),
      description: t('stakeholder.educationDesc'),
      icon: GraduationCap,
      color: "bg-purple-500",
      points: [
        t('stakeholder.educationPoint1'),
        t('stakeholder.educationPoint2'),
        t('stakeholder.educationPoint3'),
      ]
    },
    {
      id: "government",
      title: t('stakeholder.governmentTitle'),
      description: t('stakeholder.governmentDesc'),
      icon: Landmark,
      color: "bg-amber-500",
      points: [
        t('stakeholder.governmentPoint1'),
        t('stakeholder.governmentPoint2'),
        t('stakeholder.governmentPoint3'),
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
              <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            <span className="text-sm font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wide">
              {t('stakeholder.label')}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('stakeholder.pageTitle')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            {t('stakeholder.pageSubtitle')}
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 lg:px-8 py-16">
        {/* Stakeholder Groups */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t('stakeholder.groupsTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {stakeholders.map((stakeholder, index) => (
              <motion.div
                key={stakeholder.id}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${stakeholder.color} rounded-xl flex-shrink-0`}>
                      <stakeholder.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {stakeholder.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {stakeholder.description}
                      </p>
                      <ul className="space-y-2">
                        {stakeholder.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <ArrowRight className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            {point}
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

        {/* Get Involved Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t('stakeholder.involvedTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {t('stakeholder.feedbackTitle')}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {t('stakeholder.feedbackDesc')}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {t('stakeholder.feedbackButton')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {t('stakeholder.partnerTitle')}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {t('stakeholder.partnerDesc')}
              </p>
              <a
                href="https://smartgrid.eecs.yorku.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {t('stakeholder.partnerButton')}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">{t('stakeholder.ctaTitle')}</h2>
          <p className="text-teal-100 mb-6 max-w-xl mx-auto">
            {t('stakeholder.ctaDesc')}
          </p>
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors"
          >
            {t('stakeholder.ctaButton')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

