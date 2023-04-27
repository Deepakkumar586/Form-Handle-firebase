import React, { useState } from 'react'
import '../Login/Login.css'
import InputControl from '../InputControl/InputControl'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'



function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({

        email: '',
        pass: ''
    })

    // for error message if user any field leave
    const [errorMsg, setErrorMsg] = useState('')

    // 
    const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

    const handleSubmit = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("Fill the fields*");
            return;
        }
        else {
            setErrorMsg('')
        }



        setSubmitButtonDisable(true)
        //  we use firebase for count  ko create
        //functions return promise 
        signInWithEmailAndPassword(auth, values.email, values.pass).then(async (res) => {
            setSubmitButtonDisable(false)


            navigate('/')


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
                <h1 className='heading'>Login</h1>
                <InputControl label="Email : " placeholder="Enter email address" onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />
                <InputControl label="Password : " placeholder="Enter email password" onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} />


                <div className='footer'>
                    <b className='error-msg'>{errorMsg}</b>
                    <button disabled={submitButtonDisable} onClick={handleSubmit}>Login</button>
                    <p>Already have an account?{""} <span><Link to="/signup">Signup</Link></span></p>
                </div>




            </div>



        </div>
    )
}

export default Login
