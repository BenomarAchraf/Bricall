import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/Images/Logo3.svg"
import "@fontsource/poppins";
const Navbar = ({setCat}) => {
  return (
    <div className='nav'>
        <Link className='pp' to="/Categories" onClick={()=>setCat("Categories")}>
            <img className='logo' src={logo}/>
        </Link>
        <div className='pages'>
        <Link to="/Livingroom" className='pp' >
            Products
            </Link>
            <Link className='pp' to="/test">
           Features
            </Link>
            
            <Link className='pp' to="/Livingroom/1">
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