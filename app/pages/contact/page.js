"use client"

import React, { useState } from 'react'
import BreadCrumb from '../../components/ui/breadcrumb/breadcrumb'
import monitor from '../../../public/monitor.png';
import gamepad from '../../../public/gamepad.png';
import { CART_TIEMS } from '../../mock/mockData'
import Image from 'next/image'
import { FaPhone } from 'react-icons/fa6';

export default function Contact() {
    return (
        <div className='mt-[80px]'>
            <BreadCrumb />
            <div className="grid grid-cols-12 gap-5 mt-[80px]">
                <div className="col-span-12 lg:col-span-4 mb-5 lg:mb-0">
                    <div className="col-span-12 lg:col-span-4 rounded-md shadow-md p-6">
                        <div className='flex items-center mb-[24px]'>
                            <div className='bg-[#DB4444] w-[50px] h-[50px] rounded-full flex justify-center items-center'>
                                <FaPhone color="white" size={20} />
                            </div>
                            <h3 className="text-lg font-medium ml-[18px]">Call To Us</h3>
                        </div>
                        <div className="mb-2">
                            <p className="text-[#000000] mb-[16px]">We are available 24/7, 7 days a week.</p>
                            <p className="text-[#000000]">Phone: +8801611112222</p>
                        </div>
                        <div className="h-full w-full border-[1px] border-black-300 my-[32px]"></div>
                        <div className='flex items-center mb-[24px]'>
                            <div className='bg-[#DB4444] w-[50px] h-[50px] rounded-full flex justify-center items-center'>
                                <FaPhone color="white" size={20} />
                            </div>
                            <h3 className="text-lg font-medium ml-[18px]">Write To US</h3>
                        </div>
                        <div className="mb-2">
                            <p className="text-[#000000] mb-[16px]">We are available 24/7, 7 days a week.</p>
                            <p className="text-[#000000]">Phone: +8801611112222</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-8 py-10 px-8 border-2 rounded-md shadow-md">
                    <div className="flex justify-between items-center gap-5">
                        <input
                            id="name"
                            placeholder="Your Name"
                            required
                            aria-label="Name"
                            className="block w-full rounded-md bg-[#F5F5F5] px-3 py-2.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                        />
                        <input
                            id="email"
                            placeholder="Your Email"
                            required
                            aria-label="Email"
                            className="block w-full rounded-md bg-[#F5F5F5] px-3 py-2.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                        />
                        <input
                            id="phone"
                            placeholder="Your Phone"
                            required
                            aria-label="Phone"
                            className="block w-full rounded-md bg-[#F5F5F5] px-3 py-2.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                        />
                    </div>
                    <textarea
                        id="message"
                        placeholder="Your Message"
                        required
                        rows="4"
                        aria-label="Message"
                        className="my-10 block w-full rounded-md bg-[#F5F5F5] px-3 py-2.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                    />
                    <div className='flex justify-end'>
                        <button
                            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 flex justify-center items-center md:mt-0 mt-4"
                            aria-label="Place Order"
                        >
                            Send Message
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}