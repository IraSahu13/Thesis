import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showPublicationsMenu, setShowPublicationsMenu] = useState(false);
  const [showResourcesMenu, setShowResourcesMenu] = useState(false);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 mr-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-designColor duration-300"
              >
                {title}
              </Link>
            </li>
          ))}
          <li
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            key={"gallery"}
          >
            <Link
              activeClass="active"
              to="/gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-designColor duration-300"
            >
              Lab Gallery
            </Link>
          </li>
          <li className="text-base font-normal text-gray-400 tracking-wide ">
            <Link
              onClick={() => setShowPublicationsMenu(!showPublicationsMenu)}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-designColor duration-300"
            >
              Publications
            </Link>
            {showPublicationsMenu && (
              <div
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-bodyColor shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-2" role="none">
                  {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                  <Link
                    activeClass="active"
                    to="/patents"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    class="block px-4 py-2 text-sm cursor-pointer hover:text-designColor duration-300"
                  >
                    Patents
                  </Link>
                  <Link
                    activeClass="active"
                    to="/research"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    class="block px-4 py-2 text-sm cursor-pointer hover:text-designColor duration-300"
                  >
                    Research Articles
                  </Link>
                  <Link
                    activeClass="active"
                    to="/chapters"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    class="block px-4 py-2 text-sm cursor-pointer hover:text-designColor duration-300"
                  >
                    Book Chapters
                  </Link>
                  <Link
                    activeClass="active"
                    to="/reviews"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    class="block px-4 py-2 text-sm cursor-pointer hover:text-designColor duration-300"
                  >
                    Reviews
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            key={"students"}
          >
            <Link
              activeClass="active"
              to="/students"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-designColor duration-300"
            >
              Students
            </Link>
          </li>
          <li
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            key={"gallery"}
          >
            <Link
              activeClass="active"
              to="/gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-designColor duration-300"
            >
              Lab Gallery
            </Link>
          </li>
          <li className="text-base font-normal text-gray-400 tracking-wide ">
            <Link
              onClick={() => setShowResourcesMenu(!showResourcesMenu)}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-designColor duration-300"
            >
              Resourses
            </Link>
            {showResourcesMenu && (
              <div
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-bodyColor shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                  <Link
                    activeClass="active"
                    to="/monographs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    class="block px-4 py-2 text-sm cursor-pointer hover:text-designColor duration-300"
                  >
                    Monographs
                  </Link>
                  <Link
                    activeClass="active"
                    to="/research"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    class="block px-4 py-2 text-sm cursor-pointer hover:text-designColor duration-300"
                  >
                    Natural Products
                  </Link>
                  <Link
                    activeClass="active"
                    to="/chapters"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    class="block px-4 py-2 text-sm cursor-pointer hover:text-designColor duration-300"
                  >
                    NMR Data
                  </Link>
                  <Link
                    activeClass="active"
                    to="/reviews"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    class="block px-4 py-2 text-sm cursor-pointer hover:text-designColor duration-300"
                  >
                    Reviews
                  </Link>
                </div>
              </div>
            )}
          </li>
        </ul>
        {/* <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl  bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span> */}
        {/* {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum soluta perspiciatis molestias enim cum repellat, magnam
                  exercitationem distinctio aliquid nam.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <FaFacebookF />
                  </span>
                  <span className="bannerIcon">
                    <FaTwitter />
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
