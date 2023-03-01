import React from 'react'
import { Link } from "react-router-dom";
import "./footer.css"
import logo from "../../Assets/Images/Logo1.svg"
const footer = () => {
  return (
    <div>
        <div className='grid-footer'>
            <div className='grid-footer-1'>
                <Link className='pp' to="/">
                    <img className='logo11' src={logo}/>
                </Link>
                <p className='description'>
                The Social Affairs Club is a non-profit, charitable, humanitarian club initiative of a group of young volunteers, concerned about the difficulties encountered by the weakest of heart, concerned about the ones in need and concerned about our country’s prosperity.
                </p>
            </div>
            <div className='grid-footer-2'>
                <p className='title'>Company</p>
                <p className='details'>About</p>
                <p className='details'>Features</p>
                <p className='details'>Works</p>
                <p className='details'>Career</p>
            </div>
            <div className='grid-footer-3'>
                <p className='title'>help</p>
                <p className='details'>Customer</p>
                <p className='details'>Support</p>
                <p className='details'>Delivery Details</p>
                <p className='details'>Terms & Conditions</p>
                <p className='details'>Privacy Policy</p>
            </div>
            <div className='grid-footer-4'>
                <p className='title'>Resources</p>
                <p className='details'>Free eBooks</p>
                <p className='details'>Development Tutorial</p>
                <p className='details'>How to - Blog</p>
                <p className='details'>Youtube Playlist</p>
            </div>
        </div>
        <div className='copyright'>
            <div className='ligne1'></div>
            <p className='Copy'>©Copyright 20223 All Rights Reserved by ASKBRICALL</p>
        </div>
    </div>
  )
}

export default footer