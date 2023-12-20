"use client"

import Footer from "@/components/Footer"
import BannerComponent from "@/components/PageComponents/BannerComponent"



export default function Vision() {
    return (
        <>
            <div className="w-full">
                // <BannerComponent title="Our Services" sub="HOME / SERVICES" />
                <div className="text-center text-xl text-white"><h1>Our Services</h1></div>
                <div className="px-6 flex flex-col md:flex-row items-center md:justify-between gap-10 justify-center my-8 md:my-20">
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-15 px-4 md:px-8">
                       <div className="flex flex-col gap-10 items-start">
                          <img src="" alt="bus" />
                          <h1 className="font-semibold text-lg text-white uppercase">COURIER</h1>
                          <p className="text-white">For our same-day service, shipments received before 10am are guaranteed to be delivered to selected airport cities</p>
                       </div>
                       <div className="flex flex-col gap-10 items-start">
                          <img src="" alt="car" />
                          <h1 className="font-semibold text-lg text-white uppercase">LOGISTICS</h1>
                          <p className="text-white">Our Domestic Economy Service has been specifically designed to suit both individual and corporate organisations</p>
                       </div>
                       <div className="flex flex-col gap-10 items-start">
                          <img src="" alt="cart" />
                          <h1 className="font-semibold text-lg text-white uppercase">E-COMMERCE</h1>
                          <p className="text-white">Our e-Commerce services can save you time and money in an increasingly competitive and fast changing business landscape.</p>
                       </div>
                       <div className="flex flex-col gap-10 items-start">
                          <img src="" alt="boat" />
                          <h1 className="font-semibold text-lg text-white uppercase">INTERNATIONAL</h1>
                          <p className="text-white">Our international express service delivers time sensitive documents and parcels nationwide to over 200 countries.</p>
                       </div>
                       <div className="flex flex-col gap-10 items-start">
                          <img src="" alt="hand" />
                          <h1 className="font-semibold text-lg text-white uppercase">SPECIALISED SOLUTIONS</h1>
                          <p className="text-white">Our customised business solutions can either address your entire supply chain or smaller elements within it such</p>
                       </div>
                       <div className="flex flex-col gap-10 items-start">
                          <img src="" alt="recycle" />
                          <h1 className="font-semibold text-lg text-white uppercase">CUSTOM SOLUTIONS</h1>
                          <p className="text-white">Every business has different supply chain challenges; which means that standard solutions are rarely effective.</p>
                       </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
