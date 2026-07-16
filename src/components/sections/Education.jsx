import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBook, FaAward } from "react-icons/fa";
import { education } from "../../data/portfolio";

function Education() {
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
      aria-label="Education Section"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-300/10 dark:bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
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
              🎓 Education
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Academic Journey
          </motion.h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

          {/* Education Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="relative flex flex-col md:flex-row items-start gap-6 md:gap-8"
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-4 border-white dark:border-gray-800 shadow-lg z-10" />

            {/* Content */}
            <div className="w-full md:w-[calc(50%-2rem)] md:ml-auto">
              <motion.div
                variants={cardVariants}
                className="p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-2xl mb-6 shadow-lg shadow-indigo-500/30"
                >
                  <FaGraduationCap />
                </motion.div>

                {/* College */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {education.college}
                </h3>

                {/* Degree */}
                <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                  {education.degree}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Specialization */}
                  <div className="flex items-start gap-3">
                    <FaBook className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Specialization
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {education.specialization}
                      </p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-start gap-3">
                    <FaCalendarAlt className="text-purple-500 dark:text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Duration
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {education.duration}
                      </p>
                    </div>
                  </div>

                  {/* CGPA */}
                  <div className="flex items-start gap-3">
                    <FaAward className="text-pink-500 dark:text-pink-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        CGPA
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {education.cgpa} / 10.0
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                        {education.cgpaNote}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-red-500 dark:text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Kolkata, West Bengal
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Education;