/* eslint-disable react-hooks/rules-of-hooks */
// import './App.css';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom'

const registration = () => {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });

    const [errorm, setErrorm] = useState("");


    const handleSubmit = () => {

        if (!values.name || !values.email || !values.pass) {
            setErrorm("Fill all fields");
            return;
        }
        setErrorm("");

        createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {

                const user = res.user;
                await updateProfile(user, {
                    displayName: values.name,
                });
                navigate("/log")
                console.log(user);
            })
            .catch((err) => {
                setErrorm(err.message);
            });
    }


    return (
        <div className="container1 mt-5">
            <div className='card'>
                <div className='card-body'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))} />
                    </div>
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
                        <button type="button" class="btn btn-primary" onClick={handleSubmit}>Sign Up</button>
                    </div>
                    <div className='mt-2 text-center'>
                        Already Have an Account ? <Link to="/reg" className=' '>Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default registration