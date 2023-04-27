import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'


function Home(props) {










    return (
        <div>
            <div>
                <h1>
                    <Link to="/login">Login</Link>
                </h1>
                <br />
                <h1>
                    <Link to="/signup">Signup</Link>
                </h1>


            </div>
            <br />
            <br />
            <br />

            <h2>{props.name ? `Welcome . ${props.name}` : "Login Please"}</h2>



        </div>

    )
}



export default Home
