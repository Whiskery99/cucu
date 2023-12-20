

import { GlobalContext } from "@/context";
import UserDetailsContext from "@/context/useUser"
import { useContext, useEffect, useState } from "react"
import SpinLoading from "../Loader/pageLevel";
import { updateUser } from "@/services/user";
import Cookies from "js-cookie";

export default function MyInvestmentsComp() {
    UserDetailsContext();
    const { user, componentLevelLoader } = useContext(GlobalContext);
    const [messageOne, setMessageOne] = useState(false);
    const [plans, setPlans] = useState([])

    const AllPlans = user?.plans;
    console.log(AllPlans);

    const updatePlanStatus = (userID, investmentId)=> {
        const token = Cookies.get('token');
    try {
        const response = axios.put(`/api/admin/update-user/?user_id=${userID}`, { investment: {
            investmentId: investmentId,
            status: {
                isCompleted: true
            }
        } }, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
    
        return response.data;
      } catch (error) {
        console.error('Error updating :', error);
        throw error;
      }
    }



    // useEffect(() => {
        const calculateRemainingDays = ({elapseTime, investmentId, status}) => {
            const elapseTimeDate = new Date(elapseTime);
            const today = new Date();
            const timeDifference = elapseTimeDate.getTime() - today.getTime();
            const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            if(remainingDays <= 0 && status?.isActive){
                updatePlanStatus(user?._id, investmentId)
            }
            return remainingDays;
        };

        // useEffect(() => {
        //     AllPlans?.map(async (plan) => {
        //         const remainingDays = await calculateRemainingDays({
        //           elapseTime: plan?.elapseTime,
        //           investmentId: plan?._id,
        //           status: plan?.status,
        //         })
        //         setPlans([...plans, { Period: remainingDays, roi: '20%', invest: plan?.returnInvestment, amount: plan?.amount }])
        //     })
        // }, [user])

        // console.log(plans)

    const handleCopyOne = () => {
        setMessageOne(true)
        setTimeout(() => {
            setMessageOne(false)
        }, 2000)
    }
    return (
        <div className="bg-white py-5 rounded-lg px-3">
            <h2 className="mb-4">All my Investments</h2>
            {/* Content for Profile Details tab */}
            <div className="space-y-8 h-screen">
                {!user ? (
                    <div className="flex items-center justify-center">
                        <SpinLoading />
                    </div>
                ) : (
                    <div className={`border-t-4 border-cyan-600 rounded-md p-3 shadow-lg  ${messageOne ? 'border-green-400' : 'border-cyan-600 '}`}>
                        {AllPlans?.map((plan, idx )=> (
                            <div key={idx} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex flex-col items-start gap-2">
                                        <p className="text-base tracking-wide font-semibold">Basic Plan</p>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-xs"><span className="font-semibold">Period:</span> {calculateRemainingDays({elapseTime: plan?.elapseTime, investmentId: plan?._id, status: plan?.status })} Days</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-xs"><span className="font-semibold">ROI:</span> 20%</p>
                                                <p className="text-xs"><span className="font-semibold">Amount:</span> ${plan?.amount}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span><span className="font-semibold">Returns:</span> ${plan?.returnInvestment}</span>
                                    <button onClick={handleCopyOne} className={`text-xs px-3 py-2 text-white font-semibold rounded-md transition-all ease-in-out duration-400 ${messageOne ? 'bg-green-400' : 'bg-gray-400 '}`}>{messageOne ? 'Loading...' : 'View Plan'}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}