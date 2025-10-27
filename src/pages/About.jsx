import React from "react";
import HeroPhoto from "../assets/about-man.svg";
import AboutSection from "../components/AboutSection";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full p-4 md:p-10 font-nunito">
        <div className="font-bold text-2xl md:text-4xl my-4 py-2 text-center underline decoration-[#F1BA1B]">
          About Us
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mx-auto">
          {/* Text content */}
          <div className="md:w-[700px] pb-[6px] rounded-xl bg-gradient-to-r from-[#F1BA1B] to-[#8B6B10]">
            <div className="bg-black text-white p-5 md:p-10 md:text-lg font-semibold rounded-xl space-y-4">
              <p className="font-bold text-2xl md:text-3xl">About Us</p>
              <p className="font-medium md:text-lg leading-10">
                InnovaFemme Tech Solutions is a technology-driven company aimed
                at empowering businesses and communities through innovative
                software solutions and technical skill development. We are
                committed to enhancing productivity, efficiency, and growth for
                businesses while fostering the next generation of skilled women
                in tech. At InnovaFemme, we specialize in developing
                cutting-edge software products such as mobile apps, websites,
                and scalable platforms. Our solutions are tailored to meet the
                unique needs of each client, ensuring maximum impact and
                measurable results. Our goal is to provide tools that enhance
                productivity, efficiency, and growth.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-[40%] relative">
            <img
              src={HeroPhoto}
              alt="Carousel Slide"
              className="w-full rounded-md transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <div className="w-full p-4 md:p-10 font-nunito bg-[#f1ba1b]/10">
        {/* About Sections */}
        <div className="my-5 md:my-10">
          <AboutSection />
        </div>
      </div>
    </>
  );
};

export default About;
