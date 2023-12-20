"use client"

import Footer from "@/components/Footer"
import BannerComponent from "@/components/PageComponents/BannerComponent"
import { useState } from "react";



export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
        // Optionally, reset the form or show a success message
      } else {
        console.error('Error sending email:', response.statusText);
        // Handle error, show error message, etc.
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error, show error message, etc.
    }
  };



  return (
    <>
      <div>
        <div className="h-[25vh] overflow-hidden">
          <BannerComponent title="HOME / TRACK PARCEL" />
        </div>
        <div className="w-full px-6 flex flex-col items-start md:items-center md:justify-start gap-3 justify-end my-8 md:mt-10">
          <form onSubmit={handleSubmit} className="space-y-6 w-[430px]">
            <div className="flex flex-col gap-2 items-start w-full">
              <label>Name</label>
              <input id="name"
                name="name"
                value={formData.name}
                onChange={handleChange} className="text-zinc-800 border-[0.5px] transistion-all ease-in-out duration-500 border-gray-300 focus:border-gray-700 rounded-lg px-4 py-3 w-full" type="text" placeholder="Enter your name" required />
            </div>
            <button type="submit" className="disabled:opacity-50 flex items-center justify-center bg-[#fd961a] px-6 py-2 text-lg tracking-wide text-white transition-all ease-in-out duration-200 font-medium focus:shadow rounded-md w-full">Track</button>
          </form>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}