import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import personalInfo from '../data/personalInfo.json';
import profilePicture from '../assets/profile_picture.png'

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800" data-testid="hero-section">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={profilePicture} 
            alt={personalInfo.name} 
            className="w-48 h-48 rounded-full mx-auto mb-8 object-fit shadow-lg"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
            {personalInfo.name}
          </h1>
          {personalInfo.preferredName &&
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              ({personalInfo.preferredName})
            </h2>
          }
          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-4">
            {personalInfo.bio.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <a 
              href="#contact" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button onClick={scrollToNext} className="animate-bounce">
            <FiArrowDown className="w-6 h-6 text-slate-400" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;