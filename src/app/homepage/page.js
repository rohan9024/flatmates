"use client"

import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../contexts/AuthContext';

function page() {

    const { user, setUser } = useContext(AuthContext);


    useEffect(() => {
        const name = localStorage.getItem("name");
        const email = localStorage.getItem("email");
        const photoURL = localStorage.getItem("photoURL");
        const accessToken = localStorage.getItem("accessToken");
    }, [])


    return (
        <div>
            {
                name ?
                    <h1>Welcome {name} !</h1>
                    :
                    <h1>Please login !</h1>

            }
        </div>
    )
}

export default page
