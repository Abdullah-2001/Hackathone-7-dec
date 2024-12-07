"use client"

import React, { useState } from 'react'
import BreadCrumb from '../../components/ui/breadcrumb/breadcrumb'
import monitor from '../../../public/monitor.png';
import gamepad from '../../../public/gamepad.png';
import { CART_TIEMS } from '../../mock/mockData'
import Image from 'next/image'

export default function Checkout() {
    return (
        <div className='mt-[80px]'>
            <BreadCrumb />
            <p className='text-black font-bold text-[34px] mb-10'>Billing Details</p>
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-8 mb-5 lg:mb-0">
                    <div className='mb-5'>
                        <label class="block uppercase tracking-wide text-[#808080] text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-[600px] rounded-md bg-[#F5F5F5] px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div className='mb-5'>
                        <label class="block uppercase tracking-wide text-[#808080] text-xs font-bold mb-2" for="grid-first-name">
                            Company Name
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-[600px] rounded-md bg-[#F5F5F5] px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div className='mb-5'>
                        <label class="block uppercase tracking-wide text-[#808080] text-xs font-bold mb-2" for="grid-first-name">
                            Street Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-[600px] rounded-md bg-[#F5F5F5] px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div className='mb-5'>
                        <label class="block uppercase tracking-wide text-[#808080] text-xs font-bold mb-2" for="grid-first-name">
                            Apartment, floor, etc. (optional)
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-[600px] rounded-md bg-[#F5F5F5] px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div className='mb-5'>
                        <label class="block uppercase tracking-wide text-[#808080] text-xs font-bold mb-2" for="grid-first-name">
                            Town/City*
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-[600px] rounded-md bg-[#F5F5F5] px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div className='mb-5'>
                        <label class="block uppercase tracking-wide text-[#808080] text-xs font-bold mb-2" for="grid-first-name">
                            Phone Number*
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-[600px] rounded-md bg-[#F5F5F5] px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div>
                        <label class="block uppercase tracking-wide text-[#808080] text-xs font-bold mb-2" for="grid-first-name">
                            Email Address*
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-[600px] rounded-md bg-[#F5F5F5] px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div className="inline-flex items- mt-[24px]">
                        <label
                            className="flex items-center cursor-pointer relative"
                            htmlFor="check-2"
                        >
                            <input
                                type="checkbox"
                                defaultChecked=""
                                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#DB4444] checked:border-[#DB4444]"
                                id="check-2"
                            />
                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth={1}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </label>
                        <label
                            className="cursor-pointer ml-2 text-slate-600 text-[16px]"
                            htmlFor="check-2"
                        >
                            Save this information for faster check-out next time
                        </label>
                    </div>
                    <div>
                        <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 mt-7">
                            Place Order
                        </button>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4 p-6">
                    <div className="flex justify-between mb-6">
                        <div className='flex items-center'>
                            <Image src={monitor} width={50} height={50} alt="" />
                            <span className="text-gray-600 ml-4">LCD Monitor</span>
                        </div>
                        <span className="text-black font-medium">$650</span>
                    </div>
                    <div className="flex justify-between mb-7">
                        <div className='flex items-center'>
                            <Image src={gamepad} width={50} height={50} alt="" />
                            <span className="text-gray-600 ml-4">LCD Monitor</span>
                        </div>
                        <span className="text-black font-medium">$650</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="text-black font-medium">$1750</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Shipping:</span>
                        <span className="text-black font-medium">Free</span>
                    </div>
                    <hr className="my-4 border-gray-300" />
                    <div className="flex justify-between mb-4">
                        <span className="text-gray-600">Total:</span>
                        <span className="text-black font-semibold">$1750</span>
                    </div>
                    <div className="flex justify-between mb-4">
                        <span className="text-gray-600">SubTotal:</span>
                        <span className="text-black font-semibold">$1750</span>
                    </div>
                    <div className="space-y-3">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="notification"
                                value="email"
                                className="peer hidden"
                            />
                            <span className="w-5 h-5 border-2 rounded-full flex items-center justify-center border-gray-300 peer-checked:border-blue-500 peer-checked:before:bg-blue-500 peer-checked:before:w-3 peer-checked:before:h-3 peer-checked:before:rounded-full before:transition-all"></span>
                            <span className="ml-3 text-gray-700 peer-checked:text-black">Bank</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="notification"
                                value="email"
                                className="peer hidden"
                            />
                            <span className="w-5 h-5 border-2 rounded-full flex items-center justify-center border-gray-300 peer-checked:border-blue-500 peer-checked:before:bg-blue-500 peer-checked:before:w-3 peer-checked:before:h-3 peer-checked:before:rounded-full before:transition-all"></span>
                            <span className="ml-3 text-gray-700 peer-checked:text-black">Cash on delivery</span>
                        </label>
                    </div>
                    <div className='mt-5'>
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            className="border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
                        />
                        <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 ml-4">
                            Apply Coupon
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}