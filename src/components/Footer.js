import { Black_And_White_Picture } from "next/font/google";
import Link from "next/link";
import React from "react";
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
      <div
        className="bg-[#2A2F4F] h-1/2 w-full flex md:flex-row flex-col justify-around items-start border-2 border-violet-300
    p-20"
      >
        <div className="p-5 " >
          <ul>
            <p
              className="text-gray-8000 font-bold text-3xl font-[cursive]
                pb-6"
            >
              Just<span className="text-[#FDE2F3] font-[cursive]">Marry</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-[#d62976]" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-[#00acee]" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-[#0A66C2]" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-[#FF0000]" />
            </div>
          </ul>
        </div>

        {/* <div className='p-5'>
                <ul>
                    <p className='text-gray-800 font-bold text-2xl pb-4'> Product</p>
                    <li className='text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer'>Stocks
                    </li>
                    <li className='text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer'>Futures & Options
                    </li>
                    <li className='text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer'>Mutual Funds
                    </li>
                    <li className='text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer'>Fixed Deposites
                    </li>
                </ul>
            </div> */}
        <div className="p-5">
          <ul>
            <p className="text-[#FDE2F3] font-bold text-2xl pb-4">Company</p>
            <Link href="/">
            <li className="text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer">
              Home
            </li>
            </Link>
            <Link href="#gallery">
            <li className="text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer">
              Gallery
            </li>
            </Link>
            <Link href="#service">
            <li className="text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer">
              Service
            </li>
            </Link>
            <Link href="#about">
            <li className="text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer">
              About
            </li>
            </Link>
            <Link href="#story">
            <li className="text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer">
              Story
            </li>
            </Link>
            <Link href="/contact">
            <li className="text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer">
              Contact
            </li>
            </Link>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-[#FDE2F3] font-bold text-2xl pb-4">Service</p>
            <li className="text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer">
              Photo Shoot
            </li>
            <li className="text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer">
              Video Profiling
            </li>
            <li className="text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer">
              {" "}
              Pre-Marital Counselling
            </li>
            <li className="text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer">
              Personality & Grooming Session
            </li>
            <li className="text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer">
              Videos & photographs{" "}
            </li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-[#FDE2F3] font-bold text-2xl pb-4">Contact</p>
            <li className="text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer">
              <FaLocationArrow className="text-[#FDE2F3] hover:text-[#00F200] cursor-pointer" />
              2401 Bay Blvd Indian Rocks Beach, Florida(FL), 33785
            </li>
            <li className="text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer">
              <FaPhone className="text-[#FDE2F3] hover:text-blue-800 cursor-pointer" />
              +91 9012345678
            </li>
            <li className="text-[#FDE2F3] text-md pb-2 font-semibold hover:text-[#C85C8E] cursor-pointer">
              <FaEnvelope className="text-[#FDE2F3] hover:text-[#E02E23] cursor-pointer" />
              justmarried@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#2A2F4F] flex flex-col justify-center items-center text-center p-5 ">
        <h1 className="text-black font-mono font-semibold">
          @ 2023-2024 All right reserved | Build with{" "}
          <FaHeart className="inline" /> by {""}
          <Link href="/">
          <span className="text-[#FDE2F3] hover:text-[#C85C8E] font-semibold font-[cursive] cursor-pointer">
            Just Marry
          </span>
          </Link>
          {""}
        </h1>
      </div>
    </>
  );
}
