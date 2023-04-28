
import { Lateef } from "next/font/google";
import React from "react";
import Link from "next/link";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
export default function CarouselComponent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1

  };
  return (
    <div className="flex flex-col w-full h-auto">
        <AliceCarousel  autoPlay autoPlayInterval="2500"  disableButtonsControls responsive={'responsive'}>
          <div>
            <img className="sliderimg" src="./img/carousel/slide1.jpg"/>
            <div className="flex flex-col justify-center items-center">
            <h1 className=" text-[40px] font-[cursive] ">Millions of Happy Marriages!</h1>
            <Link href="/signup">
            <button className="w-[130px] h-[50px] bg-[#2A2F4F] border-[2px] border-solid border-black outline-none rounded-[8px] cursor-pointer text-[1.1em] text-[#E5BEEC]  font[500] ease-[0.5s] hover:bg-[#2A2F4F] hover:text-[#fff] hover:border-[#fff]">
            Register
          </button>
          </Link>
          </div>
          </div>
          <div>
            <img  className="sliderimg" src="./img/carousel/slide2.jpg"/>
            <div className="flex flex-col justify-center items-center">
            <h1 className=" text-[40px] font-[cursive]">Happily ever after starts now!</h1>
            <Link href="/signup">
            <button className="w-[130px] h-[50px] bg-[#2A2F4F] border-[2px] border-solid border-black outline-none rounded-[8px] cursor-pointer text-[1.1em] text-[#E5BEEC]  font[500]  ease-[0.5s] hover:bg-[#2A2F4F] hover:text-[#fff] hover:border-[#fff]">
            Register
          </button>
          </Link>
          </div>
          </div>
          <div>
            <img  className="sliderimg" src="./img/carousel/slide3.jpg"/>
            <div className="flex flex-col justify-center items-center">
            <h1 className=" text-[40px] font-[cursive]">Get Your Soulmate!</h1>
            <Link href="/signup">
            <button className="w-[130px] h-[50px] bg-[#2A2F4F] border-[2px] border-solid border-black outline-none rounded-[8px] cursor-pointer text-[1.1em] text-[#E5BEEC]  font[500]  ease-[0.5s] hover:bg-[#2A2F4F] hover:text-[#fff] hover:border-[#fff]">
            Register
          </button>
          </Link>
          </div>
          </div>
          <div>
            <img  className="sliderimg" src="./img/carousel/slide4.jpg"/>
            <div className="flex flex-col justify-center items-center">
            <h1 className=" text-[40px] font-[cursive]">Meet Some One Spacial!</h1>
            <Link href="/signup">
            <button className="w-[130px] h-[50px] bg-[#2A2F4F] border-[2px] border-solid border-black outline-none rounded-[8px] cursor-pointer text-[1.1em] text-[#E5BEEC]  font[500]  ease-[0.5s] hover:bg-[#2A2F4F] hover:text-[#fff] hover:border-[#fff]">
            Register
          </button>
          </Link>
          </div>
          </div>
          <div>
            <img  className="sliderimg" src="./img/carousel/slide5.jpg"/>
            <div className="flex flex-col justify-center items-center">
            <h1 className=" text-[40px] font-[cursive]">Found Your Perfect Match!</h1>
            <Link href="/signup">
            <button className="w-[130px] h-[50px] bg-[#2A2F4F] border-[2px] border-solid border-black outline-none rounded-[8px] cursor-pointer text-[1.1em] text-[#E5BEEC]  font[500] ease-[0.5s] hover:bg-[#2A2F4F] hover:text-[#fff] hover:border-[#fff]">
            Register
          </button>
          </Link>
          </div>
          </div>
          </AliceCarousel>
          
    </div>

    
  )
}