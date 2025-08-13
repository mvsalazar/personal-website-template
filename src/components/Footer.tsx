import { FiLinkedin, FiMail } from 'react-icons/fi';
import personalInfo from '../data/personalInfo.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12" data-testid="footer-section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
            <p className="text-slate-400">
              {personalInfo.title}
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            {personalInfo.email &&
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <FiMail className="w-6 h-6" />
              </a>
            }
            {personalInfo.linkedIn.url &&
              <a
                href={personalInfo.linkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
            }
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center">
            © {currentYear} {personalInfo.name}. Built with React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;