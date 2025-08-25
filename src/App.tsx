import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  Plus,
  ArrowUpRight,
  Paperclip,
  Pin,
  Bookmark,
  Tag,
  Hash,
  AtSign,
  Percent,
  DollarSign,
  Ampersand,
  Database, // Added for MongoDB
  Gem,      // Added for Solidity
  Cloud,    // Added for AWS
  Box       // Added for Docker
} from 'lucide-react';

// NEW: Reusable component for wavy text effect on hover
const WavyText = ({ text, className, el: Wrapper = 'h3' }: { text: string, className?: string, el?: keyof JSX.IntrinsicElements }) => {
  const letters = Array.from(text);
  const container = {
    hover: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const child = {
    hover: {
      y: [0, -5, 0],
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };
  return (
    <Wrapper className={className}>
        <motion.div
            style={{ display: 'flex', cursor: 'pointer' }}
            variants={container}
            whileHover="hover"
        >
            {letters.map((letter, index) => (
                <motion.span key={index} variants={child}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    </Wrapper>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const paperClipRotate = useTransform(scrollYProgress, [0, 1], [12, 25]);

  // Define sections for navigation and scroll tracking
  const sections = ['home', 'experience', 'education', 'skills', 'projects', 'certificates', 'contact'];

  // Array for software skills with icons
  const softwareSkills = [
    { icon: Layers, full: "React", color: "bg-sky-500", level: "95%" },
    { icon: Zap, full: "Next.js", color: "bg-gray-800", level: "90%" },
    { icon: Code, full: "Node.js", color: "bg-green-600", level: "85%" },
    { icon: Database, full: "MongoDB", color: "bg-green-800", level: "80%" },
    { icon: Gem, full: "Solidity", color: "bg-gray-600", level: "85%" },
    { icon: Cloud, full: "AWS", color: "bg-orange-500", level: "75%" },
    { icon: Box, full: "Docker", color: "bg-blue-600", level: "80%" },
      { icon: FileText, full: "Java", color: "bg-red-600", level: "88%" },
      { icon: Code, full: "Python", color: "bg-yellow-600", level: "82%" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
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
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // UPDATED: Variants for the new slide-in effect
  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 } }
  };


  const projectItemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const spinningVariants = {
    animate: { rotate: 360, transition: { duration: 5, repeat: Infinity, ease: "linear" } }
  };
  
  // NEW: Variants for staggered text animation
  const textContainerVariant = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
  };

  const textChildVariant = {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { type: 'spring', damping: 12, stiffness: 100 } },
  };

  const SectionHeader = ({ title, children }: { title: string, children?: React.ReactNode }) => (
    <div className="relative mb-6">
      <motion.h2
        className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded"
        whileHover={{ scale: 1.05, rotate: -1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="absolute -top-3 -right-3 text-gray-900"
        variants={spinningVariants}
        animate="animate"
      >
        <Plus size={16} />
      </motion.div>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      {/* Enhanced Dynamic Background with Collage Elements */}
      {/* Floating Board Pins */}
      <motion.div 
        className="fixed top-16 left-8 z-5" 
        variants={floatingVariants} 
        animate="animate"
        initial={{ rotate: -15 }}
      >
        <div className="w-6 h-6 bg-red-500 rounded-full shadow-lg relative">
          <div className="absolute inset-1 bg-red-600 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-300 rounded-full"></div>
        </div>
      </motion.div>
      
      <motion.div 
        className="fixed top-32 right-12 z-5" 
        variants={floatingVariants} 
        animate="animate"
        initial={{ rotate: 25 }}
        transition={{ delay: 1 }}
      >
        <div className="w-5 h-5 bg-blue-500 rounded-full shadow-lg relative">
          <div className="absolute inset-1 bg-blue-600 rounded-full"></div>
        </div>
      </motion.div>
      
      <motion.div 
        className="fixed bottom-40 left-16 z-5" 
        variants={floatingVariants} 
        animate="animate"
        initial={{ rotate: -30 }}
        transition={{ delay: 2 }}
      >
        <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg relative">
          <div className="absolute inset-1 bg-green-600 rounded-full"></div>
        </div>
      </motion.div>

      {/* Floating Paperclips */}
      <motion.div 
        className="fixed top-24 left-1/4 text-gray-400 opacity-20 z-5" 
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Paperclip size={24} />
      </motion.div>
      
      <motion.div 
        className="fixed bottom-32 right-1/4 text-yellow-400 opacity-15 z-5" 
        animate={{ rotate: [0, -15, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Paperclip size={20} />
      </motion.div>

      {/* Floating Stickers/Tags */}
      <motion.div 
        className="fixed top-1/3 right-8 bg-yellow-400 text-gray-900 px-2 py-1 rounded text-xs font-bold opacity-25 z-5 rotate-12" 
        variants={floatingVariants} 
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        CREATIVE
      </motion.div>
      
      <motion.div 
        className="fixed bottom-1/3 left-8 bg-red-400 text-white px-2 py-1 rounded text-xs font-bold opacity-20 z-5 -rotate-12" 
        variants={floatingVariants} 
        animate="animate"
        transition={{ delay: 1.5 }}
      >
        DESIGNER
      </motion.div>
      
      <motion.div 
        className="fixed top-2/3 left-1/3 bg-blue-400 text-white px-2 py-1 rounded text-xs font-bold opacity-15 z-5 rotate-6" 
        variants={floatingVariants} 
        animate="animate"
        transition={{ delay: 2.5 }}
      >
        UI/UX
      </motion.div>

      {/* Floating Symbols */}
      <motion.div 
        className="fixed top-48 left-12 text-yellow-400 opacity-10 z-5" 
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <Hash size={16} />
      </motion.div>
      
      <motion.div 
        className="fixed bottom-48 right-16 text-green-400 opacity-12 z-5" 
        animate={{ rotate: -360, scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <AtSign size={14} />
      </motion.div>
      
      <motion.div 
        className="fixed top-3/4 right-1/3 text-purple-400 opacity-8 z-5" 
        animate={{ rotate: 360, y: [-5, 5, -5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Percent size={12} />
      </motion.div>

      {/* Newspaper Clipping Style Elements */}
      <motion.div 
        className="fixed top-20 right-20 w-16 h-12 bg-gray-100 opacity-15 z-5 transform rotate-12 shadow-sm" 
        variants={floatingVariants} 
        animate="animate"
        style={{ 
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 3px)',
          clipPath: 'polygon(0 0, 95% 0, 100% 85%, 5% 100%)'
        }}
      />
      
      <motion.div 
        className="fixed bottom-24 left-24 w-20 h-8 bg-yellow-100 opacity-20 z-5 transform -rotate-6 shadow-sm" 
        variants={floatingVariants} 
        animate="animate"
        transition={{ delay: 1 }}
        style={{ 
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)',
          clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)'
        }}
      />

      {/* Barcode Style Elements */}
      <motion.div 
        className="fixed top-40 left-4 w-12 h-6 opacity-10 z-5 transform rotate-45" 
        variants={floatingVariants} 
        animate="animate"
        style={{ 
          backgroundImage: 'repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 3px)',
        }}
      />
      
      <motion.div 
        className="fixed bottom-60 right-8 w-8 h-4 opacity-8 z-5 transform -rotate-30" 
        variants={floatingVariants} 
        animate="animate"
        transition={{ delay: 2 }}
        style={{ 
          backgroundImage: 'repeating-linear-gradient(90deg, #333 0px, #333 1px, transparent 1px, transparent 2px)',
        }}
      />

      {/* Geometric Shapes with Enhanced Styling */}
      <motion.div 
        className="fixed top-32 right-1/4 w-8 h-8 border-2 border-yellow-400 opacity-15 z-5" 
        animate={{ rotate: 360 }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      />
      
      <motion.div 
        className="fixed bottom-32 left-1/3 w-6 h-6 border-2 border-blue-400 opacity-12 z-5" 
        animate={{ rotate: -360 }} 
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div 
        className="fixed top-1/2 left-8 w-4 h-4 bg-red-400 opacity-10 z-5" 
        animate={{ rotate: 45, scale: [1, 1.3, 1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
      />

      {/* Floating Circles with Different Sizes */}
      <motion.div className="fixed top-20 left-10 w-12 h-12 bg-yellow-400 rounded-full opacity-12 z-0" variants={floatingVariants} animate="animate" />
      <motion.div className="fixed top-40 right-20 w-8 h-8 bg-blue-500 rounded-full opacity-10 z-0" variants={floatingVariants} animate="animate" transition={{ delay: 1 }} />
      <motion.div className="fixed bottom-40 left-20 w-16 h-16 bg-green-400 rounded-full opacity-8 z-0" variants={floatingVariants} animate="animate" transition={{ delay: 2 }} />
      <motion.div className="fixed top-60 left-1/2 w-6 h-6 bg-red-400 rounded-full opacity-8 z-0" variants={floatingVariants} animate="animate" transition={{ delay: 0.5 }} />
      <motion.div className="fixed bottom-60 right-1/3 w-10 h-10 bg-purple-400 rounded-full opacity-10 z-0" variants={floatingVariants} animate="animate" transition={{ delay: 1.5 }} />
      <motion.div className="fixed top-1/3 left-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-6 z-0" variants={floatingVariants} animate="animate" transition={{ delay: 2.5 }} />

      {/* Top Navigation Bar */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-yellow-400 font-bold text-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              RA
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {sections.map(section => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors capitalize ${
                    activeSection === section ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>
            <motion.div 
              className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <User size={16} className="text-gray-900" />
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <motion.nav className="fixed top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-50 bg-gray-800 bg-opacity-50 backdrop-blur-sm p-2 rounded-full hidden lg:block" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}>
        <ul className="space-y-4">
          {sections.map(section => (
            <li key={section} className="relative flex justify-center items-center">
              <button onClick={() => scrollToSection(section)} className="w-3 h-3 flex items-center justify-center rounded-full transition-colors group relative focus:outline-none">
                {activeSection === section && (<motion.div layoutId="activePill" className="absolute inset-0 bg-yellow-400 rounded-full" style={{ originY: "0" }} transition={{ type: "spring", stiffness: 500, damping: 30 }} />)}
                <span className={`w-3 h-3 rounded-full transition-colors ${activeSection === section ? 'bg-gray-900' : 'bg-white group-hover:bg-yellow-300'}`}></span>
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* UPDATED: Simplified main container animation to a simple fade-in */}
      <motion.div className="max-w-5xl mx-auto rounded-lg shadow-2xl overflow-hidden relative z-10 mt-20" style={{ backgroundImage: 'url(/img2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
        <motion.div className="absolute -top-4 left-8 z-20" style={{ rotate: paperClipRotate }} whileHover={{ scale: 1.1, rotate: 20 }} transition={{ type: "spring", stiffness: 300 }}>
          <div className="w-16 h-20 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-full rounded-b-sm shadow-lg">
            <div className="w-12 h-16 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-full rounded-b-sm mx-auto mt-1"></div>
            <div className="w-8 h-12 bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-full rounded-b-sm mx-auto -mt-14"></div>
          </div>
        </motion.div>
        
        {/* Additional Decorative Elements on Main Container */}
        <motion.div 
          className="absolute -top-2 right-12 z-20" 
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-4 h-4 bg-red-500 rounded-full shadow-md relative">
            <div className="absolute inset-1 bg-red-600 rounded-full"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute top-8 -right-3 z-20 bg-yellow-400 text-gray-900 px-2 py-1 rounded text-xs font-bold shadow-sm" 
          style={{ transform: 'rotate(15deg)' }}
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          NEW!
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-3 left-16 z-20" 
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Paperclip size={20} className="text-gray-600 opacity-60" />
        </motion.div>

        <motion.div id="home" className="relative bg-white/70 backdrop-blur-sm p-8 border-b-2 border-gray-100/50" variants={containerVariants} initial="hidden" animate="visible">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div variants={slideInFromLeft} className="space-y-6">
              <div className="bg-yellow-100 p-6 rounded-lg shadow-lg relative overflow-hidden">
                <motion.div className="absolute top-2 left-2 w-3 h-3 bg-blue-500 rounded-full" variants={floatingVariants} animate="animate" />
                <motion.div className="absolute top-4 right-4 text-yellow-600" variants={spinningVariants} animate="animate">
                  <Hash size={16} />
                </motion.div>
                <WavyText text="My Story" className="text-2xl font-bold text-gray-900 mb-4" />
                <motion.p className="text-gray-700 leading-relaxed" variants={textContainerVariant} initial="hidden" animate="visible">
                  {Array.from("My story isn't just about learning to code — it's about learning to create. From breaking down complex problems to building seamless experiences, I thrive at the sweet spot between logic and creativity. Every project I take on is a step toward shaping a smarter, more connected digital world.").map((char, index) => (
                    <motion.span key={index} variants={textChildVariant}>{char}</motion.span>
                  ))}
                </motion.p>
                <motion.div className="absolute bottom-2 right-2 text-red-500" whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Heart size={20} fill="currentColor" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div variants={slideInFromRight} className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg relative overflow-hidden">
                <motion.div className="absolute top-2 right-2 text-blue-600" variants={spinningVariants} animate="animate">
                  <Target size={16} />
                </motion.div>
                <WavyText text="Core Strengths" className="text-2xl font-bold text-gray-900 mb-4" />
                <div className="space-y-4">
                  <motion.div className="flex items-start space-x-3" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Lightbulb size={14} className="text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Full-Stack Development</h4>
                      <p className="text-gray-600 text-sm">Building scalable, secure, and high-performance web apps.</p>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-start space-x-3" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Rocket size={14} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Blockchain & Cloud</h4>
                      <p className="text-gray-600 text-sm">Hands-on with Solidity, Ethereum, AWS, and CI/CD pipelines.</p>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-start space-x-3" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Sparkles size={14} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Innovation & Problem-Solving</h4>
                      <p className="text-gray-600 text-sm">Transforming complex problems into simple, impactful solutions.</p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Download CV Button */}
                <motion.div className="mt-6 pt-4 border-t border-gray-200">
                  <motion.button
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-lg flex items-center justify-center space-x-2 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      // Create a temporary link to download CV
                      const link = document.createElement('a');
                      link.href = '/cv.pdf'; // You'll need to add your CV file to the public folder
                      link.download = 'Rishabh_Agrawal_CV.pdf';
                      link.click();
                    }}
                  >
                    <Download size={20} />
                    <span>Download CV</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
            {/* Mobile: Name comes first, Desktop: Photo first */}
            <div className="lg:hidden order-1">
              {/* Name slides in first on mobile */}
              <motion.h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex overflow-hidden" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
                  {"RISHABH AGRAWAL".split("").map((char, index) => (
                      <motion.span key={index} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}>
                          {char === " " ? "\u00A0" : char}
                      </motion.span>
                  ))}
              </motion.h1>
              {/* Bio slides in from right on mobile */}
              <motion.p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed flex flex-wrap overflow-hidden" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}>
                  {"I break problems into smaller ones—and sometimes break production in the process (but I fix it faster!).".split(" ").map((word, index) => (
                      <span key={index} className="flex mr-1.5">
                          {word.split("").map((char, charIndex) => (
                               <motion.span key={charIndex} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 1.2 + index * 0.1 + charIndex * 0.02 }}>
                                  {char}
                              </motion.span>
                          ))}
                      </span>
                  ))}
              </motion.p>
            </div>

            {/* Photo section with enhanced size and animations */}
            <motion.div className="w-full md:w-64 lg:w-72 flex-shrink-0 order-2 lg:order-1" initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}>
              <motion.div className="w-full md:w-64 lg:w-72 h-80 md:h-80 lg:h-96 bg-yellow-400 rounded-lg overflow-hidden shadow-lg relative group mx-auto" initial={{ scale: 0.8, rotate: -5 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}>
                <img src="/cutu.jpg" alt="Rishabh Agrawal" className="w-full h-full object-cover" />
                {/* Enhanced Photo Decorations */}
                <motion.div className="absolute -top-2 -left-2 w-10 h-5 bg-yellow-300/50 backdrop-blur-sm -rotate-45" initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: -45 }} transition={{ delay: 0.8, type: 'spring' }} />
                <motion.div className="absolute -bottom-2 -right-2 w-10 h-5 bg-yellow-300/50 backdrop-blur-sm -rotate-45" initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: -45 }} transition={{ delay: 0.9, type: 'spring' }} />
                
                {/* Board Pin on Photo */}
                <motion.div 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10" 
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-5 h-5 bg-red-500 rounded-full shadow-lg relative">
                    <div className="absolute inset-1 bg-red-600 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-300 rounded-full"></div>
                  </div>
                </motion.div>
                
                {/* Sticker on Photo */}
                <motion.div 
                  className="absolute top-2 -right-2 bg-green-400 text-white px-1.5 py-0.5 rounded text-xs font-bold shadow-sm z-10" 
                  style={{ transform: 'rotate(15deg)' }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  ★
                </motion.div>
                
                {/* Enhanced photo decorations */}
                <motion.div className="absolute top-4 right-4 w-6 h-6 border-2 border-white/50 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
                <motion.div className="absolute bottom-4 left-4 w-4 h-4 bg-white/30 rounded-full" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                
                {/* Barcode Style Element */}
                <motion.div 
                  className="absolute bottom-2 right-2 w-8 h-3 opacity-30" 
                  style={{ 
                    backgroundImage: 'repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 2px)',
                  }}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              {/* My Story card slides from left after photo - Enhanced size */}
              <motion.div className="mt-6 p-6 bg-yellow-50/80 backdrop-blur-sm rounded-lg border border-yellow-200 order-3" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}>
                {/* Board Pin on My Story Card */}
                <motion.div 
                  className="absolute -top-2 left-4 z-10" 
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-4 h-4 bg-blue-500 rounded-full shadow-md relative">
                    <div className="absolute inset-0.5 bg-blue-600 rounded-full"></div>
                  </div>
                </motion.div>
                
                {/* Tape Effect */}
                <motion.div 
                  className="absolute -top-1 right-8 w-12 h-4 bg-yellow-200/60 backdrop-blur-sm" 
                  style={{ transform: 'rotate(-8deg)' }}
                  animate={{ opacity: [0.6, 0.8, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <div className="relative inline-block">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-3 italic">My Story</h3>
                  <motion.div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 1.5 }} style={{ transformOrigin: 'left' }} />
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">My story isn't just about learning to code — it's about learning to create. From breaking down complex problems to building seamless experiences, I thrive at the sweet spot between logic and creativity. Every project I take on is a step toward shaping a smarter, more connected digital world.</p>
                
                {/* Enhanced story decorations */}
                <motion.div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-400/20 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
                
                {/* Small Sticker */}
                <motion.div 
                  className="absolute bottom-2 left-2 bg-red-400 text-white px-1 py-0.5 rounded text-xs font-bold" 
                  style={{ transform: 'rotate(-12deg)' }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  ♥
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Name and content section */}
            <motion.div className="flex-1 flex flex-col order-4 lg:order-2">
              {/* Name slides in after photo - Hidden on mobile, shown on desktop */}
              <motion.h1 className="hidden lg:flex text-5xl font-bold text-gray-900 mb-2 overflow-hidden" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}>
                  {"RISHABH AGRAWAL".split("").map((char, index) => (
                      <motion.span key={index} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}>
                          {char === " " ? "\u00A0" : char}
                      </motion.span>
                  ))}
              </motion.h1>
              {/* Bio slides in from right - Hidden on mobile, shown on desktop */}
              <motion.p className="hidden lg:flex text-lg text-gray-600 mb-6 leading-relaxed flex-wrap overflow-hidden" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}>
                  {"I break problems into smaller ones—and sometimes break production in the process (but I fix it faster!).".split(" ").map((word, index) => (
                      <span key={index} className="flex mr-1.5">
                          {word.split("").map((char, charIndex) => (
                               <motion.span key={charIndex} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 1.6 + index * 0.1 + charIndex * 0.02 }}>
                                  {char}
                              </motion.span>
                          ))}
                      </span>
                  ))}
              </motion.p>
              
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 lg:mt-0" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}>
                <motion.div className="space-y-2" variants={itemVariants}>
                  <motion.div className="flex items-center space-x-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Calendar size={16} className="text-gray-600" /> <span className="text-gray-600">26th September 2004</span></motion.div>
                  <motion.div className="flex items-center space-x-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Mail size={16} className="text-gray-600" /> <span className="text-gray-600">kumarvrishabh700@gmail.com</span></motion.div>
                  <motion.div className="flex items-center space-x-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><ExternalLink size={16} className="text-gray-600" /> <span className="text-gray-600">https://github.com/Rishabh7575</span></motion.div>
                </motion.div>
                <motion.div className="space-y-2" variants={itemVariants}><div className="flex items-center space-x-2"><MapPin size={16} className="text-gray-600" /> <span className="text-gray-600">LOC: Ghaziabad, India</span></div></motion.div>
              </motion.div>

              {/* Off the Clock card slides from left */}
              <motion.div className="mt-6 p-5 bg-yellow-50/80 backdrop-blur-sm rounded-lg border border-yellow-200 relative overflow-hidden" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 2.2 }}>
                {/* Washi Tape Effect */}
                <motion.div 
                  className="absolute -top-2 left-8 w-16 h-6 bg-green-300/40 backdrop-blur-sm" 
                  style={{ transform: 'rotate(-5deg)' }}
                  animate={{ opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Small Pin */}
                <motion.div 
                  className="absolute top-1 right-4 z-10" 
                  animate={{ rotate: [0, 12, -12, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm relative">
                    <div className="absolute inset-0.5 bg-green-600 rounded-full"></div>
                  </div>
                </motion.div>
                
                <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-4 italic">Off the Clock</h3>
                <motion.div className="flex items-center justify-around">
                  {[{ icon: Coffee, text: "Fueling on coffee" }, { icon: Music, text: "Curating playlists" }, { icon: Gamepad2, text: "Exploring worlds" }].map((interest, index) => (
                    <motion.div key={index} className="flex flex-col items-center gap-2 text-center text-gray-600" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2.4 + index * 0.1 }} whileHover={{ scale: 1.15, color: "#111827" }} transition={{ type: "spring", stiffness: 300 }}><interest.icon size={32} /> <span className="text-xs md:text-sm">{interest.text}</span></motion.div>
                  ))}
                </motion.div>
                
                {/* Enhanced card decorations */}
                <motion.div className="absolute bottom-2 right-2 w-2 h-2 bg-yellow-400/30 rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 3, repeat: Infinity }} />
                
                {/* Doodle Element */}
                <motion.div 
                  className="absolute bottom-1 left-1 text-gray-400 opacity-40" 
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Hash size={12} />
                </motion.div>
              </motion.div>

              {/* Core Strengths card slides from right */}
              <motion.div className="mt-6 p-5 bg-yellow-50/80 backdrop-blur-sm rounded-lg border border-yellow-200 relative overflow-hidden" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 2.6 }}>
                {/* Paperclip on Core Strengths */}
                <motion.div 
                  className="absolute -top-1 right-6 z-10" 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Paperclip size={16} className="text-gray-500 opacity-60" />
                </motion.div>
                
                {/* Corner Fold Effect */}
                <motion.div 
                  className="absolute top-0 right-0 w-6 h-6 bg-gray-200/40" 
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                  animate={{ opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                
                 <div className="relative inline-block">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-4 italic">Core Strengths</h3>
                  <motion.div className="absolute bottom-2 left-0 w-full h-0.5 bg-yellow-400" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 2.8 }} style={{ transformOrigin: 'left' }} />
                 </div>
                <motion.ul className="space-y-3">
                  {[{ icon: Lightbulb, title: "Full-Stack Development", description: "Building scalable, secure, and high-performance web apps.", color: "text-yellow-500" }, { icon: Rocket, title: "Blockchain & Cloud", description: "Hands-on with Solidity, Ethereum, AWS, and CI/CD pipelines.", color: "text-blue-500" }, { icon: Sparkles, title: "Innovation & Problem-Solving", description: "ransforming complex problems into simple, impactful solutions.", color: "text-red-500" }].map((strength, index) => (
                    <motion.li key={index} className="flex items-start gap-3" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 3 + index * 0.1 }}><strength.icon size={22} className={`${strength.color} mt-1 flex-shrink-0`} /><div><h4 className="font-bold text-gray-800 text-base md:text-lg">{strength.title}</h4> <p className="text-sm md:text-base text-gray-600">{strength.description}</p></div></motion.li>
                  ))}
                </motion.ul>
                
                {/* Enhanced card decorations */}
                <motion.div className="absolute bottom-2 right-2 w-3 h-3 border border-yellow-400/30 rounded-full" animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
                
                {/* Small Tag */}
                <motion.div 
                  className="absolute bottom-1 left-1 bg-blue-400 text-white px-1 py-0.5 rounded text-xs font-bold" 
                  style={{ transform: 'rotate(8deg)' }}
                  animate={{ y: [-1, 1, -1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  ★★★
                </motion.div>
              </motion.div>

              <motion.div className="mt-auto pt-6 text-right" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 3.5 }}>
                <motion.div className="text-red-500 italic mb-2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>Please don't hesitate to<br />reach me if this resume<br />doesn't provide enough<br />clarification</motion.div>
                <motion.div className="flex items-center justify-end space-x-2" whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}><Phone size={16} className="text-red-500" /> <span className="text-gray-700">+91 8409066141</span></motion.div>
                <motion.div className="flex items-center justify-end space-x-2 mt-1" whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}><Linkedin size={16} className="text-blue-600" /> <span className="text-gray-700">https://www.linkedin.com/in/rishabhkumar26</span></motion.div>
                <div className="text-gray-700 mt-1">kumarvrishabh700@gmail.com</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 p-8 bg-white/70 backdrop-blur-sm">
          <div className="space-y-8">
            <motion.section id="experience" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <SectionHeader title="Experience">
                <motion.svg className="absolute top-2 -right-10 w-16 h-12" viewBox="0 0 100 100" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }} viewport={{ once: true }}>
                  <motion.circle cx="50" cy="50" r="20" stroke="#f59e0b" strokeWidth="3" fill="transparent" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }} viewport={{ once: true }} />
                </motion.svg>
              </SectionHeader>
              <div className="space-y-4">
                <motion.div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500" whileHover={{ x: 5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} transition={{ type: "spring", stiffness: 300 }}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Full Stack Developer</h4>
                    <span className="text-sm text-gray-500 flex items-center"><Calendar size={14} className="mr-1" />2023 - Present</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Tech Innovators Inc.</p>
                  <p className="text-gray-700 text-sm">Developed scalable web applications using React, Node.js, and cloud technologies.</p>
                </motion.div>
                <motion.div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500" whileHover={{ x: 5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} transition={{ type: "spring", stiffness: 300 }}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Blockchain Developer</h4>
                    <span className="text-sm text-gray-500 flex items-center"><Calendar size={14} className="mr-1" />2022 - 2023</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">CryptoSolutions Ltd.</p>
                  <p className="text-gray-700 text-sm">Built smart contracts and DeFi applications using Solidity and Ethereum.</p>
                </motion.div>
              </div>
              <motion.div className="space-y-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {[{ period: "Jan 2024 - Present ", title: "UI/UX Designer", company: "Think India NITP", type: "Full-time", location: "Patna, India" }, { period: "Apr 2024 - Present ", title: "Vice President ISIE", company: "ISIE", type: "Full-time", location: "Patna, India" }, { period: "July 2025 - Present", title: "Web Intern", company: "Everything Design", type: "Internship", location: "Remote" }].map((job, index) => (
                  <motion.div key={index} className="border-l-4 border-yellow-400 pl-6 relative p-4 rounded-r-lg bg-white/50" variants={itemVariants} whileHover={{ x: 5, backgroundColor: "#ffffff" }} transition={{ type: "spring", stiffness: 300 }}>
                    <motion.div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
                    <div className="text-sm text-gray-600 mb-1">{job.period}</div>
                    {/* UPDATED with WavyText */}
                    <WavyText text={job.title} el="h3" className="text-xl font-bold text-gray-900 mb-1" />
                    <div className="text-gray-700 mb-1">{job.company} • <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">{job.type}</span></div>
                    <div className="text-sm text-gray-600">{job.location}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            <motion.section id="education" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <SectionHeader title="Education">
                <motion.svg className="absolute top-2 -right-10 w-16 h-12" viewBox="0 0 100 100" initial={{ opacity: 0, rotate: -90 }} whileInView={{ opacity: 1, rotate: 0 }} transition={{ delay: 0.5, duration: 0.8 }} viewport={{ once: true }}>
                  <motion.polygon points="50,15 65,35 85,35 70,50 75,70 50,60 25,70 30,50 15,35 35,35" stroke="#10b981" strokeWidth="3" fill="transparent" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }} viewport={{ once: true }} />
                </motion.svg>
              </SectionHeader>
              <div className="space-y-4">
                <motion.div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500" whileHover={{ x: 5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} transition={{ type: "spring", stiffness: 300 }}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">B.Tech Computer Science</h4>
                    <span className="text-sm text-gray-500 flex items-center"><GraduationCap size={14} className="mr-1" />2020 - 2024</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Indian Institute of Technology</p>
                  <p className="text-gray-700 text-sm">Specialized in Software Engineering and Data Structures. CGPA: 8.5/10</p>
                </motion.div>
                <motion.div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500" whileHover={{ x: 5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} transition={{ type: "spring", stiffness: 300 }}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Higher Secondary</h4>
                    <span className="text-sm text-gray-500 flex items-center"><GraduationCap size={14} className="mr-1" />2018 - 2020</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Delhi Public School</p>
                  <p className="text-gray-700 text-sm">Science Stream with Mathematics. Percentage: 95%</p>
                </motion.div>
              </div>
              <motion.div className="space-y-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {[{ period: "2023 - 2027", institution: "National Institute of Technology, Patna", degree: "B.tech", grade: "Mechanical Engineer", location: "Patna, India" }, { period: "2020 - 2022", institution: "Carmel School", degree: "Sr.Secondary School of Education", grade: "P 75 %", location: "Mannargudi, Tamilnadu, India" }].map((edu, index) => (
                  <motion.div key={index} className="border-l-4 border-yellow-400 pl-6 relative p-4 rounded-r-lg bg-white/50" variants={itemVariants} whileHover={{ x: 5, backgroundColor: "#ffffff" }} transition={{ type: "spring", stiffness: 300 }}>
                    <motion.div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
                    <div className="text-sm text-gray-600 mb-1">{edu.period}</div>
                    {/* UPDATED with WavyText */}
                    <WavyText text={edu.institution} el="h3" className="text-xl font-bold text-gray-900 mb-1" />
                    <div className="text-gray-700 mb-1">{edu.degree} • <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">{edu.grade}</span></div>
                    <div className="text-sm text-gray-600">{edu.location}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          </div>

          <div className="space-y-8">
            <motion.section id="skills" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <SectionHeader title="Area of Expertise">
                <motion.svg className="absolute top-2 -right-10 w-16 h-12" viewBox="0 0 100 100" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} viewport={{ once: true }}>
                  <motion.path d="M30 70 L50 30 L70 70 M40 55 L60 55" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }} viewport={{ once: true }} />
                </motion.svg>
              </SectionHeader>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code, name: "Frontend Dev", color: "bg-blue-500" },
                  { icon: Database, name: "Backend Dev", color: "bg-green-500" },
                  { icon: Cloud, name: "Cloud Computing", color: "bg-orange-500" },
                  { icon: Gem, name: "Blockchain", color: "bg-purple-500" },
                  { icon: Monitor, name: "UI/UX Design", color: "bg-pink-500" },
                  { icon: Briefcase, name: "Project Mgmt", color: "bg-indigo-500" }
                ].map((skill, index) => (
                  <motion.div key={index} className={`${skill.color} text-white p-4 rounded-lg shadow-lg text-center`} initial={{ scale: 0, rotate: 180 }} whileInView={{ scale: 1, rotate: 0 }} transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 200 }} whileHover={{ scale: 1.05, y: -5 }} viewport={{ once: true }}>
                    <skill.icon size={24} className="mx-auto mb-2" />
                    <div className="text-sm font-medium">{skill.name}</div>
                  </motion.div>
                ))}
              </div>
              <motion.div className="relative h-96 flex items-center justify-center" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}>
                  <motion.div className="absolute w-64 h-20 bg-[#D3A429]/90 backdrop-blur-sm flex items-center justify-center" style={{ clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0% 100%)', top: '20%' }} initial={{ y: -50, opacity: 0, rotate: -10 }} whileInView={{ y: 0, opacity: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }} whileHover={{ scale: 1.1, y: -10, rotate: 3, boxShadow: "0 10px 30px rgba(211, 164, 41, 0.4)" }} viewport={{ once: true }}><motion.h3 className="text-white font-bold text-lg tracking-wider" initial={{ letterSpacing: '0px' }} whileHover={{ letterSpacing: '3px' }} transition={{ duration: 0.3 }}>BLOCKCHAIN </motion.h3></motion.div>
                  <motion.div className="absolute w-40 h-40 bg-[#D84545]/90 backdrop-blur-sm flex flex-col items-center justify-center" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)', left: '5%', top: '45%' }} initial={{ x: -60, opacity: 0, scale: 0.5 }} whileInView={{ x: 0, opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.4 }} whileHover={{ scale: 1.15, x: -10, rotate: -5, boxShadow: "0 15px 40px rgba(216, 69, 69, 0.4)" }} viewport={{ once: true }}><motion.h3 className="text-white font-bold text-4xl" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.6, type: 'spring', stiffness: 300 }} viewport={{ once: true }}>BACKEND</motion.h3><motion.p className="text-white text-lg tracking-widest" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }} viewport={{ once: true }}>DEVELOPMENT</motion.p></motion.div>
                  <motion.div className="absolute w-48 h-16 bg-[#43A4D3]/90 backdrop-blur-sm flex items-center justify-center" style={{ clipPath: 'polygon(0 0, 100% 25%, 100% 100%, 0 100%)', left: '30%', top: '75%' }} initial={{ y: 50, opacity: 0, rotate: 10 }} whileInView={{ y: 0, opacity: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 200, delay: 0.6 }} whileHover={{ scale: 1.1, y: 10, rotate: 2, boxShadow: "0 10px 30px rgba(67, 164, 211, 0.4)" }} viewport={{ once: true }}><motion.h3 className="text-white font-bold text-lg tracking-wider" initial={{ letterSpacing: '0px' }} whileHover={{ letterSpacing: '3px' }} transition={{ duration: 0.3 }}>AI & MACHINE LEARNING</motion.h3></motion.div>
                  <motion.div className="absolute w-48 h-16 bg-[#5AB889]/90 backdrop-blur-sm flex items-center justify-center" style={{ clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 100%)', right: '5%', top: '55%' }} initial={{ x: 60, opacity: 0, rotate: -10 }} whileInView={{ x: 0, opacity: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 200, delay: 0.8 }} whileHover={{ scale: 1.1, x: 10, rotate: -3, boxShadow: "0 10px 30px rgba(90, 184, 137, 0.4)" }} viewport={{ once: true }}><motion.h3 className="text-white font-bold text-lg tracking-wider" initial={{ letterSpacing: '0px' }} whileHover={{ letterSpacing: '3px' }} transition={{ duration: 0.3 }}>REACT DEVELOPER</motion.h3></motion.div>
                  
                  {/* Floating particles */}
                  <motion.div className="absolute w-2 h-2 bg-yellow-400 rounded-full" style={{ top: '10%', left: '20%' }} animate={{ y: [-5, 5, -5], opacity: [0.3, 1, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                  <motion.div className="absolute w-1 h-1 bg-blue-400 rounded-full" style={{ top: '80%', right: '25%' }} animate={{ y: [5, -5, 5], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
                  <motion.div className="absolute w-1.5 h-1.5 bg-green-400 rounded-full" style={{ top: '30%', right: '15%' }} animate={{ y: [-3, 3, -3], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
              </motion.div>
            </motion.section>

            {/* UPDATED Software Skills Section */}
            <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <SectionHeader title="Software Skills">
                <motion.svg className="absolute top-2 -right-10 w-16 h-12" viewBox="0 0 100 100" initial={{ opacity: 0, rotate: -180 }} whileInView={{ opacity: 1, rotate: 0 }} transition={{ delay: 0.5, duration: 0.8 }} viewport={{ once: true }}><motion.path d="M20 30 C 40 10, 60 60, 80 40 S 90 70, 70 80" stroke="#2dd4bf" strokeWidth="4" fill="transparent" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }} viewport={{ once: true }} /></motion.svg>
              </SectionHeader>
              <motion.div className="grid grid-cols-3 gap-4" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
                {softwareSkills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className={`${skill.color} text-white p-4 rounded-lg shadow-lg overflow-hidden ${skill.icon ? 'cursor-pointer' : ''} relative flex flex-col justify-center items-center h-32`} 
                    initial={{ y: 50, opacity: 0, rotate: Math.random() * 20 - 10 }} 
                    whileInView={{ y: 0, opacity: 1, rotate: 0 }} 
                    transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 200 }} 
                    whileHover={skill.icon ? { scale: 1.1, y: -10, rotate: Math.random() * 10 - 5, boxShadow: "0 15px 35px rgba(0,0,0,0.4)", zIndex: 10 } : {}} 
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="relative z-10 text-center flex-grow flex flex-col items-center justify-center" 
                      initial={{ scale: 0 }} 
                      whileInView={{ scale: 1 }} 
                      transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }} 
                      viewport={{ once: true }}
                    >
                      {skill.icon ? (
                        <>
                          <skill.icon size={32} className="mx-auto" />
                          <motion.div 
                            className="text-sm mt-2" 
                            initial={{ y: 20, opacity: 0 }} 
                            whileInView={{ y: 0, opacity: 1 }} 
                            transition={{ delay: index * 0.1 + 0.6 }} 
                            viewport={{ once: true }}
                          >
                            {skill.full}
                          </motion.div>
                        </>
                      ) : (
                        <div className="h-12"></div>
                      )}
                    </motion.div>
                    {skill.icon && (
                      <div className="w-full mt-auto h-2 bg-black bg-opacity-20 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-2 bg-yellow-400 rounded-full" 
                          initial={{ width: '0%' }} 
                          whileInView={{ width: skill.level }} 
                          transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.1 + 0.8 }} 
                          viewport={{ once: true }} 
                        />
                      </div>
                    )}
                    {skill.icon && (
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0" 
                        initial={{ x: -100 }} 
                        whileInView={{ x: 100, opacity: [0, 0.3, 0] }} 
                        transition={{ duration: 1, delay: index * 0.1 + 1.2 }} 
                        viewport={{ once: true }} 
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          </div>
        </div>

        <motion.section id="projects" className="bg-gray-50/70 backdrop-blur-sm p-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <SectionHeader title="Featured Projects" />
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}>
            {[{ title: "Brand Identity Design", description: "Complete brand identity package including logo, business cards, and marketing materials.", category: "Branding", color: "bg-purple-500", github: "https://github.com/aravindh/brand-identity" }, { title: "Motion Graphics Reel", description: "Animated promotional video showcasing product features with smooth transitions.", category: "Animation", color: "bg-blue-500", github: "https://github.com/aravindh/motion-reel" }, { title: "UI/UX Mobile App", description: "Modern mobile application design with intuitive user experience and clean interface.", category: "UI Design", color: "bg-green-500", github: "https://github.com/aravindh/mobile-ui" }, { title: "Editorial Layout", description: "Magazine layout design with creative typography and visual hierarchy.", category: "Print Design", color: "bg-red-500", github: "https://github.com/aravindh/editorial-design" }, { title: "Social Media Campaign", description: "Comprehensive social media visual campaign with consistent branding.", category: "Digital Marketing", color: "bg-orange-500", github: "https://github.com/aravindh/social-campaign" }, { title: "3D Product Visualization", description: "Photorealistic 3D renders for product showcase and marketing materials.", category: "3D Design", color: "bg-cyan-500", github: "https://github.com/aravindh/3d-visualization" }].map((project, index) => (
              <motion.div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden group relative" initial={{ y: 100, opacity: 0, rotate: Math.random() * 10 - 5 }} whileInView={{ y: 0, opacity: 1, rotate: 0 }} transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 200 }} whileHover={{ y: -15, scale: 1.02, rotate: Math.random() * 3 - 1.5, boxShadow: "0 25px 50px rgba(0,0,0,0.2)", zIndex: 10 }} viewport={{ once: true }}>
                <motion.div className="absolute top-2 right-2 bg-yellow-400 p-1 rounded-full text-gray-900 z-20" initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} transition={{ delay: index * 0.15 + 0.5, type: 'spring', stiffness: 400 }} whileHover={{ scale: 1.2, rotate: 90 }} viewport={{ once: true }}><ArrowUpRight size={16} /></motion.div>
                <motion.div className={`h-32 ${project.color} flex items-center justify-center relative overflow-hidden`} initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }} whileHover={{ scale: 1.1 }} viewport={{ once: true }}>
                  <motion.div initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} transition={{ delay: index * 0.15 + 0.4, type: "spring", stiffness: 300 }} viewport={{ once: true }}><Monitor size={48} className="text-white z-10" /></motion.div>
                  <motion.div className="absolute inset-0 opacity-20" animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0" whileHover={{ opacity: [0, 0.1, 0], x: [-100, 100] }} transition={{ duration: 0.8 }} />
                </motion.div>
                <motion.div className="p-6" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.15 + 0.6 }} viewport={{ once: true }}>
                  <motion.div className="text-sm text-gray-500 mb-2" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.15 + 0.7 }} viewport={{ once: true }}>{project.category}</motion.div>
                  {/* UPDATED with WavyText */}
                  <WavyText text={project.title} el="h3" className="text-xl font-bold text-gray-900 mb-3" />
                  <motion.p className="text-gray-600 text-sm leading-relaxed mb-4" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.15 + 0.9 }} viewport={{ once: true }}>{project.description}</motion.p>
                  <motion.a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors" initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.15 + 1.1 }} whileHover={{ x: 8, scale: 1.05 }} viewport={{ once: true }}><Github size={16} /> <span className="text-sm font-medium">View Code</span></motion.a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section id="contact" className="bg-yellow-400/80 backdrop-blur-sm p-8 relative overflow-hidden" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <motion.div className="absolute top-4 left-4 w-8 h-8 bg-gray-900 rounded-full opacity-10" variants={floatingVariants} animate="animate" />
          <motion.div className="absolute bottom-4 right-4 w-12 h-12 bg-gray-900 rounded-full opacity-5" variants={floatingVariants} animate="animate" transition={{ delay: 1 }} />
          <motion.div className="absolute top-1/2 left-1/4 w-6 h-6 bg-gray-900 rounded-full opacity-8" variants={floatingVariants} animate="animate" transition={{ delay: 0.5 }} />
          
          <div className="relative z-10">
            <motion.h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              Let's Connect & Create Something Amazing!
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div className="space-y-4" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
                <motion.div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm p-4 rounded-lg" whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.3)" }} transition={{ type: "spring", stiffness: 300 }}>
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Phone</p>
                    <motion.a 
                      href="tel:+918409066141" 
                      className="text-gray-700 hover:text-gray-900 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      +91 8409066141
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm p-4 rounded-lg" whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.3)" }} transition={{ type: "spring", stiffness: 300 }}>
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Email</p>
                    <motion.a 
                      href="mailto:kumarvishabh700@gmail.com" 
                      className="text-gray-700 hover:text-gray-900 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      kumarvishabh700@gmail.com
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm p-4 rounded-lg" whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.3)" }} transition={{ type: "spring", stiffness: 300 }}>
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                    <Linkedin size={20} className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">LinkedIn</p>
                    <motion.a 
                      href="https://www.linkedin.com/in/rishabhkumar26" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      rishabhkumar26
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg" initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
                <motion.div className="text-right mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }}>
                  <p className="text-gray-700 italic text-sm leading-relaxed">
                    Please don't hesitate to reach me if this resume doesn't provide enough clarification
                  </p>
                </motion.div>
                
                <div className="space-y-3">
                  <motion.div className="flex items-center justify-end space-x-2" whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Coffee size={16} className="text-gray-700" />
                    <span className="text-gray-700 text-sm">Fueling on coffee</span>
                  </motion.div>
                  <motion.div className="flex items-center justify-end space-x-2" whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Music size={16} className="text-gray-700" />
                    <span className="text-gray-700 text-sm">Curating playlists</span>
                  </motion.div>
                  <motion.div className="flex items-center justify-end space-x-2" whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Gamepad2 size={16} className="text-gray-700" />
                    <span className="text-gray-700 text-sm">Exploring worlds</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div className="absolute bottom-10 right-10 w-16 h-16 bg-white opacity-10 rounded-full" animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }} transition={{ duration: 6, repeat: Infinity }} />
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h2 className="text-4xl font-bold text-gray-900 text-center mb-8" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>Let's Work Together</motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
                <form className="space-y-4">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}><input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all bg-white/50" /></motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}><input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all bg-white/50" /></motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}><textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all resize-none bg-white/50"></textarea></motion.div>
                  <motion.button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors" whileHover={{ backgroundColor: "#1f2937", scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 300 }}>Send Message</motion.button>
                </form>
              </motion.div>
              <motion.div className="space-y-6" initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
                <motion.div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    {[{ icon: Phone, text: "+91 7904692069" }, { icon: Mail, text: "aavi403@gmail.com" }, { icon: MapPin, text: "Thanjavur, Tamil Nadu, India" }, { icon: ExternalLink, text: "behance.net/Aravindh_A" }].map((item, index) => (<motion.div key={index} className="flex items-center space-x-3" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><item.icon className="text-yellow-600" size={20} /> <span className="text-gray-700">{item.text}</span></motion.div>))}
                  </div>
                </motion.div>
                <motion.div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Available For</h3>
                  <div className="space-y-2">
                    {["Freelance Projects", "Full-time Opportunities", "Collaborations"].map((item, index) => (<motion.div key={index} className="flex items-center space-x-2" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}><motion.div className="w-2 h-2 bg-green-500 rounded-full" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }} /> <span className="text-gray-700">{item}</span></motion.div>))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}

export default App;