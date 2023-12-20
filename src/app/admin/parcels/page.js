"use client"

import SpinLoading from "@/components/Loader/pageLevel";
import PlanDetailsPopup from "@/components/PageComponents/PlanDetailsPopup";
import { fetchPlans } from "@/services/fetchPlans";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Plans() {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPlan, setSelectedPlan] = useState(null);
    // const router = useRouter();

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
            setLoading(false);
        }
    }

    // Function to handle "View Details" button click
    const handleViewDetails = (plan) => {
        setSelectedPlan(plan);
        // router.push(`/admin/plans/${plan?.id}`);
    };

    // Function to handle closing the popup
    const handleClosePopup = () => {
        setSelectedPlan(null);
        // router.push('/admin/plans');
    }

    const allPlans = plans?.plans;
    console.log(allPlans)
    return (
        <div className="w-full mt-5 mx-0 mb-0 relative">
            <div className="w-full flex items-center flex-col justify-center mt-10 mx-0 mb-0 space-y-4">
                <div className="flex gap-4 flex-col w-full">
                    {!allPlans ? (
                        <div className="flex items-center justify-center">
                            <SpinLoading />
                        </div>
                    ) : (
                        allPlans?.map(plan => (
                            <div key={plan.id} className="w-full border-[0.6px] border-gray-300 flex items-center justify-between relative py-4 px-3">
                                <div className="">{plan.orderId}</div>
                                {/* <div className="py-3">
                                    <p>Weight: <br /><b>{plan.weight}</b></p>
                                </div> */}
                                <div className="py-3">
                                    <p>Status: <br /><b>{plan.status}</b></p>
                                </div>
                                {/* <div className="py-3">
                                    <p>Message: <br /><b>{plan.message} Months</b></p>
                                </div> */}
                                <div>
                                    <button onClick={() => handleViewDetails(plan)} className=" inline-block bg-[#fd961a] py-2 px-5 text-base font-medium tracking-wide text-white rounded-md">View Details</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            {/* Render the PlanDetailsPopup if selectedPlan is not null */}
            {selectedPlan && (
                <PlanDetailsPopup plan={selectedPlan} onClose={handleClosePopup} />
            )}
        </div>
    )
}