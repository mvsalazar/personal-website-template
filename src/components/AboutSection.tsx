import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import personalInfo from '../data/personalInfo.json';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="min-h-screen py-20 bg-white dark:bg-slate-900" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              {personalInfo.title}
            </h3>
            {personalInfo.bio.description.map((paragraph, index) => (
              <p key={index} className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Languages
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                {personalInfo.languages.join(', ')}
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Core Focus
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                Creating support experiences that balance AI-driven efficiency with thoughtful, human support when it matters most.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;