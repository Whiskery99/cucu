"use client";

import { CircleDollarSign } from "lucide-react";
import { TbArrowUpRight } from "react-icons/tb";
import { GoCheckCircleFill } from "react-icons/go";

const HowItWorks = () => {
  return (
    <section
      id="register"
      className="container mx-auto flex flex-col items-center justify-center gap-16 py-24 px-6 md:px-16 lg:px-32"
    >
      <div className="text-center max-w-3xl">
        <p className="text-orange-400 uppercase tracking-wide mb-4">Our Process</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
          How FrachtLogistics Works
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          We designed our platform to be user-friendly and simple. If you can unlock your phone, you can use our site.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 w-full">
        <div className="w-full max-w-lg md:max-w-xl">
          <img
            src="/how.jpg"
            className="object-cover rounded-xl shadow-lg"
            alt="How it works"
          />
        </div>

        <div className="flex flex-col items-start gap-8 max-w-lg">
          <div className="space-y-6">
            {[
              "Package created",
              "Get tracking number",
              "Track your package",
              "Enjoy the process",
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <GoCheckCircleFill className="text-green-400 w-6 h-6" />
                <p className="text-lg text-white font-medium">{step}</p>
              </div>
            ))}
          </div>

          <button
            className="flex items-center gap-3 bg-orange-500 text-white font-semibold text-lg px-8 py-4 rounded-lg hover:bg-orange-600 transition-all ease-in-out duration-200"
          >
            <a href="/track-parcel">Track Your Parcel</a>
            <TbArrowUpRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
