/* eslint-disable react/no-unescaped-entities */
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import TextPressure from "../../../blocks/TextAnimations/TextPressure/TextPressure";
import Iridescence from "../../../blocks/Backgrounds/Iridescence/Iridescence";
import card from "../../../blocks/Components/Lanyard/card.glb";
import lanyardTexture from "../../../blocks/Components/Lanyard/lanyard.png";
import Lanyard from "../../../blocks/Components/Lanyard/Lanyard.tsx";
import hilman from "../../../assets/lanyard/hilman.png";

const Home = () => {
  const socialLinks = [
    {
      icon: (
        <FaGithubSquare className="text-3xl hover:text-gray-300 transition-colors" />
      ),
      url: "https://github.com/Muhammad-Hilmann-f",
      label: "GitHub Profile",
    },
    {
      icon: (
        <FaLinkedin className="text-3xl hover:text-gray-300 transition-colors" />
      ),
      url: "https://www.linkedin.com/in/muhammad-hilman-firmansyah-666senja/",
      label: "LinkedIn Profile",
    },
  ];

  return (
    <div className="relative text-white min-h-screen flex flex-col items-center justify-center lg:flex-row lg:justify-between">
      <div className="absolute inset-0 z-0">
        <Iridescence
          color={[0.9, 0.3, 0.7]}
          mouseReact={true}
          amplitude={0.1}
          speed={0.6}
          className="w-full h-full"
        />
      </div>
      <div className="flex justify-center lg:w-1/2 w-full p-4 z-10">
        <Lanyard
          position={[0, 0, 20]}
          gravity={[0, -40, 0]}
          card={card}
          lanyardTexture={lanyardTexture}
          foto={hilman}
        />
      </div>

      <main className="relative lg:w-1/2 w-full px-6 py-12 z-10">
        <div className="space-y-8 text-center lg:text-left">
          <div className="mockup-code bg-black/80 backdrop-blur-sm p-4 rounded-lg">
            <code className="text-green-400 text-lg">Frontend Developer</code>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <TextPressure
              text="Muhammad Hilman Firmansyah"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={false}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={32}
            />
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed font-light">
            Passionate frontend developer and UI designer with a strong
            foundation in modern web technologies. Currently pursuing
            Informatics degree while building practical experience through
            hands-on projects. Skilled in creating responsive, user-centric
            interfaces with a focus on clean code and optimal user experience.
            Actively expanding knowledge in full-stack development including
            Android and backend technologies.
          </p>

          <nav className="flex justify-center lg:justify-start gap-4 mt-6">
            {socialLinks.map((link) => (
              <Link
                key={link.url}
                to={link.url}
                aria-label={link.label}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {link.icon}
              </Link>
            ))}
          </nav>
        </div>
      </main>
    </div>
  );
};

export default Home;
