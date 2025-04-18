import { useMemo } from "react";
import { motion } from "framer-motion";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import photos from "../../../../public/assets/photos.jpg";
import "./index.css";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Project";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Home = () => {
  const socialLinks = useMemo(
    () => [
      {
        icon: (
          <FaGithubSquare className="text-3xl hover:text-orange-300 transition-colors" />
        ),
        url: "https://github.com/Muhammad-Hilmann-f",
        label: "GitHub Profile",
      },
      {
        icon: (
          <FaLinkedin className="text-3xl hover:text-orange-300 transition-colors" />
        ),
        url: "https://www.linkedin.com/in/muhammad-hilman-firmansyah-666senja/",
        label: "LinkedIn Profile",
      },
    ],
    []
  );
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background image with subtle animation */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-blend-multiply bg-black/40 grayscale-50"
          style={{ backgroundImage: `url(${photos})` }}
        ></motion.div>

        {/* Hero text with staggered animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 text-orange-600 font-serif leading-[1.1]"
        >
          <motion.h1 variants={fadeInUp} className="text-[4rem]">
            Muhammad
          </motion.h1>
          <motion.h1
            variants={fadeInUp}
            className="text-[4rem] ml-[8rem] mt-[1.2rem]"
          >
            Hilman F
          </motion.h1>
          <motion.h1 variants={fadeInUp} className="text-[4rem] mt-[4rem]">
            Personal
          </motion.h1>
          <motion.h1
            variants={fadeInUp}
            className="text-[4rem] ml-[8rem] mt-[1.2rem]"
          >
            Website
          </motion.h1>
        </motion.div>

        {/* Top nav with subtle fade */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute top-6 left-0 w-full px-8 flex justify-between text-sm text-gray-200 z-20"
        >
          <div>/2025 – Portfolio Website</div>
          <div className="uppercase text-center"></div>
          <div>Every line of code is one step closer.</div>
        </motion.div>

        {/* Social links with fade-in */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 left-6 flex gap-4 z-10"
        >
          {socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-white hover:text-orange-500 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </motion.nav>
      </div>

      {/* About Section with scroll animations */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="bg-black text-white py-16"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Section number */}
            <motion.div variants={fadeInUp} className="text-gray-400 text-lg">
              [ 01 ]
            </motion.div>

            {/* About content */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-xl font-light mb-6">About</h2>
              <p className="font-light leading-relaxed">
                Passionate Frontend Developer And UI Designer With A Strong
                Foundation In Modern Web Technologies. Currently Pursuing
                Informatics Degree While Building Practical Experience Through
                Hands-On Projects.
              </p>

              <p className="font-light leading-relaxed mt-8">
                Skilled In Creating Responsive, User-Centric Interfaces With A
                Focus On Clean Code And Optimal User Experience. Actively
                Expanding Knowledge In Full-Stack Development Including Android
                And Backend Technologies.
              </p>
            </motion.div>

            {/* Approach Angle content */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-xl font-light mb-6">Approach Angle</h2>
              <p className="font-light leading-relaxed">
                I Transform Complex Technical Challenges Into Elegant User
                Experiences. My Approach Combines Modern Frontend Technologies
                With Thoughtful Design Principles To Create Intuitive,
                Responsive Interfaces.
              </p>

              <p className="font-light leading-relaxed mt-8">
                Balancing Visual Appeal With Functional Efficiency, I Build
                Solutions That Not Only Look Beautiful But Also Perform
                Flawlessly. Every Line Of Code Is Crafted With Precision And
                Purpose, Ensuring Optimal Performance Across All Devices.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Plus icon/button at bottom right with hover animation */}
        <motion.div variants={fadeInUp} className="flex justify-end mt-8 mr-8">
          <motion.button
            whileHover={{ rotate: 90, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="text-white text-3xl"
          >
            +
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Skills and Projects components */}
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
