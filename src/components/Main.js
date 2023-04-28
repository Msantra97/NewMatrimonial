import React from "react";

export default function Main() {
   return (
      <>

         <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>

         <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
               <ul className="space-y-2 font-medium">
                 
                  
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                       
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                     </a>
                  </li>
                  
                  {/* <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                     </a>
                  </li> */}
               </ul>
            </div>
         </aside>

         <div className="p-4 sm:ml-64">
            <div className="p-4 rounded-lg ">

               <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">

                  <img className="w-[140px] h-[140px] rounded-lg" src="./img/main/m-1.jpg" alt="" />

                  <ul className="">
                     <p className=" flex ml-2 ">Name:</p>
                     <li className="  text-md ml-2 mt-1" >Meghna Roy</li>

                     <p className="  flex ml-2 ">Religion:</p>
                     <li className="  text-md ml-2 mt-1" >Hindu</li>
                     <p className=" flex ml-2 ">Gender:</p>
                     <li className="  text-md ml-2 mt-1" >Female</li>
                  </ul>

                  <ul>
                     <p className=" flex ml-2 ">Hight:</p>
                     <li className=" text-md ml-2 mt-1" >5.4ft</li>

                     <p className=" flex ml-2 ">Community:</p>
                     <li className="  text-md ml-2 mt-1" >Bengali</li>
                     <p className="flex  ml-2 ">Diet:</p>
                     <li className=" text-md ml-2 mt-1" >vegetarian</li>
                  </ul>

                  <ul>
                     <p className="flex  ml-2 ">Age:</p>
                     <li className=" text-md ml-2 mt-1" >24</li>

                     <p className="flex  ml-2 ">Profession:</p>
                     <li className=" text-md ml-2 mt-1" >Student</li>
                     <p className="flex  ml-2 ">address:</p>
                     <li className=" text-md ml-2 mt-1" >126, Ram Bagan</li>
                  </ul>

                  <div className='  mt-[10px] ml-2 mr-2'>
                     <button type="Perv" className="w-full h-[25px] mt-[20px] rounded-[40px] bg-black border-none outline-none cursor-pointer text-[16px] font-[500] text-white hover:bg-white hover:text-black">Follow</button>

                     <button type="Next" className="w-full h-[25px] mt-[20px] rounded-[40px] bg-black border-none outline-none cursor-pointer text-[16px] font-[500] text-white  hover:bg-white hover:text-black">Chat</button>
                  </div>


               </div>
            </div>
         </div>
      </>

   )
}