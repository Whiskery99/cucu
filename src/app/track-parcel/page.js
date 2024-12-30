"use client";

import Footer from "@/components/Footer";
import ComponentLevelLoader from "@/components/Loader/componentLevel";
import BannerComponent from "@/components/PageComponents/BannerComponent";
import { GlobalContext } from "@/context";
import { fetchPlans } from "@/services/fetchPlans";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Track() {
  const { componentLevelLoader, setComponentLevelLoader } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    parcelId: "",
  });

  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchPlansData();
  }, []);

  async function fetchPlansData() {
    try {
      const plansData = await fetchPlans();
      setPlans(plansData);
    } catch (error) {
      console.error("Error fetching plans:", error);
    } finally {
      setIsFetching(false);
      setLoading(false);
    }
  }

  const allPlans = plans?.plans;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleTracking = async (e) => {
    e.preventDefault();
    setComponentLevelLoader({ loading: true, id: "" });

    const foundPlan = allPlans.find((plan) => plan?.orderId === formData?.parcelId);

    if (foundPlan) {
      setSelectedPlan(foundPlan);
    } else {
      setSelectedPlan(null);
      console.error("Plan not found");
    }

    setComponentLevelLoader({ loading: false, id: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div className="bg-[#fd961a] py-16 text-center">
        <p className="text-black text-sm uppercase tracking-wide">Track</p>
        <h1 className="text-white text-4xl font-bold">Track Your Parcel</h1>
        <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <form onSubmit={handleTracking} className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto space-y-6">
          <div className="flex flex-col">
            <label htmlFor="parcelId" className="font-medium text-gray-700 mb-2">Tracking ID</label>
            <input
              id="parcelId"
              name="parcelId"
              value={formData.parcelId}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg text-[#fd961a] px-4 py-3 focus:ring-2 focus:ring-[#fd961a] focus:outline-none"
              type="text"
              placeholder="DX23232443"
              required
            />
          </div>
          <button
            type="submit"
            disabled={!formData.parcelId || isFetching}
            className="w-full bg-[#fd961a] text-white py-3 rounded-lg font-medium hover:bg-[#e58514] transition disabled:opacity-50"
          >
            {componentLevelLoader?.loading ? (
              <ComponentLevelLoader text={"Checking"} color={"#fff"} loading={componentLevelLoader.loading} />
            ) : (
              "Track"
            )}
          </button>
        </form>

        {selectedPlan && (
          <div className="bg-white shadow-lg rounded-lg p-8 mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Parcel Details</h2>
            <div className="space-y-4">
              <DetailRow label="Parcel ID" value={selectedPlan.orderId} />
              <DetailRow label="Type" value={selectedPlan.parcelType} />
              <DetailRow label="Mode" value={selectedPlan.parcelMode} />
              <DetailRow label="Status" value={selectedPlan.status} />
              <DetailRow label="Pieces" value={selectedPlan.pieces} />
              <DetailRow label="Weight" value={`${selectedPlan.weight} KG`} />
              <DetailRow label="Cubic (CB)" value={`${selectedPlan.cubic} CB`} />
              <DetailRow label="Start Date" value={selectedPlan.startDate} />
              <DetailRow label="Arrival Date" value={selectedPlan.arrivalDate} />
              <DetailRow label="Sender" value={selectedPlan.senderName} />
              <DetailRow label="Receiver" value={selectedPlan.receiverName} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between border-b py-4">
      <span className="text-gray-700 font-medium">{label}</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
}
