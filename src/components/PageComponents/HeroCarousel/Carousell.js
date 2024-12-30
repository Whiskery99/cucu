'use client';

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousell.module.css';

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  const carouselImages = [
    {
      src: './banner.png',
      title: 'Global Logistics Solutions',
      description: 'We offer seamless shipping services that are customized to suit your unique logistics needs, ensuring that your products reach their destinations safely and on time. Our global network and experienced team work around the clock to guarantee efficiency, security, and reliability, no matter the scale of the shipment or the complexity of the route.',
    },
    {
      src: './banner2.png',
      title: 'Your Trusted Freight Partner',
      description: 'Our commitment is to connect businesses with international markets by providing dependable, fast, and cost-effective transportation solutions. With a deep understanding of cross-border logistics and a vast network of partners, we simplify the shipping process, ensuring your business thrives and grows without the usual logistical headaches.',
    },
  ];

  return (
    <Slider {...settings}>
      {carouselImages.map((item, index) => (
        <div key={index} className="relative h-[90vh]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.src})` }}
          />
          <div className="absolute inset-0 bg-black opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center flex flex-col items-center justify-center gap-6 px-8 max-w-4xl">
              <h1 className="text-4xl md:text-7xl font-extrabold mb-6 text-[#fd961a]">{item.title}</h1>
              <p className='px-10 md:px-28 text-lg text-white leading-8'>{item.description}</p>
              <div className="flex gap-6">
                <a href="/track-parcel" className='text-[#fff] bg-[#fd961a] hover:bg-transparent transition-all ease-in-out duration-500 border-[2px] border-[#fd961a] py-3 px-6 rounded-md'>Track Parcel</a>
                <a href="/packages" className='text-[#fd961a] hover:bg-[#fd961a] hover:text-white transition-all ease-in-out duration-500 border-[2px] border-[#fd961a] py-3 px-6 rounded-md'>Our Services</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
