import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { TextField, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import { FaHome, FaBell,FaHeart, FaEnvelope, FaWallet, FaStopCircle, FaUser, FaSun, FaEllipsisV, FaComment, FaReply,FaSignOutAlt} from "react-icons/fa";
import OIP from '../images/OIP.png'
import OIP1 from '../images/OIP1.png'
import OIP2 from '../images/OIP2.png'
import OIP3 from '../images/OIP3.png'
import bg1 from '../images/bg1.png'
import bg2 from '../images/bg2.png'
import bg3 from '../images/bg3.png'
import bg4 from '../images/bg4.png'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'



const home = (props) => {
  return (
    <div>
        <div className='container'>

            <p>{props.name ? `Welcome ${props.name}` : 'Login Please'}</p>

            <div className='row first-row'>
                <div className='col-3'>
                    <div className='logo'>
                        <p>LOGO</p>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='search-bar'>
                        <form class="d-flex" role="search">
                        <FaSearch className='icon1' />
                            <TextField
                                fullWidth
                                id="standard-bare"
                                variant="outlined"
                                defaultValue="Search here...."
                                InputProps={{
                                endAdornment: (
                                   
                                    <IconButton>
                                    
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

            <div className='row second-row'>
                <div className='col-3'>
                    <div className='nav-bar'>
                       <p> <FaHome /> <span>Home</span>  </p>
                       <p><FaBell /> <span>Notification</span> </p>
                       <p><FaHeart /> <span>Shop</span> </p>
                       <p><FaEnvelope />  <span>Conversation</span> </p>
                       <p><FaWallet /> <span>Wallet</span></p>
                       <p><FaStopCircle /> <span>Subscription</span> </p>
                       <p><FaUser /> <span>Profile</span></p>
                       <p><FaSun /> <span>Setting</span></p>
                       <p><FaSignOutAlt /> <span> <Link to="/" className='lgout'> Logout</Link></span></p>
                    </div>
                </div>
                <div className='col-6'>
                    <div className="second-col">
                            <div class="d-flex justify-content-between">
                                <img src={OIP} className="img-fluid" />
                                <div className='names' style={{}}>
                                    <p className='head'>Lara Leones</p>
                                    <p className='subhead'>@thewallart</p>
                                </div>
                                 <FaEllipsisV />
                            </div>
                        <p className='fs-6 mt-2'>It is a long establised fact that a reader will be distracted by a readable content of a page when looking at its layout. <a className='plink fw-medium'>Read More</a></p>
                        <img src={OIP1} className="img-fluid1" />
                        <div className='border-top d-flex p-3'>
                            <p className='ms-3'><FaHeart /> 9.8k </p>
                            <p className='ms-3'><FaComment /> 8.6k </p>
                            <p className='ms-3'><FaReply className='reply' /> 7.2k </p>
                        </div>
                    </div>

                    <div className="second-col mt-3">
                            <div class="d-flex justify-content-between">
                                <img src={OIP2} className="img-fluid" />
                                <div className='names' style={{}}>
                                    <p className='head'>Thomas J</p>
                                    <p className='subhead'>@thecustomcreator</p>
                                </div>
                                 <FaEllipsisV />
                            </div>
                        <p className='fs-6 mt-2'>It is a long establised fact that a reader will be distracted by a readable content of a page when looking at its layout. <a className='plink fw-medium'>Read More</a></p>
                        <img src={OIP3} className="img-fluid1" />
                        <div className='border-top d-flex p-3'>
                            <p className='ms-3'><FaHeart /> 9.8k </p>
                            <p className='ms-3'><FaComment /> 8.6k </p>
                            <p className='ms-3'><FaReply className='reply' /> 7.2k </p>
                        </div>
                    </div>

                    
                </div>
                <div className='col-3'>
                    <div className='d-flex'>
                        <p className='fw-bolder'>Artists</p>
                        <p className='text-secondary fw-bolder ms-3'>Photographers</p>
                    </div>
                    <div className=''>
                        <img src={bg1} className='first-con' />
                        <div className='d-flex first-con1'>
                            <img src={img1} className='' />
                            <div className='names1' style={{}}>
                                <p className='head1'>Thomas Edward</p>
                                <p className='subhead1'>@thewildwithyou</p>
                            </div>
                        </div>
                    </div>

                    <div className='right-sider'>
                        <img src={bg2} className='first-con' />
                        <div className='d-flex first-con1'>
                            <img src={img2} className='' />
                            <div className='names1' style={{}}>
                                <p className='head1'>Chris Doe</p>
                                <p className='subhead1'>@thewildwithyou</p>
                            </div>
                        </div>
                    </div>

                    <div className='right-sider'>
                        <img src={bg4} className='first-con' />
                        <div className='d-flex first-con1'>
                            <img src={img3} className='' />
                            <div className='names1' style={{}}>
                                <p className='head1'>Emilie Jones</p>
                                <p className='subhead1'>@thewildwithyou</p>
                            </div>
                        </div>
                    </div>

                    <div className='right-sider'>
                        <img src={bg3} className='first-con' />
                        <div className='d-flex first-con1'>
                            <img src={img4} className='' />
                            <div className='names1' style={{}}>
                                <p className='head1'>Jessica Williams</p>
                                <p className='subhead1'>@thewildwithyou</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default home