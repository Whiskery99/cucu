"use client";

import Footer from "@/components/Footer";
import { ContactIcon, HomeIcon, MapIcon } from "lucide-react";
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
      } else {
        console.error('Error sending email:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <>
      <div>
        <div className="h-[18vh] bg-[#fd961a] flex flex-col items-center justify-center text-center overflow-hidden">
          <p className="text-black text-sm md:text-base mt-3">Contact</p>
          <h1 className="text-white text-3xl font-semibold">Get in Touch</h1>
          <div className="w-16 h-1 bg-white mt-2"></div>
        </div>

        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-[#fd961a] py-6 px-8 text-center">
              <p className="text-2xl font-semibold text-black">Send us a Message</p>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#fd961a] focus:border-transparent"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#fd961a] focus:border-transparent"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#fd961a] text-white py-3 rounded-lg text-lg font-medium hover:bg-[#e68400] transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-[#fd961a] p-6 flex items-center gap-6 rounded-lg shadow-md">
              <div className="bg-white p-4 rounded-full shadow-md">
                <HomeIcon className="w-6 h-6 text-[#fd961a]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-black">Opening Hours</h2>
                <p className="text-gray-700">Monday - Friday</p>
                <p className="text-gray-700">9 AM - 6 PM</p>
              </div>
            </div>

            <div className="bg-[#fd961a] p-6 flex items-center gap-6 rounded-lg shadow-md">
              <div className="bg-white p-4 rounded-full shadow-md">
                <MapIcon className="w-6 h-6 text-[#fd961a]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-black">Our Address</h2>
                <p className="text-gray-700">467 Stutler Lane</p>
                <p className="text-gray-700">Altoona, PA 16602</p>
              </div>
            </div>
            <div className="bg-[#fd961a] p-6 flex items-center gap-6 rounded-lg shadow-md">
              <div className="bg-white p-4 rounded-full shadow-md">
                <ContactIcon className="w-6 h-6 text-[#fd961a]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-black">WhatsApp Contact</h2>
                <p className="text-gray-700">
                  <a href="https://wa.me/+13044390475">+13044390475</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
