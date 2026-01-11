import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Zap, Target, Users, ArrowRight } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const objectives = [
    t('about.objective1'),
    t('about.objective2'),
    t('about.objective3'),
    t('about.objective4'),
  ];

  const partners = [
    { name: t('about.partner1Name'), desc: t('about.partner1Desc') },
    { name: t('about.partner2Name'), desc: t('about.partner2Desc') },
    { name: t('about.partner3Name'), desc: t('about.partner3Desc') },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
              <Zap className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            <span className="text-sm font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wide">
              EV Awareness
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.pageTitle')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            {t('about.pageSubtitle')}
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 lg:px-8 py-16">
        {/* About the Project Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('about.projectTitle')}
            </h2>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800"
          >
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-lg">
              {t('about.projectDesc1')}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {t('about.projectDesc2')}
            </p>
          </motion.div>
        </motion.section>

        {/* Objectives Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
              <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('about.objectivesTitle')}
            </h2>
          </motion.div>

          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="group bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                    {objective}
                  </p>
                  <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Partners Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('about.partnersTitle')}
            </h2>
          </motion.div>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg"
          >
            {t('about.partnersDesc')}
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {partner.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}
