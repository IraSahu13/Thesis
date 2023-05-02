import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
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
      <div className="w-full h-full col-span-3">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Notifications
        </h3>
        <ul className="flex flex-col  font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg gap-8 text-gray-600 relative duration-300 group cursor-pointer">
              You'll be notified here for any announcement
              {/* <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> */}
            </span>
            {/* <span className="w-full text-lg text-gray-600 relative hover:text-designColor duration-300 group cursor-pointer">
              You'll be notified here for any announcement
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
