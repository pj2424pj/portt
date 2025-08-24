import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  ExternalLink,
  Calendar,
  GraduationCap,
  Briefcase,
  Award,
  User,
  Code,
  Palette,
  Monitor,
  Layers,
  Edit3,
  Play,
  Camera,
  Figma,
  Github,
  Star,
  Zap,
  Sparkles,
  Heart,
  Target,
  Lightbulb,
  Rocket,
  Coffee,
  Music,
  Gamepad2,
  Menu,
  X,
  Home,
  Briefcase as BriefcaseIcon,
  FolderOpen,
  MessageCircle,
  ChevronDown,
  Pin,
  Paperclip
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const paperClipRotate = useTransform(scrollYProgress, [0, 1], [12, 25]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: BriefcaseIcon },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <motion.div 
          className="absolute w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          animate={{
            background: [
              "linear-gradient(45deg, #1f2937, #374151, #1f2937)",
              "linear-gradient(90deg, #374151, #1f2937, #374151)",
              "linear-gradient(135deg, #1f2937, #374151, #1f2937)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Navigation Bar */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-gray-900 font-bold text-lg">R</span>
              </motion.div>
              <span className="text-white font-bold text-xl">Rishabh</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id 
                      ? 'bg-yellow-400 text-gray-900' 
                      : 'text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all ${
                      activeSection === item.id 
                        ? 'bg-yellow-400 text-gray-900' 
                        : 'text-white hover:bg-white/10'
                    }`}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <div className="pt-16 p-4 md:p-8 relative z-10">
        {/* Paper Container */}
        <motion.div 
          className="max-w-5xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Board Pins */}
          <motion.div 
            className="absolute -top-2 left-16 z-20"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 300 }}
          >
            <Pin className="w-8 h-8 text-red-500 transform rotate-45" />
          </motion.div>
          
          <motion.div 
            className="absolute -top-2 right-20 z-20"
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
          >
            <Pin className="w-8 h-8 text-blue-500 transform -rotate-45" />
          </motion.div>

          {/* Animated Paper Clip */}
          <motion.div 
            className="absolute -top-4 left-8 z-20"
            style={{ rotate: paperClipRotate }}
            whileHover={{ scale: 1.1, rotate: 20 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Paperclip className="w-16 h-16 text-gray-400" />
          </motion.div>

          {/* Header Section - Hero */}
          <motion.section 
            id="home"
            className="relative bg-white p-8 border-b-2 border-gray-100 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Decorative tape strips */}
            <motion.div 
              className="absolute top-0 left-1/4 w-20 h-8 bg-yellow-400 opacity-80 transform -rotate-12"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: -12 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
            />
            <motion.div 
              className="absolute top-0 right-1/3 w-16 h-6 bg-red-400 opacity-80 transform rotate-12"
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 12 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
            />

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Profile Photo with enhanced styling */}
              <motion.div 
                className="relative"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-48 h-64 bg-yellow-400 rounded-lg overflow-hidden shadow-lg relative transform rotate-2">
                  <img 
                    src="/cutu.jpg"
                    alt="Rishabh Agrawal"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Polaroid effect */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2">
                    <motion.p 
                      className="text-center text-gray-700 text-sm font-handwriting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      Creative Mind ✨
                    </motion.p>
                  </div>

                  {/* Decorative stickers */}
                  <motion.div 
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Heart className="w-3 h-3 text-white" />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-2 -left-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  >
                    <Zap className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                {/* Floating elements around photo */}
                <motion.div 
                  className="absolute -top-4 -left-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center"
                  animate={{ 
                    y: [-5, 5, -5],
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>

              {/* Personal Info with enhanced animations */}
              <motion.div className="flex-1" variants={itemVariants}>
                <motion.h1 
                  className="text-5xl font-bold text-gray-900 mb-2 relative"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.span
                    className="inline-block"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{
                      background: "linear-gradient(90deg, #1f2937, #fbbf24, #1f2937)",
                      backgroundSize: "200% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Rishabh Agrawal
                  </motion.span>
                  
                  {/* Animated underline */}
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-1 bg-yellow-400 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </motion.h1>

                {/* Animated tagline */}
                <motion.div 
                  className="mb-6"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.p className="text-lg text-gray-600 leading-relaxed">
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                      className="inline-block"
                    >
                      I break problems into smaller ones—
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                      className="inline-block"
                    >
                      and sometimes break production in the process
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 4 }}
                      className="inline-block"
                    >
                      (but I fix it faster!).
                    </motion.span>
                  </motion.p>
                </motion.div>

                {/* My Story Section */}
                <motion.div 
                  className="bg-yellow-50 p-4 rounded-lg mb-6 border-l-4 border-yellow-400"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      📖
                    </motion.div>
                    <span className="ml-2">My Story</span>
                  </h3>
                  <motion.p 
                    className="text-gray-700 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    Started as a curious kid who loved drawing and ended up creating digital magic. 
                    From sketching on paper to crafting pixel-perfect designs and smooth animations, 
                    my journey has been all about turning imagination into reality. ✨
                  </motion.p>
                </motion.div>

                {/* Info Grid with enhanced animations */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                  variants={containerVariants}
                >
                  <motion.div className="space-y-2" variants={itemVariants}>
                    <motion.div 
                      className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 transition-colors"
                      whileHover={{ x: 5, backgroundColor: "#f9fafb" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Calendar size={16} className="text-gray-600" />
                      <span className="text-gray-600">26th September 2004</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 transition-colors"
                      whileHover={{ x: 5, backgroundColor: "#f9fafb" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Mail size={16} className="text-gray-600" />
                      <span className="text-gray-600">kumarvrishabh700@gmail.com</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 transition-colors"
                      whileHover={{ x: 5, backgroundColor: "#f9fafb" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ExternalLink size={16} className="text-gray-600" />
                      <span className="text-gray-600">google.com</span>
                    </motion.div>
                  </motion.div>
                  <motion.div className="space-y-2" variants={itemVariants}>
                    <motion.div 
                      className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 transition-colors"
                      whileHover={{ x: 5, backgroundColor: "#f9fafb" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <MapPin size={16} className="text-gray-600" />
                      <span className="text-gray-600">LOC: Ghaziabad, India</span>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* QR Code and Contact with enhanced styling */}
                <motion.div 
                  className="flex items-center justify-between"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="relative"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-20 h-20 bg-gray-200 rounded border-2 border-gray-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-black rounded grid grid-cols-4 gap-px p-1">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <motion.div 
                            key={i} 
                            className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-black'} rounded-sm`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.05 + 1.5 }}
                          />
                        ))}
                      </div>
                    </div>
                    {/* QR scan animation */}
                    <motion.div 
                      className="absolute inset-0 border-2 border-yellow-400 rounded opacity-0"
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                    />
                  </motion.div>
                  
                  <div className="text-right">
                    <motion.div 
                      className="text-red-500 italic mb-2 relative"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.span
                        animate={{ 
                          textShadow: [
                            "0 0 0px #ef4444",
                            "0 0 10px #ef4444",
                            "0 0 0px #ef4444"
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        Please don't hesitate to<br />
                        reach me if this resume<br />
                        doesn't provide enough<br />
                        clarification
                      </motion.span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2 mb-1"
                      whileHover={{ x: -5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Phone size={16} className="text-red-500" />
                      <span className="text-gray-700">+91 8409066141</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2 mb-1"
                      whileHover={{ x: -5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Linkedin size={16} className="text-blue-600" />
                      <span className="text-gray-700">www.linkedin.com</span>
                    </motion.div>
                    <motion.div
                      className="text-gray-700"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      kumarvrishabh700@gmail.com
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Work Experience */}
              <motion.section
                id="experience"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <motion.h2 
                    className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded transform -rotate-1"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Work Experiences
                  </motion.h2>
                  <motion.div 
                    className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                
                <motion.div 
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    {
                      period: "Sep 2023 - Present : 2 yr",
                      title: "Motion Graphic & UI Designer",
                      company: "Think India NITP",
                      type: "Full-time",
                      location: "Patna, India"
                    },
                    {
                      period: "Jan 2024 - Present : 2yr",
                      title: "Vice President ISIE",
                      company: "ISIE",
                      type: "Full-time",
                      location: "Patna, India"
                    },
                    {
                      period: "Jan 2022 - May 2022 : 5 mos",
                      title: "Motion Graphic & UI Designer",
                      company: "Everything Design",
                      type: "Internship",
                      location: "Bengaluru, Karnataka, India"
                    }
                  ].map((job, index) => (
                    <motion.div 
                      key={index}
                      className="border-l-4 border-yellow-400 pl-6 relative bg-white p-4 rounded-r-lg shadow-sm"
                      variants={itemVariants}
                      whileHover={{ 
                        x: 5, 
                        backgroundColor: "#fefefe",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="absolute -left-2 top-4 w-4 h-4 bg-yellow-400 rounded-full"
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <div className="text-sm text-gray-600 mb-1">{job.period}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <div className="text-gray-700 mb-1">
                        {job.company} • <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">{job.type}</span>
                      </div>
                      <div className="text-sm text-gray-600">{job.location}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Education */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <motion.h2 
                    className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded transform rotate-1"
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Education
                  </motion.h2>
                  <motion.div 
                    className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                
                <motion.div 
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    {
                      period: "2019 - 2022",
                      institution: "Vellore Institute of Technology",
                      degree: "Bsc Multimedia & animation",
                      grade: "CGPA 8.57",
                      location: "Vellore, Tamilnadu, India"
                    },
                    {
                      period: "2017 - 2018",
                      institution: "Sri Shanmuka Hr. Sec. School",
                      degree: "Sr.Secondary School of Education",
                      grade: "Pct 75 %",
                      location: "Mannargudi, Tamilnadu, India"
                    }
                  ].map((edu, index) => (
                    <motion.div 
                      key={index}
                      className="border-l-4 border-yellow-400 pl-6 relative bg-white p-4 rounded-r-lg shadow-sm"
                      variants={itemVariants}
                      whileHover={{ 
                        x: 5, 
                        backgroundColor: "#fefefe",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="absolute -left-2 top-4 w-4 h-4 bg-yellow-400 rounded-full"
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <div className="text-sm text-gray-600 mb-1">{edu.period}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.institution}</h3>
                      <div className="text-gray-700 mb-1">
                        {edu.degree} • <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">{edu.grade}</span>
                      </div>
                      <div className="text-sm text-gray-600">{edu.location}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Enhanced Area of Expertise */}
              <motion.section
                id="skills"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <motion.h2 
                    className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded transform -rotate-1"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Area of Expertise
                  </motion.h2>
                  <motion.div 
                    className="absolute -top-2 -left-2 w-5 h-5 bg-red-400 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                
                <div className="relative h-96 bg-gray-50 rounded-lg p-4 overflow-hidden">
                  {/* Animated skill shapes that come together */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {/* UI Design - Triangle */}
                    <motion.div 
                      className="absolute w-0 h-0 border-l-[40px] border-r-[40px] border-b-[60px] border-l-transparent border-r-transparent border-b-red-500 flex items-end justify-center"
                      style={{ left: '20%', top: '30%' }}
                      initial={{ scale: 0, rotate: -180, x: -200, y: -200 }}
                      whileInView={{ 
                        scale: 1, 
                        rotate: 0, 
                        x: 0, 
                        y: 0,
                        transition: { delay: 0.2, type: "spring", stiffness: 200 }
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute bottom-2 text-white text-xs font-bold text-center w-full">
                        UI<br/>DESIGN
                      </div>
                    </motion.div>

                    {/* Motion Graphics - Circle */}
                    <motion.div 
                      className="absolute w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center"
                      style={{ right: '15%', bottom: '25%' }}
                      initial={{ scale: 0, rotate: 180, x: 200, y: 200 }}
                      whileInView={{ 
                        scale: 1, 
                        rotate: 0, 
                        x: 0, 
                        y: 0,
                        transition: { delay: 0.4, type: "spring", stiffness: 200 }
                      }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-white text-xs font-bold text-center">
                        MOTION<br/>GRAPHICS
                      </div>
                    </motion.div>

                    {/* Editorial Design - Rectangle */}
                    <motion.div 
                      className="absolute w-20 h-12 bg-cyan-400 rounded flex items-center justify-center transform rotate-6"
                      style={{ left: '25%', bottom: '20%' }}
                      initial={{ scale: 0, rotate: -90, x: -150, y: 150 }}
                      whileInView={{ 
                        scale: 1, 
                        rotate: 6, 
                        x: 0, 
                        y: 0,
                        transition: { delay: 0.6, type: "spring", stiffness: 200 }
                      }}
                      whileHover={{ scale: 1.1, rotate: 12 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-gray-900 text-xs font-bold text-center">
                        EDITORIAL<br/>DESIGN
                      </div>
                    </motion.div>

                    {/* Full Stack - Hexagon */}
                    <motion.div 
                      className="absolute w-20 h-20 bg-orange-500 flex items-center justify-center transform rotate-12"
                      style={{ 
                        right: '25%', 
                        top: '15%',
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                      }}
                      initial={{ scale: 0, rotate: 90, x: 150, y: -150 }}
                      whileInView={{ 
                        scale: 1, 
                        rotate: 12, 
                        x: 0, 
                        y: 0,
                        transition: { delay: 0.8, type: "spring", stiffness: 200 }
                      }}
                      whileHover={{ scale: 1.1, rotate: 18 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-white text-xs font-bold text-center">
                        FULL<br/>STACK
                      </div>
                    </motion.div>

                    {/* MERN - Diamond */}
                    <motion.div 
                      className="absolute w-16 h-16 bg-purple-500 transform rotate-45 flex items-center justify-center"
                      style={{ left: '45%', top: '25%' }}
                      initial={{ scale: 0, rotate: 225, x: 0, y: -100 }}
                      whileInView={{ 
                        scale: 1, 
                        rotate: 45, 
                        x: 0, 
                        y: 0,
                        transition: { delay: 1.0, type: "spring", stiffness: 200 }
                      }}
                      whileHover={{ scale: 1.1, rotate: 50 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-white text-xs font-bold transform -rotate-45">
                        MERN
                      </div>
                    </motion.div>

                    {/* 3D Design - Pentagon */}
                    <motion.div 
                      className="absolute w-18 h-18 bg-green-500 flex items-center justify-center"
                      style={{ 
                        right: '35%', 
                        bottom: '35%',
                        clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
                      }}
                      initial={{ scale: 0, rotate: -90, x: 100, y: 100 }}
                      whileInView={{ 
                        scale: 1, 
                        rotate: 0, 
                        x: 0, 
                        y: 0,
                        transition: { delay: 1.2, type: "spring", stiffness: 200 }
                      }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-white text-xs font-bold text-center p-2">
                        3D<br/>DESIGN
                      </div>
                    </motion.div>

                    {/* UX - Small Circle */}
                    <motion.div 
                      className="absolute w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center"
                      style={{ left: '15%', top: '50%' }}
                      initial={{ scale: 0, x: -100, y: 0 }}
                      whileInView={{ 
                        scale: 1, 
                        x: 0, 
                        y: 0,
                        transition: { delay: 1.4, type: "spring", stiffness: 200 }
                      }}
                      whileHover={{ scale: 1.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-white text-xs font-bold">UX</div>
                    </motion.div>

                    {/* Connecting lines animation */}
                    <motion.svg 
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.3 }}
                      transition={{ delay: 1.6, duration: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.path
                        d="M 100 150 Q 200 100 300 150"
                        stroke="#fbbf24"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ delay: 1.8, duration: 2 }}
                        viewport={{ once: true }}
                      />
                      <motion.path
                        d="M 150 200 Q 250 150 350 200"
                        stroke="#fbbf24"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ delay: 2.0, duration: 2 }}
                        viewport={{ once: true }}
                      />
                    </motion.svg>

                    {/* Floating particles */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          y: [-5, 5, -5],
                          x: [-3, 3, -3],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2 + 2,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.section>

              {/* Enhanced Software Skills */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <motion.h2 
                    className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded transform rotate-1"
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Software Skills
                  </motion.h2>
                  <motion.div 
                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                </div>
                
                <motion.div 
                  className="grid grid-cols-3 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { name: "Ae", full: "After effects", color: "bg-blue-900" },
                    { name: "Pr", full: "Premiere pro", color: "bg-purple-900" },
                    { name: "Ps", full: "Photoshop", color: "bg-blue-600" },
                    { name: "Ai", full: "Illustrator", color: "bg-orange-600" },
                    { name: "Xd", full: "Adobe xd", color: "bg-pink-600" },
                    { name: "Figma", full: "Figma", color: "bg-gray-800", icon: true },
                    { name: "Dn", full: "Dimension", color: "bg-green-600" },
                    { name: "M", full: "Maya", color: "bg-teal-600" },
                    { name: "React", full: "React", color: "bg-cyan-500" }
                  ].map((skill, index) => (
                    <motion.div 
                      key={index}
                      className={`${skill.color} text-white p-4 rounded-lg text-center shadow-lg cursor-pointer relative overflow-hidden`}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: [0, -2, 2, 0],
                        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                        zIndex: 10
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Animated background */}
                      <motion.div 
                        className="absolute inset-0 bg-white opacity-0"
                        whileHover={{ opacity: 0.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {skill.icon ? (
                        <>
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            <Figma size={24} className="mx-auto mb-1" />
                          </motion.div>
                          <div className="text-xs relative z-10">{skill.full}</div>
                        </>
                      ) : (
                        <>
                          <motion.div 
                            className="text-2xl font-bold mb-1 relative z-10"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {skill.name}
                          </motion.div>
                          <div className="text-xs relative z-10">{skill.full}</div>
                        </>
                      )}
                      
                      {/* Skill level indicator */}
                      <motion.div 
                        className="absolute bottom-1 left-1 right-1 h-1 bg-white/30 rounded"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: Math.random() * 0.5 + 0.5 }}
                        transition={{ delay: index * 0.1, duration: 1 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            </div>
          </div>

          {/* Enhanced Projects Section */}
          <motion.section 
            id="projects" 
            className="bg-gray-50 p-8 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Animated background pattern */}
            <motion.div 
              className="absolute inset-0 opacity-5"
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: "radial-gradient(circle, #1f2937 2px, transparent 2px)",
                backgroundSize: "50px 50px"
              }}
            />

            <div className="relative z-10">
              <div className="relative mb-8">
                <motion.h2 
                  className="text-4xl font-bold text-gray-900 bg-yellow-400 inline-block px-6 py-3 rounded transform -rotate-1"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Featured Projects
                </motion.h2>
                <motion.div 
                  className="absolute -top-3 -right-3 w-6 h-6 bg-red-400 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Brand Identity Design",
                    description: "Complete brand identity package including logo, business cards, and marketing materials.",
                    category: "Branding",
                    color: "bg-gradient-to-br from-purple-500 to-purple-700",
                    github: "https://github.com/aravindh/brand-identity",
                    tech: ["Illustrator", "Photoshop", "InDesign"]
                  },
                  {
                    title: "Motion Graphics Reel",
                    description: "Animated promotional video showcasing product features with smooth transitions.",
                    category: "Animation",
                    color: "bg-gradient-to-br from-blue-500 to-blue-700",
                    github: "https://github.com/aravindh/motion-reel",
                    tech: ["After Effects", "Premiere Pro", "Cinema 4D"]
                  },
                  {
                    title: "UI/UX Mobile App",
                    description: "Modern mobile application design with intuitive user experience and clean interface.",
                    category: "UI Design",
                    color: "bg-gradient-to-br from-green-500 to-green-700",
                    github: "https://github.com/aravindh/mobile-ui",
                    tech: ["Figma", "Principle", "Sketch"]
                  },
                  {
                    title: "Editorial Layout",
                    description: "Magazine layout design with creative typography and visual hierarchy.",
                    category: "Print Design",
                    color: "bg-gradient-to-br from-red-500 to-red-700",
                    github: "https://github.com/aravindh/editorial-design",
                    tech: ["InDesign", "Photoshop", "Illustrator"]
                  },
                  {
                    title: "Social Media Campaign",
                    description: "Comprehensive social media visual campaign with consistent branding.",
                    category: "Digital Marketing",
                    color: "bg-gradient-to-br from-orange-500 to-orange-700",
                    github: "https://github.com/aravindh/social-campaign",
                    tech: ["Photoshop", "After Effects", "Canva"]
                  },
                  {
                    title: "3D Product Visualization",
                    description: "Photorealistic 3D renders for product showcase and marketing materials.",
                    category: "3D Design",
                    color: "bg-gradient-to-br from-cyan-500 to-cyan-700",
                    github: "https://github.com/aravindh/3d-visualization",
                    tech: ["Maya", "Blender", "KeyShot"]
                  }
                ].map((project, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden group relative"
                    variants={itemVariants}
                    whileHover={{ 
                      y: -15,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    {/* Project image/header */}
                    <motion.div 
                      className={`h-40 ${project.color} flex items-center justify-center relative overflow-hidden`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Monitor size={48} className="text-white z-10" />
                      </motion.div>
                      
                      {/* Animated background elements */}
                      <motion.div 
                        className="absolute inset-0 opacity-20"
                        animate={{ 
                          backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        style={{
                          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                          backgroundSize: "30px 30px"
                        }}
                      />
                      
                      {/* Category badge */}
                      <motion.div 
                        className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-white text-xs font-medium">{project.category}</span>
                      </motion.div>
                    </motion.div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, backgroundColor: "#fbbf24", color: "#1f2937" }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors group"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Github size={16} />
                        <span className="text-sm font-medium">View Project</span>
                        <motion.div
                          className="w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"
                        />
                      </motion.a>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Enhanced Contact Section */}
          <motion.section 
            id="contact" 
            className="bg-yellow-400 p-8 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Animated background elements */}
            <motion.div 
              className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-10 right-10 w-16 h-16 bg-white opacity-10 rounded-full"
              animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/4 w-12 h-12 bg-white opacity-5 rounded-full"
              animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            
            <div className="max-w-4xl mx-auto relative z-10">
              <motion.h2 
                className="text-4xl font-bold text-gray-900 text-center mb-8"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.span
                  animate={{ 
                    textShadow: [
                      "0 0 0px #1f2937",
                      "0 0 20px #1f2937",
                      "0 0 0px #1f2937"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Let's Work Together
                </motion.span>
              </motion.h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Enhanced Contact Form */}
                <motion.div 
                  className="bg-white rounded-xl p-6 shadow-xl relative overflow-hidden"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Form background animation */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-white opacity-50"
                    animate={{ 
                      background: [
                        "linear-gradient(45deg, #fefce8, #ffffff)",
                        "linear-gradient(90deg, #ffffff, #fefce8)",
                        "linear-gradient(135deg, #fefce8, #ffffff)"
                      ]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="mr-2"
                      >
                        💌
                      </motion.div>
                      Send Message
                    </h3>
                    <form className="space-y-4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <input 
                          type="text" 
                          placeholder="Your Name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                        />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <input 
                          type="email" 
                          placeholder="Your Email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                        />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <textarea 
                          placeholder="Your Message"
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all resize-none"
                        ></textarea>
                      </motion.div>
                      <motion.button 
                        className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors relative overflow-hidden"
                        whileHover={{ 
                          backgroundColor: "#1f2937",
                          scale: 1.02,
                          boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0"
                          whileHover={{ opacity: 0.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10">Send Message</span>
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
                
                {/* Enhanced Contact Info */}
                <motion.div 
                  className="space-y-6"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-white rounded-xl p-6 shadow-xl relative overflow-hidden"
                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50"
                      animate={{ 
                        background: [
                          "linear-gradient(45deg, #eff6ff, #ffffff)",
                          "linear-gradient(90deg, #ffffff, #eff6ff)",
                          "linear-gradient(135deg, #eff6ff, #ffffff)"
                        ]
                      }}
                      transition={{ duration: 10, repeat: Infinity }}
                    />
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <motion.div
                          animate={{ rotate: [0, 15, -15, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="mr-2"
                        >
                          📞
                        </motion.div>
                        Contact Information
                      </h3>
                      <div className="space-y-4">
                        {[
                          { icon: Phone, text: "+91 8409066141", color: "text-green-600" },
                          { icon: Mail, text: "kumarvrishabh700@gmail.com", color: "text-blue-600" },
                          { icon: MapPin, text: "Ghaziabad, India", color: "text-red-600" },
                          { icon: ExternalLink, text: "google.com", color: "text-purple-600" }
                        ].map((item, index) => (
                          <motion.div 
                            key={index}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            whileHover={{ x: 5, backgroundColor: "#f9fafb" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <item.icon className={item.color} size={20} />
                            </motion.div>
                            <span className="text-gray-700">{item.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white rounded-xl p-6 shadow-xl relative overflow-hidden"
                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-50"
                      animate={{ 
                        background: [
                          "linear-gradient(45deg, #f0fdf4, #ffffff)",
                          "linear-gradient(90deg, #ffffff, #f0fdf4)",
                          "linear-gradient(135deg, #f0fdf4, #ffffff)"
                        ]
                      }}
                      transition={{ duration: 12, repeat: Infinity }}
                    />
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="mr-2"
                        >
                          🚀
                        </motion.div>
                        Available For
                      </h3>
                      <div className="space-y-2">
                        {[
                          "Freelance Projects",
                          "Full-time Opportunities", 
                          "Collaborations"
                        ].map((item, index) => (
                          <motion.div 
                            key={index}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div 
                              className="w-3 h-3 bg-green-500 rounded-full"
                              animate={{ 
                                scale: [1, 1.3, 1],
                                boxShadow: [
                                  "0 0 0 0 rgba(34, 197, 94, 0.7)",
                                  "0 0 0 10px rgba(34, 197, 94, 0)",
                                  "0 0 0 0 rgba(34, 197, 94, 0)"
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                            />
                            <span className="text-gray-700 font-medium">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-yellow-400 text-gray-900 rounded-full shadow-lg z-50 flex items-center justify-center"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ChevronDown className="transform rotate-180" size={20} />
      </motion.button>
    </div>
  );
}

export default App;