"use client";

import { GlobalContext } from "@/context";
import { updatePlan } from "@/services/plan";
import React, { useContext, useEffect, useState } from "react";
import ComponentLevelLoader from "../Loader/componentLevel";
import Notifications from "../Notifications";
import { toast } from "react-toastify";
import UserDetailsContext from "@/context/useUser";

const initialFormData = {
  orderId: "",
  message: "",
  status: "",
  receiverName: "",
  receiverAddress: "",
  senderName: "",
  senderAddress: "",
  parcelMode: "",
  parcelType: "",
  pieces: "",
  weight: "",
  cubic: "",
  startDate: "",
  arrivalDate: "",
};
const PlanDetailsPopup = ({ plan, onClose }) => {
  const { componentLevelLoader, setComponentLevelLoader } =
    useContext(GlobalContext);
  const [formData, setFormData] = useState({});
  UserDetailsContext();

  useEffect(() => {
    if (plan?.orderId) {
      setFormData({
        orderId: plan?.orderId,
        message: plan?.message,
        status: plan?.status,
        receiverName: plan?.receiverName,
        receiverAddress: plan?.receiverAddress,
        senderName: plan?.senderName,
        senderAddress: plan?.senderAddress,
        parcelMode: plan?.parcelMode,
        parcelType: plan?.parcelType,
        pieces: plan?.pieces,
        weight: plan?.weight,
        cubic: plan?.cubic,
        startDate: plan?.startDate,
        arrivalDate: plan?.arrivalDate,
      });
    }
  }, [plan]);

  const handleOrderID = (orderId) => {
    setFormData({
      ...formData,
      orderId: orderId,
    });
  };

  const handleMessage = (message) => {
    setFormData({
      ...formData,
      message: message,
    });
  };

  const handleStatus = (status) => {
    setFormData({
      ...formData,
      status: status,
    });
  };

  const handleRecieverAddress = (receiverAddress) => {
    setFormData({
      ...formData,
      receiverAddress: receiverAddress,
    });
  };

  const handleRecieverName = (receiverName) => {
    setFormData({
      ...formData,
      receiverName: receiverName,
    });
  };

  const handleSenderName = (senderName) => {
    setFormData({
      ...formData,
      senderName: senderName,
    });
  };

  const handleSenderAddress = (senderAddress) => {
    setFormData({
      ...formData,
      senderAddress: senderAddress,
    });
  };

  const handleParcelName = (parcelName) => {
    setFormData({
      ...formData,
      parcelName: parcelName,
    });
  };

  const handleParcelMode = (parcelMode) => {
    setFormData({
      ...formData,
      parcelMode: parcelMode,
    });
  };

  const handleParcelType = (parcelType) => {
    setFormData({
      ...formData,
      parcelType: parcelType,
    });
  };

  const handlePieces = (pieces) => {
    setFormData({
      ...formData,
      pieces: pieces,
    });
  };

  const handleWeight = (weight) => {
    setFormData({
      ...formData,
      weight: weight,
    });
  };

  const handleCubic = (cubic) => {
    setFormData({
      ...formData,
      cubic: cubic,
    });
  };

  const handleStartDate = (startDate) => {
    setFormData({
      ...formData,
      startDate: startDate,
    });
  };

  const handleArrivalDate = (arrivalDate) => {
    setFormData({
      ...formData,
      arrivalDate: arrivalDate,
    });
  };

  const handleFormSubmit = () => {
    setComponentLevelLoader({ loading: true, id: "" });
    try {
      console.log("Hey Guy...");
      const response = updatePlan(
        {
          ...formData,
        },
        plan?._id
      );
      console.log(response);
      if (response?.success) {
        toast.success("Order updated!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setFormData(initialFormData);
        setComponentLevelLoader({ loading: false, id: "" });
        // onClose
      } else {
        if (response?.error) {
          toast.error("Error updating user", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        setComponentLevelLoader({ loading: false, id: "" });
      }
    } catch (error) {
      console.log("Error updating order:", error);
      toast.error("Something went wrong. Please try again later.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div className="fixed inset-0 z-40 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-[350px]">
          {/* Your plan details content goes here */}
          <div className="bg-white px-2 pt-5 pb-4 sm:pb-4 ">
            {/* <p className="text-black">Plan ID: {plan?.orderId}</p> */}
            <div className="divide-y divide-slate-100 text-black">
              <div className="flex flex-col items-start gap-2 py-4 px-4">
                <div className="flex flex-col gap-1 items-start w-full">
                  <p>Parcel ID:</p>
                  <input
                    type="text"
                    value={formData?.orderId}
                    className="w-full border-[0.5px] border-gray-600 rounded-lg p-4 placeholder:text-black text-black"
                    onChange={(e) => handleOrderID(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1 items-start w-full">
                  <p>Type:</p>
                  <input
                    type="text"
                    value={formData?.parcelType}
                    className="w-full border-[0.5px] border-gray-600 rounded-lg p-4 placeholder:text-black text-black"
                    onChange={(e) => handleParcelType(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start gap-1 w-full">
                  <p>Mode:</p>
                  <input
                    type="text"
                    value={formData?.parcelMode}
                    className="w-full border-[0.5px] border-gray-600 rounded-lg p-4 placeholder:text-black text-black"
                    onChange={(e) => handleParcelMode(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-start flex-col py-4 px-4">
                {/* <p>
                  Status: <br />
                  {plan?.status}
                </p> */}
                <div className="flex flex-col items-start gap-1 w-full">
                  <p>Pieces:</p>
                  <input
                    type="text"
                    value={formData?.pieces}
                    className="w-full border-[0.5px] border-gray-600 rounded-lg p-4 placeholder:text-black text-black"
                    onChange={(e) => handlePieces(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-start flex-col gap-2 py-4 px-4">
                <div className="flex flex-col items-start gap-1 w-full">
                  <p>Weight(KG):</p>
                  <input
                    type="text"
                    value={formData?.weight}
                    className="w-full border-[0.5px] border-gray-600 rounded-lg p-4 placeholder:text-black text-black"
                    onChange={(e) => handleWeight(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start gap-1 w-full">
                  <p>Cubic(CB):</p>
                  <input
                    type="text"
                    value={formData?.cubic}
                    className="w-full border-[0.5px] border-gray-600 rounded-lg p-4 placeholder:text-black text-black"
                    onChange={(e) => handleCubic(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 items-start py-4 px-4">
                <div className="flex flex-col items-start gap-1 w-full">
                  <p>Sender:</p>
                  <input
                    type="text"
                    value={formData?.senderName}
                    className="w-full border-[0.5px] border-gray-600 rounded-lg p-4 placeholder:text-black text-black"
                    onChange={(e) => handleSenderName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start gap-1 w-full">
                  <p>Package Origin:</p>
                  <input
                    type="text"
                    value={formData?.origin}
                    className="w-full border-[0.5px] border-gray-600 rounded-lg p-4 placeholder:text-black text-black"
                    // onChange={(e) => handleSenderAddress(e.target.value)}
                  />
                  {/* <div className="border-[0.5px] border-gray-600 rounded-lg p-4 py-6 text-black w-full">
                    <p className="text-black">{formData?.origin}</p>
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start py-4 px-4">
                <div className="flex flex-col items-start gap-1 w-full">
                  <p>Sender Address:</p>
                  <input
                    type="text"
                    value={formData?.senderAddress}
                    className="w-full border-[0.5px] border-gray-600 rounded-lg p-4 placeholder:text-black text-black"
                    onChange={(e) => handleSenderAddress(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start gap-1 w-full">
                  <p>Parcel Dest.:</p>
                  {/* <p>{plan?.destination}</p> */}
                  <div className="border-[0.5px] border-gray-600 rounded-lg p-4 py-6 text-black w-full">
                    <p className="text-black">{formData?.destination}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start py-4 px-4">
                <div className="flex flex-col items-start gap-1 w-full">
                  <p>Reciever:</p>
                  <input
                    type="text"
                    value={formData?.receiverName}
                    className="w-full border-[0.5px] border-gray-600 rounded-lg p-4 placeholder:text-black text-black"
                    onChange={(e) => handleRecieverName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start gap-1 w-full">
                  <p>Reciever Address:</p>
                  <input
                    type="text"
                    value={formData?.receiverAddress}
                    className="w-full border-[0.5px] border-gray-600 rounded-lg p-4 placeholder:text-black text-black"
                    onChange={(e) => handleRecieverAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between py-4 px-4">
                <p>
                  Start Date: <br />
                  {formData?.startDate}
                </p>
                <div className="flex flex-col items-end gap-1">
                  <p>Arrival Date:</p>
                  <p>{formData?.arrivalDate}</p>
                </div>
              </div>
              {/* <div className="flex items-center justify-between py-4 px-4">
                <p>
                  Arrival Date: <br />
                  12-04-2023
                </p>
                <div className="flex flex-col items-start gap-1">
                  <p>Arrival Time:</p>
                  <p>8:00 AM</p>
                </div>
              </div> */}
              <div className="flex flex-col gap-3 items-start py-4 px-4">
                <p>Status:</p>
                <select
                value={formData?.status}
                  className="w-full border-[0.5px] border-gray-600 rounded-lg p-4"
                  onChange={(e) => handleStatus(e.target.value)}
                >
                  <option>---</option>
                  <option>Delivered</option>
                  <option>On-hold</option>
                  <option>In-transit</option>
                  <option>Canceled</option>
                  <option>Arrived</option>
                </select>
              </div>
              <div className="flex flex-col gap-3 items-start py-4 px-4">
                <p>Message:</p>
                <input
                  type="text"
                  className="w-full border-[0.5px] border-gray-600 rounded-lg p-4 placeholder:text-black text-black"
                  onChange={(e) => handleMessage(e.target.value)}
                />
              </div>
            </div>
            {/* Display plan details, input fields, and update button */}
            <div className="mt-3 w-full flex items-center justify-around">
              <button
                onClick={onClose}
                className="inline-block bg-transparent border-[0.8px] border-[#fd961a] py-3 px-6 text-base font-medium tracking-wide text-black"
              >
                Close
              </button>
              <button
                onClick={handleFormSubmit}
                className="inline-block bg-[#fd961a] py-3 px-6 text-base font-medium tracking-wide text-white"
              >
                {componentLevelLoader && componentLevelLoader.loading ? (
                  <ComponentLevelLoader
                    text={"Loading"}
                    color={"#fff"}
                    loading={
                      componentLevelLoader && componentLevelLoader.loading
                    }
                  />
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Notifications />
    </div>
  );
};

export default PlanDetailsPopup;
