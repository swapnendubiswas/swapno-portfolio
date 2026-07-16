import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode, FaTerminal, FaChevronRight } from "react-icons/fa";
import { codingProfiles } from "../../data/portfolio";

function CodingProfiles() {
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

  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <FaGithub className="w-6 h-6" />;
      case "leetcode":
        return <FaLaptopCode className="w-6 h-6" />;
      case "hackerrank":
        return <FaTerminal className="w-6 h-6" />;
      case "codechef":
        return <FaCode className="w-6 h-6" />;
      default:
        return <FaCode className="w-6 h-6" />;
    }
  };

  const getPlatformColor = (platform) => {
    switch (platform.toLowerCase()) {
      case "github":
        return "from-gray-700 to-gray-900";
      case "leetcode":
        return "from-yellow-500 to-orange-500";
      case "hackerrank":
        return "from-green-500 to-emerald-500";
      case "codechef":
        return "from-brown-500 to-amber-600";
      default:
        return "from-indigo-600 to-purple-600";
    }
  };

  const getPlatformGradient = (platform) => {
    switch (platform.toLowerCase()) {
      case "github":
        return "from-gray-600 to-gray-800";
      case "leetcode":
        return "from-yellow-600 to-orange-600";
      case "hackerrank":
        return "from-green-600 to-emerald-600";
      case "codechef":
        return "from-amber-600 to-orange-600";
      default:
        return "from-indigo-600 to-purple-600";
    }
  };

  return (
    <section
      id="coding-profiles"
      aria-label="Coding Profiles Section"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
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
              💻 Coding Profiles
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Competitive Programming & Open Source
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Explore my coding journey across competitive programming platforms and open source development.
          </motion.p>
        </motion.div>

        {/* Profiles Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {codingProfiles.map((profile) => (
            <motion.div
              key={profile.id}
              variants={cardVariants}
              whileHover="hover"
              className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Platform Icon */}
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${getPlatformColor(profile.platform)} text-white shadow-lg mb-4`}>
                {getPlatformIcon(profile.platform)}
              </div>

              {/* Platform Name */}
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
                {profile.platform}
              </h3>

              {/* Username */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-mono">
                @{profile.username}
              </p>

              {/* Visit Profile Button */}
              <motion.a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 bg-gradient-to-r ${getPlatformGradient(profile.platform)} text-white shadow-lg hover:shadow-xl`}
                aria-label={`Visit ${profile.platform} profile`}
              >
                <FaExternalLinkAlt size={14} />
                Visit Profile
                <FaChevronRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CodingProfiles;