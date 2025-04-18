/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaGithubSquare, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import home from "../../../assets/booking-img/img-fe-booking/home.png";
import homeHealing from "../../../assets/HealingkuAI/home-healing.png";
import homeOnly from "../../../assets/OnlySmart/homeOnly.png";
import spotifyClone from "../../../assets/spotifyCLone/spotify-clone.png";

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

const Projects = () => {
  const projects = [
    {
      image: home,
      link: "https://github.com/Muhammad-Hilmann-f/Booking_D",
      title: "Website Booking Doctors",
      description:
        "A MERN stack application that allows users to book appointments with healthcare providers.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      image: homeHealing,
      link: "https://github.com/Reswn/HEALINGKU.AI_UAS_Digital-Startup",
      title: "Website Travel With ChatBot",
      description:
        "A travel platform with integrated AI chatbot to assist users in planning their trips.",
      tech: ["React", "AI Integration", "Node.js"],
    },
    {
      image: homeOnly,
      link: "https://github.com/MuhammadHilmanF/UAS-PBW/tree/onlysmart/PBW-IF-VA/UAS-Onlysmart/OnlySmart",
      title: "OnlySmart E-commerce",
      description:
        "An e-commerce platform designed with clean UI and seamless user experience.",
      tech: ["PHP", "MySQL", "JavaScript"],
    },
    {
      image: spotifyClone,
      link: "https://github.com/Muhammad-Hilmann-f/spotify-clone",
      title: "Spotify Clone",
      description:
        "A feature-rich Spotify clone with user authentication, playlist management, and song playback capabilities.",
      tech: ["Next.js", "Supabase", "Stripe", "Tailwind CSS", "TypeScript"],
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "https://github.com/Muhammad-Hilmann-f",
      title: "Upcoming Project",
      description: "New project coming soon. Stay tuned for more details.",
      tech: ["In Progress"],
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
      className="bg-gray-900 text-gray-300 py-24"
      id="projects"
    >
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row md:space-x-16 lg:space-x-24">
          {/* Left side - Title */}
          <motion.div variants={fadeInUp} className="md:w-1/3 mb-12 md:mb-0">
            <span className="text-xs tracking-widest text-gray-500 font-light mb-4 block">
              03 / PORTFOLIO
            </span>
            <h2 className="text-2xl font-light mb-6 text-gray-200">
              Recent Projects
            </h2>
            <p className="text-sm font-light leading-relaxed opacity-70">
              A collection of projects I've developed, showcasing my skills and
              experience in web development.
            </p>
            <div className="flex mt-8 space-x-4 text-2xl">
              <a
                href="https://github.com/Muhammad-Hilmann-f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaGithubSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-hilman-firmansyah-666senja/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Right side - Projects */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 gap-12">
              {projects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp} className="group">
                  <div className="flex flex-col md:flex-row gap-6 border-b border-gray-800 pb-12">
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.3 },
                      }}
                      className="md:w-1/3 overflow-hidden rounded"
                    >
                      <motion.img
                        initial={{ filter: "grayscale(100%)" }}
                        whileInView={{ filter: "grayscale(70%)" }}
                        whileHover={{ filter: "grayscale(30%)" }}
                        transition={{ duration: 0.5 }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover object-top opacity-70 group-hover:opacity-100 transition-all duration-500"
                      />
                    </motion.div>

                    <div className="md:w-2/3">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-light text-gray-200 group-hover:text-white transition-colors duration-300">
                          {project.title}
                        </h3>
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          transition={{ duration: 0.2 }}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-200 transition-colors duration-300"
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      </div>

                      <p className="text-sm font-light text-gray-400 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((item, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                            className="px-3 py-1 text-xs bg-gray-800 text-gray-400 rounded-full"
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
