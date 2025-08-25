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
  ArrowUpRight
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
  const sections = ['home', 'experience', 'education', 'skills', 'projects', 'contact'];

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
      {/* Floating Background Elements */}
      <motion.div className="fixed top-20 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20 z-0" variants={floatingVariants} animate="animate" />
      <motion.div className="fixed top-40 right-20 w-12 h-12 bg-blue-500 rounded-full opacity-20 z-0" variants={floatingVariants} animate="animate" transition={{ delay: 1 }} />
      <motion.div className="fixed bottom-40 left-20 w-20 h-20 bg-green-400 rounded-full opacity-20 z-0" variants={floatingVariants} animate="animate" transition={{ delay: 2 }} />

      <motion.nav className="fixed top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-50 bg-gray-800 bg-opacity-50 backdrop-blur-sm p-2 rounded-full hidden lg:block" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}>
        <ul className="space-y-3">
          {sections.map(section => (
            <li key={section} className="relative flex justify-center">
              <button onClick={() => scrollToSection(section)} className="w-8 h-8 flex items-center justify-center rounded-full transition-colors group relative focus:outline-none">
                {activeSection === section && (<motion.div layoutId="activePill" className="absolute inset-0 bg-yellow-400 rounded-full" style={{ originY: "0" }} transition={{ type: "spring", stiffness: 500, damping: 30 }} />)}
                <span className={`w-2 h-2 rounded-full transition-colors ${activeSection === section ? 'bg-gray-900' : 'bg-white group-hover:bg-yellow-300'}`}></span>
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* UPDATED: Simplified main container animation to a simple fade-in */}
      <motion.div className="max-w-5xl mx-auto rounded-lg shadow-2xl overflow-hidden relative z-10" style={{ backgroundImage: 'url(/img2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <motion.div className="absolute -top-4 left-8 z-20" style={{ rotate: paperClipRotate }} whileHover={{ scale: 1.1, rotate: 20 }} transition={{ type: "spring", stiffness: 300 }}>
          <div className="w-16 h-20 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-full rounded-b-sm shadow-lg">
            <div className="w-12 h-16 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-full rounded-b-sm mx-auto mt-1"></div>
            <div className="w-8 h-12 bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-full rounded-b-sm mx-auto -mt-14"></div>
          </div>
        </motion.div>

        <motion.div id="home" className="relative bg-white/70 backdrop-blur-sm p-8 border-b-2 border-gray-100/50" variants={containerVariants} initial="hidden" animate="visible">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* UPDATED: Image block now slides in from the left */}
            <motion.div className="w-48 flex-shrink-0" variants={slideInFromLeft}>
              <div className="w-48 h-64 bg-yellow-400 rounded-lg overflow-hidden shadow-lg relative group">
                <img src="/cutu.jpg" alt="Rishabh Agrawal" className="w-full h-full object-cover" />
                <motion.div className="absolute -top-2 -left-2 w-10 h-5 bg-yellow-300/50 backdrop-blur-sm -rotate-45" initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: -45 }} transition={{ delay: 1, type: 'spring' }} />
                <motion.div className="absolute -bottom-2 -right-2 w-10 h-5 bg-yellow-300/50 backdrop-blur-sm -rotate-45" initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: -45 }} transition={{ delay: 1.1, type: 'spring' }} />
              </div>
              {/* UPDATED: My Story card slides from left */}
              <motion.div className="mt-6 p-4 bg-yellow-50/80 backdrop-blur-sm rounded-lg border border-yellow-200" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}>
                <div className="relative inline-block">
                  <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2 italic">My Story</h3>
                  <motion.div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }} viewport={{ once: true }} style={{ transformOrigin: 'left' }} />
                </div>
                <p className="text-base text-gray-700 leading-relaxed">From scribbling on notebooks to crafting pixel-perfect interfaces. My journey is fueled by a passion for turning complex problems into beautiful, intuitive designs.</p>
              </motion.div>
            </motion.div>

            {/* UPDATED: Text content block now slides in from the right */}
            <motion.div className="flex-1 flex flex-col" variants={slideInFromRight}>
              {/* Animated Name */}
              <motion.h1 className="text-5xl font-bold text-gray-900 mb-2 flex overflow-hidden" variants={textContainerVariant}>
                  {"Rishabh Agrawal".split("").map((char, index) => (
                      <motion.span key={index} variants={textChildVariant}>
                          {char === " " ? "\u00A0" : char}
                      </motion.span>
                  ))}
              </motion.h1>
              {/* Animated Bio */}
              <motion.p className="text-lg text-gray-600 mb-6 leading-relaxed flex flex-wrap overflow-hidden" variants={textContainerVariant} transition={{delayChildren: 1}}>
                  {"I break problems into smaller ones—and sometimes break production in the process (but I fix it faster!).".split(" ").map((word, index) => (
                      <span key={index} className="flex mr-1.5">
                          {word.split("").map((char, charIndex) => (
                               <motion.span key={charIndex} variants={textChildVariant}>
                                  {char}
                              </motion.span>
                          ))}
                      </span>
                  ))}
              </motion.p>
              
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={containerVariants}>
                <motion.div className="space-y-2" variants={itemVariants}>
                  <motion.div className="flex items-center space-x-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Calendar size={16} className="text-gray-600" /> <span className="text-gray-600">26th September 2004</span></motion.div>
                  <motion.div className="flex items-center space-x-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Mail size={16} className="text-gray-600" /> <span className="text-gray-600">kumarvrishabh700@gmail.com</span></motion.div>
                  <motion.div className="flex items-center space-x-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><ExternalLink size={16} className="text-gray-600" /> <span className="text-gray-600">google.com</span></motion.div>
                </motion.div>
                <motion.div className="space-y-2" variants={itemVariants}><div className="flex items-center space-x-2"><MapPin size={16} className="text-gray-600" /> <span className="text-gray-600">LOC: Ghaziabad, India</span></div></motion.div>
              </motion.div>

              {/* UPDATED: Off the Clock card slides from right */}
              <motion.div className="mt-6 p-4 bg-yellow-50/80 backdrop-blur-sm rounded-lg border border-yellow-200" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeInOut" }} viewport={{ once: true }}>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-4 italic">Off the Clock</h3>
                <motion.div className="flex items-center justify-around" variants={containerVariants}>
                  {[{ icon: Coffee, text: "Fueling on coffee" }, { icon: Music, text: "Curating playlists" }, { icon: Gamepad2, text: "Exploring worlds" }].map((interest, index) => (
                    <motion.div key={index} className="flex flex-col items-center gap-2 text-center text-gray-600" variants={itemVariants} whileHover={{ scale: 1.1, color: "#111827" }} transition={{ type: "spring", stiffness: 300 }}><interest.icon size={28} /> <span className="text-xs">{interest.text}</span></motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* UPDATED: Core Strengths card slides from right */}
              <motion.div className="mt-6 p-4 bg-yellow-50/80 backdrop-blur-sm rounded-lg border border-yellow-200" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }} viewport={{ once: true }}>
                 <div className="relative inline-block">
                  <h3 className="text-xl font-serif font-bold text-gray-800 mb-4 italic">Core Strengths</h3>
                  <motion.div className="absolute bottom-2 left-0 w-full h-0.5 bg-yellow-400" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }} viewport={{ once: true }} style={{ transformOrigin: 'left' }} />
                 </div>
                <motion.ul className="space-y-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {[{ icon: Lightbulb, title: "Intuitive UI/UX", description: "Crafting user-centric and accessible interfaces.", color: "text-yellow-500" }, { icon: Rocket, title: "Dynamic Motion", description: "Bringing designs to life with meaningful animations.", color: "text-blue-500" }, { icon: Sparkles, title: "Polished Execution", description: "A keen eye for detail and pixel-perfect results.", color: "text-red-500" }].map((strength, index) => (
                    <motion.li key={index} className="flex items-start gap-3" variants={itemVariants}><strength.icon size={20} className={`${strength.color} mt-1 flex-shrink-0`} /><div><h4 className="font-bold text-gray-800">{strength.title}</h4> <p className="text-sm text-gray-600">{strength.description}</p></div></motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div className="mt-auto pt-6 text-right" variants={itemVariants}>
                <motion.div className="text-red-500 italic mb-2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>Please don't hesitate to<br />reach me if this resume<br />doesn't provide enough<br />clarification</motion.div>
                <motion.div className="flex items-center justify-end space-x-2" whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}><Phone size={16} className="text-red-500" /> <span className="text-gray-700">+91 8409066141</span></motion.div>
                <motion.div className="flex items-center justify-end space-x-2 mt-1" whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}><Linkedin size={16} className="text-blue-600" /> <span className="text-gray-700">www.linkedin.com</span></motion.div>
                <div className="text-gray-700 mt-1">kumarvrishabh700@gmail.com</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 p-8 bg-white/70 backdrop-blur-sm">
          <div className="space-y-8">
            <motion.section id="experience" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <SectionHeader title="Work Experiences" />
              <motion.div className="space-y-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {[{ period: "Sep 2023 - Present : 2 yr", title: "Motion Graphic & UI Designer", company: "Think India NITP", type: "Full-time", location: "Patna, India" }, { period: "Jan 2024 - Present : 2yr", title: "Vice President ISIE", company: "ISIE", type: "Full-time", location: "Patna, India" }, { period: "Jan 2022 - May 2022 : 5 mos", title: "Motion Graphic & UI Designer", company: "Everything Design", type: "Internship", location: "Bengaluru, Karnataka, India" }].map((job, index) => (
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
              <SectionHeader title="Education" />
              <motion.div className="space-y-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {[{ period: "2019 - 2022", institution: "Vellore Institute of Technology", degree: "Bsc Multimedia & animation", grade: "CGPA 8.57", location: "Vellore, Tamilnadu, India" }, { period: "2017 - 2018", institution: "Sri Shanmuka Hr. Sec. School", degree: "Sr.Secondary School of Education", grade: "Pct 75 %", location: "Mannargudi, Tamilnadu, India" }].map((edu, index) => (
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
              <SectionHeader title="Area of Expertise" />
              <div className="relative h-96 flex items-center justify-center">
                  <motion.div className="absolute w-64 h-20 bg-[#D3A429]/90 backdrop-blur-sm flex items-center justify-center" style={{ clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0% 100%)', top: '20%' }} initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.1 }} whileHover={{ scale: 1.05, y: -5, rotate: 2 }}><motion.h3 className="text-white font-bold text-lg tracking-wider" initial={{ letterSpacing: '0px' }} whileHover={{ letterSpacing: '2px' }}>PROMOTIONAL DESIGN</motion.h3></motion.div>
                  <motion.div className="absolute w-40 h-40 bg-[#D84545]/90 backdrop-blur-sm flex flex-col items-center justify-center" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)', left: '5%', top: '45%' }} initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }} whileHover={{ scale: 1.05, x: -5, rotate: -2 }}><h3 className="text-white font-bold text-4xl">UI</h3><p className="text-white text-lg tracking-widest">DESIGN</p></motion.div>
                  <motion.div className="absolute w-48 h-16 bg-[#43A4D3]/90 backdrop-blur-sm flex items-center justify-center" style={{ clipPath: 'polygon(0 0, 100% 25%, 100% 100%, 0 100%)', left: '30%', top: '75%' }} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.3 }} whileHover={{ scale: 1.05, y: 5, rotate: 1 }}><h3 className="text-white font-bold text-lg tracking-wider">EDITORIAL DESIGN</h3></motion.div>
                  <motion.div className="absolute w-48 h-16 bg-[#5AB889]/90 backdrop-blur-sm flex items-center justify-center" style={{ clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 100%)', right: '5%', top: '55%' }} initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.4 }} whileHover={{ scale: 1.05, x: 5, rotate: 2 }}><h3 className="text-white font-bold text-lg tracking-wider">MOTION GRAPHICS</h3></motion.div>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <SectionHeader title="Software Skills">
                <motion.svg className="absolute top-2 -right-10 w-16 h-12" viewBox="0 0 100 100" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}><motion.path d="M20 30 C 40 10, 60 60, 80 40 S 90 70, 70 80" stroke="#2dd4bf" strokeWidth="4" fill="transparent" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }} viewport={{ once: true }} /></motion.svg>
              </SectionHeader>
              <motion.div className="grid grid-cols-3 gap-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {[{ name: "Ae", full: "After Effects", color: "bg-blue-900", level: "95%" }, { name: "Pr", full: "Premiere Pro", color: "bg-purple-900", level: "90%" }, { name: "Ps", full: "Photoshop", color: "bg-blue-600", level: "85%" }, { name: "Ai", full: "Illustrator", color: "bg-orange-600", level: "90%" }, { name: "Xd", full: "Adobe XD", color: "bg-pink-600", level: "80%" }, { name: "Figma", full: "Figma", color: "bg-gray-800", level: "95%", icon: true }, { name: "Dn", full: "Dimension", color: "bg-green-600", level: "70%" }, { name: "M", full: "Maya", color: "bg-teal-600", level: "65%" }, { name: "", full: "", color: "bg-gray-200/50", level: "0%" }].map((skill, index) => (
                  <motion.div key={index} className={`${skill.color} text-white p-4 rounded-lg shadow-lg overflow-hidden ${skill.name ? 'cursor-pointer' : ''}`} variants={itemVariants} whileHover={skill.name ? { scale: 1.05, y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" } : {}} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="relative z-10">{skill.icon ? (<><Figma size={24} className="mx-auto mb-1" /> <div className="text-xs">{skill.full}</div></>) : skill.name ? (<><div className="text-2xl font-bold mb-1">{skill.name}</div><div className="text-xs">{skill.full}</div></>) : <div className="h-12"></div>}</div>
                    {skill.name && (<div className="mt-2 h-2 bg-black bg-opacity-20 rounded-full"><motion.div className="h-2 bg-yellow-400 rounded-full" initial={{ width: 0 }} whileInView={{ width: skill.level }} transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} viewport={{ once: true }} /></div>)}
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          </div>
        </div>

        <motion.section id="projects" className="bg-gray-50/70 backdrop-blur-sm p-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <SectionHeader title="Featured Projects" />
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[{ title: "Brand Identity Design", description: "Complete brand identity package including logo, business cards, and marketing materials.", category: "Branding", color: "bg-purple-500", github: "https://github.com/aravindh/brand-identity" }, { title: "Motion Graphics Reel", description: "Animated promotional video showcasing product features with smooth transitions.", category: "Animation", color: "bg-blue-500", github: "https://github.com/aravindh/motion-reel" }, { title: "UI/UX Mobile App", description: "Modern mobile application design with intuitive user experience and clean interface.", category: "UI Design", color: "bg-green-500", github: "https://github.com/aravindh/mobile-ui" }, { title: "Editorial Layout", description: "Magazine layout design with creative typography and visual hierarchy.", category: "Print Design", color: "bg-red-500", github: "https://github.com/aravindh/editorial-design" }, { title: "Social Media Campaign", description: "Comprehensive social media visual campaign with consistent branding.", category: "Digital Marketing", color: "bg-orange-500", github: "https://github.com/aravindh/social-campaign" }, { title: "3D Product Visualization", description: "Photorealistic 3D renders for product showcase and marketing materials.", category: "3D Design", color: "bg-cyan-500", github: "https://github.com/aravindh/3d-visualization" }].map((project, index) => (
              <motion.div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden group relative" variants={projectItemVariants} whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)", transition: { type: "spring", stiffness: 300 } }}>
                <motion.div className="absolute top-2 right-2 bg-yellow-400 p-1 rounded-full text-gray-900" initial={{ scale: 0, rotate: -45 }} whileHover={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}><ArrowUpRight size={16} /></motion.div>
                <motion.div className={`h-32 ${project.color} flex items-center justify-center relative overflow-hidden`} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Monitor size={48} className="text-white z-10" />
                  <motion.div className="absolute inset-0 opacity-20" animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                </motion.div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{project.category}</div>
                  {/* UPDATED with WavyText */}
                  <WavyText text={project.title} el="h3" className="text-xl font-bold text-gray-900 mb-3" />
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                  <motion.a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Github size={16} /> <span className="text-sm font-medium">View Code</span></motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section id="contact" className="bg-yellow-400/80 backdrop-blur-sm p-8 relative overflow-hidden" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <motion.div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full" animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ duration: 8, repeat: Infinity }} />
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