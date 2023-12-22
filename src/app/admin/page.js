"use client"

import axios from "axios";
import { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { GlobalContext } from "@/context";
import UserDetailsContext from "@/context/useUser";
import PrivateRoute from "@/context/PrivateRoute";



export default function Admin() {
  UserDetailsContext();
  const { user, isAuthUser, setIsAuthUser } = useContext(
    GlobalContext
  );



  return (
    <PrivateRoute>
      <div className="flex flex-col space-y-6 px-4">
        <p className="text-lg my-5 py-4 border-b-[0.5px] border-gray-500">Welcome To Admin Dashboard</p>
        <a className="mt-1.5 inline-block bg-[#fd961a] py-2 px-5 text-xs font-medium tracking-wide text-white rounded-xl w-fit" href="/admin/create-parcel">
          Create New Parcel
        </a>
        <a className="mt-1.5 inline-block bg-[#fd961a] py-2 px-5 text-xs font-medium tracking-wide text-white rounded-xl w-fit" href="/admin/parcels">
          View All Parcels
        </a>
      </div>
    </PrivateRoute>
  )
}