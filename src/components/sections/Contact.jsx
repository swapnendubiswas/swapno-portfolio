// src/components/sections/Contact.jsx
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaFacebook, 
  FaDownload,
  FaHandshake
} from "react-icons/fa";
import { personalInfo } from "../../data/portfolio";

function Contact() {
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
      y: -6,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const ctaVariants = {
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

  const contactCards = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: "Location",
      value: personalInfo.location,
      href: null,
      color: "from-red-600 to-pink-600",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      title: "GitHub",
      value: "github.com/swapnendubiswas",
      href: personalInfo.github,
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "linkedin.com/in/swapnendu-biswas",
      href: personalInfo.linkedin,
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      title: "Instagram",
      value: "@swapno_on_percussion",
      href: personalInfo.instagram,
      color: "from-pink-600 to-purple-600",
    },
    {
      icon: <FaFacebook className="w-5 h-5" />,
      title: "Facebook",
      value: "Facebook Profile",
      href: null,
      color: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section
      id="contact"
      aria-label="Contact Section"
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
              📬 Get In Touch
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Let's Build Something Amazing Together
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Whether it's an internship, full-time opportunity, collaboration, or just a tech discussion, feel free to reach out.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Contact Cards */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a
                  href={card.href || "#"}
                  target={card.href?.startsWith("http") ? "_blank" : undefined}
                  rel={card.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-start gap-4 ${card.href ? "cursor-pointer" : "cursor-default"}`}
                  aria-label={card.title}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} text-white shadow-lg flex-shrink-0`}>
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {card.title}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
                      {card.value}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - CTA Card */}
          <motion.div
            variants={ctaVariants}
            whileHover="hover"
            className="lg:col-span-1"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/5 dark:via-purple-500/5 dark:to-pink-500/5 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center">
              {/* Icon */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg mb-6">
                <FaHandshake className="w-8 h-8" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                Let's Connect
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                Always open to exciting opportunities, collaborations, internships and innovative projects.
              </p>

              {/* Buttons */}
              <div className="w-full space-y-3">
                <motion.a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30"
                  aria-label="Download Resume"
                >
                  <FaDownload size={16} />
                  Download Resume
                </motion.a>

                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-lg"
                  aria-label="Hire Me"
                >
                  <FaHandshake size={16} />
                  Hire Me
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;