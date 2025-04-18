/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const skillsData = {
  Frontend: ["JavaScript", "React.js", "Tailwind CSS"],
  Backend: ["PHP", "Laravel", "Node.js"],
  Database: ["MongoDB", "MySQL"],
  Design: ["Figma"],
  Tools: ["Git", "Postman"],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const SkillSection = ({ title, skills }) => (
  <motion.div
    variants={fadeInUp}
    className="mb-12 transition-all duration-500 hover:opacity-80"
  >
    <h3 className="text-lg font-light text-gray-400 mb-6 tracking-widest uppercase">
      {title}
    </h3>
    <ul className="space-y-4">
      {skills.map((skill, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className="text-gray-300 text-sm tracking-wider font-light border-b border-gray-800 pb-2"
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="bg-gray-900 text-gray-400 py-24"
      id="skills"
    >
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row md:space-x-16 lg:space-x-24">
          {/* Left side - Title */}
          <motion.div variants={fadeInUp} className="md:w-1/3 mb-12 md:mb-0">
            <span className="text-xs tracking-widest text-gray-500 font-light mb-4 block">
              02 / KNOWLEDGE
            </span>
            <h2 className="text-2xl font-light mb-6 text-gray-200">
              Technical Skills
            </h2>
            <p className="text-sm font-light leading-relaxed opacity-70">
              A collection of tools and technologies I've worked with throughout
              my journey as a developer.
            </p>
          </motion.div>

          {/* Right side - Skills */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <SkillSection key={category} title={category} skills={skills} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
