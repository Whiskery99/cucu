"use client"

import Footer from "@/components/Footer"
import ComponentLevelLoader from "@/components/Loader/componentLevel";
import BannerComponent from "@/components/PageComponents/BannerComponent"
import ParcelImageGallery from "@/components/PageComponents/ParcelImageGallery";
import { GlobalContext } from "@/context";
import { useContext, useState } from "react";

const images = [

]

export default function Parcel() {
    const { componentLevelLoader, setComponentLevelLoader } = useContext(GlobalContext);

    return (
        <>
            <div>
                <div className="h-[25vh] overflow-hidden">
                    <BannerComponent title="HOME / YOUR PARCEL" />
                </div>
                <div className="w-full px-6 flex flex-col items-start md:items-center md:justify-start gap-3 justify-end -mt-12 pb-20 my-8 md:mt-10">
                        <h1>Parcel D12W4437383 Status:</h1>
                    <div className="text-center">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <p className="flex items-center gap-3">Packaged <div>----</div></p>
                            <p className="flex items-center gap-3">Intransit <div>----</div></p>
                            <p className="flex items-center gap-3">Over Sea <div>----</div></p>
                            <p className="flex items-center gap-3">Arrived <div>----</div></p>
                            <p className="flex items-center gap-3">Completed</p>
                        </div>
                    </div>
                    <div className="w-full border-[0.8px] border-gray-400">
                        <div className="w-full border-b-[0.8px] border-gray-400 py-4">
                            <h1 className="pl-4">Parcel Details</h1>
                        </div>
                        <div className="">
                            <ParcelImageGallery images={images} />
                        </div>
                        <div className="divide-y divide-slate-100">
                            <div className="flex items-center justify-between py-4 px-4">
                                <p>Type: <br />Packaged</p>
                                <p>Mode: <br />Air Freight</p>
                            </div>
                            <div className="flex items-center justify-between py-4 px-4">
                                <p>Sender: <br />James Brown</p>
                                <div>
                                    <p>Package Origin:</p>
                                    <p>Malawi</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between py-4 px-4">
                                <p>Sender Address: <br />Block 15 James Brown Close</p>
                                <div>
                                    <p>Package Destination:</p>
                                    <p>Cuba</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between py-4 px-4">
                                <p>Reciever: <br />Lurther King Jr.</p>
                                <div>
                                    <p>Reciever Address:</p>
                                    <p>12 Block Road, Cuba.</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between py-4 px-4">
                                <p>Status: <br />Fragile</p>
                                <div>
                                    <p>Pieces:</p>
                                    <p>12</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between py-4 px-4">
                                <p>Weight: <br />200KG</p>
                                <div>
                                    <p>Cubic(CB):</p>
                                    <p>12CB</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between py-4 px-4">
                                <p>Start Delivery Date: <br />12-02-2023</p>
                                <div>
                                    <p>Start Delivery Time:</p>
                                    <p>12:04 PM</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between py-4 px-4">
                                <p>Arrival Delivery Date: <br />12-04-2023</p>
                                <div>
                                    <p>Arrival Delivery Time:</p>
                                    <p>8:00 AM</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 items-start py-4 px-4">
                                <p>Message:</p>
                                <p>Package in Transit</p>  
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        </>
    )
}