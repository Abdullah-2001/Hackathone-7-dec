"use client"

import Image from 'next/image';
import loginBg from '../../../public/loginBg.jpg';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter()
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className='col-span-12 md:col-span-6'>
        <Image src={loginBg} className='w-full' alt="" />
      </div>
      <div className='col-span-12 md:col-span-6'>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="mt-10 text-[30px] font-medium tracking-tight text-gray-900">
              Signup to Exclusive
            </p>
            <p className='text-[18px]'>Enter your details below</p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className='flex justify-between items-center'>
                <button  
                  onClick={() => router.push("/pages/home")}
                  className="flex justify-center rounded-md bg-[#DB4444] px-10 py-4 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create Account
                </button>
                <div className="text-sm">
                    <a href="#" className="font-medium text-[#DB4444]">
                      Forgot password?
                    </a>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}