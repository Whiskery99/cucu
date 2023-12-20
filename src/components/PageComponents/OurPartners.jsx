"use client";

import { CircleDollarSign } from "lucide-react";
import { TbArrowUpRight } from "react-icons/tb";
import { GoCheckCircleFill } from "react-icons/go";

const OurPartners = () => {
  return (
    <>
      <div id="register" className="mx-auto py-20 bg-[#fff] w-full">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 container">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-semibold lg:mb-0 text-black -tracking-wide px-6 md:px-0">
              We are <span className="text-[#fd961a]">trusted</span> by major
              global brands.
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-4 place-items-center md:flex items-center w-full md:justify-center md:gap-10 md:items-center flex-col md:flex-row  mx-auto justify-center text-white px-6">
            <div className="w-20 md:w-32">
              <img src="/logis.png" className="object-cover" alt=" Logo" />
            </div>
            <div className="w-20 md:w-32">
              <img src="/creati.png" className="object-cover" alt=" Logo" />
            </div>
            <div className="w-20 md:w-32">
              <img src="/saltos.png" className="object-cover" alt=" Logo" />
            </div>
            <div className="w-20 md:w-32">
              <img src="/alea.png" className="object-cover" alt=" Logo" />
            </div>
            <div className="w-20 md:w-32">
              <img src="/truck.png" className="object-cover" alt=" Logo" />
            </div>
            <div className="w-20 md:w-32">
              <img src="/land.png" className="object-cover" alt=" Logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPartners;
