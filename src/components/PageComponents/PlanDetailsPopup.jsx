"use client";

import { GlobalContext } from "@/context";
import { updatePlan } from "@/services/plan";
import React, { useContext, useState } from "react";
import ComponentLevelLoader from "../Loader/componentLevel";
import Notifications from "../Notifications";
import { toast } from "react-toastify";
import UserDetailsContext from "@/context/useUser";

const initialFormData = {
  message: "",
  status: "",
};
const PlanDetailsPopup = ({ plan, onClose }) => {
  const { componentLevelLoader, setComponentLevelLoader } =
    useContext(GlobalContext);
  const [formData, setFormData] = useState(initialFormData);
  UserDetailsContext();

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

  const handleFormSubmit = () => {
    setComponentLevelLoader({ loading: true, id: "" });
    try {
      console.log("Hey Guy...");
      const response = updatePlan(
        {
          message: formData?.message,
          status: formData?.status,
          //   arrivalDate: formData?.arrivalDate,
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
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          {/* Your plan details content goes here */}
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <p className="text-black">Plan ID: {plan?.orderId}</p>
            <div className="divide-y divide-slate-100 text-black">
              <div className="flex items-center justify-between py-4 px-4">
                <p>
                  Type: <br />
                  {plan?.parcelType}
                </p>
                <div className="flex flex-col items-end gap-1">
                  <p>Mode:</p>
                  <p>{plan?.parcelMode}</p>
                </div>
              </div>
              <div className="flex items-center justify-between py-4 px-4">
                <p>
                  Status: <br />
                  {plan?.status}
                </p>
                <div className="flex flex-col items-end gap-1">
                  <p>Pieces:</p>
                  <p>{plan?.pieces}</p>
                </div>
              </div>
              <div className="flex items-center justify-between py-4 px-4">
                <p>
                  Weight: <br />
                  {plan?.weight}KG
                </p>
                <div className="flex flex-col items-end gap-1">
                  <p>Cubic(CB):</p>
                  <p>{plan?.cubic}CB</p>
                </div>
              </div>
              <div className="flex items-center justify-between py-4 px-4">
                <p>
                  Start Date: <br />
                  12-02-2023
                </p>
                <div className="flex flex-col items-end gap-1">
                  <p>Start Time:</p>
                  <p>12:04 PM</p>
                </div>
              </div>
              <div className="flex items-center justify-between py-4 px-4">
                <p>
                  Arrival Date: <br />
                  12-04-2023
                </p>
                <div className="flex flex-col items-end gap-1">
                  <p>Arrival Time:</p>
                  <p>8:00 AM</p>
                </div>
              </div>
              <div className="flex items-center justify-between py-4 px-4">
                <p>
                  Sender: <br />
                  {plan?.senderName}
                </p>
                <div className="flex flex-col items-end gap-1">
                  <p>Package Origin:</p>
                  <p>{plan?.origin}</p>
                </div>
              </div>
              <div className="flex items-center justify-between py-4 px-4">
                <p>
                  Sender Address: <br />
                  {plan?.senderAddress}
                </p>
                <div className="flex flex-col items-end gap-1">
                  <p>Parcel Dest.:</p>
                  <p>{plan?.destination}</p>
                </div>
              </div>
              <div className="flex items-center justify-between py-4 px-4">
                <p>
                  Reciever: <br />
                  {plan?.receiverName}
                </p>
                <div className="flex flex-col items-end gap-1">
                  <p>Reciever Address:</p>
                  <p>{plan?.receiverAddress}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start py-4 px-4">
                <p>Status:</p>
                <select
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
