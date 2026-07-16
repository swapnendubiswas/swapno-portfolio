import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaCloud, FaShieldAlt, FaChartLine, FaCode, FaBrain } from "react-icons/fa";
import { certifications } from "../../data/portfolio";

function Certifications() {
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

  const getCategoryIcon = (category) => {
    if (category.toLowerCase().includes("cloud")) {
      return <FaCloud className="w-5 h-5" />;
    }
    if (category.toLowerCase().includes("cyber") || category.toLowerCase().includes("security")) {
      return <FaShieldAlt className="w-5 h-5" />;
    }
    if (category.toLowerCase().includes("data") || category.toLowerCase().includes("analytics")) {
      return <FaChartLine className="w-5 h-5" />;
    }
    if (category.toLowerCase().includes("development") || category.toLowerCase().includes("application")) {
      return <FaCode className="w-5 h-5" />;
    }
    return <FaBrain className="w-5 h-5" />;
  };

  const getCategoryColor = (category) => {
    if (category.toLowerCase().includes("cloud")) {
      return "from-blue-600 to-indigo-600";
    }
    if (category.toLowerCase().includes("cyber") || category.toLowerCase().includes("security")) {
      return "from-purple-600 to-pink-600";
    }
    if (category.toLowerCase().includes("data") || category.toLowerCase().includes("analytics")) {
      return "from-green-600 to-emerald-600";
    }
    if (category.toLowerCase().includes("development") || category.toLowerCase().includes("application")) {
      return "from-indigo-600 to-purple-600";
    }
    return "from-pink-600 to-red-600";
  };

  return (
    <section
      id="certifications"
      aria-label="Certifications Section"
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
              🏆 Certifications
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Courses & Professional Certifications
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Professional certifications and learning achievements across AI, Cloud, Cybersecurity and Data Analytics.
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover="hover"
              className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Icon & Category Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(cert.category)} text-white shadow-lg`}>
                  {getCategoryIcon(cert.category)}
                </div>
                <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getCategoryColor(cert.category)} text-white shadow-sm`}>
                  {cert.category}
                </span>
              </div>

              {/* Certificate Title */}
              <h3 className="text-base font-bold text-gray-800 dark:text-gray-200 mb-2 flex-grow">
                {cert.title}
              </h3>

              {/* Organization & Year */}
              <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <FaCertificate className="text-indigo-500 dark:text-indigo-400" />
                  <span>{cert.organization}</span>
                </div>
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                  {cert.year}
                </span>
              </div>

              {/* View Certificate Button */}
              {cert.link && (
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg font-medium transition-all duration-200 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30"
                  aria-label="View Certificate"
                >
                  <FaExternalLinkAlt size={14} />
                  View Certificate
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;