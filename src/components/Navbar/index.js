'use client';

import { GlobalContext } from '@/context';
import { adminNavOptions, dashboardNavLinks, navOptions } from '@/utils';
import Image from 'next/image';
import { Fragment, useContext, useEffect, useState } from 'react';
import CommonModal from '../CommonModal';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import UserDetailsContext from '@/context/useUser';
import fetchNewAccessToken from '@/utils/fetchNewAccessToken';

function NavItems({ isModalView = false }) {
    const { user } = useContext(GlobalContext);
    UserDetailsContext();
    const isAdminView = user?.role;

    const navLinks = isAdminView === 'client'
        ? dashboardNavLinks
        : isAdminView === 'admin'
            ? adminNavOptions
            : navOptions;

    return (
        <div className={`items-center justify-between w-full md:flex md:w-auto ${isModalView ? '' : 'hidden'}`}>
            <div className={`flex flex-col p-4 md:p-0 mt-8 rounded-lg md:flex-row md:space-x-8 md:mt-0 ${isModalView ? 'border-none' : ''}`}>
                {navLinks.map((item) => (
                    <a
                        key={item.id}
                        href={item.path}
                        className="cursor-pointer block py-2 pl-3 pr-4 text-[#fd961a] md:p-0 hover:text-[#b07d3e] transition-all duration-300"
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default function Navbar() {
    const { showNavModal, setShowNavModal } = useContext(GlobalContext);
    const { user, isAuthUser, setIsAuthUser, setUser } = useContext(GlobalContext);
    const router = useRouter();
    const pathName = usePathname();
    const isAdminView = pathName.includes('admin');

    useEffect(() => {
        if (Cookies.get('token')) {
            fetchNewAccessToken();
        }
    }, []);

    const handleLogout = () => {
        setIsAuthUser(false);
        setUser(null);
        Cookies.remove('token');
        localStorage.clear();
        router.push('/');
        window.location.reload();
    };

    return (
        <>
            <nav className="relative bg-[#111] w-full z-20 top-0 left-0 border-b border-gray-700 shadow-lg">
                <div className="w-screen flex flex-wrap items-center justify-between mx-auto p-4">
                    <div onClick={() => router.push('/')} className="flex items-center cursor-pointer">
                        <Image
                            src="/logos.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="h-8 w-auto mr-2"
                        />
                        <span className="text-lg md:text-xl font-semibold text-white">FrachtLogistics</span>
                    </div>

                    <div className="flex items-center md:order-2 gap-4">
                        {isAuthUser ? (
                            <button
                                onClick={handleLogout}
                                className="bg-[#fd961a] py-2 px-6 rounded-md text-white hover:bg-transparent border-2 border-[#fd961a] transition-all duration-300"
                            >
                                Logout
                            </button>
                        ) : (
                            <a
                                href="/track-parcel"
                                className="text-sm md:text-lg bg-[#fd961a] py-2 px-5 rounded-lg text-white hover:bg-transparent border-2 border-[#fd961a] transition-all duration-300"
                            >
                                Track
                            </a>
                        )}

                        <button
                            onClick={() => setShowNavModal(!showNavModal)}
                            className="md:hidden rounded-lg p-2 bg-[#fd961a] focus:outline-none"
                        >
                            <Image
                                src="/menu.png"
                                alt="Menu"
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>

                    <NavItems isModalView={false} />
                </div>
            </nav>

            <CommonModal
                show={showNavModal}
                setShow={setShowNavModal}
                mainContent={<NavItems isModalView={true} />}
                showModalTitle={false}
            />
        </>
    );
}
