import {
  FaGithubSquare,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <>
      <div className="text-white min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 flex justify-center flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-6 text-center">
            <div className="mockup-code bg-white text-black">
              <pre>
                <code>Skills!</code>
              </pre>
            </div>
            <div className="flex justify-center align-middle">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center text-3xl sm:text-2xl m-12 cursor-pointer hover:text-blue-500 transition ease-linear delay-500">
                <FaHtml5 className="mask mask-parallelogram-4" />
                <FaCss3Alt className="mask mask-hexagon-2" />
                <FaJava />
                <DiMysql />
                <IoLogoJavascript />
                <FaReact />
                <FaNodeJs />
                <FaGitAlt />
              </div>
            </div>
            <div className="flex cursor-pointer justify-center text-3xl mt-6">
              <Link to="https://github.com/Diewaay?tab=repositories">
                <FaGithubSquare className="mr-2" />
              </Link>
              <Link to="https://www.linkedin.com/in/muhammad-hilman-3174832b2/edit/forms/intro/new/?profileFormEntryPoint=PROFILE_SECTION">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
