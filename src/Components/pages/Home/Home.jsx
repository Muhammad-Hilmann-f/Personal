import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="text-white min-h-screen  max-w-screen-2xl container mx-auto md:px-20 px-4 flex justify-center flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32 sm:mt-32">
          <div className="space-y-6 text-center">
            <div className="mockup-code bg-white text-black">
              <pre>
                <code>Web Developer!</code>
              </pre>
            </div>
            <h2 className="text-2xl font-primary">
              My Name Is Muhammad Hilman Firmasnyah
            </h2>
            <p className="md:text-base font-thin sm:text-sm font-primary">
              As an informatics student, Im focused on learning frontend
              development and UI design. Despite no formal experience, Im
              actively learning through various resources and personal projects
              to enhance my skills. Im passionate about applying UI/UX
              principles in web development. Im committed to improving and
              interested in expanding into Android and backend development.
            </p>
            <div className="flex cursor-pointer justify-center text-3xl">
              <Link to="/https://github.com/Diewaay?tab=repositories">
                <FaGithubSquare className="mr-2" />
              </Link>
              <Link to="/https://www.linkedin.com/in/muhammad-hilman-3174832b2/edit/forms/intro/new/?profileFormEntryPoint=PROFILE_SECTION">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
