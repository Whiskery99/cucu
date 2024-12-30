"use client";

import React, { useEffect } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      id="register"
      className="container mx-auto flex flex-col items-center justify-center gap-16 py-24 mb-32 text-white"
    >
      <div className="px-6 flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Image
            src="./whatweoffer.svg"
            alt="Square boxes"
            width={60}
            height={60}
            className="object-cover"
          />
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            WHAT WE OFFER
          </h1>
        </div>
        <p className="mb-8 text-lg md:w-2/3 lg:w-1/2 leading-relaxed">
          Welcome to our transportation services agency. We provide unparalleled service across land, air, and sea.
        </p>
        <button
          className="flex items-center gap-2 bg-[#fd961a] text-[17px] px-6 py-4 rounded-lg shadow-lg hover:bg-[#e8840f] transition-all duration-300"
        >
          <a href="/contact">Contact Us</a>
          <TbArrowUpRight className="w-6 h-6" />
        </button>
      </div>

      <div className="pt-10 px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="w-[340px] h-[420px] overflow-hidden rounded-lg shadow-xl transition-transform transform group-hover:scale-105">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="absolute -bottom-6 left-6 bg-white text-black p-5 shadow-lg rounded-md w-5/6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-10 h-10 object-cover"
                  />
                  <h1 className="text-lg font-semibold text-[#fd961a]">
                    {service.title}
                  </h1>
                </div>
                <p className="text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    image: "/service1.png",
    icon: "/delivery.png",
    title: "Land Transportation",
    description: "Efficient and reliable land transport across regions."
  },
  {
    image: "/service2.png",
    icon: "/plane.png",
    title: "Air Freight Forwarding",
    description: "Fast and secure air freight services globally."
  },
  {
    image: "/service3.png",
    icon: "/delivery.png",
    title: "Sea Forwarding",
    description: "Comprehensive sea freight solutions for large cargo."
  },
  {
    image: "/service4.png",
    icon: "/train.png",
    title: "Railway Logistics",
    description: "Cost-effective and reliable rail logistics services."
  }
];

export default HeroSection;
