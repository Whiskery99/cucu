"use client"

import { GlobalContext } from "@/context";
import { adminNavOptions, dashboardNavLinks, navOptions } from "@/utils";
import Image from "next/image";
import { Fragment, useContext, useEffect, useState } from "react";
import CommonModal from "../CommonModal";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import UserDetailsContext from "@/context/useUser";
import UserAlerts from "@/utils/usersAlert";
import fetchNewAccessToken from "@/utils/fetchNewAccessToken";

// const isAdminView = false;
// const isAuthUser = true;
// const user = {
//     role: "admin"
// }
// const router = useRouter();

function NavItems({ isModalView = false }) {
    const { user } = useContext(GlobalContext)
    UserDetailsContext()
    const isAdminView = user?.role;
    console.log(isAdminView)
    return (
        <div className={`items-center justify-between w-full md:flex md:w-auto ${isModalView ? "" : "hidden"}`} id="nav-items">
            <div className={`flex flex-col p-4 md:p-0 mt-8 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${isModalView ? "border-none" : "border border-gray-100"}`}>
                {/* {
                    isAdminView === "admin" ? (
                        adminNavOptions.map((item) => (
                            <a className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 md:p-0" key={item.id} href={item.path}>
                                {item.label}
                            </a>
                        ))
                    ) : (
                        navOptions.map((item) => (
                            <a className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 md:p-0" key={item.id} href={item.path}>
                                {item.label}
                            </a>
                        ))
                    )
                } */}
                {
                    isAdminView === "client" ?
                        dashboardNavLinks.map((item) => (
                            <a className="cursor-pointer block py-2 pl-3 pr-4 md:p-0 text-black" key={item.id} href={item.path}>
                                {item.label}
                            </a>
                        ))
                        :
                        isAdminView === "admin" ?
                            adminNavOptions.map((item) => (
                                <a className="cursor-pointer block py-2 pl-3 pr-4 md:p-0 text-black" key={item.id} href={item.path}>
                                    {item.label}
                                </a>
                            ))
                            :
                            navOptions.map((item) => (
                                <a className="cursor-pointer block py-2 pl-3 pr-4 md:p-0 text-black" key={item.id} href={item.path}>
                                    {item.label}
                                </a>
                            ))
                }
            </div>
        </div>
    )
}


export default function Navbar() {
    const { showNavModal, setShowNavModal } = useContext(GlobalContext);
    const { user, isAuthUser, setIsAuthUser, setUser } = useContext(GlobalContext);
    const [isUsersAlert, setIsUserAlert] = useState(true)
    UserDetailsContext();
    // fetchNewAccessToken();
    const router = useRouter();
    const pathName = usePathname();

    console.log(pathName);

    const handleLogout = () => {
        setIsAuthUser(false);
        setUser(null);
        router.push('/')
        Cookies.remove('token');
        localStorage.clear();
        window.location.reload()
    }

    useEffect(() => {
        console.log('Hello world')
        if(Cookies.get('token')){
            fetchNewAccessToken();

            console.log('Checking if token is here')
        }
    }, [])

    const isAdminView = pathName.includes("admin")
    // const isAdminView = user?.role;
    // console.log(isAdminView)
    // //console.log(user)

    return (
        <>
            {/* {isUsersAlert && <UserAlerts />} */}
            <nav className="relative bg-[#111] fixed w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="w-screen flex flex-wrap items-center justify-between mx-auto p-4">
                    <div onClick={() => router.push('/')} className="flex items-center cursor-pointer mr-2">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 w-auto mr-1.5" alt=" Logo" /> */}
                        <span className="self-center text-lg md:text-xl font-semibold text-white">CargoSpleet</span>
                    </div>

                    <div className="flex items-center md:order-2 gap-2">
                        {!isAdminView && isAuthUser ? (
                            <Fragment>
                                {/* <button className="mt-1.5 inline-block bg-[#fd961a] py-3 px-5 text-xs font-medium tracking-wide text-white">Account</button>
                                <button className="mt-1.5 inline-block bg-[#fd961a] py-3 px-5 text-xs font-medium tracking-wide text-white">Cart</button> */}
                            </Fragment>
                        ) : null}
                        {/* {
                            user?.role === "admin" ?

                                <button onClick={() => router.push('/admin')} className="mt-1.5 inline-block bg-[#fd961a] py-3 px-5 text-xs font-medium tracking-wide text-white">Visit Dashboard</button> : ""
                        } */}
                        {/* {
                            user?.role === 'client' ? <button onClick={() => router.push('/dashboard')} className="mt-1.5 inline-block bg-[#fd961a] py-3 px-5 text-xs font-medium tracking-wide text-white">View Profile</button> : ""
                        } */}
                        {
                            isAuthUser ? <button onClick={handleLogout} className="mt-1.5 inline-block bg-[#fd961a] py-3 px-5 text-sm font-medium tracking-wide text-white rounded-md">Go Back</button> : <a href='/track-parcel' className='text-[#fff] text-base md:text-lg bg-[#fd961a] hover:bg-transparent transition-all ease-in-out duration-500 border-[2px] border-[#fd961a] borer-solid py-3 px-5'>Track Parcel</a>
                        }
                        {/* <button onClick={testToken}>Test</button> */}
                        <button onClick={() => setShowNavModal(!showNavModal)} className="md:hidden rounded-lg p-2 bg-[#fd961a] transition-all duration-500 focus:outline-none focus:ring-2">
                            <Image src="/menu.png" alt="menu icon" width={30} height={30} />
                        </button>
                    </div>
                    <NavItems user={user} isAdminView={isAdminView} router={router} />
                </div>
            </nav>
            <CommonModal user={user} setUser={setUser} isAuthUser={isAuthUser} router={router} showModalTitle={false} mainContent={<NavItems isModalView={true} />} show={showNavModal} setShow={setShowNavModal} isAdminView={isAdminView} />
        </>
    )
}