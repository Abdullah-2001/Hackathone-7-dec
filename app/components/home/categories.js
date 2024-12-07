import React, { useState } from 'react';
import Slider from "react-slick";
import { FiArrowLeft, FiArrowRight, FiPhone, FiMonitor, FiWatch, FiCamera, FiHeadphones } from "react-icons/fi";

const Categories = () => {

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div onClick={onClick} className="nextArrow">
                <FiArrowRight />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div onClick={onClick} className="prevArrow">
                <FiArrowLeft />
            </div>
        );
    }

    const categories = [
        { title: "Phones", Icon: <FiPhone /> },
        { title: "Computers", Icon: <FiMonitor /> },
        { title: "SmartWatch", Icon: <FiWatch /> },
        { title: "Camera", Icon: <FiCamera /> },
        { title: "HeadPhones", Icon: <FiHeadphones /> },
        { title: "Gaming", Icon: <FiHeadphones /> },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div style={{ marginTop: "50px" }} className="category-class">
            <Slider {...settings}>
                {categories.map((category, index) => {
                    return (
                        <div key={index}>
                            <div className='flex-col'>
                                <FiMonitor size={50} />
                                <p className='text-[18px] font-medium mt-[16px]'>{category.title}</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Categories;
