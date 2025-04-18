/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="bg-gray-900 border-t border-gray-800 py-16 text-gray-400"
    >
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center">
          {/* Divider line with fading effect */}
          <motion.div
            variants={fadeInUp}
            className="w-24 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-12"
          ></motion.div>

          {/* Quote */}
          <motion.p
            variants={fadeInUp}
            className="text-sm italic text-gray-500 font-light mb-10 text-center max-w-md"
          >
            "The quieter you become, the more you can hear."
          </motion.p>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="flex space-x-5 mb-12">
            <motion.a
              whileHover={{ y: -3, color: "#9CA3AF" }}
              transition={{ duration: 0.2 }}
              href="https://github.com/Muhammad-Hilmann-f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithubSquare size={20} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: "#9CA3AF" }}
              transition={{ duration: 0.2 }}
              href="https://www.linkedin.com/in/muhammad-hilman-firmansyah-666senja/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: "#9CA3AF" }}
              transition={{ duration: 0.2 }}
              href="muhammadhf91@gmail.com"
              className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={fadeInUp}
            className="text-xs text-gray-600 font-light tracking-wider"
          >
            <span className="block text-center">
              &copy; {currentYear} Muhammad Hilman Firmansyah
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="block text-center mt-1 text-gray-700 text-xs"
            >
              Built with melancholy & code.
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
