import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/Images/Logo3.svg"
import "@fontsource/poppins";
const Navbar = () => {
  return (
    <div className='nav'>
        <Link className='pp' to="/">
            <img className='logo' src={logo}/>
        </Link>
        <div className='pages'>
        <Link to="/Categories/Livingroom" className='pp' >
            Products
            </Link>
            <Link className='pp' to="/">
           Features
            </Link>
            
            <Link className='pp' to="/">
            Pricing
            </Link>
            
            <Link className='pp' to="/">
            Support
            </Link>
            <div className='sign'>
                <Link className='SignUp'>
                    Sign Up
                </Link>
                <Link className='SignIn' to="/">
                
                    Sign In
                
                </Link>
            </div>
            
        </div>

    </div>
  )
}

export default Navbar;