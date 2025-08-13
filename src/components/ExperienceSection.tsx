import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import personalInfo from '../data/personalInfo.json';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="min-h-screen py-20 bg-white dark:bg-slate-900" data-testid="experience-section">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            8+ years at LinkedIn building scalable support-focused software solutions
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>
          
          {personalInfo.experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>
              
              <div className={`ml-12 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <FiBriefcase className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {exp.title}
                    </h3>
                  </div>
                  
                  <h4 className="text-lg font-medium text-blue-600 mb-2">
                    {exp.company}
                  </h4>
                  
                  <div className="flex items-center text-slate-500 dark:text-slate-400 mb-2">
                    <FiMapPin className="w-4 h-4 mr-2" />
                    <span className="mr-4">{exp.location}</span>
                    <FiCalendar className="w-4 h-4 mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-300 flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;