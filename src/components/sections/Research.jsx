import { motion } from "framer-motion";
import { FaBook, FaExternalLinkAlt, FaAward, FaCheckCircle } from "react-icons/fa";
import { research } from "../../data/portfolio";

function Research() {
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
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="research"
      aria-label="Research Section"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-300/10 dark:bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
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
              📄 Research
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Research Publication
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Published research work demonstrating practical application of Artificial Intelligence and Deep Learning.
          </motion.p>
        </motion.div>

        {/* Research Card */}
        <motion.div
          variants={containerVariants}
          className="flex justify-center"
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="w-full max-w-3xl p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/5 dark:via-purple-500/5 dark:to-pink-500/5 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* IEEE Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/30">
              <FaCheckCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">IEEE Xplore</span>
            </div>

            {/* Paper Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              {research.title}
            </h3>

            {/* Conference & Publisher */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <FaBook className="text-indigo-500 dark:text-indigo-400" />
                <span className="font-medium">{research.conference}</span>
              </div>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <FaAward className="text-purple-500 dark:text-purple-400" />
                <span className="font-medium">{research.publisher}</span>
              </div>
            </div>

            {/* Accuracy */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 dark:from-green-500/10 dark:to-emerald-500/10 border border-green-500/30 dark:border-green-500/20">
              <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                Accuracy: {research.accuracy}
              </span>
            </div>

            {/* Description */}
            <p className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {research.description}
            </p>

            {/* Published Info */}
            <div className="flex items-center gap-2 mb-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
              Published in IEEE Xplore
            </div>

            {/* View Publication Button */}
            <motion.a
              href={research.link || "#"}
              target={research.link ? "_blank" : undefined}
              rel={research.link ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                research.link
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30"
                  : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed opacity-50"
              }`}
              aria-label={research.link ? "View Publication" : "Coming Soon"}
            >
              <FaExternalLinkAlt size={16} />
              {research.link ? "View Publication" : "Coming Soon"}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Research;