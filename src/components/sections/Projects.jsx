import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaCheckCircle } from "react-icons/fa";
import { projects } from "../../data/projects";

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const featuredCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const getCategoryColor = (techStack) => {
    if (techStack.some(tech => ["Python", "Flask", "TensorFlow", "OpenCV", "Tesseract OCR"].includes(tech))) {
      return "from-blue-600 to-indigo-600";
    }
    if (techStack.some(tech => ["React", "Vite", "Tailwind CSS", "Framer Motion"].includes(tech))) {
      return "from-indigo-600 to-purple-600";
    }
    if (techStack.some(tech => ["Node.js", "Express.js", "MongoDB", "JWT"].includes(tech))) {
      return "from-purple-600 to-pink-600";
    }
    if (techStack.some(tech => ["Power BI", "DAX", "Power Query"].includes(tech))) {
      return "from-orange-600 to-red-600";
    }
    return "from-indigo-600 to-purple-600";
  };

  const getCategoryLabel = (techStack) => {
    if (techStack.some(tech => ["Python", "Flask", "TensorFlow", "OpenCV", "Tesseract OCR"].includes(tech))) {
      return "AI / Machine Learning";
    }
    if (techStack.some(tech => ["React", "Vite", "Tailwind CSS", "Framer Motion"].includes(tech))) {
      return "Frontend Development";
    }
    if (techStack.some(tech => ["Node.js", "Express.js", "MongoDB", "JWT"].includes(tech))) {
      return "Full Stack Development";
    }
    if (techStack.some(tech => ["Power BI", "DAX", "Power Query"].includes(tech))) {
      return "Data Analytics";
    }
    return "Web Development";
  };

  const getStatusLabel = (techStack) => {
    if (techStack.some(tech => ["Power BI", "DAX", "Power Query"].includes(tech))) {
      return "Production";
    }
    if (techStack.some(tech => ["Python", "Flask", "TensorFlow", "OpenCV"].includes(tech))) {
      return "Research";
    }
    return "Development";
  };

  const getStatusColor = (techStack) => {
    if (techStack.some(tech => ["Power BI", "DAX", "Power Query"].includes(tech))) {
      return "from-green-500 to-emerald-500";
    }
    if (techStack.some(tech => ["Python", "Flask", "TensorFlow", "OpenCV"].includes(tech))) {
      return "from-blue-500 to-indigo-500";
    }
    return "from-yellow-500 to-orange-500";
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      aria-label="Projects Section"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-300/10 dark:bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-indigo-100/80 dark:bg-indigo-900/40 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/30 shadow-sm"
          >
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              🚀 Featured Work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Projects I've Built
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A collection of AI, Full Stack, Machine Learning and Data Analytics projects 
            showcasing practical problem solving and modern software development.
          </motion.p>
        </motion.div>

        {/* Featured Project */}
        {featuredProjects.length > 0 && (
          <motion.div
            variants={containerVariants}
            className="mb-12"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={featuredCardVariants}
                whileHover="hover"
                className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/5 dark:via-purple-500/5 dark:to-pink-500/5 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Content */}
                  <div className="flex-1">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-md">
                          <FaStar className="w-3.5 h-3.5" />
                          Featured
                        </span>
                      )}
                      <span className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(project.techStack)} text-white shadow-md`}>
                        <FaCode className="w-3.5 h-3.5 mr-1.5" />
                        {getCategoryLabel(project.techStack)}
                      </span>
                      <span className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r ${getStatusColor(project.techStack)} text-white shadow-md`}>
                        <FaCheckCircle className="w-3.5 h-3.5 mr-1.5" />
                        {getStatusLabel(project.techStack)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-2 mb-4">
                      {project.features?.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-indigo-50/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-700/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 shadow-lg shadow-gray-900/20 dark:shadow-gray-700/20"
                          aria-label="GitHub Repository"
                        >
                          <FaGithub size={18} />
                          GitHub
                        </motion.a>
                      )}
                      {project.liveDemo && (
                        <motion.a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30"
                          aria-label="Live Demo"
                        >
                          <FaExternalLinkAlt size={16} />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(project.techStack)} text-white shadow-sm`}>
                  <FaCode className="w-3 h-3 mr-1" />
                  {getCategoryLabel(project.techStack)}
                </span>
                <span className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getStatusColor(project.techStack)} text-white shadow-sm`}>
                  <FaCheckCircle className="w-3 h-3 mr-1" />
                  {getStatusLabel(project.techStack)}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-sm">
                    <FaStar className="w-3 h-3" />
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-indigo-50/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-700/30"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100/80 dark:bg-gray-700/30 text-gray-600 dark:text-gray-400">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center gap-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={18} />
                    </motion.a>
                  )}
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={16} />
                    </motion.a>
                  )}
                </div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {project.techStack.length} technologies
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;