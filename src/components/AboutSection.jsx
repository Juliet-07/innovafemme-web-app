import React from "react";
import Vision from "../assets/vision.svg";
import Mission from "../assets/mission.svg";
import Values from "../assets/values.svg";
import Process from "../assets/process.svg";

const AboutSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-10">
      <div className="w-full pb-[6px] rounded-[30px] bg-gradient-to-r from-[#F1BA1B] to-[#8B6B10]">
        <div className="h-full bg-black text-white p-5 md:p-10 md:text-lg font-semibold rounded-[30px] space-y-4">
          <div className="flex items-center justify-between">
            <p className="font-bold text-2xl md:text-3xl text-[#F1BA1B]">
              Our Vision
            </p>
            <div>
              <img src={Vision} />
            </div>
          </div>
          <p className="font-light md:text-lg leading-10">
            Empowering businesses through cutting-edge software solutions while
            creating opportunities for young women in tech
          </p>
        </div>
      </div>
      {/* 2 */}
      <div className="w-full pb-[6px] rounded-[30px] bg-gradient-to-r from-[#F1BA1B] to-[#8B6B10]">
        <div className="bg-black text-white p-5 md:p-10 md:text-lg font-semibold rounded-[30px] space-y-4">
          <div className="flex items-center justify-between">
            <p className="font-bold text-2xl md:text-3xl text-[#F1BA1B]">
              Mission
            </p>
            <div>
              <img src={Mission} />
            </div>
          </div>
          <ul className="font-light md:text-lg list-disc pl-5 space-y-2">
            <li>
              Delivering tailored software services that address real-world
              business challenges.
            </li>
            <li>
              Offering expert tech consultancy to help businesses optimize their
              technology strategies.
            </li>
            <li>
              Providing hands-on, project-based training programs to equip young
              women with the skills needed to thrive in the tech industry.
            </li>
          </ul>
        </div>
      </div>
      {/* 3 */}
      <div className="w-full pb-[6px] rounded-[30px] bg-gradient-to-r from-[#F1BA1B] to-[#8B6B10]">
        <div className="bg-black text-white p-5 md:p-10 md:text-lg font-semibold rounded-[30px] space-y-4">
          <div className="flex items-center justify-between">
            <p className="font-bold text-2xl md:text-3xl text-[#F1BA1B]">
              Core Values
            </p>
            <div>
              <img src={Values} />
            </div>
          </div>
          <ul className="font-light md:text-lg list-disc pl-5 space-y-2">
            <li>Innovation: Driving creative and impactful tech solutions.</li>
            <li>
              Empowerment: Helping businesses and communities reach their full
              potential.
            </li>
            <li>Excellence: Delivering high-quality services and products.</li>
            <li>Collaboration: Fostering partnerships and teamwork.</li>
            <li>Inclusion: Supporting diversity and women in tech</li>
          </ul>
        </div>
      </div>
      {/* 4 */}
      <div className="w-full pb-[6px] rounded-[30px] bg-gradient-to-r from-[#F1BA1B] to-[#8B6B10]">
        <div className="h-full bg-black text-white p-5 md:p-10 md:text-lg font-semibold rounded-[30px] space-y-4">
          <div className="flex items-center justify-between">
            <p className="font-bold text-2xl md:text-3xl text-[#F1BA1B]">
              Our Process
            </p>
            <div>
              <img src={Process} />
            </div>
          </div>
          <ul className="font-light md:text-lg list-disc pl-5 space-y-2">
            <li>Consultation: Assessing needs and goals.</li>
            <li>Planning: Crafting a tailored strategy.</li>
            <li>Development: Building high-quality solutions.</li>
            <li>Implementation: Ensuring smooth deployment.</li>
            <li>Support & Training: Ongoing assistance and skill-building.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
