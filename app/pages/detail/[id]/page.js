"use client"

import React, { useState } from 'react'
import ImageSlider from '../../../components/detail/imageSlider';
import BreadCrumb from '../../../components/ui/breadcrumb/breadcrumb'
import { BsHeart } from 'react-icons/bs';
import { TbTruckDelivery } from "react-icons/tb";
import Products from '../../../components/home/products';

export default function Detail() {

    const [selectSize, setSelectSize] = useState("")

    return (
        <div className='mt-[80px]'>
            <BreadCrumb />
            <div className="grid grid-cols-12 gap-20 mt-[80px]">
                <div className='col-span-12 lg:col-span-7'>
                    <ImageSlider />
                </div>
                <div className='col-span-12 lg:col-span-5'>
                    <div>
                        <p className='text-[24px] font-bold mb-[16px]'>Havic HV G-92 Gamepad</p>
                        <div className="flex mt-[8px] mb-[16px]">
                            <div className="flex items-center">
                                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <p className="text-[#808080] text-[14px] font-medium ml-3">(150 Reviews)</p>
                        </div>
                        <p className='text-[24px] font-medium mb-[24px]'>$192.00</p>
                        <p className='text-[18px] font-medium'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                        <div className="h-full w-full border-2 border-black-300 my-[24px]"></div>
                        <div className='flex items-center'>
                            <p className='text-[24px] font-medium'>Colours:</p>
                            <div className='flex ml-[24px]'>
                                <div className='bg-[#A0BCE0] rounded-full w-4 h-4'></div>
                                <div className='bg-[#E07575] rounded-full w-4 h-4 ml-[8px]'></div>
                            </div>
                        </div>
                        <div className='flex items-center mt-[24px]'>
                            <p className='text-[24px] font-medium'>Size:</p>
                            <div className='flex ml-[24px] gap-2'>
                                <div onClick={() => setSelectSize("XS")} className={`cursor-pointer rounded-md w-10 h-8 flex justify-center items-center border-2 text-${selectSize === "XS" ? "white" : "black"} bg-[${selectSize === "XS" && "#DB4444"}]`}>
                                    <p>XS</p>
                                </div>
                                <div onClick={() => setSelectSize("S")} className={`cursor-pointer rounded-md w-10 h-8 flex justify-center items-center border-2 text-${selectSize === "S" ? "white" : "black"} bg-[${selectSize === "S" && "#DB4444"}]`}>
                                    <p>S</p>
                                </div>
                                <div onClick={() => setSelectSize("M")} className={`cursor-pointer rounded-md w-10 h-8 flex justify-center items-center border-2 text-${selectSize === "M" ? "white" : "black"} bg-[${selectSize === "M" && "#DB4444"}]`}>
                                    <p>M</p>
                                </div>
                                <div onClick={() => setSelectSize("L")} className={`cursor-pointer rounded-md w-10 h-8 flex justify-center items-center border-2 text-${selectSize === "L" ? "white" : "black"} bg-[${selectSize === "L" && "#DB4444"}]`}>
                                    <p>L</p>
                                </div>
                                <div onClick={() => setSelectSize("XL")} className={`cursor-pointer rounded-md w-10 h-8 flex justify-center items-center border-2 text-${selectSize === "XL" ? "white" : "black"} bg-[${selectSize === "XL" && "#DB4444"}]`}>
                                    <p>XL</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 mt-[24px]'>
                            <div className="flex flex-row h-10 w-32 rounded-lg relative bg-white">
                                <button
                                    data-action="decrement"
                                    className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                                >
                                    <span className="m-auto text-2xl font-thin">−</span>
                                </button>
                                <input
                                    type="number"
                                    className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                    name="custom-input-number"
                                    defaultValue={0}
                                />
                                <button
                                    data-action="increment"
                                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                >
                                    <span className="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                            <button
                                type="submit"
                                className="flex justify-center w-40 h-10 items-center rounded-md bg-[#DB4444] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Buy Now
                            </button>
                            <div className={`cursor-pointer rounded-md w-16 h-10 flex justify-center items-center border-2`}>
                                <BsHeart />
                            </div>
                        </div>
                        <div className={`cursor-pointer rounded-md border-2 mt-[40px]`}>
                            <div className='flex items-center my-[24px] mx-[18px]'>
                                <div>
                                    <TbTruckDelivery size={30} />
                                </div>
                                <div className='ml-4'>
                                    <p className='mb-[8px] text-[18px] font-bold'>Free Delivery</p>
                                    <p>Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className="h-full w-full border-2 border-black-300"></div>
                            <div className='flex items-center my-[24px] mx-[18px]'>
                                <div>
                                    <TbTruckDelivery size={30} />
                                </div>
                                <div className='ml-4'>
                                    <p className='mb-[8px] text-[18px] font-bold'>Free Delivery</p>
                                    <p>Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 mt-[120px]'>
                    <div className='flex items-center'>
                        <div className='bg-[#DB4444] w-10 h-20 rounded-md'></div>
                        <p className='text-[#DB4444] font-bold text-[18px] ml-[16px]'>Related Item</p>
                    </div>
                    <Products arrows={false} />
                </div>
            </div>
        </div>
    )
}