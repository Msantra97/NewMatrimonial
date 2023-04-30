import React,{useState} from "react";
import Link from "next/link";

export default function Nav() {
  const[show,setShow] = useState(false)
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
            Just Marry
          </span>
        </Link>
       
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
      
              className="text-xl text-[#E5BEEC] font-[sans] hover:text-[#fff] duration-500"
            >
              About
            </span>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
          <Link href="#story">
            <span
      
              className="text-xl text-[#E5BEEC] font-[sans] hover:text-[#fff] duration-500"
            >
              Story
            </span>
            </Link>
          </li>
          <Link href="/contact">
          <li className="mx-4 my-6 md:my-0">
            <span
              herf="#"
              className="text-xl  text-[#E5BEEC] font-[sans] hover:text-[#fff] duration-500"
            >
              Contact
            </span>
          </li>
          </Link>
        </ul>
        <Link href="/signin">
          <button className="w-[130px] h-[50px] bg-transparent border-[2px] border-solid border-[#E5BEEC] outline-none rounded-[8px] cursor-pointer text-[1.1em] text-[#E5BEEC]  font[500] ml-[40px] ease-[0.5s] hover:bg-[#2A2F4F] hover:text-[#fff] hover:border-[#fff]  sm:hidden md:hidden lg:block" >
            Login
          </button>
        </Link>
        <div>
        {/* <button
        className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
        
      >
        <i className="material-icons">menu</i>
      </button> */}

      <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-black border border-black rounded-lg md:hidden hover:text-cyan-500 hover:border-cyan-500"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={
            () => setShow(!show)}
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



{show ? (
    <div
      class=" top-navbar w-full lg:hidden lg:flex-grow lg:w-auto"
      id="navigation"
    >
      <div class="lg:hidden lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
        <a
          href="#"
          class="lg:hidden lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Home</span>
        </a>
        <a
          href="#"
          class="lg:hidden lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>About</span>
        </a>
        <a
          href="#"
          class="lg:hidden lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Services</span>
        </a>
        <a
          href="#"
          class="lg:hidden lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Gallery</span>
        </a>
        <a
          href="#"
          class="lg:hidden lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Products</span>
        </a>
        <a
          href="#"
          class="lg:hidden lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Contact Us</span>
        </a>
      </div>
      <Link href="/signin">
          <button className="w-[130px] h-[50px] bg-transparent border-[2px] border-solid border-[#E5BEEC] outline-none rounded-[8px] cursor-pointer text-[1.1em] text-[#E5BEEC]  font[500] ml-[40px] ease-[0.5s] hover:bg-[#2A2F4F] hover:text-[#fff] hover:border-[#fff]  md:hidden lg:hidden" >
            Login
          </button>
        </Link>
    </div>
  ) : (
    <div
      class="hidden top-navbar w-full lg:hidden lg:flex-grow lg:w-auto"
      id="navigation"
    >
  
      <div class="lg:hidden lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
        <a
          href="#"
          class="lg:hidden lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Home</span>
        </a>
        <a
          href="#"
          class="lg:hidden lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>About</span>
        </a>
        <a
          href="#"
          class="lg:hidden lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Services</span>
        </a>
        <a
          href="#"
          class="lg:hidden lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Gallery</span>
        </a>
        <a
          href="#"
          class="lg:hidden lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Products</span>
        </a>
        <a
          href="#"
          class="lg:hidden lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
          <span>Contact Us</span>
        </a>
      </div>
    </div>
  )}

        </div>
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
