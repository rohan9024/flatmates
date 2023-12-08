import React, { useState } from 'react'

import { Manrope, Raleway } from 'next/font/google';
import { motion, AnimatePresence } from "framer-motion";

const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '700'],
    subsets: ['latin'],
});

function Search() {
    const [dropdown, setDropdown] = useState(false)

    return (
        <div className={`${manrope.className} flex justify-center items-center w-screen`}>
            <form>
                <div class="flex ">
                    <button class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 " onClick={() => {
                        dropdown ? setDropdown(false) : setDropdown(true)

                    }} type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg></button>

                    {
                        dropdown && (
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="z-20 mt-16 absolute bg-gray-100 divide-y divide-gray-100 rounded-lg shadow w-44"
                                >
                                    {/* Dropdown content */}
                                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
                                        <li>
                                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-600 dark:hover:text-white">Amenities</button>
                                        </li>
                                        <li>
                                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-600 dark:hover:text-white">Gender</button>
                                        </li>
                                        <li>
                                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-600 dark:hover:text-white">Location</button>
                                        </li>
                                        <li>
                                            <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-600 dark:hover:text-white">Move in Date</button>
                                        </li>
                                    </ul>
                                </motion.div>
                            </AnimatePresence>
                        )
                    }


                    <div class="relative w-full">
                        <input type="search" id="search-dropdown" class="block w-[800px] py-5 px-5 outline-none z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300  " placeholder="Search Mockups, Logos, Design Templates..." required />
                        <button type="submit" class="absolute top-0 end-0 p-5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search