"use client"

import Footer from "@/components/Footer"
import ComponentLevelLoader from "@/components/Loader/componentLevel";
import BannerComponent from "@/components/PageComponents/BannerComponent"
import { GlobalContext } from "@/context";
import { fetchPlans } from "@/services/fetchPlans";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";



export default function Track() {
    const { componentLevelLoader, setComponentLevelLoader } = useContext(GlobalContext);
    const [formData, setFormData] = useState({
        id: '',
    });

    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const router = useRouter();

    useEffect(() => {
        fetchPlansData();
    }, [fetchPlans]);


    async function fetchPlansData() {
        try {
            const plansData = await fetchPlans();
            setPlans(plansData);
        } catch (error) {
            console.error('Error fetching plans:', error);
        } finally {
            setIsFetching(false); // Set loading state to false after fetching
            setLoading(false);
        }
    }

    const allPlans = plans?.plans;
    console.log(allPlans)

    function isFormValid() {
        return formData && formData.parcelId &&
            formData.parcelId.trim() !== ""
            ? true
            : false;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleTracking = async (e) => {
        e.preventDefault();
        setComponentLevelLoader({ loading: true, id: '' })
        // Find the selected plan based on the entered parcelId
        const foundPlan = allPlans.find((plan) => plan?.orderId === formData?.parcelId);

        if (foundPlan) {
            setSelectedPlan(foundPlan);
        } else {
            setSelectedPlan(null);
            // If the plan is not found, you can display an error message or handle it as needed
            console.error('Plan not found');
        }

        setComponentLevelLoader({ loading: false, id: '' });
    };



    return (
        <>
            <div>
                {/* <div className="h-[25vh] overflow-hidden">
                    <BannerComponent title="HOME / TRACK PARCEL" />
                </div> */}
                <div className="h-[18vh]  bg-[#fd961a] flex flex-col items-center gap-6 justify-center overflow-hidden">
                    {/* <BannerComponent title="HOME / TRACK PARCEL" /> */}
                    <p className="text-[#000] text-base mt-3">Track</p>
                    <h1 className="text-white text-2xl">Track Your Parcel</h1>
                    <div className="w-18 bg-[#fff] h-4"></div>
                </div>
                <div className="w-full mt-18 px-4 flex flex-col items-start md:items-center md:justify-start gap-3 justify-end md:mt-18">
                    <form onSubmit={handleTracking} className="space-y-6 w-full md:max-w-[450px]">
                        <div className="flex flex-col gap-2 items-start w-full">
                            <label>Tracking ID:</label>
                            <input id="parcelId"
                                name="parcelId"
                                value={formData.parcelId}
                                onChange={handleChange} className="text-zinc-800 border-[0.5px] transistion-all ease-in-out duration-500 border-gray-300 focus:border-gray-700 rounded-lg px-4 py-3 w-full" type="text" placeholder="DX23232443" required />
                        </div>
                        <button className="disabled:opacity-50 inline-flex w-full items-center justify-center bg-[#fd961a] px-5 py-3 text-base tracking-wide text-white transition-all ease-in-out duration-200 font-medium focus:shadow rounded-md mt-4" disabled={!isFormValid() || isFetching}
                            onClick={handleTracking}>
                            {componentLevelLoader && componentLevelLoader.loading ? <ComponentLevelLoader
                                text={"Checking"}
                                color={"#fff"}
                                loading={componentLevelLoader && componentLevelLoader.loading}
                            /> : "Track"}
                        </button>
                    </form>

                    {/* Display the information of the fetched product or show a message if no order is found */}
                    {selectedPlan ? (
                        <div className="mt-4 mx-auto w-full">
                            {/* Display information of the selected plan */}
                            <div className="inline-block bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 w-full">
                                {/* Your plan details content goes here */}
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                                    <p className="text-black">Plan ID: {selectedPlan?.orderId}</p>
                                    <div className="divide-y divide-slate-100 text-black">
                                        <div className="flex items-center justify-between py-4 px-4">
                                            <p>
                                                Type: <br />
                                                {selectedPlan?.parcelType}
                                            </p>
                                            <div className="flex flex-col items-end gap-1">
                                                <p>Mode:</p>
                                                <p>{selectedPlan?.parcelMode}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between py-4 px-4">
                                            <p>
                                                Status: <br />
                                                {selectedPlan?.status}
                                            </p>
                                            <div className="flex flex-col items-end gap-1">
                                                <p>Pieces:</p>
                                                <p>{selectedPlan?.pieces}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between py-4 px-4">
                                            <p>
                                                Weight: <br />
                                                {selectedPlan?.weight}KG
                                            </p>
                                            <div className="flex flex-col items-end gap-1">
                                                <p>Cubic(CB):</p>
                                                <p>{selectedPlan?.cubic}CB</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between py-4 px-4">
                                          <p>
                                                Start Date: <br />
                                                {selectedPlan?.startDate}
                                           </p>
                <div className="flex flex-col items-end gap-1">
                  <p>Arrival Date:</p>
                  <p>{selectedPlan?.arrivalDate}</p>
                </div>
              </div>
                                        
                                        <div className="flex items-center justify-between py-4 px-4">
                                            <p>
                                                Sender: <br />
                                                {selectedPlan?.senderName}
                                            </p>
                                            <div className="flex flex-col items-end gap-1">
                                                <p>Package Origin:</p>
                                                <p>{selectedPlan?.origin}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between py-4 px-4">
                                            <p>
                                                Sender Address: <br />
                                                {selectedPlan?.senderAddress}
                                            </p>
                                            <div className="flex flex-col items-end gap-1">
                                                <p>Parcel Dest.:</p>
                                                <p>{selectedPlan?.destination}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between py-4 px-4">
                                            <p>
                                                Reciever: <br />
                                                {selectedPlan?.receiverName}
                                            </p>
                                            <div className="flex flex-col items-end gap-1">
                                                <p>Reciever Address:</p>
                                                <p>{selectedPlan?.receiverAddress}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3 items-start py-4 px-4">
                                            <p>Status:</p>
                                            <div
                                                className="w-full border-[0.5px] border-gray-600 rounded-lg p-4"
                                            >
                                                {selectedPlan?.status}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 items-start py-4 px-4">
                                            <p>Message:</p>
                                            <div
                                                className="w-full border-[0.5px] border-gray-600 rounded-lg p-4 placeholder:text-black text-black"
                                            >
                                                {selectedPlan?.message}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Display plan details, input fields, and update button */}
                                    <div className="mt-3 w-full flex items-center justify-around">
                                        <button
                                            // onClick={onClose}
                                            className="inline-block bg-transparent border-[0.8px] border-[#fd961a] py-3 px-6 text-base font-medium tracking-wide text-black"
                                        >
                                            Print
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="mt-4">{isFetching ? 'Fetching parcel...' : 'Search for your parcel'}</p>
                    )}
                </div>
                {/* <Footer /> */}
            </div>
        </>
    )
}
