"use client";

import { CircleDollarSign } from "lucide-react";
import { TbArrowUpRight } from "react-icons/tb";
import { GoCheckCircleFill } from "react-icons/go";

const HowItWorks = () => {
  return (
    <>
      <div
        id="register"
        className="container mx-auto flex flex-col items-center justify-center md:justify-around gap-10 py-20 md:px-40"
      >
        <div className="text-center">
          <p className="text-gray-300 mb-3">Our Operation</p>
          <h1 className="text-2xl md:text-6xl lg:text-5xl font-bold mb-5 lg:mb-6 text-white -tracking-wide md:w-3/4 lg:3/5">
            HOW CARGOSPLEET WORKS
          </h1>
        </div>
        <div className="flex items-center w-full md:justify-center md:gap-20 md:items-center flex-col md:flex-row  mx-auto justify-center text-white px-6">
          <div className="w-[380px] md:w-[540px] mb-6">
            <img src="/how.jpg" className="object-cover rounded-lg" alt=" Logo" />
          </div>
          <div className="flex flex-col items-start gap-8 px-4">
            <p className="text-base font-medium">
              Our system is programmed in a way that it is easy and simple for
              everyone to use. If you can unlock your phone, you can use our
              website. Yes!
            </p>
            <div className="flex flex-col space-y-4">
              <p className="flex items-center gap-2">
                <GoCheckCircleFill />
                <span>Package created</span>
              </p>
              <p className="flex items-center gap-2">
                <GoCheckCircleFill />
                <span>Get tracking number</span>
              </p>
              <p className="flex items-center gap-2">
                <GoCheckCircleFill />
                <span>Track your package</span>
              </p>
              <p className="flex items-center gap-2">
                <GoCheckCircleFill />
                <span>Enjoy the process</span>
              </p>
            </div>
            <button
              className="flex items-center space-x-1 bg-[#fd961a] text-white text-[18px] px-6 py-4 hover:opacity-80 ease-in duration-200 rounded-md"
              // data-aos="fade-up"
              // data-aos-delay="800"
            >
              <a href="/register">Register Now</a>
              <TbArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
