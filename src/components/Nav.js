import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="p-2 bg-[#2A2F4F] shadow md:flex md:items-center md:justify-between">
      <div className=" px-4 flex flex-wrap justify-between items-center text-[#E5BEEC] hover:text-[#fff] ">
        <Link href="/">
          {" "}
          <span className="text-2xl font-[cursive] cursor-pointer">
            {/* <img
              className="h-10 inline"
              // src="./img/logo/logo.png"
              alt="logo"
            ></img> */}
            Just Married
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-black border border-black rounded-lg md:hidden hover:text-cyan-500 hover:border-cyan-500"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="false"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className="w=full lg:inline-flex lg:w-auto mt-2 lg:mt-0 flex"
        id="navbar-default"
      >
        <ul
          className="md:flex md:items-center z-[-1] md:z-auto md:static absolute  w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 optacity-0 top-[-400px] transition-all ease-in duration-500 cursor-pointer"
          aria-labelledby="navbar-default"
        >
          {/* <li className="mx-4 my-6 md:my-0">
            <Link href="/">
            <span
              
              className="text-xl text-[#E5BEEC] font-[sans] hover:text-[#fff] duration-500"
            >
              Home
            </span>
            </Link>
          </li> */}
          <li className="mx-4 my-6 md:my-0">
            <Link href="#gallery">
            <span
          
              className="text-xl text-[#E5BEEC] font-[sans] hover:text-[#fff] duration-500"
            >
              Gallery
            </span>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
          <Link href="#service">
            <span
            
              className="text-xl text-[#E5BEEC] font-[sans] hover:text-[#fff] duration-500"
            >
              Service
            </span>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
          <Link href="#about">
            <span
              herf="#"
              className="text-xl text-[#E5BEEC] font-[sans] hover:text-[#fff] duration-500"
            >
              About
            </span>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              herf="#"
              className="text-xl  text-[#E5BEEC] font-[sans] hover:text-[#fff] duration-500"
            >
              Contact
            </a>
          </li>
        </ul>
        <Link href="/signin">
          <button className="w-[130px] h-[50px] bg-transparent border-[2px] border-solid border-[#E5BEEC] outline-none rounded-[8px] cursor-pointer text-[1.1em] text-[#E5BEEC]  font[500] ml-[40px] ease-[0.5s] hover:bg-[#2A2F4F] hover:text-[#fff] hover:border-[#fff]">
            Login
          </button>
        </Link>
      </div>
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
    </nav>
  );
}
