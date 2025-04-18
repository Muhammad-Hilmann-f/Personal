import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import home from "../../../assets/booking-img/img-fe-booking/home.png";
import homeHealing from "../../../assets/HealingkuAI/home-healing.png";
import homeOnly from "../../../assets/OnlySmart/homeOnly.png";

const Projects = () => {
  const items = [
    {
      image: home,
      link: "https://github.com/Muhammad-Hilmann-f/Booking_D",
      title: "Website Booking Doctors",
      description: "MERN Stack",
    },
    {
      image: homeHealing,
      link: "https://github.com/Reswn/HEALINGKU.AI_UAS_Digital-Startup",
      title: "Website Travel With ChatBot",
      description: "",
    },
    {
      image: homeOnly,
      link: "https://github.com/MuhammadHilmanF/UAS-PBW/tree/onlysmart/PBW-IF-VA/UAS-Onlysmart/OnlySmart",
      title: "E-commarce",
      description: "",
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "https://google.com/",
      title: "Proses",
      description: "This is pretty cool, right?",
    },
  ];

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
            {items.map((item) => {
              return (
                <div
                  key={item.title}
                  className="bg-white p-4 rounded-md shadow-md w-100"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12"
                  />
                  <h2 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h2>
                </div>
              );
            })}
            <div className="flex cursor-pointer justify-center text-3xl">
              <Link to="https://github.com/Muhammad-Hilmann-f">
                <FaGithubSquare className="mr-2" />
              </Link>
              <Link to="https://www.linkedin.com/in/muhammad-hilman-firmansyah-666senja/">
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
