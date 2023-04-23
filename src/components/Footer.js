import { Black_And_White_Picture } from 'next/font/google';
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start
    p-20'>
                <div className='p-5'>
                    <ul>
                        <p className='text-gray-8000 font-bold text-3xl font-[cursive]
                pb-6'>Just<span className='text-blue-600 font-[cursive]'>Married</span>
                        </p>
                        <div className='flex gap-6 pb-5'>
                            <FaInstagram className='text-2xl cursor-pointer hover:text-[#DD2A7B]' />
                            <FaTwitter className='text-2xl cursor-pointer hover:text-blue-600' />
                            <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-600' />
                            <FaYoutube className='text-2xl cursor-pointer hover:text-red-600' />
                        </div>
                    </ul>
                </div>

                {/* <div className='p-5'>
                <ul>
                    <p className='text-gray-800 font-bold text-2xl pb-4'> Product</p>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Stocks
                    </li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Futures & Options
                    </li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Mutual Funds
                    </li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Fixed Deposites
                    </li>
                </ul>
            </div> */}
                <div className='p-5'>
                    <ul>
                        <p className='text-gray-800 font-bold text-2xl pb-4'>Company</p>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Home
                        </li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Gallery
                        </li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Service
                        </li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>About
                        </li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Contact
                        </li>
                    </ul>
                </div>

                <div className='p-5'>
                    <ul>
                        <p className='text-gray-800 font-bold text-2xl pb-4'>Service</p>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Photo Shoot</li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Video Profiling</li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'> Pre-Marital Counselling</li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Personality & Grooming Session</li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Videos &  photographs </li>
                    </ul>
                </div>

                <div className='p-5'>
                    <ul>
                        <p className='text-gray-800 font-bold text-2xl pb-4'>Contact</p>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><FaLocationArrow className='text-black hover:text-[#00F200] cursor-pointer' />2401 Bay Blvd
                            Indian Rocks Beach, Florida(FL), 33785</li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><FaPhone className='text-black hover:text-blue-800 cursor-pointer'/>+91 9012345678</li>
                        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><FaEnvelope className='text-black hover:text-[#E02E23] cursor-pointer'/>justmarried@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center text-center p-5 bg-gray-50'>
                <h1 className='text-gray-800 font-semibold'>
                    @ 2023-2024 All right reserved | Build with <FaHeart className='inline' /> by {''}
                    <span className='hover:text-blue-600 font-semibold font-[cursive] cursor-pointer'>
                        Just Married
                    </span>{''}
                </h1>
            </div>
        </>
    )
}