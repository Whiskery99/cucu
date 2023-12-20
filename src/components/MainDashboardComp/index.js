import { useRouter } from "next/navigation";
import TradingViewWidget from "../DashboardComponents/TradeViewComp";
import { PlusIcon } from "lucide-react";


export default function MainDashboardComponent({ username, balance, totalInvestment }) {

    const router = useRouter();

    return (
        <div className="flex flex-col py-10 px-2">
            <div className="flex flex-col gap-8">
            <span className="text-xl">Welcome, <b>{username}</b></span>
                <div className="flex flex-col gap-3 md:flex-row space-x-8 mt-0">
                    <div className="border border-1 border-gray-400 h-[150px] flex flex-col justify-center p-4 rounded-lg">
                        <div className="flex items-center justify-between gap-6">
                            <div className="flex flex-col gap-1">
                                
                                <span>Your balance: <b>${balance}</b></span>
                                <span>Total Investments: <b>{totalInvestment}</b></span>
                            </div>
                            <a className="cursor-pointer" href="/dashboard/deposit">
                                <button className="mt-1.5 inline-block bg-[#fd961a] py-2 px-3 text-xs font-medium tracking-wide text-white rounded-xl cursor-pointer flex items-center gap-1 w-fit">
                                    <PlusIcon className="w-5 h-5 text-white" />
                                    <span>Fund</span>
                                </button>
                            </a>
                        </div>
                    </div>
                    {/* <div className="-ml-8 border border-1 border-gray-400 h-[150px] flex flex-col justify-center p-4 rounded-lg">
                        <div className="flex items-center justify-between gap-6">
                            <div className="flex flex-col gap-1">
                                <span>My Investments</span>
                                <span>Total: <b>{totalInvestment}</b></span>
                            </div>
                            <button className="mt-1.5 inline-block bg-[#fd961a] py-2 px-5 text-xs font-medium tracking-wide text-white rounded-xl">View All</button>
                        </div>
                    </div> */}
                    {/* <div className="border border-1 border-gray-400 h-[150px] flex flex-col justify-center p-4 rounded-lg">
                        <div className="flex items-center justify-between gap-6">
                            <div className="flex flex-col gap-1">
                                <span>Copy Traders</span>
                                <span><b>Start with the best!</b></span>
                            </div>
                            <button className="mt-1.5 inline-block bg-[#fd961a] py-2 px-5 text-xs font-medium tracking-wide text-white rounded-xl">See Traders</button>
                        </div>
                    </div> */}
                </div>
                <div>
                    <p>Live Chart</p>
                    <TradingViewWidget />
                </div>
            </div>
        </div>
    )
}