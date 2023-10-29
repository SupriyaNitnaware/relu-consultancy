import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const menubar = (props) => {
    return (
        <div className='container logpage'>
            <div className='row'>

                <div className='col-6 m-auto'>
                    <div className='card p-5'>
                        <div className='card-title'>
                            <h1>Please Click here for login</h1>
                        </div>
                        <div className='card-body'>

                            <Link to="/log" className='lg'>Login</Link>
                            <Link to="/home" className='lg ms-3'>Home</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default menubar