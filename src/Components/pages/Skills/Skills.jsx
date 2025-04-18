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

  return (
    <div className="relative min-h-screen bg-gray-900 text-white py-20">
      <h2 className="text-5xl font-bold text-center mb-16">Technical Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map(({ Icon, name, category }) => (
          <div
            key={name}
            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
          >
            <Icon className="text-5xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-400 mb-4">{category}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-6 mt-16">
        <div>
          <Link
            to="https://github.com/Muhammad-Hilmann-f"
            className="text-4xl text-gray-400 hover:text-white"
          >
            <VscGithubInverted />
          </Link>
        </div>
        <div>
          <Link
            to="https://www.linkedin.com/in/muhammad-hilman-firmansyah-666senja/"
            className="text-4xl text-gray-400 hover:text-white"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
