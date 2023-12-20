"use client"

import Footer from "@/components/Footer"
import BannerComponent from "@/components/PageComponents/BannerComponent"
import { HomeIcon, MapIcon } from "lucide-react";
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

  const handleMessageChange = (e) => {
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
        <div className="h-[18vh]  bg-[#fd961a] flex flex-col items-center gap-6 justify-center overflow-hidden">
          {/* <BannerComponent title="HOME / TRACK PARCEL" /> */}
          <p className="text-[#000] text-base mt-3">Contact</p>
          <h1 className="text-white text-2xl">Contact Us</h1>
          <div className="w-18 bg-[#fff] h-4"></div>
        </div>
        <div className="w-full px-4 flex flex-col md:flex-row items-center md:items-center  gap-3 justify-center my-8 md:mt-10">
          <div className="bg-[#fff]">
            <div className="bg-[#fd961a] w-full py-8 px-5">
              <p className="text-xl text-black">Get in touch!</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 p-4 mt-4">
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="text-black">Name</label>
                <input id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange} className="text-zinc-800 border-[0.5px] transistion-all ease-in-out duration-500 border-gray-300 focus:border-gray-700 rounded-lg px-4 py-3 w-full" type="text" placeholder="Enter your name" required />
              </div>
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="text-black">Message</label>
                <textarea id="message"
                  name="message"
                  rows="8"
                  value={formData.name}
                  onChange={handleMessageChange} className="text-zinc-800 border-[0.5px] transistion-all ease-in-out duration-500 border-gray-300 focus:border-gray-700 rounded-lg px-4 py-3 w-full" type="text" placeholder="Enter your message" required />
              </div>
              <button type="submit" className="disabled:opacity-50 flex items-center justify-center bg-[#fd961a] px-6 py-2 text-lg tracking-wide text-white transition-all ease-in-out duration-200 font-medium focus:shadow rounded-md w-full">Submit</button>
            </form>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-[#fd961a] p-5 flex flex-col md:flex-row items-center text-black gap-4 w-full">
              <div className="flex justify-around items-center gap-4">
                <div className="bg-white p-6 rounded-full">
                  <HomeIcon />
                </div>
                <h1>Opening Hours</h1>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <p>Monday - Friday</p>
                <p>9AM - 6PM</p>
              </div>
            </div>
            <div className="bg-[#fd961a] p-5 flex flex-col md:flex-row items-center text-black gap-4 w-full">
              <div className="flex justify-around items-center gap-4">
                <div className="bg-white p-6 rounded-full">
                  <MapIcon />
                </div>
                <h1>Address</h1>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <p>467 Stutler Lane, Altoona</p>
                <p>PA 16602</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}