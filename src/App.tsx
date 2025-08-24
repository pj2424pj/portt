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
  Gamepad2
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const paperClipRotate = useTransform(scrollYProgress, [0, 1], [12, 25]);

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

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      {/* Floating Background Elements */}
      <motion.div 
        className="fixed top-20 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20 z-0"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div 
        className="fixed top-40 right-20 w-12 h-12 bg-blue-500 rounded-full opacity-20 z-0"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div 
        className="fixed bottom-40 left-20 w-20 h-20 bg-green-400 rounded-full opacity-20 z-0"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      {/* Paper Container */}
      <motion.div 
        className="max-w-5xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden relative z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated Paper Clip */}
        <motion.div 
          className="absolute -top-4 left-8 z-20"
          style={{ rotate: paperClipRotate }}
          whileHover={{ scale: 1.1, rotate: 20 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-16 h-20 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-full rounded-b-sm shadow-lg">
            <div className="w-12 h-16 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-full rounded-b-sm mx-auto mt-1"></div>
            <div className="w-8 h-12 bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-full rounded-b-sm mx-auto -mt-14"></div>
          </div>
        </motion.div>

        {/* Header Section */}
        <motion.div 
          className="relative bg-white p-8 border-b-2 border-gray-100"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Profile Photo */}
            <div className="w-48 h-64 bg-yellow-400 rounded-lg overflow-hidden shadow-lg relative">
  <img 
    src="/cutu.jpg"  // 👈 path to your image
    alt="Rishabh Agrawal"
    className="w-full h-full object-cover"
  />

  {/* Decorative elements */}
  <motion.div 
    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full"
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 2, repeat: Infinity }}
  />
  <motion.div 
    className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full"
    animate={{ scale: [1, 1.3, 1] }}
    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
  />
