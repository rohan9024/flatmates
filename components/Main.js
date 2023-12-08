import React from 'react'
import Image from 'next/image'
import { Manrope, Raleway } from 'next/font/google';

const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '700'],
    subsets: ['latin'],
});

function Main() {
    return (
        <div className={`${raleway.className} mx-20 my-20`}>



            <div className='flex justify-evenly items-center'>

                {/* Card with icons*/}
                {/* <div class={`${manrope.className} max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg w-[600px] h-[500px]`}>
                    <div className='absolute z-10 flex flex-col p-10 space-y-2'>
                        <div className='flex space-x-2'>
                            <Image width={30} height={30} src="/location.png" alt="location" className='object-contain' />
                            <h1 className='text-lg font-normal'>Mumbai</h1>
                        </div>
                        <div className='flex space-x-2'>
                            <Image width={30} height={30} src="/building.png" alt="building" className='object-contain' />
                            <h1 className='text-2xl font-bold'>Lodha Palace</h1>
                        </div>
                        <div className='flex space-x-2'>
                            <Image width={30} height={30} src="/rent.png" alt="rent" className='object-contain' />
                            <h1 className='text-lg font-normal'>Rs. 12000/mo</h1>
                        </div>
                    </div>
                    <Image width={800} height={1200} src="/room1.png" alt="room" className='w-full h-full object-cover rounded-2xl' />
                </div> */}


                {/* List of Cards */}
                <div class={`${manrope.className} max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg w-[600px] h-[500px] hover:cursor-pointer transition ease-in-out  hover:shadow-2xl duration-300`}>
                    <div className='absolute z-10 flex flex-col p-10 space-y-2  backdrop-blur-sm backdrop-opacity-70  rounded-2xl'>
                        <h1 className='text-lg font-normal'>Mumbai</h1>
                        <h1 className='text-2xl font-bold'>Lodha Palace</h1>
                        <h1 className='text-lg font-normal'>Rs. 12000/mo</h1>
                    </div>
                    <Image width={800} height={1200} src="/room1.png" alt="room" className='w-full h-full object-cover rounded-2xl' />

                    <div className='absolute z-10 flex flex-col w-20 h-20   rounded-full -mt-32 ml-64 shadow-2xl hover:cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-300 border-2 border-blue-600'>
                        <Image width={400} height={400} src="/user1.png" alt="user" className='w-20 h-20 object-cover rounded-full' />
                    </div>
                </div>
                <div class={`${manrope.className} max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg w-[600px] h-[500px] hover:cursor-pointer transition ease-in-out hover:shadow-2xl duration-300`}>
                    <div className='absolute z-10 flex flex-col p-10 space-y-2 	backdrop-blur-sm backdrop-opacity-70  rounded-2xl'>
                        <h1 className='text-lg font-normal'>New Delhi</h1>
                        <h1 className='text-2xl font-bold'>Hiranandani Estate</h1>
                        <h1 className='text-lg font-normal'>Rs. 7000/mo</h1>
                    </div>
                    <Image width={800} height={1200} src="/room2.png" alt="room" className='w-full h-full object-cover rounded-2xl' />

                    <div className='absolute z-10 w-20 h-20 rounded-full  -mt-32 ml-64 shadow-2xl hover:cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-300 border-2 border-blue-600'>
                        <Image width={400} height={400} src="/user2.jpg" alt="user" className='w-20 h-20 object-cover rounded-full' />
                    </div>
                </div>
                <div class={`${manrope.className} max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg w-[600px] h-[500px] hover:cursor-pointer transition ease-in-out  hover:shadow-2xl duration-300`}>
                    <div className='absolute z-10 flex flex-col p-10 space-y-2 backdrop-blur-sm backdrop-opacity-70  rounded-2xl	'>
                        <h1 className='text-lg font-normal'>Gurugram</h1>
                        <h1 className='text-2xl font-bold'>Rustomjee Estate</h1>
                        <h1 className='text-lg font-normal'>Rs. 20000/mo</h1>
                    </div>
                    <Image width={800} height={1200} src="/room3.png" alt="room" className='w-full h-full object-cover rounded-2xl' />
                    <div className='absolute z-10 w-20 h-20 rounded-full  -mt-32 ml-64 shadow-2xl hover:cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-300 border-2 border-blue-600'>
                        <Image width={400} height={400} src="/user3.jpg" alt="user" className='w-20 h-20 object-cover rounded-full' />
                    </div>
                </div>




                {/* Grid display */}


            </div>


        </div>
    )
}

export default Main