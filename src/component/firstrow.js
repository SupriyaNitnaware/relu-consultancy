import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { TextField, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'

const firstrow = () => {
  return (
    <div className='container'>
         <div className='row first-row'>
                <div className='col-3'>
                    <div className='logo'>
                        <p>LOGO</p>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='search-bar'>
                        <form class="d-flex" role="search">
                            {/* <FaSearch className='icon1' />
                            <input class="form-control me-2 icon1" type="search" placeholder="Search" aria-label="Search" /> */}
                            <TextField
                                fullWidth
                                id="standard-bare"
                                variant="outlined"
                                defaultValue="Search here...."
                                InputProps={{
                                endAdornment: (
                                
                                    <IconButton>
                                    {/* <SearchOutlined /> */}
                                    <FaSearch className='icon1' />
                                    </IconButton>
                                ),
                                }}
                            />
                        </form>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='seller-btn'>
                        <Link className='linkk'>Become a Seller</Link>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default firstrow