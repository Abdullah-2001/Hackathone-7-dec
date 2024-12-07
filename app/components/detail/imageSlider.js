"use client";

import React, { useEffect, useState } from "react";
import ImageMagnifier from "../detail/magnifier";
import { FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";

const ImageSlider = () => {
  const product = {
    gear_item_pictures: [
      {
        id: 1,
        image: "https://regen.pk/cdn/shop/files/REGEN-Macbook-pro-m1-2020-topview.png?v=1682403635",
        isSelected: false,
        isMagnifier: false,
      },
      { id: 2, image: "https://regen.pk/cdn/shop/files/REGEN-Macbook-pro-m1-2020-topview.png?v=1682403635" },
      { id: 3, image: "https://regen.pk/cdn/shop/files/REGEN-Macbook-pro-m1-2020-topview.png?v=1682403635" },
      { id: 4, image: "https://regen.pk/cdn/shop/files/REGEN-Macbook-pro-m1-2020-topview.png?v=1682403635" },
      { id: 5, image: "https://regen.pk/cdn/shop/files/REGEN-Macbook-pro-m1-2020-topview.png?v=1682403635" },
    ],
  };

  const [sliderImages, setSliderImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [showMagnifier, setShowMagnifier] = useState(false);

  useEffect(() => {
    const updatedImages = product?.gear_item_pictures?.map((img, i) => ({
      ...img,
      isSelected: i === 0,
      isMagnifier: false,
    }));
    setSliderImages(updatedImages || []);
  }, []);

  const handleSelectImage = (id, newIndex) => {
    setIndex(newIndex);
    setSliderImages((prev) =>
      prev.map((img) =>
        img.id === id ? { ...img, isSelected: true } : { ...img, isSelected: false }
      )
    );
  };

  const handleNavigation = (direction) => {
    setIndex((prevIndex) => {
      const newIndex =
        direction === "prev"
          ? Math.max(prevIndex - 1, 0)
          : Math.min(prevIndex + 1, sliderImages.length - 1);
      handleSelectImage(sliderImages[newIndex]?.id, newIndex);
      return newIndex;
    });
  };

  return (
    <div className="flex">
      {/* Thumbnail Section */}
      <div className="flex flex-col mr-8">
        {sliderImages?.map((img, i) => (
          <div key={img.id} onClick={() => handleSelectImage(img.id, i)}>
            <Image
              width={400}
              height={100}
              src={img.image}
              className={`cursor-pointer rounded-xl mb-4 transform transition duration-200 ease-in-out ${
                img.isSelected
                  ? "border-[#3563E9] border-[3px]"
                  : "border-none"
              }`}
              alt={`Thumbnail ${i}`}
            />
          </div>
        ))}
      </div>
      {/* Slider Section */}
      <div className="relative slider-container">
        <div className="relative flex items-center justify-between">
          {/* Previous Button */}
          <button
            onClick={() => handleNavigation("prev")}
            className="absolute top-[50%] left-5 bg-white text-[#0014C7] text-[1.3rem] border-[#0014C724] rounded-[1.2rem] py-[1rem] h-[4rem] px-[1.4rem] z-10"
          >
            <FaArrowLeft />
          </button>

          {/* Next Button */}
          <button
            onClick={() => handleNavigation("next")}
            className="absolute top-[50%] right-5 rotate-180 bg-white text-[#0014C7] text-[1.3rem] border-[#0014C724] rounded-[1.2rem] py-[1rem] h-[4rem] px-[1.4rem] z-10"
          >
            <FaArrowLeft />
          </button>

          {/* Image Carousel */}
          <div
            className="relative overflow-hidden"
            style={{ width: "100%", height: "auto" }}
          >
            <div
              className="relative flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {sliderImages?.map((img) => (
                <div
                  key={img.id}
                  className="relative w-full flex-shrink-0 bg-[#F1F1F1]"
                >
                  <img
                      onMouseOver={() =>
                        setShowMagnifier(true) ||
                        setSliderImages((prev) =>
                          prev.map((item) =>
                            item.id === img.id
                              ? { ...item, isMagnifier: true }
                              : item
                          )
                        )
                      }
                      onMouseOut={() =>
                        setShowMagnifier(false) ||
                        setSliderImages((prev) =>
                          prev.map((item) =>
                            item.id === img.id
                              ? { ...item, isMagnifier: false }
                              : item
                          )
                        )
                      }
                      src={img.image}
                      className="slider-image w-[30rem] h-[50rem] object-contain"
                      alt="Slide Image"
                    />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
