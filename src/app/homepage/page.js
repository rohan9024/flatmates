"use client"

import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../contexts/AuthContext';

function page() {

    const { user, setUser } = useContext(AuthContext);
    var name = ''
    var email = ''
    var photoURL = ''
    var accessToken = ''

    useEffect(() => {
        name = localStorage.getItem("name");
        email = localStorage.getItem("email");
        photoURL = localStorage.getItem("photoURL");
        accessToken = localStorage.getItem("accessToken");
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
