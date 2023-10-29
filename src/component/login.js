/* eslint-disable react-hooks/rules-of-hooks */
// import './App.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom'

const login = () => {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
    })
    const [errorm, setErrorm] = useState("");

    const handleSubmit = () => {

        if (!values.email || !values.pass) {
            setErrorm("Fill all fields");
            return;
        }
        setErrorm("");

        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {

                navigate("/home")
            })
            .catch((err) => {
                setErrorm(err.message);
            });

    }

    return (
        <div className="container1 mt-5">
            <div className='card p-5'>
                <div className='card-body'>
                   
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleFormControlInput1" onChange={(e) => setValues((prev) => ({ ...prev, pass: e.target.value }))} />
                    </div>
                    <p className="error">{errorm}</p>
                    <div className='text-center'>
                        <button type="button" class="btn btn-primary " onClick={handleSubmit}>Sign In</button>
                    </div>
                    <hr></hr>
                    <div className='mt-5 text-center'>
                        <Link to="/reg" className='lg1 '>Create new account</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default login