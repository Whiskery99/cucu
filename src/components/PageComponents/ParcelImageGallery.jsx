"use client"

import { ArrowBigLeft, ArrowBigRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { TbHomeCancel } from 'react-icons/tb';
// import MoveRightICon from '../../public/icons/forward.svg';
// import MoveLeftICon from '../../public/icons/back.svg';

// import {
//   BackArrowIcon,
//   CameraIcon,
//   CloseIcon,
//   ForwardArrowIcon,
// } from '../atoms/icons/icon';
const images = [

]


const ParcelImageGallery = ({ images }) => {
  const slideCon = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [productImages, setProductImages] = useState([]);

  const handleOpen = (image) => {
    setSelectedImage(image);
  };
  const moveSlide = (direction) => {
    direction === 'back' && (slideCon.current.scrollLeft -= 400);
    direction === 'forward' && (slideCon.current.scrollLeft += 400);
  };

useEffect(() => {
    setProductImages(
      images?.map((image) => ({
        ...image,
        img: image.img
      }))
    );
  }, [images]);

//   const imageCount = images?.length;

  return (
    <>
      {selectedImage !== null && (
        <Modal
          image={selectedImage}
          onClose={setSelectedImage}
          allImages={productImages}
        />
      )}
      <div className=" mx-auto relative overflow-hidden shadow-[0_0_10px_-5px_rgba(0,_0,_0,_0.3)] bg-[#e8e8e8]">
        {/* {imageCount === 1 ? (
          <div
            className="bg-center absolute top-0 left-0 bg-cover bg-no-repeat filter blur-3xl h-full w-full"
            style={{ backgroundImage: `url(${images[0]?.img})` }}
          ></div>
        ) : imageCount === 2 ? (
          <div
            className="bg-center absolute top-0 left-0 bg-cover bg-no-repeat filter blur-3xl h-full w-full"
            style={{ backgroundImage: `url(${images[0].img})` }}
          ></div>
        ) : (
          <div className="bg-center bg-white absolute top-0 left-0 bg-cover bg-no-repeat filter h-full w-full"></div>
        )} */}

        <div
          className="overflow-auto relative scroll-smooth snap-mandatory snap-x scrollbar-hide"
          ref={slideCon}
        >
          {productImages?.length > 0 ? (
            <div className="flex">
              {productImages?.map((image, i) => (
                <div
                  key={image?._id}
                  onClick={() => handleOpen(i)}
                  className={`snap-start w-full flex-shrink-0 max-w-[400px] shadow-[0_0_10px_-5px_rgba(0,_0,_0,_0.5)] relative flex rounded-md overflow-hidden ${
                    i > 0 && 'ml-2'
                  }`}
                >
                  <Image
                    src={image?.img}
                    width={10000}
                    height={10000}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className={`relative w-[400px] mx-auto`}>
              <Image
                src={'/how.jpg'}
                width={10000}
                height={10000}
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Buttons */}
        {productImages?.length > 0 && (
          <>
            <button
              className=" bg-white shadow-[3px_3px_5px_0_rgba(0,_0,_0,_0.15)] absolute left-[5px] top-[50%] translate-y-[-50%] flex w-8 h-8 justify-center rounded-full items-center"
              onClick={() => moveSlide('back')}
            >
              <ArrowBigLeft className='w-8' />
            </button>
            <button
              className=" bg-white shadow-[-3px_3px_5px_0_rgba(0,_0,_0,_0.15)] absolute right-[5px] top-[50%] translate-y-[-50%] flex w-8 h-8 justify-center rounded-full items-center"
              onClick={() => moveSlide('forward')}
            >
              <ArrowBigRight className='w-8' />
            </button>
          </>
        )}
      </div>
    </>
  );
};

const Modal = ({ image, onClose, allImages, imageAlt }) => {
  const screenWidth = document.body.offsetWidth;
  const scrollController = useRef(null);

  const moveSlide = (direction) => {
    if (direction === 'backward') {
      if (scrollController.current) {
        scrollController.current.scrollLeft -= screenWidth;
      }
    }
    if (direction === 'forward') {
      if (scrollController.current) {
        scrollController.current.scrollLeft += screenWidth;
      }
    }
  };

  useEffect(() => {
    if (scrollController.current) {
      scrollController.current.scrollLeft = screenWidth * image;
    }
  }, []);

  return (
    <div
      ref={scrollController}
      className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,.90)] z-50 scrollbar-hide overflow-x-auto snap-mandatory snap-x scroll-smooth"
    >
      <div
        className="grid h-full"
        style={{
          gridTemplateColumns: `repeat(${allImages?.length}, ${screenWidth}px)`,
        }}
      >
        {allImages?.map((image) => (
          <div className="relative w-full h-full snap-start">
            <Image
              src={image?.img}
              layout="fill"
              alt={imageAlt}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <button
        className="fixed top-0 right-0 p-8 z-[12]"
        onClick={() => onClose(null)}
      >
        <TbHomeCancel className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={() => moveSlide('backward')}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-[11]"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={() => moveSlide('forward')}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-[11]"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
      {/*
      <div className="absolute bottom-5 left-2 ml-10 flex justify-center items-center">
        <CameraIcon className="w-4 h-4 text-white" />
        <span className="text-white text-[15px] ml-2">
          {NewIdx}/{imageLength}
        </span>
      </div> */}
    </div>
  );
};

export default ParcelImageGallery;
