import React from "react";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import Pic1 from "../assets/software-dev.svg";
import Pic2 from "../assets/tech-consult.svg";
import Pic3 from "../assets/maintenance.svg";
import Pic4 from "../assets/training.svg";
import Pic5 from "../assets/iot-solutions.svg";

const Services = () => {
  const services = [
    {
      pic: Pic1,
      title: "Software Development",
      message: "Innovafemme Tech Solutions develops custom software;",
      list: [
        "Mobile App Development",
        "Web Development",
        "Scalable Solutions",
        "Cloud Integration",
        "IoT Solutions",
      ],
    },
    {
      pic: Pic2,
      title: "Tech Consultancy",
      message:
        "We provide tech strategy, system optimization, digital transformation, emerging tech support, and IT maintenance;",
      list: [
        "Tech Strategy & Advisory",
        "System Optimization",
        "Digital Transformation",
        "Emerging Tech Support",
        "IT Maintenance",
      ],
    },
    {
      pic: Pic3,
      title: "Software Maintenance",
      message:
        "We offer software updates, issue resolution, performance optimization, data security, and system scaling",
      list: [
        "Software Updates",
        "Issue Resolution",
        "Performance Optimization",
        "Data Security & Backup",
        "System Customization & Scaling",
      ],
    },
    {
      pic: Pic4,
      title: "Training & Empowerment",
      message:
        "We provide hands-on training, mentorship, real-world experience, and career opportunities.",
      list: [
        "Hands-On Training",
        "Mentorship & Networking",
        "Real-World Experience",
        "Career Opportunities",
      ],
    },
    {
      pic: Pic5,
      title: "I.O.T Solutions",
      message:
        "Smart ecosystems, seamless integration, customized IoT solutions, consulting, and continuos support",
      list: [
        "Smart Ecosystems",
        "Seamless Integration",
        "Customized IoT Solutions",
        "IoT Consulting",
        "Continuos Support",
      ],
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <div className="w-full p-4 md:p-10 font-nunito">
        <div className="font-bold text-2xl md:text-4xl my-4 py-2 text-center underline decoration-[#F1BA1B]">
          Our Services
        </div>
        <div className="my-10">
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black text-white flex flex-col items-center justify-center rounded-2xl"
              >
                <div className="p-2 md:pt-4">
                  <img src={service.pic} alt={service.title} />
                </div>
                <div className="p-4">
                  <p className="text-xl font-semibold">{service.title}</p>
                  <p className="my-3">{service.message}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {service.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4">
          <Link to="/contact-us">
            <div className="w-[150px] pb-[4px] rounded-xl bg-gradient-to-r from-[#F1BA1B] to-[#8B6B10]">
              <div className="bg-black text-white p-3 text-center text-lg font-semibold rounded-xl shadow-md hover:bg-gray-800 transition-all relative">
                Contact Us
                <span className="absolute top-[-1px] right-[-1px] w-4 h-4 bg-[#F1BA1B] rounded-full"></span>
              </div>
            </div>
          </Link>
          <div className="w-[150px] h-[50px] border border-black rounded-xl flex items-center justify-center gap-2 text-lg">
            <span>
              <FiPhone size={20} />
            </span>
            Call
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
