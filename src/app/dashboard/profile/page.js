"use client"

import ProfileDetails from "@/components/DashboardComponents/ProfileDetails";
import Settings from "@/components/DashboardComponents/Settings";
import UpdateProfile from "@/components/DashboardComponents/UpdateProfile";
import NavigationBar from "@/components/NavigationBar"
import { GlobalContext } from "@/context";
import UserDetailsContext from "@/context/useUser";
import { MailOpenIcon, MapPinned, SettingsIcon, UserCheck, UserCircle, UserPlus2Icon } from "lucide-react";
import { useContext, useEffect, useState } from "react";




export default function Profile() {
    UserDetailsContext();
    const { user } = useContext(GlobalContext);
    const [activeTab, setActiveTab] = useState('profileDetails');
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

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="flex">
                {shouldShowNavigationBar && (
                    <div className="fixed left-0 h-screen">
                        <NavigationBar username={user?.name} />
                    </div>
                )}
                {/* Main Component */}
                <div className="relative right-0 flex flex-2 flex-col gap-8 border border-l-0 border-t-0 border-r-1 w-full md:flex-1 left-0 md:left-[220px] overflow-x-auto overflow-scroll px-4">
                    {/* Tab Component */}
                    <div className="block md:hidden py-2 px-2">
                        <p>Dashboard / Profile</p>
                    </div>
                    <div className="flex space-x-4 bg-white border-[0.5px] border-gray-200 rounded-lg p-3">
                        <button
                            className={`text-lg ${activeTab === 'profileDetails' ? 'font-bold' : ''}`}
                            onClick={() => handleTabChange('profileDetails')}
                        >
                            <div className="flex items-center gap-1">
                                <UserCircle className="w-5 h-5" />
                                <h3>Profile</h3>
                            </div>
                        </button>
                        <button
                            className={`text-lg ${activeTab === 'updateProfile' ? 'font-bold' : ''}`}
                            onClick={() => handleTabChange('updateProfile')}
                        >
                            <div className="flex items-center gap-1">
                                <UserPlus2Icon className="w-5 h-5" />
                                <h3>Details</h3>
                            </div>
                        </button>
                        <button
                            className={`text-lg ${activeTab === 'settings' ? 'font-bold' : ''}`}
                            onClick={() => handleTabChange('settings')}
                        >
                            <div className="flex items-center gap-1">
                                <SettingsIcon className="w-5 h-5" />
                                <h3>Settings</h3>
                            </div>
                        </button>
                    </div>

                    {/* Render the content based on the active tab */}
                    {activeTab === 'profileDetails' && <ProfileDetails userImage={user?.profilePicture || ''} userName={user?.name} userEmail={user?.email} userID={user?._id} userBalance={user?.balance || ''} state={user?.state || '--State'} country={user?.country || '--Country'} />}
                    {activeTab === 'updateProfile' && <UpdateProfile user={user} />}
                    {activeTab === 'settings' && <Settings />}
                </div>
            </div>
        </>
    )
}