import { motion } from "framer-motion";
import { VscGithubInverted } from "react-icons/vsc";
import {
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMysql, DiMongodb } from "react-icons/di";
import { SiTailwindcss, SiPostman, SiFigma } from "react-icons/si";
import { Link } from "react-router-dom";
import Waves from "../../../blocks/Backgrounds/Waves/Waves";

const Skills = () => {
  const skills = [
    // Frontend Skills
    { Icon: IoLogoJavascript, name: "JavaScript", category: "Frontend" },
    { Icon: FaReact, name: "React.js", category: "Frontend" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", category: "Frontend" },

    // Backend Skills
    { Icon: FaPhp, name: "PHP", category: "Backend" },
    { Icon: FaLaravel, name: "Laravel", category: "Backend" },
    { Icon: FaNodeJs, name: "Node.js", category: "Backend" },

    // Database Skills
    { Icon: DiMongodb, name: "MongoDB", category: "Database" },
    { Icon: DiMysql, name: "MySQL", category: "Database" },

    // Design Skills
    { Icon: SiFigma, name: "Figma", category: "Design" },

    // Tools
    { Icon: FaGitAlt, name: "Git", category: "Tools" },
    { Icon: SiPostman, name: "Postman", category: "Tools" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white py-20">
      <Waves
        lineColor="#fff"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        className="absolute inset-0 z-0"
      />
      <motion.div
        className="relative z-10 container mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {skills.map(({ Icon, name, category }) => (
            <motion.div
              key={name}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Icon className="text-5xl mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-400 mb-4">{category}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div variants={socialVariants} whileHover="hover">
            <Link
              to="https://github.com/Muhammad-Hilmann-f"
              className="text-4xl text-gray-400 hover:text-white"
            >
              <VscGithubInverted />
            </Link>
          </motion.div>
          <motion.div variants={socialVariants} whileHover="hover">
            <Link
              to="https://www.linkedin.com/in/muhammad-hilman-firmansyah-666senja/"
              className="text-4xl text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
