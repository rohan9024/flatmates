"use client"

import React, { useState, useEffect, useContext } from 'react'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db, auth } from '../../../firebase'
import { getDocs, } from 'firebase/firestore'
import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore';
import { Manrope, Raleway } from 'next/font/google';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../contexts/AuthContext';
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';



const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '700'],
    subsets: ['latin'],
});


function Login() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [view, setView] = useState(false);
    const router = useRouter();
    const { user, setUser } = useContext(AuthContext);


    const notifySuccess = () => toast.success('Logged in successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    const notifyError = () => toast.error('Invalid username or password', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });



    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;

                setUser({
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    accessToken: accessToken,
                })

                if (typeof window !== 'undefined') {
                    localStorage.setItem("userLoggedIn", "true") || '';
                    localStorage.setItem("name", user.displayName) || '';
                    localStorage.setItem("email", user.email) || '';
                    localStorage.setItem("photoURL", user.photoURL) || '';
                    localStorage.setItem("accessToken", accessToken) || '';
                }

                router.push("/homepage");

            })
            .catch((err) => {
                console.log(err.message);
            })
    }




    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className='bg-gray-100  text-[#37364d]  h-screen flex  items-center font-DMSans'>
                <div className='flex justify-center items-center bg-gray-200 h-screen w-1/2'>

                    <Image width={3000} height={3000} src='/flatmatesBanner.jpg' alt="image" className='w-full h-screen object-cover ' />

                </div>
                <div className='w-1/2'>

                    <div className='flex justify-center items-center '>


                        <div className='flex flex-col justify-center items-center ml-20 h-[400px] '>
                            <div className='flex flex-col justify-center items-center w-screen mt-20 space-y-5'>
                                <h1 className={`${raleway.className} text-4xl font-bold mb-10`}>Login in to your account </h1>
                                <form className='flex flex-col justify-center items-center space-y-5 '>
                                    <input onChange={(e) => setUsername(e.target.value)} required type="text" placeholder="Enter Username" className={`${manrope.className} placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-96`} />
                                    <input onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="Password" className={`${manrope.className} placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-96`} />
                                    <div className='flex justify-between items-center cursor-pointer'>
                                        <h1 className='font-normal text-sm text-right ml-56 text-gray-500'>Forgot your Password?</h1>
                                    </div>


                                    <div disabled={!username || !password} type="submit" class="cursor-pointer relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black border-2 border-black rounded-full hover:text-white group hover:bg-gray-50 w-96 mx-auto">
                                        <span class="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                        <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </span>
                                        <span class="relative text-center">Sign In</span>
                                    </div>

                                </form>
                            </div>

                            {/* Sign with stuff */}
                            <div className='flex space-x-3 mt-20 '>
                                <div onClick={signInWithGoogle} className='px-8 py-4 flex space-x-2 justify-center items-center border-2 border-gray-200 rounded-xl shadow-lg'>
                                    <img src="./google.png" alt="google-icon" className='w-6 h-6 object-contain' />
                                    <button className={`${manrope.className} text-lg font-bold`}>Sign in with Google</button>
                                </div>

                            </div>
                        </div>

                    </div >


                </div>
            </div >

        </>
    )
}


export default Login