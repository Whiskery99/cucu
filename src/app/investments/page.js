"use client"

import SpinLoading from "@/components/Loader/pageLevel";
import { GlobalContext } from "@/context";
import UserDetailsContext from "@/context/useUser";
import { fetchPlans } from "@/services/fetchPlans";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";


export default function Investments() {
    UserDetailsContext();
    const { user } = useContext(GlobalContext);
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchPlansData();
    }, [fetchPlans]);

    function isUserLoggedIn() {
        if (user) {
            const userLoggedIn = true;
            return userLoggedIn;
        } else {
            router.push('/login');
        }
    }


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
    console.log(plans)

    const allPlans = plans?.plans;
    console.log(allPlans)

    const handleInvestNow = () => {
        if (isUserLoggedIn()) {
            router.push('/dashboard/plans')
        } else {
            router.push('/login')
        }
    }
    return (
        <div className="pt-16">
            <div className="w-full p-4 md:py-10 text-center bg-white border border-t-0 border-gray-200 sm:p-8">
                <h5 className="mb-2 text-3xl font-bold text-[#fd961a]">Investments</h5>
                <p className="mb-5 text-base text-gray-500 sm:text-lg ">Our investment are flexible and return of investment are daily. Select an investment now to start your journey.</p>
            </div>
            <div className="w-full mt-5 mx-0 mb-8 relative">
                <div className="w-full flex items-center flex-col justify-center mt-10 mx-0 mb-0 space-y-6">
                    <div className="flex gap-8 flex-col md:grid md: grid-cols-2 md:mx-auto items-center justify-center">
                        {!plans ? (<div className="flex items-center justify-center">
                            <SpinLoading />
                        </div>) : allPlans?.map(plan => (
                            <div key={plan.id} className="w-[320px] bg-white rounded-xl border-[0.6px] border-gray-300 h-auto flex flex-col items-center relative text-black">
                                <div className="w-full py-6 bg-[#fd961a] text-white text-center text-xl font-bold rounded-t-xl">{plan.planName}</div>
                                <div className="py-3">
                                    <p>Min. Investment: <b>${plan.minPrice}</b></p>
                                </div>
                                <div className="py-3">
                                    <p>Max. Investment: <b>${plan.maxPrice}</b></p>
                                </div>
                                <div className="py-3">
                                    <p>ROI: <b>Daily</b></p>
                                </div>
                                <div className="py-3">
                                    <p>Daily Profit: <b>{plan.roi}%</b></p>
                                </div>
                                <div className="py-3">
                                    <p>Duration: <b>{plan.period} Months</b></p>
                                </div>
                                <button onClick={handleInvestNow} className="my-3 inline-block bg-[#fd961a] py-3 px-5 text-base font-medium tracking-wide text-white rounded-md">Invest Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}