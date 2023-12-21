"use client"

import Footer from "@/components/Footer"
import { TbArrowUpRight } from "react-icons/tb"

export default function About() {
    return (
        <div className="w-full">
            {/* // <BannerComponent title="Our Services" sub="HOME / SERVICES" /> */}
            <div className="h-auto bg-[#fd961a] flex flex-col items-center gap-2 py-4 justify-center overflow-hidden">
                {/* <BannerComponent title="HOME / TRACK PARCEL" /> */}
                {/* <p className="text-[#000] text-base mt-5">Who We Are</p> */}
                <h1 className="text-white text-3xl">About Us</h1>
                <p className="text-[#000] text-base text-center px-4">We have been pioneering the industry in Europe for 20 years, and delivering value
                    products within given timeframe, every single time.</p>
                <div className="w-18 bg-[#fff] h-4 px-8 py-2"></div>
            </div>
            <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 mx-auto items-center md:items-center gap-6 md:justify-around my-8 md:mt-10">
                <div className="flex flex-col items-start space-y-6">
                    <h2 className="text-xl font-semibold">Simplifying complex shipping challenges with innovative solutions</h2>
                    <p>Logistics companies are essential to the smooth functioning of global supply chains. They offer a range of services such as transportation, warehousing, inventory management, and distribution to businesses across different industries. The role of logistics companies has become increasingly important in recent years due to the growth of e-commerce and global trade.</p>
                    <button
                        className="flex items-center space-x-1 bg-[#fd961a] text-white text-[16px] px-5 py-3 hover:opacity-80 ease-in duration-200 rounded-md"
                    // data-aos="fade-up"
                    // data-aos-delay="800"
                    >
                        <a href="/contact">Reach Us?</a>
                        <TbArrowUpRight className="w-6 h-6" />
                    </button>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./img-about-3.png" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./img-about-2.png" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="./img-about-1.png" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}