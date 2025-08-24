import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Database,
  Globe,
  Zap
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const offsetTop = element.offsetTop - navHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Frontend Development', icon: Code, color: 'bg-blue-500', shape: 'rounded-lg' },
    { name: 'UI/UX Design', icon: Palette, color: 'bg-purple-500', shape: 'rounded-full' },
    { name: 'Mobile Development', icon: Smartphone, color: 'bg-green-500', shape: 'rounded-xl' },
    { name: 'Backend Development', icon: Database, color: 'bg-red-500', shape: 'rounded-2xl' },
    { name: 'Web Technologies', icon: Globe, color: 'bg-indigo-500', shape: 'rounded-lg' },
    { name: 'Performance Optimization', icon: Zap, color: 'bg-yellow-500', shape: 'rounded-full' }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["JavaScript", "API Integration", "Chart.js"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              RISHABH
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 capitalize ${
                      activeSection === item
                        ? 'text-blue-400 border-b-2 border-blue-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-800 border-t border-gray-700"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block px-3 py-2 text-base font-medium w-full text-left capitalize ${
                      activeSection === item
                        ? 'text-blue-400 bg-gray-700'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Static background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-60 left-1/3 w-2 h-2 bg-red-400 rounded-full"></div>
          <div className="absolute top-80 right-1/3 w-3 h-3 bg-indigo-400 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                RISHABH AGRAWAL
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Creative Developer & Designer crafting exceptional digital experiences
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience creating 
              innovative web applications. I specialize in modern JavaScript frameworks, 
              responsive design, and user experience optimization. My goal is to build 
              digital solutions that not only look great but also provide exceptional functionality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Areas of Expertise
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I specialize in a wide range of technologies and methodologies to deliver comprehensive solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl">
                  <div className={`w-16 h-16 ${skill.color} ${skill.shape} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-white group-hover:text-blue-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="p-2 bg-gray-800/80 rounded-full hover:bg-gray-700 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.live}
                        className="p-2 bg-gray-800/80 rounded-full hover:bg-gray-700 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-xs font-medium border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can work together!
            </p>
            
            <div className="flex justify-center space-x-8 mb-12">
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="mailto:rishabh@example.com"
                className="flex items-center space-x-3 bg-gray-800 px-6 py-4 rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
              >
                <Mail size={24} className="text-blue-400" />
                <span className="text-white font-medium">Email</span>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://linkedin.com"
                className="flex items-center space-x-3 bg-gray-800 px-6 py-4 rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
              >
                <Linkedin size={24} className="text-blue-400" />
                <span className="text-white font-medium">LinkedIn</span>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://github.com"
                className="flex items-center space-x-3 bg-gray-800 px-6 py-4 rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
              >
                <Github size={24} className="text-blue-400" />
                <span className="text-white font-medium">GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Rishabh Agrawal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;