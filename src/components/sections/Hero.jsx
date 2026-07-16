// src/components/sections/Hero.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaInstagram, FaPhone } from "react-icons/fa";
import { personalInfo } from "../../data/portfolio";

function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-pink-300/10 dark:bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
        >
          {/* Left Column - Content */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full bg-indigo-100/80 dark:bg-indigo-900/40 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/30 shadow-sm"
            >
              <span className="text-[10px] sm:text-sm font-medium text-indigo-700 dark:text-indigo-300 leading-tight">
                🚀 Available for Internships & Full-Time Opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-1 sm:mb-2 font-light tracking-wide"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 sm:mb-3 leading-tight"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Brand */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-gray-500 dark:text-gray-400 mb-3 sm:mb-4 font-light"
            >
              ✨ {personalInfo.brand}
            </motion.p>

            {/* Animated Role */}
            <motion.div
              variants={itemVariants}
              className="h-8 sm:h-10 lg:h-12 mb-4 sm:mb-6 flex items-center"
            >
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-700 dark:text-gray-300"
              >
                {personalInfo.roles[currentRole]}
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-6 sm:mb-8 leading-relaxed"
            >
              Passionate about AI, Full Stack Development, Machine Learning and building modern web applications.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40"
              >
                <FaCode className="mr-2 text-sm sm:text-base" />
                View Projects
              </motion.a>
              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-lg transition-all duration-200 shadow-md"
              >
                <FaDownload className="mr-2 text-sm sm:text-base" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 sm:p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-gray-200/50 dark:border-gray-700/50"
                aria-label="GitHub"
              >
                <FaGithub size={16} className="sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 sm:p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-gray-200/50 dark:border-gray-700/50"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} className="sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 sm:p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 border border-gray-200/50 dark:border-gray-700/50"
                aria-label="Instagram"
              >
                <FaInstagram size={16} className="sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 sm:p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-gray-200/50 dark:border-gray-700/50"
                aria-label="Email"
              >
                <FaEnvelope size={16} className="sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href={`tel:${personalInfo.phone}`}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 sm:p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 border border-gray-200/50 dark:border-gray-700/50"
                aria-label="Phone"
              >
                <FaPhone size={16} className="sm:w-5 sm:h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={imageVariants}
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            <motion.div
              animate="float"
              variants={imageVariants}
              className="relative"
            >
              {/* Gradient Border Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[3px] sm:p-[4px] shadow-2xl shadow-indigo-500/30 dark:shadow-indigo-500/20">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl sm:blur-2xl opacity-40 animate-pulse" />
              </div>

              {/* Image Container */}
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-white/80 dark:border-gray-800/80 bg-white dark:bg-gray-800 shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} - ${personalInfo.title}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-12 sm:w-20 h-12 sm:h-20 bg-indigo-400/20 dark:bg-indigo-400/10 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-14 sm:w-24 h-14 sm:h-24 bg-purple-400/20 dark:bg-purple-400/10 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute top-1/2 -right-6 sm:-right-8 w-10 sm:w-16 h-10 sm:h-16 bg-pink-400/20 dark:bg-pink-400/10 rounded-full blur-xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;