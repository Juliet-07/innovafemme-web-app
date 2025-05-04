import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocalPhone } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#F1BA1B" : "#000000",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <div className="w-full h-20 md:h-[100px] fixed top-0 left-0 flex items-center justify-between gap-0 md:gap-10 mx-auto p-4 md:px-10 z-20 bg-white font-nunito">
      <Link to="/">
        <img src={Logo} alt="Innovafemme" className="md:w-[300px]" />
      </Link>

      <nav className="text-[#000000] font-primaryRegular hidden md:flex gap-4 text-lg items-center">
        <NavLink
          to="/"
          style={activeStyle}
          className="hover:font-primaryBold bubble-hover"
        >
          Home
        </NavLink>
        <NavLink
          to="/about-us"
          style={activeStyle}
          className="hover:font-primaryBold bubble-hover"
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          style={activeStyle}
          className="hover:font-primaryBold bubble-hover"
        >
          Our Services
        </NavLink>
        <a href="mailto:innovafemmetechsolutions@gmail.com" target="_blank">
          <div className="hover:font-primaryBold bubble-hover cursor-pointer flex items-center gap-2">
            <span className="bg-[#F1BA1B] rounded-full w-8 h-8 flex items-center justify-center">
              <AiOutlineMail size={20} color="white" />
            </span>
            Email
          </div>
        </a>
        <a href="https://wa.me/+250794424387" target="_blank">
          <div className="hover:font-primaryBold bubble-hover cursor-pointer flex items-center gap-2">
            <span className="bg-[#33A43B] rounded-full w-8 h-8 flex items-center justify-center">
              <MdOutlineLocalPhone size={20} color="white" />
            </span>
            Call
          </div>
        </a>
      </nav>

      <Link to="/contact-us" className="hidden md:block">
        <div className="pb-[4px] rounded-xl bg-gradient-to-r from-[#F1BA1B] to-[#8B6B10]">
          <div className="bg-black rounded-xl text-white text-lg text-center py-2.5 px-5 font-semibold">
            Contact Us
          </div>
        </div>
      </Link>

      {/* Mobile hamburger */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={30} color="black" />
        ) : (
          <AiOutlineMenu size={30} color="black" />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed right-0 top-20 w-[251px] ease-in-out duration-500 bg-[#FFFBF7] z-20"
            : "fixed right-[-100%]"
        }
      >
        <div className="grid grid-cols-1 gap-3 p-4 font-semibold">
          <NavLink
            to="/"
            style={activeStyle}
            className="p-2 hover:font-primaryBold bubble-hover"
            onClick={() => setNav(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            style={activeStyle}
            className="p-2 hover:font-primaryBold bubble-hover"
            onClick={() => setNav(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            style={activeStyle}
            className="p-2 hover:font-primaryBold bubble-hover"
            onClick={() => setNav(false)}
          >
            Our Services
          </NavLink>
          <a href="mailto:innovafemmetechsolutions@gmail.com" target="_blank">
            <div className="p-2 hover:font-primaryBold bubble-hover cursor-pointer flex items-center gap-2">
              <span className="bg-[#F1BA1B] rounded-full w-8 h-8 flex items-center justify-center">
                <AiOutlineMail size={20} color="white" />
              </span>
              Email
            </div>
          </a>
          <a href="https://wa.me/+250794424387" target="_blank">
            <div className="p-2 hover:font-primaryBold bubble-hover cursor-pointer flex items-center gap-2">
              <span className="bg-[#33A43B] rounded-full w-8 h-8 flex items-center justify-center">
                <MdOutlineLocalPhone size={20} color="white" />
              </span>
              Call
            </div>
          </a>

          <Link
            to="/contact-us"
            className="block md:hidden"
            onClick={() => setNav(false)}
          >
            {/* <div className="pb-[4px] rounded-xl bg-gradient-to-r from-[#F1BA1B] to-[#8B6B10]">
              <div className="bg-black rounded-xl text-white text-lg text-center py-2.5 px-5 font-semibold">
                Contact Us
              </div>
            </div> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
