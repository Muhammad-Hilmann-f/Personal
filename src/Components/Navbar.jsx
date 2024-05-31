/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
  }, []);
  const NavItems = (
    <>
      {" "}
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Skills">Skills</Link>
      </li>
      <li>
        <Link to="/Projects">Projects</Link>
      </li>
    </>
  );
  return (
    <div>
      <div
        className={`max-w-screen-2xl z-50 font-semibold container align-middle mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 backdrop-blur-xl bg-[#3a3982]/30${
          sticky
            ? " bg-black backdrop-filter dark:bg-slate-700 text-white backdrop-blur"
            : ""
        } shadow-md duration-300 transition-all ease-in-out`}
      >
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {NavItems}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl"></a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 ">{NavItems}</ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
