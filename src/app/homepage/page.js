"use client"

import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../contexts/AuthContext';
import Navbar from '../../../components/Navbar';
import Search from '../../../components/Search';
import Main from '../../../components/Main';

function page() {

    const { user, setUser } = useContext(AuthContext);
    var name = ''
    var email = ''
    var photoURL = ''
    var accessToken = ''
    
    if (typeof window !== 'undefined') {
        name = localStorage.getItem("name");
        email = localStorage.getItem("email");
    photoURL = localStorage.getItem("photoURL");
        accessToken = localStorage.getItem("accessToken");
    }


    return (
        <div>
            {/* {
                name ?
                    <h1>Welcome {name} !</h1>
                    :
                    <h1>Please login !</h1>

            } */}


            <Navbar />
            <Search />
            <Main />


        </div>
    )
}

export default page
