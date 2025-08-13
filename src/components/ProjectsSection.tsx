import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import type { IconType } from 'react-icons';
import { AiFillBug, AiFillProject } from 'react-icons/ai';
import { FiExternalLink, FiGithub, FiUsers, FiTrendingUp, FiLinkedin } from 'react-icons/fi';
import personalInfo from '../data/personalInfo.json';

const iconMap: { [key: string]: IconType } = {
  AiFillBug,
  FiTrendingUp,
  FiUsers
}

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="min-h-screen py-20 bg-slate-50 dark:bg-slate-800" data-testid="projects-section">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A selection of projects that showcase my technical skills and problem-solving abilities
          </p>
        </motion.div>

        <div className="space-y-12">
          {personalInfo.projects.map((project, index) => {
            const IconComponent = iconMap[project.icon] || AiFillProject
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                        KEY FEATURES
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-slate-600 dark:text-slate-300">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                        TECHNOLOGIES
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      {project.github &&
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-slate-900 dark:bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors duration-200"
                        >
                          <FiGithub className="w-5 h-5" />
                          Code
                        </a>
                      }
                      {project.live &&
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                          <FiExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
                      }
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 dark:text-slate-300 text-lg mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://linkedin.com/in/mel-salazar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200"
          >
            <FiLinkedin className="w-5 h-5" />
            View Professional Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;