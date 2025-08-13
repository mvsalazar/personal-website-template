import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { DiMysql, DiScrum } from 'react-icons/di';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt,
  FaDatabase,
  FaLaravel
} from 'react-icons/fa';
import { GiTeamUpgrade } from 'react-icons/gi';
import { 
  SiTypescript, 
  SiPostgresql, 
  SiRedis, 
  SiKubernetes,
  SiGraphql,
  SiVite
} from 'react-icons/si';

const skills = {
  "Development": [
    { name: "Java", icon: FaDatabase, color: "text-red-600" },
    { name: "Scala", icon: FaDatabase, color: "text-red-500" },
    { name: "JavaScript", icon: SiVite, color: "text-yellow-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "PHP/MySQL", icon: DiMysql, color: "text-blue-600" },
    { name: "Laravel", icon: FaLaravel, color: "text-blue-600" },
  ],
  "AI / LLM Technologies": [
    { name: "GPT Integration", icon: FaReact, color: "text-green-500" },
    { name: "AI Assistants", icon: SiGraphql, color: "text-purple-500" },
    { name: "Support Automation", icon: FaNodeJs, color: "text-blue-500" },
  ],
  "Practices & Tools": [
    { name: "A/B Testing", icon: SiPostgresql, color: "text-blue-700" },
    { name: "Developer Tooling", icon: FaGitAlt, color: "text-orange-600" },
    { name: "Case Routing", icon: SiRedis, color: "text-red-500" },
    { name: "SQL", icon: FaDatabase, color: "text-slate-600" },
  ],
  "Leadership & Collaboration": [
    { name: "Team Mentorship", icon: FaReact, color: "text-blue-500" },
    { name: "Technical Strategy", icon: SiKubernetes, color: "text-blue-600" },
    { name: "Career Development", icon: FaPython, color: "text-yellow-400" },
    { name: "Agile Execution", icon: DiScrum, color: "text-orange-500" },
    { name: "Cross-functional Collaboration", icon: GiTeamUpgrade, color: "text-orange-500" },
  ],
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="min-h-screen py-20 bg-slate-50 dark:bg-slate-800" data-testid="skills-section">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit built over years of hands-on development and team leadership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 text-center">
                {category}
              </h3>
              <div className="space-y-4">
                {skillList.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + index * 0.1 }}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
                    >
                      <IconComponent className={`w-6 h-6 ${skill.color}`} />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Leadership & Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Cross-functional Leadership", "Product Alignment", "Technical Strategy", "Team Mentorship", 
              "Career Development", "Agile Execution", "CRM Integration", "Oracle Service Cloud", 
              "Salesforce", "Real-time Monitoring", "Incident Resolution", "Performance Optimization"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;