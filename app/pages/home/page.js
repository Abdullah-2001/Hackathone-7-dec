"use client"

import React, { useEffect, useState } from 'react';
import Carousel from '../../components/ui/Carousual/Carousel';
import { NAV_LINKS } from '../../mock/mockData';
import { MdKeyboardArrowRight } from "react-icons/md";
import OfferTimer from '../../components/home/timer';
import OfferTimer2 from '../../components/home/timer2';
import Products from '../../components/home/products';
import Categories from '../../components/home/categories';
import offerImage from '../../../public/offer.png';
import ps5Image from '../../../public/ps5.png';
import women from '../../../public/woman.png';
import pods from '../../../public/pods.png';

// icons

import service1 from '../../../public/service1.svg';
import service2 from '../../../public/service2.svg';
import service3 from '../../../public/service3.svg';


import Image from 'next/image';

export default function Home() {

  const [products, setProducts] = useState([])
  const [days, setDays] = useState("")
  const [hours, setHours] = useState("")
  const [min, setMin] = useState("")
  const [sec, setSec] = useState("")

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    let dest = new Date("dec 25, 2024 12:00:00").getTime();
    setInterval(() => {
      let now = new Date().getTime();
      let diff = dest - now;
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)))
      setHours(Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      setMin(Math.floor(diff % (1000 * 60 * 60) / (1000 * 60)))
      setSec(Math.floor(diff % (1000 * 60) / (1000)))
    }, 1000)
  }, [])

  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        {/* Left Navigation Links */}
        <div className="col-span-12 md:col-span-3 p-4 border-r-2">
          <div className='pt-5'>
            {NAV_LINKS.map((link, index) => (
              <div
                className={link.subMenus ? 'flex justify-between items-center mb-4' : 'mb-4'}
                key={`${link.link}_${index}`}
              >
                <p className="text-black hover:cursor-pointer hover:underline">
                  {link.link}
                </p>
                {link.subMenus && <MdKeyboardArrowRight size={30} />}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="col-span-12 md:col-span-9 pl-[45px] pt-10">
          <Carousel />
        </div>

      </div>
      {/* Todays section */}
      <section className='mt-[150px]'>
        <div className='flex items-center'>
          <div className='bg-[#DB4444] w-10 h-20 rounded-md'></div>
          <p className='text-[#DB4444] font-bold text-[18px] ml-[16px]'>Today’s</p>
        </div>
        <div className='flex items-center mt-[24px]'>
          <p className='text-black font-bold text-[24px] mr-20'>Flash Sales</p>
          <OfferTimer days={days} hours={hours} min={min} sec={sec} />
        </div>
        <div>
          <Products />
          <div className='flex justify-center mt-[76px]'>
            <button
              type="submit"
              className="flex justify-center w-56 h-14 items-center rounded-md bg-[#DB4444] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      <div className="h-full w-full border-2 border-black-300 mt-[60px] mb-[80px]"></div>

      <section className='mt-[150px]'>
        <div className='flex items-center'>
          <div className='bg-[#DB4444] w-10 h-20 rounded-md'></div>
          <p className='text-[#DB4444] font-bold text-[18px] ml-[16px]'>Categories</p>
        </div>
        <p className='text-black font-bold text-[24px] mt-[24px]'>Browse By Category</p>
        <Categories />
      </section>

      <div className="h-full w-full border-2 border-black-300 mt-[60px] mb-[80px]"></div>

      <section className='mt-[150px]'>
        <div className='flex items-center'>
          <div className='bg-[#DB4444] w-10 h-20 rounded-md'></div>
          <p className='text-[#DB4444] font-bold text-[18px] ml-[16px]'>This Month</p>
        </div>
        <div className='flex items-center justify-between mt-[24px]'>
          <p className='text-black font-bold text-[24px] mr-20'>Best Selling Products</p>
          <button
            type="submit"
            className="flex justify-center w-40 h-14 items-center rounded-md bg-[#DB4444] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View All
          </button>
        </div>
        <Products />
      </section>

      <section className='mt-[150px]'>
        <div className='limited-offer-bg flex justify-between items-center'>
          <div>
            <div className='limited-offer-tagline'>
              <p>CATEGORIES</p>
            </div>
            <div className='limited-offer-title'>
              <p>ENHANCE YOUR MUSIC EXPERIENCE</p>
            </div>
            <OfferTimer2 days={days} hours={hours} min={min} sec={sec} />
            <button
              type="submit"
              className="flex justify-center mt-16 w-56 h-14 items-center rounded-md bg-[#DB4444] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Buy Now
            </button>
          </div>
          <div>
            <Image className='w-full' src={offerImage} alt="" />
          </div>
        </div>
      </section>

      <section className='mt-[71px]'>
        <div className='flex items-center'>
          <div className='bg-[#DB4444] w-10 h-20 rounded-md'></div>
          <p className='text-[#DB4444] font-bold text-[18px] ml-[16px]'>Our Products</p>
        </div>
        <p className='text-black font-bold text-[24px] mt-[24px]'>Explore Our Products</p>
        <div>
          <Products />
          <div className='flex justify-center mt-[76px]'>
            <button
              type="submit"
              className="flex justify-center w-56 h-14 items-center rounded-md bg-[#DB4444] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      <section className='mt-[140px]'>
        <div className='flex items-center'>
          <div className='bg-[#DB4444] w-10 h-20 rounded-md'></div>
          <p className='text-[#DB4444] font-bold text-[18px] ml-[16px]'>Featured</p>
        </div>
        <p className='text-black font-bold text-[24px] mt-[24px] mb-[60px]'>New Arrival</p>
        <div className="grid grid-cols-12 gap-4">
          <div className='col-span-6 relative rounded-md'>
            <Image className='w-full' src={ps5Image} alt="" />
            <div className='absolute bottom-[240px] left-7'>
              <p className='text-[24px] font-bold text-white'>PlayStation 5</p>
              <p className='text-[18px] w-[242px] font-medium text-white my-[16px]'>Black and White version of the PS5 coming out on sale.</p>
              <a className='text-[18px] font-medium text-white underline' href="#">Show Now</a>
            </div>
          </div>
          <div className="col-span-6 grid grid-rows-2 grid-cols-2 gap-4">
            <div className='col-span-2 rounded-md relative'>
              <Image className='w-full' src={women} alt="" />
              <div className='absolute bottom-[30px] left-7'>
                <p className='text-[24px] font-bold text-white'>Women’s Collections</p>
                <p className='text-[18px] w-[232px] font-medium text-white my-[16px]'>Featured woman collections that give you another vibe.</p>
                <a className='text-[18px] font-medium text-white underline' href="#">Show Now</a>
              </div>
            </div>
            <div className='rounded-md relative'>
              <Image className='w-full' src={pods} alt="" />
              <div className='absolute bottom-[130px] left-7'>
                <p className='text-[24px] font-bold text-white'>Speakers</p>
                <p className='text-[18px] font-medium text-white my-[16px]'>Amazon wireless speakers</p>
                <a className='text-[18px] font-medium text-white underline' href="#">Show Now</a>
              </div>
            </div>
            <div className='rounded-md relative'>
              <Image className='w-full' src={pods} alt="" />
              <div className='absolute bottom-[130px] left-7'>
                <p className='text-[24px] font-bold text-white'>Perfume</p>
                <p className='text-[18px] font-medium text-white my-[16px]'>GUCCI INTENSE OUD EDP</p>
                <a className='text-[18px] font-medium text-white underline' href="#">Show Now</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className='mt-[140px] flex justify-around text-center items-center'>
        <div className='flex flex-col items-center'>
          <Image src={service2} alt="" />
          <p className='text-[24px] font-bold mt-[24px]'>FREE AND FAST DELIVERY</p>
          <p className='text-[18px]'>Free delivery for all orders over $140</p>
        </div>
        <div className='flex flex-col items-center'>
          <Image src={service2} alt="" />
          <p className='text-[24px] font-bold mt-[24px]'>FREE AND FAST DELIVERY</p>
          <p className='text-[18px]'>Free delivery for all orders over $140</p>
        </div>
        <div className='flex flex-col items-center'>
          <Image src={service3} alt="" />
          <p className='text-[24px] font-bold mt-[24px]'>FREE AND FAST DELIVERY</p>
          <p className='text-[18px]'>Free delivery for all orders over $140</p>
        </div>
      </div>

    </div>
  );
}
