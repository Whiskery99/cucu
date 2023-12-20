
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const carouselImages = [
    './banner.png',
    './banner2.png',
  ];

  return (
    <Slider {...settings}>
      {carouselImages.map((image, index) => (
        <div key={index} className="relative h-[90vh]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center flex flex-col items-center justify-center gap-6 px-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#fd961a]">Moving Your Products Across All Borders</h1>
              <p className='px-10 md:px-20 text-[18px] text-white leading-6'>Over the years, we have worked together to expand our network of partners to deliver reliability and consistency. We give our clients greater visibility into every engagement.</p>
              <a href="/track-parcel" className='text-[#fff] bg-[#fd961a] hover:bg-transparent transition-all ease-in-out duration-500 border-[2px] border-[#fd961a] borer-solid py-3 px-5'>Track Parcel</a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};