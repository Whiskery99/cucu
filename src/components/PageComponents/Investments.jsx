"use client";

import { GlobalContext } from "@/context";
import UserDetailsContext from "@/context/useUser";
import { fetchPlans } from "@/services/fetchPlans";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import SpinLoading from "../Loader/pageLevel";

export default function AllPlans() {
  UserDetailsContext();
  const { user } = useContext(GlobalContext);
  const [plans, setPlans] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchPlansData();
  }, [fetchPlans]);

  function isUserLoggedIn() {
    if (user) {
      const userLoggedIn = true;
      return userLoggedIn;
    } else {
      router.push("/login");
    }
  }

  async function fetchPlansData() {
    try {
      const plansData = await fetchPlans();
      setPlans(plansData);
    } catch (error) {
      console.error("Error fetching plans:", error);
    } finally {
      setLoading(false);
    }
  }
  // console.log(plans)

  const allPlans = plans?.plans;

  const handleInvestNow = () => {
    if (isUserLoggedIn()) {
      router.push("/dashboard/plans");
    } else {
      router.push("/login");
    }
  };
  return (
    <>
      <div className="py-18 px-4 flex flex-col items-center justify-center text-center gap-5">
        <div className="text-center">
          <p className="text-white mb-5 lg:mb-10 md:text-[17px] text-[#fff] md:w-3/4 lg:w-3/5">
            Our Investment Plans
          </p>
          <h1 className="text-2xl md:text-6xl lg:text-5xl font-bold mb-5 lg:mb-6 text-white -tracking-wide md:w-3/4 lg:3/5">
            CHOOSE YOUR PREFERRED TRADING PACKAGE
          </h1>
        </div>
        <div className="w-full mx-0 mb-8 relative">
          <div className="w-full flex items-center flex-col justify-center mt-5 mx-0 mb-0 space-y-6">
            <div className="flex gap-8 flex-col md:grid md: grid-cols-2 md:mx-auto items-center justify-center">
              {!plans ? (
                <div className="flex items-center justify-center">
                  <SpinLoading />
                </div>
              ) : (
                allPlans?.map((plan) => (
                  <div
                    key={plan.id}
                    className="w-[320px] bg-white rounded-xl border-[0.6px] border-gray-300 h-auto flex flex-col items-center relative text-black"
                  >
                    <div className="w-full py-6 bg-[#fd961a] text-white text-center text-xl font-bold rounded-t-xl">
                      {plan.planName}
                    </div>
                    <div className="py-3">
                      <p>
                        Min. Investment: <b>${plan.minPrice}</b>
                      </p>
                    </div>
                    <div className="py-3">
                      <p>
                        Max. Investment: <b>${plan.maxPrice}</b>
                      </p>
                    </div>
                    <div className="py-3">
                      <p>
                        ROI: <b>Daily</b>
                      </p>
                    </div>
                    <div className="py-3">
                      <p>
                        Daily Profit: <b>{plan.roi}%</b>
                      </p>
                    </div>
                    <div className="py-3">
                      <p>
                        Duration: <b>{plan.period} Months</b>
                      </p>
                    </div>
                    <button
                      onClick={handleInvestNow}
                      className="my-3 inline-block bg-[#fd961a] py-3 px-5 text-base font-medium tracking-wide text-white rounded-md"
                    >
                      Invest Now
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
