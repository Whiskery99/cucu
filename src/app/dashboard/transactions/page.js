"use client"

import MyInvestmentsComp from "@/components/DashboardComponents/MyInvestments"
import MyTransactionsComp from "@/components/DashboardComponents/MyTransactionsComp"
import NavigationBar from "@/components/NavigationBar"
import { GlobalContext } from "@/context"
import UserDetailsContext from "@/context/useUser"
import { useContext, useEffect, useState } from "react"


export default function MyTransactions() {
    UserDetailsContext();
    const { user, isAuthUser, setIsAuthUser } = useContext(GlobalContext);
    const [shouldShowNavigationBar, setShouldShowNavigationBar] = useState(false);

    useEffect(() => {
        // Check if window is defined (to avoid SSR errors)
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setShouldShowNavigationBar(window.innerWidth > 768);
            };

            // Initial check and add resize event listener
            handleResize();
            window.addEventListener('resize', handleResize);

            // Clean up the event listener on component unmount
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);


    return (
        <>
            <div className="flex">
                {shouldShowNavigationBar && (
                    <div className="fixed left-0 h-screen">
                        <NavigationBar username={user?.name} />
                    </div>
                )}
                {/* Main Component */}
                <div className="relative right-0 flex flex-2 flex-col gap-8 border border-l-0 border-t-0 border-r-1 w-full md:flex-1 left-0 md:left-[220px] overflow-x-auto overflow-scroll px-2 h-screen">
                    <MyTransactionsComp />
                </div>
            </div>
        </>
    )
}