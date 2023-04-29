import React from "react";

export default function Main() {
  return (
    <>
      <div class="w-full mt-12 max-w-sm bg-[#E5BEEC] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-24 h-24 mb-4 rounded-full shadow-lg"
            src="./img/main/m-1.jpg"
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-lg text-gray-900 font-[700] dark:text-white">
            Meghna Roy
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            Smile is the beauty of the soul.
          </span>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            College Student
          </span>
          <span class="text-sm text-gray-500 dark:text-gray-400">24,5"4"</span>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            Hindu,Bengali
          </span>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            126, Ram Bagan, Kolkata,
          </span>

          <div class="flex mt-4 space-x-3 md:mt-6">
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Follow
            </a>
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Message
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
