import React from 'react'
import { FaHeart } from "react-icons/fa";
export default function Story() {
    return (
        <div id="story" className=' w-full h-auto '>
            <div className='flex flex-auto justify-center'>
                <h2 className=' text-4xl mt-6 mb-6 font-[cursive]'>Millions of Happy Marriage Story</h2>
            </div>
            <div className="flex flex-auto mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">

                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <img className="rounded-t-lg" src="./img/story/sto2.jpg" alt="" />

                    <div className="p-5">

                        <h5 className="flex flex-auto mb-2 text-2xl font-bold tracking-tight justify-center items-center gap-6 text-gray-900 dark:text-white">Aayush <FaHeart />Olivia</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Someone once said, “There is no ‘right’ kind of marriage. The couple involved need to make it right.” What makes a marriage work is something of a mystery because every marriage is unique.</p>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <img className="rounded-t-lg" src="./img/story/sto4.jpg" alt="" />

                    <div className="p-5">

                        <h5 className="flex flex-auto mb-2 text-2xl font-bold tracking-tight justify-center items-center gap-6 text-gray-900 dark:text-white">	Hritik <FaHeart />Maria
                        </h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The last decade gave us many moments to remember for a lifetime, including the romantic weddings of couples who gave us major relationship goals.</p>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <img className="rounded-t-lg" src="./img/story/sto3.jpg" alt="" />

                    <div className="p-5">

                        <h5 className="flex flex-auto mb-2 text-2xl font-bold tracking-tight justify-center items-center gap-6 text-gray-900 dark:text-white">Karan <FaHeart />Isabella</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The future is full of possibilities and there are so many things you can do to start the year on a positive note.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}