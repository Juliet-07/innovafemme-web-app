import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-footer.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className=" w-full h-full flex flex-col items-center justify-center p-4 md:px-10 bg-black font-nunito">
        <div className="w-full flex flex-col  md:flex-row md:items-center justify-between gap-4 text-white">
          {/* a */}
          <div>
            <img src={Logo} alt="Innovafemme Logo" />
          </div>
          {/* b */}
          <div className="grid gap-4">
            <div className="font-bold text-xl underline">Quick Links</div>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
          {/* c */}
          <div className="grid gap-4 py-4">
            <div className="font-bold text-xl underline">Contact Us</div>
            <div className="flex items-center gap-2">
              <IoLocationSharp size={20} color="#F1BA1B" />
              <span className=" font-regular">
                Norsken House 1 KN 78st, Kigali, RW
              </span>
            </div>
            <a href="https://wa.me/+250794424387" target="_blank">
              <div className="flex items-center gap-2">
                <FaPhone size={20} color="#F1BA1B" />
                <span className=" font-regular">+250794424387</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/company/innovafemme-tech-solutions/"
              target="_blank"
              className="flex items-center gap-2 cursor-pointer"
            >
              <span>
                <FaLinkedin size={20} color="#F1BA1B" />
              </span>
              <span className=" font-regular">Innovafemme Tech Solution</span>
            </a>
            <div className="flex items-center gap-2 cursor-pointer">
              <a href="mailto:innovafemmetechsolutions@gmail.com">
                <AiOutlineMail size={20} color="#F1BA1B" />
              </a>
              <span className="font-regular">
                innovafemmetechsolutions@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="border-b border-white/15 w-full"></div>
        <div className="w-full flex items-center justify-center py-2 text-center">
          <p className="text-white text-xs font-cocon">
            Innovafemme Tech Solutions {new Date().getFullYear()}
            <br />
            All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
