import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/image1.svg";
import image2 from "../../assets/image2.svg";
import image3 from "../../assets/image3.svg";
import ServicesGrid from "./services-grid";
import Choose from "../../assets/whyChoose.svg";
import AboutSection from "../../components/AboutSection";

const images = [image1, image2, image3];
const whyChooseUs = [
  {
    sn: "1",
    title: "Client-Centric Approach:",
    message:
      "We prioritize understanding and addressing the unique needs of each client.",
  },
  {
    sn: "2",
    title: "Proven Expertise:",
    message:
      "Our team brings years of experience in software engineering and consultancy.",
  },
  {
    sn: "3",
    title: "Social Impact:",
    message:
      "By choosing InnovaFemme, you support initiatives that empower young women in tech.",
  },
  {
    sn: "4",
    title: "Cutting-Edge Solutions:",
    message:
      "We leverage the latest technologies to deliver innovative and future-proof solutions.",
  },
  {
    sn: "5",
    title: "Scalability & Growth:",
    message:
      "Our solutions are designed to grow with your business, ensuring long-term value.",
  },
];
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="w-full p-4 md:p-10 font-nunito">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mx-auto">
          {/* Text content */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <p className="text-black text-sm mb-2">Welcome to Innovafemme</p>
            <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-4">
              Driving Business Growth &<br />
              Advancing Women in Tech
            </h1>
            <p className="text-black mb-6">
              We leverage technology to drive business success and equip women
              with the skills to thrive through innovative solutions,
              consultancy, and hands-on training.
            </p>
            <Link to="/contact-us">
              <div className="w-[150px] pb-[4px] rounded-xl bg-gradient-to-r from-[#F1BA1B] to-[#8B6B10]">
                <div className="bg-black text-white p-3 text-center text-lg font-semibold rounded-xl shadow-md hover:bg-gray-800 transition-all relative">
                  Contact Us
                  <span className="absolute top-[-3px] right-[-3px] w-4 h-4 bg-[#F1BA1B] rounded-full"></span>
                </div>
              </div>
            </Link>
          </div>

          {/* Carousel */}
          <div className="md:w-[40%] relative">
            <img
              src={images[currentIndex]}
              alt="Carousel Slide"
              className="w-full rounded-md transition-all duration-500"
            />

            {/* Carousel controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === currentIndex ? "bg-yellow-400" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <ServicesGrid />
      {/* Why Choose Us */}
      <div className="w-full flex flex-col items-center justify-center p-4 md:p-10 2xl:p-20 font-nunito">
        <div className="font-bold text-2xl md:text-4xl my-4 py-2 underline decoration-[#F1BA1B]">
          Why Choose Us
        </div>
        <div className="w-full flex flex-col gap-4 md:flex-row items-stretch justify-between 2xl:justify-around">
          <div>
            <img src={Choose} />
          </div>
          <div className="md:w-[40%] 2xl:w-[30%] space-y-4">
            {whyChooseUs.map((choose, index) => (
              <div key={index} className="w-full grid grid-cols-2">
                <div className="w-[60px] h-[60px] bg-gradient-to-b from-[#000000] to-[#666666] text-center text-white flex items-center justify-center font-bold text-2xl md:text-3xl rounded-full">
                  {choose.sn}
                </div>
                <div className="space-x-1">
                  <span className="font-bold text-lg md:text-xl">
                    {choose.title}
                  </span>
                  <span className="textsm md:text-lg">{choose.message}</span>
                </div>
              </div>
            ))}
            <Link to="/contact-us">
              <div className="w-[150px] pb-[4px] rounded-xl bg-gradient-to-r from-[#F1BA1B] to-[#8B6B10]">
                <div className="bg-black text-white p-3 text-center text-lg font-semibold rounded-xl shadow-md hover:bg-gray-800 transition-all relative">
                  Contact Us
                  <span className="absolute top-[-3px] right-[-3px] w-4 h-4 bg-[#F1BA1B] rounded-full"></span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full p-4 md:p-10 font-nunito">
        <div className="font-bold text-2xl md:text-4xl my-4 py-2 text-center underline decoration-[#F1BA1B]">
          About Us
        </div>
        <div className="w-full pb-[6px] rounded-xl bg-gradient-to-r from-[#F1BA1B] to-[#8B6B10]">
          <div className="bg-black text-white p-5 md:p-10 md:text-lg font-semibold rounded-xl space-y-4">
            <p className="font-bold text-2xl md:text-3xl">About Us</p>
            <p className="font-light md:text-lg leading-10">
              InnovaFemme Tech Solutions is a technology-driven company aimed at
              empowering businesses and communities through innovative software
              solutions and technical skill development. We are committed to
              enhancing productivity, efficiency, and growth for businesses
              while fostering the next generation of skilled women in tech. At
              InnovaFemme, we specialize in developing cutting-edge software
              products such as mobile apps, websites, and scalable platforms.
              Our solutions are tailored to meet the unique needs of each
              client, ensuring maximum impact and measurable results. Our goal
              is to provide tools that enhance productivity, efficiency, and
              growth.
            </p>
          </div>
        </div>
        {/* About Sections */}
        <div className="my-5 md:my-10">
          <AboutSection />
        </div>
      </div>
    </>
  );
};

export default Home;
