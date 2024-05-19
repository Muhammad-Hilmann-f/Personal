import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <>
      <div className="text-white min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 flex justify-center flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-6 text-center">
            <div className="mockup-code bg-white text-black">
              <pre>
                <code>Projects!</code>
              </pre>
            </div>
            <span className="loading loading-infinity loading-lg"></span>
            <span className="loading loading-infinity loading-lg"></span>
            <span className="loading loading-infinity loading-lg"></span>
            <span className="loading loading-infinity loading-lg"></span>
            <div className="flex cursor-pointer justify-center text-3xl">
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

export default Projects;
