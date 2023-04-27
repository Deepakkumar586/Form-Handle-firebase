import React, { useState } from 'react'
import '../Signup/Signup.css'
import { Link } from 'react-router-dom'
import InputControl from '../InputControl/InputControl'
import { useNavigate } from 'react-router-dom'

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

import { auth } from '../../firebase'

function Signup() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: '',
        pass: ''
    })

    // for error message if user any field leave
    const [errorMsg, setErrorMsg] = useState('')

    // one time click button and disable value
    const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

    const handleSubmit = () => {
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Fill the fields*");
            return;
        }
        else {
            setErrorMsg('')
        }



        setSubmitButtonDisable(true)
        //  we use firebase for count  ko create
        //functions return promise 
        createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setSubmitButtonDisable(false)

                const user = res.user;
                await updateProfile(user, {
                    displayName: values.name,
                });
                navigate('/')

                console.log(user)
            }).catch((err) => {
                setSubmitButtonDisable(false)
                setErrorMsg(err.message)
                console.log("Error-", err.message)
            });
        console.log(values)
    }
    return (
        <div className='container'>

            <div className="innerbox">
                <h1 className='heading'>SignUp</h1>
                <InputControl label="Name : " placeholder="Enter email Name" onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} />
                <InputControl label="Email : " placeholder="Enter email address" onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />
                <InputControl label="Password : " placeholder="Enter email password" onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} />


                <div className='footer'>
                    <b className='error-msg'>{errorMsg}</b>
                    <button onClick={handleSubmit} disabled={submitButtonDisable}>Signup</button>
                    <p>Already have an account?{""} <span><Link to="/login">Login</Link></span></p>
                </div>




            </div>



        </div >
    )
}

export default Signup
