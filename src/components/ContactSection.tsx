import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiLinkedin, FiMapPin, FiPhone } from 'react-icons/fi';
import personalInfo from '../data/personalInfo.json';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    ...(personalInfo.email ? [{
      icon: FiMail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-red-500"
    }] : []),
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: `/${personalInfo.linkedIn.username}`,
      href: personalInfo.linkedIn.url,
      color: "text-blue-600"
    },
    ...(personalInfo.phone ? [{
      icon: FiPhone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "text-green-500"
    }] : []),
    {
      icon: FiMapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
      color: "text-slate-500"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-white dark:bg-slate-900" data-testid="contact-section">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and engineering leadership.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Let's Connect
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
              Whether you're looking for a software engineering leader, technical expertise in support systems, or want to collaborate on AI-powered solutions, I'd love to hear from you. I'm particularly interested in:
            </p>
            
            <ul className="space-y-3 mb-8">
              {personalInfo.interests.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center text-slate-600 dark:text-slate-300"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
            
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                const content = (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow duration-200"
                  >
                    <IconComponent className={`w-6 h-6 ${contact.color} mr-4`} />
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {contact.label}
                      </div>
                      <div className="font-medium text-slate-900 dark:text-white">
                        {contact.value}
                      </div>
                    </div>
                  </motion.div>
                );
                
                return contact.href ? (
                  <a 
                    key={index}
                    href={contact.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:scale-105 transition-transform duration-200"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-lg ${personalInfo.showContactMe ? "" : "form-disabled"}`}
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Send a Message
            </h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;