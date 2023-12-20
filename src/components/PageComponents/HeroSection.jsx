"use client";

import React, { useEffect } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";
// import whatOffer from ""

const HeroSection = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 200 });
  // }, []);
  return (
    <div
      id="register"
      className="container text-white mx-auto flex items-center justify-center flex-col gap-10 py-20 mb-20"
    >
      <div className="px-6 flex flex-col items-start md:items-center md:text-center justify-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Image
            src="./whatweoffer.svg"
            alt="Square boxes"
            width={50}
            height={50}
            className="object-cover"
          />
          <h1 className="text-3xl md:flex-1 md:text-6xl lg:text-5xl font-bold text-white -tracking-wide md:w-3/4 lg:3/5">
            WHAT WE OFFER
          </h1>
        </div>

        <p className="text-white mb-5 lg:mb-10 md:text-[17px] text-[#fff] md:w-3/4 lg:w-3/5">
          Welcome to our tranporation services agency. We are the best at our
          trans-portation service ever.
        </p>
        <button
          className="flex items-center space-x-1 bg-[#fd961a] text-white text-[16px] px-5 py-3 hover:opacity-80 ease-in duration-200 rounded-md"
          // data-aos="fade-up"
          // data-aos-delay="800"
        >
          <a href="/contact">Contact Us!</a>
          <TbArrowUpRight className="w-6 h-6" />
        </button>
      </div>
      <div className="pt-6 relative z-10 px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 place-items-center gap-12 md:col-gap-20">
          <div className="relative">
            <div className="w-[360px] md:w-[340px] lg:w-[340px] bg-gray-300 h-[420px]">
              <img
                src="/service1.png"
                alt="Square boxes"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute -bottom-5 left-6 bg-white text-black p-3 flex flex-col items-start gap-3">
              <img
                src="/delivery.png"
                alt="hey you"
                className="object cover w-8 h-8"
              />
              <h1 className="font-medium text-[18px] tracking-wide text-[#fd961a]">
                Land Transportation
              </h1>
              <p>
                We offer specialized departments for continental transports.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="w-[360px] md:w-[340px] bg-gray-300 h-[420px]">
              <img
                src="/service2.png"
                alt="Square boxes"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute -bottom-5 left-6 bg-white text-black p-3 flex flex-col items-start gap-3">
              <img
                src="/plane.png"
                alt="hey you"
                className="object cover w-8 h-8"
              />
              <h1 className="font-medium text-[18px] tracking-wide text-[#fd961a]">
                Air Freight Forwarding
              </h1>
              <p>
                We offer specialized departments for continental transports.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="w-[360px] md:w-[340px] bg-gray-300 h-[420px]">
              <img
                src="/service3.png"
                alt="Square boxes"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute -bottom-5 left-6 bg-white text-black p-3 flex flex-col items-start gap-3">
              <img
                src="/delivery.png"
                alt="hey you"
                className="object cover w-8 h-8"
              />
              <h1 className="font-medium text-[18px] tracking-wide text-[#fd961a]">
                Sea Forwarding
              </h1>
              <p>
                We offer specialized departments for continental transports.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="w-[360px] md:w-[340px] bg-gray-300 h-[420px]">
              <img
                src="/service4.png"
                alt="Square boxes"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute -bottom-5 left-6 bg-white text-black p-3 flex flex-col items-start gap-3">
              <img
                src="/train.png"
                alt="hey you"
                className="object cover w-8 h-8"
              />
              <h1 className="font-medium text-[18px] tracking-wide text-[#fd961a]">
                Railway Logistics
              </h1>
              <p>We offer specialized departments for continental transports</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
