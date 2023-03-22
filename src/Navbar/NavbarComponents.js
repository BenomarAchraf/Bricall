import React from 'react'
import { Link,useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

import "./Navbar.css";
import logo from "../Assets/Images/Logo3.svg"
import "@fontsource/poppins";
const NavbarComponents = () => {
    const user = AuthService.getCurrentUser();
    const nav=useNavigate();
    const logout = () => {
  return new Promise((resolve, reject) => {
    AuthService.logout();
    resolve();
  }).then(() => {
    nav("/login", { replace: true });
  });
}

  return (
    <div className='nav'>
        <Link className='pp' to="/">
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
            {user==null&& <>
            <div className='sign'>
                <Link className='SignUp'to="/register">
                    Sign Up
                </Link>
                <Link className='SignIn' to="/login">
                    Sign In
                </Link>
            </div>
              </>}
              {user!=null &&
<>
      <Link className='SignIn' onClick={logout}>
          Log out
        </Link>
</>
}
        </div>

    </div>
  )
}

export default NavbarComponents;