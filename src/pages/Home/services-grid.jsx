import React from "react";
import Code from "../../assets/code.svg";
import Consultancy from "../../assets/consult.svg";
import Maintain from "../../assets/maintain.svg";
import Empower from "../../assets/empower.svg";
import IOT from "../../assets/iot.svg";

const ServicesGrid = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden w-full p-4 md:p-10 font-nunito md:flex flex-col items-center justify-center">
        <div className="font-bold text-4xl my-4 py-2 underline decoration-[#F1BA1B]">
          Our Services
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-[120px] h-[120px] bg-black shadow-md shadow-[#F1BA1B] rounded-full flex items-center justify-center">
              <img src={Code} />
            </div>
            <p className="text-xl font-semibold text-[#000000]">
              Software Development
            </p>
            <ul className="list-disc font-light">
              <li>Mobile App Development</li>
              <li>Web Development</li>
              <li>Scalable Solutions</li>
              <li>Cloud Integration</li>
              <li>IoT Solutions</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-[120px] h-[120px] bg-black shadow-md shadow-[#F1BA1B] rounded-full flex items-center justify-center">
              <img src={Consultancy} />
            </div>
            <p className="text-xl font-semibold text-[#000000]">
              Tech Consultancy
            </p>
            <ul className="list-disc font-light">
              <li>Tech Strategy & Advisory</li>
              <li>System Optimization</li>
              <li>Digital Transformation</li>
              <li>Emerging Tech Support</li>
              <li>IT Maintenance</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-[120px] h-[120px] bg-black shadow-md shadow-[#F1BA1B] rounded-full flex items-center justify-center">
              <img src={Maintain} />
            </div>
            <p className="text-xl font-semibold text-[#000000]">
              Software Maintenance
            </p>
            <ul className="list-disc font-light">
              <li>Software Updates</li>
              <li>Issue Resolution</li>
              <li>Performance Optimization</li>
              <li>Data Security & Backup</li>
              <li>System Customization & Scaling</li>
            </ul>
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-10 my-4">
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-[120px] h-[120px] bg-black shadow-md shadow-[#F1BA1B] rounded-full flex items-center justify-center">
              <img src={Empower} />
            </div>
            <p className="text-xl font-semibold text-[#000000]">
              Training & Empowerment
            </p>
            <ul className="list-disc font-light">
              <li>Hands-On Training</li>
              <li>Mentorship & Networking</li>
              <li>Real-World Experience</li>
              <li>Career Opportunities</li>
            </ul>
          </div>
          <div></div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-[120px] h-[120px] bg-black shadow-md shadow-[#F1BA1B] rounded-full flex items-center justify-center">
              <img src={IOT} />
            </div>
            <p className="text-xl font-semibold text-[#000000]">
              I.O.T Solutions
            </p>
            <ul className="list-disc font-light">
              <li>Smart Ecosystems</li>
              <li>Seamless Integration</li>
              <li>Customized IoT Solutions</li>
              <li>IoT Solutions</li>
              <li>Continuous Support</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="md:hidden w-full p-4 md:p-10 font-nunito flex flex-col items-center justify-center">
        <div className="font-semibold text-2xl my-4 py-2 underline decoration-[#F1BA1B]">
          Our Services
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-[100px] h-[100px] bg-black shadow-md shadow-[#F1BA1B] rounded-full flex items-center justify-center">
              <img src={Code} />
            </div>
            <p className="font-semibold text-[#000000]">Software Development</p>
            <ul className="list-disc font-light text-sm pl-4">
              <li>Mobile App Development</li>
              <li>Web Development</li>
              <li>Scalable Solutions</li>
              <li>Cloud Integration</li>
              <li>IoT Solutions</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-[100px] h-[100px] bg-black shadow-md shadow-[#F1BA1B] rounded-full flex items-center justify-center">
              <img src={Consultancy} />
            </div>
            <p className="font-semibold text-[#000000]">Tech Consultancy</p>
            <ul className="list-disc font-light text-sm">
              <li>Tech Strategy & Advisory</li>
              <li>System Optimization</li>
              <li>Digital Transformation</li>
              <li>Emerging Tech Support</li>
              <li>IT Maintenance</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-[100px] h-[100px] bg-black shadow-md shadow-[#F1BA1B] rounded-full flex items-center justify-center">
              <img src={Maintain} />
            </div>
            <p className="font-semibold text-[#000000]">Software Maintenance</p>
            <ul className="list-disc font-light pl-4 text-sm">
              <li>Software Updates</li>
              <li>Issue Resolution</li>
              <li>Performance Optimization</li>
              <li>Data Security & Backup</li>
              <li>System Customization & Scaling</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-[100px] h-[100px] bg-black shadow-md shadow-[#F1BA1B] rounded-full flex items-center justify-center">
              <img src={Empower} />
            </div>
            <p className="font-semibold text-[#000000]">
              Training & Empowerment
            </p>
            <ul className="list-disc font-light text-sm">
              <li>Hands-On Training</li>
              <li>Mentorship & Networking</li>
              <li>Real-World Experience</li>
              <li>Career Opportunities</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center my-4 space-y-3">
          <div className="w-[100px] h-[100px] bg-black shadow-md shadow-[#F1BA1B] rounded-full flex items-center justify-center">
            <img src={IOT} />
          </div>
          <p className="font-semibold text-[#000000]">
            I.O.T Solutions
          </p>
          <ul className="list-disc font-light text-sm">
            <li>Smart Ecosystems</li>
            <li>Seamless Integration</li>
            <li>Customized IoT Solutions</li>
            <li>IoT Solutions</li>
            <li>Continuous Support</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServicesGrid;
