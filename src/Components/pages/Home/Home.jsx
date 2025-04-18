import { useMemo } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import photos from "../../../../public/assets/photos.jpg";
import "./index.css";
// import Skills from "../Skills/Skills";

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
        {/* Background image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-blend-multiply bg-black/40 grayscale-50"
          style={{ backgroundImage: `url(${photos})` }}
        ></div>
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 text-orange-600 font-serif leading-[1.1]">
          <h1 className="text-[4rem]">Muhammad</h1>
          <h1 className="text-[4rem] ml-[8rem] mt-[1.2rem]">Hilman F</h1>
          <h1 className="text-[4rem] mt-[4rem]">Personal</h1>
          <h1 className="text-[4rem] ml-[8rem] mt-[1.2rem]">Website</h1>
        </div>
        {/* Top nav */}
        <div className="absolute top-6 left-0 w-full px-8 flex justify-between text-sm text-gray-200 z-20">
          <div>/2025 – Portfolio Website</div>
          <div className="uppercase text-center"></div>
          <div>Every line of code is one step closer.</div>
        </div>
        {/* Social links - bottom left */}
        <nav className="absolute bottom-6 left-6 flex gap-4 z-10">
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
        </nav>
      </div>

      {/* About Section */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Section number */}
            <div className="text-gray-400 text-lg">[ 01 ]</div>

            {/* About content */}
            <div className="space-y-8">
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
            </div>

            {/* Approach Angle content */}
            <div className="space-y-8">
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
            </div>
          </div>
        </div>

        {/* Plus icon/button at bottom right */}
        <div className="flex justify-end mt-8 mr-8">
          <button className="text-white text-3xl">+</button>
        </div>
      </div>

      {/* You can add your Skills component here */}
      {/* <Skills /> */}
    </>
  );
};

export default Home;
