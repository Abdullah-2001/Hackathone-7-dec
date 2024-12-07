"use client"

import React, { useState } from 'react'
import BreadCrumb from '../../components/ui/breadcrumb/breadcrumb'
import monitor from '../../../public/monitor.png';
import gamepad from '../../../public/gamepad.png';
import { CART_TIEMS } from '../../mock/mockData'
import Image from 'next/image'
import { FaPhone } from 'react-icons/fa6';
import Accordion from '../../components/ui/accordion/accordion'

export default function Profile() {
    return (
        <div className='mt-[80px]'>
            <div className='flex justify-between items-center'>
                <BreadCrumb />
                <p className='text-[18px] font-semibold'>Welcome</p>
            </div>
            <div className="grid grid-cols-12 gap-5 mt-[80px]">
                <div className="col-span-12 lg:col-span-4 mb-5 lg:mb-0">
                    <div className="col-span-12 lg:col-span-4">
                        <Accordion />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-8 py-10 px-8 border-2 rounded-md shadow-md">
                    <p className="text-[#DB4444] text-[18px] font-medium mb-6">Edit Your Profile</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label
                                className="block uppercase tracking-wide text-[#808080] text-xs font-bold mb-2"
                                htmlFor="name"
                            >
                                Your Name*
                            </label>
                            <input
                                id="name"
                                placeholder="Your Name"
                                required
                                aria-label="Name"
                                className="block w-full rounded-md bg-[#F5F5F5] px-3 py-2.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label
                                className="block uppercase tracking-wide text-[#808080] text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                Your Email*
                            </label>
                            <input
                                id="email"
                                placeholder="Your Email"
                                required
                                aria-label="Email"
                                className="block w-full rounded-md bg-[#F5F5F5] px-3 py-2.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label
                                className="block uppercase tracking-wide text-[#808080] text-xs font-bold mb-2"
                                htmlFor="city"
                            >
                                Town/City*
                            </label>
                            <input
                                id="city"
                                placeholder="Your City"
                                required
                                aria-label="City"
                                className="block w-full rounded-md bg-[#F5F5F5] px-3 py-2.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label
                                className="block uppercase tracking-wide text-[#808080] text-xs font-bold mb-2"
                                htmlFor="password"
                            >
                                Password Changes*
                            </label>
                            <input
                                id="password"
                                placeholder="New Password"
                                required
                                type="password"
                                aria-label="Password"
                                className="block w-full rounded-md bg-[#F5F5F5] px-3 py-2.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label
                            className="block uppercase tracking-wide text-[#808080] text-xs font-bold mb-2"
                            htmlFor="message"
                        >
                            Additional Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Type your message here..."
                            aria-label="Message"
                            rows="4"
                            className="block w-full rounded-md bg-[#F5F5F5] px-3 py-2.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                        />
                    </div>
                    <div className="flex justify-end mt-6">
                        <button
                            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
                            aria-label="Send Message"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>


            </div>
        </div>
    )
}