</div>


            {/* Personal Info */}
            <motion.div className="flex-1" variants={itemVariants}>
              <motion.h1 
                className="text-5xl font-bold text-gray-900 mb-2"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Rishabh Agrawal
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
               I break problems into smaller ones—and sometimes break production in the process (but I fix it faster!).
              </motion.p>

              {/* Info Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                variants={containerVariants}
              >
                <motion.div className="space-y-2" variants={itemVariants}>
                   
                  <motion.div 
                    className="flex items-center space-x-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Calendar size={16} className="text-gray-600" />
                    <span className="text-gray-600">26th September 2004</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Mail size={16} className="text-gray-600" />
                    <span className="text-gray-600">kumarvrishabh700@gmail.com</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ExternalLink size={16} className="text-gray-600" />
                    <span className="text-gray-600">google.com</span>
                  </motion.div>
                </motion.div>
                <motion.div className="space-y-2" variants={itemVariants}>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-gray-600" />
                    <span className="text-gray-600">LOC: Ghaziabad, India</span>
                  </div>
                   
                </motion.div>
              </motion.div>

              {/* QR Code and Contact */}
              <motion.div 
                className="flex items-center justify-between"
                variants={itemVariants}
              >
                <motion.div 
                  className="w-20 h-20 bg-gray-200 rounded border-2 border-gray-300 flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 bg-black rounded grid grid-cols-4 gap-px p-1">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <motion.div 
                        key={i} 
                        className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-black'} rounded-sm`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                      />
                    ))}
                  </div>
                </motion.div>
                <div className="text-right">
                  <motion.div 
                    className="text-red-500 italic mb-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Please don't hesitate to<br />
                    reach me if this resume<br />
                    doesn't provide enough<br />
                    clarification
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-2"
                    whileHover={{ x: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Phone size={16} className="text-red-500" />
                    <span className="text-gray-700">+91 8409066141</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-2 mt-1"
                    whileHover={{ x: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Linkedin size={16} className="text-blue-600" />
                    <span className="text-gray-700">www.linkedin.com</span>
                  </motion.div>
                  <div className="text-gray-700 mt-1">kumarvrishabh700@gmail.com</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 p-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Work Experience */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <motion.h2 
                  className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Work Experiences
                </motion.h2>
                {/* Decorative elements */}
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
                    className="border-l-4 border-yellow-400 pl-6 relative"
                    variants={itemVariants}
                    whileHover={{ x: 5, backgroundColor: "#fefefe" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"
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
                  className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded"
                  whileHover={{ scale: 1.05, rotate: 1 }}
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
                    className="border-l-4 border-yellow-400 pl-6 relative"
                    variants={itemVariants}
                    whileHover={{ x: 5, backgroundColor: "#fefefe" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"
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
            {/* Area of Expertise */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <motion.h2 
                  className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded"
                  whileHover={{ scale: 1.05, rotate: -1 }}
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
              
              <div className="relative">
                {/* Enhanced Expertise Diagram */}
                <div className="flex items-center justify-center h-80 relative">
                  {/* Promotional Design */}
                  <motion.div 
                    className="absolute top-0 right-8 bg-orange-400 text-white px-4 py-2 rounded-lg shadow-lg"
                    initial={{ rotate: 12, scale: 0 }}
                    whileInView={{ rotate: 12, scale: 1 }}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-sm font-bold">Full Stack</div>
                    <div className="text-xs">Developer</div>
                  </motion.div>
                  
                  {/* UI Design */}
                  <motion.div 
                    className="absolute left-4 top-16 bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg"
                    initial={{ rotate: -12, scale: 0 }}
                    whileInView={{ rotate: -12, scale: 1 }}
                    whileHover={{ rotate: -15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                  >
                    <div className="text-lg font-bold">UI</div>
                    <div className="text-sm">DESIGN</div>
                  </motion.div>
                  
                  {/* Editorial Design */}
                  <motion.div 
                    className="absolute left-16 bottom-8 bg-cyan-400 text-gray-900 px-4 py-2 rounded-lg shadow-lg"
                    initial={{ rotate: 6, scale: 0 }}
                    whileInView={{ rotate: 6, scale: 1 }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                  >
                    <div className="text-sm font-bold">EDITORIAL</div>
                    <div className="text-xs">DESIGN</div>
                  </motion.div>
                  
                  {/* Motion Graphics */}
                  <motion.div 
                    className="absolute right-0 bottom-4 bg-blue-500 text-white px-6 py-4 rounded-full shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                  >
                    <div className="text-sm font-bold">MOTION</div>
                    <div className="text-xs text-center">GRAPHICS</div>
                  </motion.div>

                  {/* Additional Expertise Areas */}
                  <motion.div 
                    className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-3 py-2 rounded-lg shadow-lg"
                    initial={{ rotate: -8, scale: 0 }}
                    whileInView={{ rotate: -8, scale: 1 }}
                    whileHover={{ rotate: -12, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
                  >
                    <div className="text-xs font-bold">MERN</div>
                  </motion.div>

                  <motion.div 
                    className="absolute bottom-20 right-20 bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg"
                    initial={{ rotate: 15, scale: 0 }}
                    whileInView={{ rotate: 15, scale: 1 }}
                    whileHover={{ rotate: 20, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
                  >
                    <div className="text-xs font-bold">3D DESIGN</div>
                  </motion.div>

                  <motion.div 
                    className="absolute top-1/2 left-8 bg-pink-500 text-white px-3 py-2 rounded-full shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.6 }}
                  >
                    <div className="text-xs font-bold">UX</div>
                  </motion.div>

                  {/* Decorative floating elements */}
                  <motion.div 
                    className="absolute top-10 left-10 w-3 h-3 bg-yellow-400 rounded-full"
                    animate={{ y: [-5, 5, -5], rotate: [0, 180, 360] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute bottom-10 right-10 w-4 h-4 bg-red-400 rounded-full"
                    animate={{ y: [5, -5, 5], rotate: [360, 180, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.section>

            {/* Software Skills */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <motion.h2 
                  className="text-3xl font-bold text-gray-900 bg-yellow-400 inline-block px-4 py-2 rounded"
                  whileHover={{ scale: 1.05, rotate: 1 }}
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
                  { name: "", full: "", color: "bg-gray-400" }
                ].map((skill, index) => (
                  <motion.div 
                    key={index}
                    className={`${skill.color} text-white p-4 rounded-lg text-center shadow-lg ${skill.name ? 'cursor-pointer' : ''}`}
                    variants={itemVariants}
                    whileHover={skill.name ? { 
                      scale: 1.1, 
                      rotate: [0, -5, 5, 0],
                      boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
                    } : {}}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.icon ? (
                      <>
                        <Figma size={24} className="mx-auto mb-1" />
                        <div className="text-xs">{skill.full}</div>
                      </>
                    ) : skill.name ? (
                      <>
                        <div className="text-2xl font-bold mb-1">{skill.name}</div>
                        <div className="text-xs">{skill.full}</div>
                      </>
                    ) : null}
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          </div>
        </div>

        {/* Projects Section */}
        <motion.section 
          id="projects" 
          className="bg-gray-50 p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative mb-8">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 bg-yellow-400 inline-block px-6 py-3 rounded"
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Featured Projects
            </motion.h2>
            {/* Decorative elements */}
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
                color: "bg-purple-500",
                github: "https://github.com/aravindh/brand-identity"
              },
              {
                title: "Motion Graphics Reel",
                description: "Animated promotional video showcasing product features with smooth transitions.",
                category: "Animation",
                color: "bg-blue-500",
                github: "https://github.com/aravindh/motion-reel"
              },
              {
                title: "UI/UX Mobile App",
                description: "Modern mobile application design with intuitive user experience and clean interface.",
                category: "UI Design",
                color: "bg-green-500",
                github: "https://github.com/aravindh/mobile-ui"
              },
              {
                title: "Editorial Layout",
                description: "Magazine layout design with creative typography and visual hierarchy.",
                category: "Print Design",
                color: "bg-red-500",
                github: "https://github.com/aravindh/editorial-design"
              },
              {
                title: "Social Media Campaign",
                description: "Comprehensive social media visual campaign with consistent branding.",
                category: "Digital Marketing",
                color: "bg-orange-500",
                github: "https://github.com/aravindh/social-campaign"
              },
              {
                title: "3D Product Visualization",
                description: "Photorealistic 3D renders for product showcase and marketing materials.",
                category: "3D Design",
                color: "bg-cyan-500",
                github: "https://github.com/aravindh/3d-visualization"
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div 
                  className={`h-32 ${project.color} flex items-center justify-center relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Monitor size={48} className="text-white z-10" />
                  {/* Animated background pattern */}
                  <motion.div 
                    className="absolute inset-0 opacity-20"
                    animate={{ 
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{
                      backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "20px 20px"
                    }}
                  />
                </motion.div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">View Code</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
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
          
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 text-center mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let's Work Together
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div 
                className="bg-white rounded-lg p-6 shadow-lg"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
                <form className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
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
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <textarea 
                      placeholder="Your Message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all resize-none"
                    ></textarea>
                  </motion.div>
                  <motion.button 
                    className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors"
                    whileHover={{ 
                      backgroundColor: "#1f2937",
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
              
              {/* Contact Info */}
              <motion.div 
                className="space-y-6"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-white rounded-lg p-6 shadow-lg"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Phone, text: "+91 7904692069" },
                      { icon: Mail, text: "aavi403@gmail.com" },
                      { icon: MapPin, text: "Thanjavur, Tamil Nadu, India" },
                      { icon: ExternalLink, text: "behance.net/Aravindh_A" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center space-x-3"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <item.icon className="text-yellow-600" size={20} />
                        <span className="text-gray-700">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white rounded-lg p-6 shadow-lg"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Available For</h3>
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
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-green-500 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        />
                        <span className="text-gray-700">{item}</span>
                      </motion.div>
                    ))}
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