"use client"

import React from "react";
import Slider from "react-slick";
import heroImage from '../../../../public/Frame 560.png';
import Image from "next/image";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i: number) => <div className="w-3 h-3 bg-gray-500 rounded-full mt-3"></div>,
  };
  return (
    <Slider {...settings}>
      <div>
        <Image style={{ width: "100%" }} src={heroImage} alt="" />
      </div>
      <div>
        <Image style={{ width: "100%" }} src={heroImage} alt="" />
      </div>
      <div>
        <Image style={{ width: "100%" }} src={heroImage} alt="" />
      </div>
      <div>
        <Image style={{ width: "100%" }} src={heroImage} alt="" />
      </div>
      <div>
        <Image style={{ width: "100%" }} src={heroImage} alt="" />
      </div>
    </Slider>
  );
}