"use client"

import React, { useState } from 'react'
import BreadCrumb from '../../components/ui/breadcrumb/breadcrumb'
import { CART_TIEMS } from '../../mock/mockData'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Cart() {

    const router = useRouter()

    return (
        <div className='mt-[80px]'>
            <BreadCrumb />
            <div className="grid grid-cols-12 mt-[80px]">
                <div className='col-span-12 mb-10'>
                    <div className="border-[1px] rounded shadow-md w-full p-[24px] flex justify-between">
                        <div className="font-bold text-[18px]">Product</div>
                        <div className="font-bold text-[18px]">Price</div>
                        <div className="font-bold text-[18px]">Quantity</div>
                        <div className="font-bold text-[18px]">Subtotal</div>
                    </div>
                </div>
                {CART_TIEMS.map((cartItem) => {
                    return (
                        <div className='col-span-12 mb-3' key={cartItem.id}>
                            <div className="border-[1px] rounded shadow-md w-full p-[24px] flex justify-between items-center">
                                <div className='flex items-center'>
                                    <Image width={50} height={50} src={cartItem.image} alt="" />
                                    <p className="font-medium text-[18px] ml-[20px]">{cartItem.product}</p>
                                </div>
                                <p className="font-medium text-[18px]">${cartItem.price}</p>
                                <div className="max-w-sm min-w-[100px]">
                                    <div className="relative">
                                        <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow cursor-pointer appearance-none">
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                        </select>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.2"
                                            stroke="currentColor"
                                            className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p className="font-medium text-[18px]">${cartItem.subTotal}</p>
                            </div>
                        </div>
                    )
                })}
                <div className='col-span-12 mt-[24px] mb-[80px]'>
                    <div className='flex justify-between items-center'>
                        <button className='bg-transparent border-2 border-gray-400 w-[150px] h-[50px] flex justify-center items-center text-[16px] font-bold rounded-md'>Return To Shop</button>
                        <button className='bg-transparent border-2 border-gray-400 w-[150px] h-[50px] flex justify-center items-center text-[16px] font-bold rounded-md'>Update Cart</button>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-8 mb-5 lg:mb-0 gap-4">
                    {/* Coupon Input */}
                    <input
                        type="text"
                        placeholder="Coupon Code"
                        className="border-2 w-full lg:w-96 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500"
                    />
                    {/* Apply Coupon Button */}
                    <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 ml-4">
                        Apply Coupon
                    </button>
                </div>
                <div className="col-span-12 lg:col-span-4 border-2 border-gray-300 rounded-md shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
                    {/* Subtotal */}
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="text-black font-medium">$1750</span>
                    </div>
                    {/* Shipping */}
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Shipping:</span>
                        <span className="text-black font-medium">Free</span>
                    </div>
                    <hr className="my-4 border-gray-300" />
                    {/* Total */}
                    <div className="flex justify-between mb-4">
                        <span className="text-gray-600">Total:</span>
                        <span className="text-black font-semibold">$1750</span>
                    </div>
                    {/* Checkout Button */}
                    <button onClick={() => router.push("/pages/checkout")} className="bg-red-500 text-white w-full py-2 rounded-md hover:bg-red-600">
                        Proceed to checkout
                    </button>
                </div>
            </div>
        </div>
    )
}