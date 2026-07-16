// src/components/common/ThemeToggle.jsx
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-14 h-8 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/30 dark:to-purple-500/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-200"
      aria-label="Toggle theme"
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {/* Background Track */}
      <div className="absolute inset-0 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm" />

      {/* Toggle Thumb */}
      <motion.div
        initial={false}
        animate={{
          x: theme === "light" ? 4 : 32,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="absolute top-1 left-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg flex items-center justify-center"
      >
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "light" ? 0 : 180,
            scale: theme === "light" ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
          className="text-white"
        >
          {theme === "light" ? (
            <FaSun className="w-3.5 h-3.5" />
          ) : (
            <FaMoon className="w-3.5 h-3.5" />
          )}
        </motion.div>
      </motion.div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400/20 to-purple-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
}

export default ThemeToggle;