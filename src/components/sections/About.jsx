import { motion } from "framer-motion";
import { personalInfo, education } from "../../data/portfolio";

function About() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -8,
      scale: 1.03,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="about"
      aria-label="About Section"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-300/10 dark:bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100/80 dark:bg-indigo-900/40 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/30 shadow-sm"
            >
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                👨‍💻 About Me
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Know More About Me
            </motion.h2>

            {/* Professional Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">{personalInfo.name}</span>, 
              a passionate <span className="font-semibold text-indigo-600 dark:text-indigo-400">{personalInfo.title}</span> 
              and Full Stack Developer with a strong foundation in Machine Learning, Cybersecurity, and 
              modern web technologies. Currently pursuing my B.Tech in Computer Science & Engineering with 
              specialization in IoT, Cybersecurity & Blockchain Technology.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              I love building intelligent systems that solve real-world problems, combining AI capabilities 
              with robust full-stack development. My work spans from AI-powered applications to secure, 
              scalable web platforms with modern user experiences.
            </motion.p>

            {/* Quick Information */}
            <motion.div
              variants={itemVariants}
              className="space-y-3 pt-4 border-t border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 min-w-[100px]">
                  College
                </span>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                  {education.college}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 min-w-[100px]">
                  Degree
                </span>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                  {education.degree}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 min-w-[100px]">
                  Specialization
                </span>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                  {education.specialization}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 min-w-[100px]">
                  Location
                </span>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                  {personalInfo.location}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* CGPA Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {education.cgpa}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  CGPA / 10.0
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  {education.cgpaNote}
                </div>
                <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
              </div>
            </motion.div>

            {/* Projects Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  4+
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Projects
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  Full Stack & AI
                </div>
                <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              </div>
            </motion.div>

            {/* Research Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                  1
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  IEEE Publication
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  ICRCICN 2025
                </div>
                <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-red-500 rounded-full" />
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  2
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Internships
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  AICTE & Pinnacle Labs
                </div>
                <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;