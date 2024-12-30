"use client";

import { CircleDollarSign } from "lucide-react";
import { TbArrowUpRight } from "react-icons/tb";
import { GoCheckCircleFill } from "react-icons/go";

const OurPartners = () => {
  return (
    <section id="register" className="bg-white py-24">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 leading-snug mb-12">
          Trusted by <span className="text-[#fd961a]">global brands</span> worldwide.
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 place-items-center w-full px-6">
          {[
            { src: '/logis.png', alt: 'Logis' },
            { src: '/creati.png', alt: 'Creati' },
            { src: '/saltos.png', alt: 'Saltos' },
            { src: '/alea.png', alt: 'Alea' },
            { src: '/truck.png', alt: 'Truck' },
            { src: '/land.png', alt: 'Land' },
          ].map((partner, index) => (
            <div
              key={index}
              className="w-24 md:w-32 lg:w-36 transition-transform transform hover:scale-110"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="object-contain w-full h-auto drop-shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
